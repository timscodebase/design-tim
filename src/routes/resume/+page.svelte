<script lang="ts">
	import { Link, Fancy, Job } from '$lib'

	import resume from '$lib/assets/resume-2024.pdf'

	import { page } from '$app/stores'

	let { jobs } = $page.data
</script>

<svelte:head>
	<title>Tim Smith Jobs</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here is my past work experience." />
</svelte:head>

<h2>Resume</h2>

<Fancy>
	I'm excited to leverage my skills as a Full-Stack Engineer to join a forward-thinking organization
	that values innovation and creativity. With a passion for crafting exceptional user experiences,
	I'm eager to bring my technical expertise and artistic flair to a dynamic team. I'm particularly
	drawn to roles that prioritize responsiveness, visual appeal, and user-centric design. If you're
	looking for a dedicated professional who can drive digital excellence, I'd love to explore
	opportunities with your innovative organization.
</Fancy>

<h3>Tim Smith</h3>
<p>
	<strong>
		Frontend Engineer | <a href="tel:(415) 694-3568"> (415) 694-3568</a> |
		<a href="https://www.linkedin.com/in/timsmith25">www.linkedin/in/timsmith25</a>
		| <a href="mailto:tim.smith.hdg@gmail.com">tim.smith.hdg@gmail.com</a> |
		<a href="https://maps.app.goo.gl/xF7kPu5HJ5QuRXFAA">Gresham, OR</a>
	</strong>
</p>
<h4>Technical Skills</h4>
<p><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js, Svelte, Figma</p>
<p><strong>Backend:</strong> Node.js, PostgreSQL, Prisma, Docker</p>
<p><strong>Dev-op:</strong> New Relic, Splunk, Kubernetes, AWS Edge Hosting</p>
<h6>Experience</h6>

<h5>Partners in Code, Gresham, OR — Freelancer</h5>
<p><strong>January 2016 - Present</strong></p>
<ul>
	<li>Developed modern JAMStack websites using the latest technologies</li>
	<li>Solely responsible for UI and designs of most projects delivered</li>
	<li>Worked with small businesses and clients to build websites and applications</li>
</ul>
<p>
	<strong
		>React, Next, Node, Svelte, Remix, Redux, WordPress, Javascript, TypeScript Github, Python,
		JAMstack, HTML, AWS Edge Hosting</strong
	>
</p>

<h5>Gap, Remote — Frontend Engineer</h5>
<p><strong>March 2021 - July 2022</strong></p>
<ul>
	<li>Built standards-based, reusable React components for checkout flow UI</li>
	<li>Upgraded node version, enabling better use of modern APIs</li>
	<li>Conducted full-on E2E testing and maintained core metrics for app health</li>
</ul>
<p>
	<strong
		>React, Javascript, TypeScript, Node, Agile, Jira, Figma/FIGJAM, Confluence, Github, xAPI,
		Splunk, New Relic, Kubernetes, Redux, and Docker, HTML, AWS Edge Functions</strong
	>
</p>

<h5>Spotkey, San Francisco, CA — Senior (Lead) Frontend Developer</h5>
<p><strong>2014 - 2016</strong></p>
<ul>
	<li>Selected and implemented the stack for the company's corporate website and core product</li>
	<li>
		Collaborated closely with backend and iOS developers on data schemas, database design, and APIs
	</li>
	<li>Developed the entire front end and UI of the website and app</li>
</ul>
<p>
	<strong>Ruby on Rails, Angular 2, Javascript, Node, JAMstack, MySQL, MongoDB, Github</strong>
</p>

<h5>LafLife, Berkeley, CA — Senior UI Architect</h5>
<p><strong>2013 - 2014</strong></p>
<ul>
	<li>
		Solely responsible for building and maintaining the front end of the application and company
		website
	</li>
	<li>Wrote modules and reusable CSS with SASS for easy updates and maintenance</li>
	<li>Mentored a junior back-end developer and learned backend development</li>
</ul>
<p><strong>Backbone, Foundation, SCSS, Javascript, Ruby on Rails, Node, jQuery</strong></p>

<h5>Zynga, San Francisco, CA — Email Marketing</h5>
<p><strong>2010 - 2012</strong></p>
<ul>
	<li>Built and maintained email marketing campaigns for featured games</li>
	<li>Hand-coded emails for maximum compatibility with various email clients</li>
	<li>Consulted on the layout and UI of mobile emails</li>
</ul>
<p><strong>HTML, HAML, Javascript, Photoshop</strong></p>

<h5>The Clorox Company, San Francisco, CA— Frontend Developer</h5>
<ul>
	<li>
		Updated codebase by removing jQuery and MooTools and replacing them with vanilla JavaScript
	</li>
	<li>Built new mobile-first templates for Brita products</li>
</ul>
<p><strong>HTML, CSS, Javascript, jQuery</strong></p>

<h5>YesMail/InfoUSA, San Francisco, CA — Email Marketing</h5>
<p><strong>2006 - 2008</strong></p>
<ul>
	<li>Developed and maintained email marketing campaigns for prominent brands and clients</li>
	<li>Hand-coded emails for maximum compatibility with various email clients</li>
	<li>Utilized testing suites to ensure quality and click-through rates were met</li>
</ul>
<p><strong>HTML, HAML, Javascript, Photoshop</strong></p>
<p />

<h6>EDUCATION</h6>

<ul>
	<li>Harford Community College, Bel Air, MD (2000 - 2002)</li>
	<li>
		<ul>
			<li>Computer Information Systems</li>
			<li>Art History</li>
			<li>Mathematics</li>
		</ul>
	</li>
	<li>Diablo Valley College, Pleasant Hill, CA (2006 - 2008) & (2018-2020)</li>
	<li>
		<ul>
			<li>Computer Science</li>
			<li>Algebra</li>
			<li>Statistics</li>
		</ul>
	</li>
</ul>

<style>
	li {
		padding-bottom: var(--padding-sm);
	}
</style>
