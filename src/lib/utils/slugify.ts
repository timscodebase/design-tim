const slugify = (text: string): string => {
	return text.replace(/\s+/g, '-').toLowerCase()
}

export default slugify
