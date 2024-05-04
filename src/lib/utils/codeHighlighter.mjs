import { parse } from 'node-html-parser'
import { getHighlighter } from 'shiki'

const t = 'material-theme-darker'

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character])
	)
}

/**
 * Returns array of line numbers to be highlghted
 * @param {string} rangeString - range string to be parsed (e.g. {1,3-5,8})
 * @returns {number[]}
 */
function rangeParser(rangeString) {
	const result = []
	const ranges = rangeString.split(',')
	for (let i = 0; i < ranges.length; i += 1) {
		const element = ranges[i]
		if (element.indexOf('-') === -1) {
			result.push(Number.parseInt(element, 10))
		} else {
			const [startStr, endStr] = element.split('-')
			const start = Number.parseInt(startStr, 10)
			const end = Number.parseInt(endStr, 10)
			for (let j = start; j <= end; j += 1) {
				result.push(j)
			}
		}
	}
	return result
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
function makeFocussable(html) {
	const root = parse(html)
	root.querySelector('pre').setAttribute('tabIndex', '0')
	return root.toString()
}

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {string} - highlighted html
 */
async function highlighter(code, lang, meta) {
	const shikiHighlighter = await getHighlighter({
		theme: t
	})

	let html
	if (!meta) {
		html = shikiHighlighter.codeToHtml(code, {
			lang
		})
	} else {
		const highlightMeta = /{([\d,-]+)}/.exec(meta)[1]
		const highlightLines = rangeParser(highlightMeta)

		html = shikiHighlighter.codeToHtml(code, {
			lang,
			lineOptions: highlightLines.map((element) => ({
				line: element,
				classes: ['highlight-line']
			}))
		})
	}
	html = makeFocussable(html)
	return escapeHtml(html)
}

export default highlighter
