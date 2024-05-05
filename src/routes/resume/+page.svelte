<script lang="ts">
import { Link, Fancy, Job } from "$lib";

import resume from "$lib/assets/resume-2024.pdf";

import { page } from "$app/stores";

let { jobs } = $page.data;
</script>

<svelte:head>
	<title>Tim Smith Jobs</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here is my past work experience." />
</svelte:head>

<h2>Jobs</h2>

<Fancy>
	I am actively looking to secure a dynamic Full-Stack Engineer role within an innovative
	organization, where I can channel my technical prowess and creative flair to craft and maintain
	cutting-edge, user-friendly websites with a focus on responsiveness and visual appeal.
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
<p>FEBRUARY 2016 - PRESENT</p>
<p>
	Partners in Code is my own business. I work with small businesses and clients to build websites
	and applications that best meet their needs. I provide modern JAMStack websites with the latest
	proven technologies. I am solely responsible for the UI and designs of most of the projects I
	deliver.
</p>
<p>
	<strong
		>React, Next, Node, Svelte, Remix, Redux, WordPress, Javascript, TypeScript Github, Python,
		JAMstack, HTML, AWS Edge Hosting</strong
	>
</p>

<h5>Gap, Remote — Frontend Engineer</h5>
<p>MARCH 2021 - JULY 2022</p>
<p>
	I built standards-based, reusable React components for Gap's checkout flow UI. xAPI is used in
	place of other flux libraries to pass data throughout the site and other parts of the application.
	I helped to move Gap towards microservices by upgrading their node version allowing better use of
	modern APIs. All of the code and components I wrote were tested at the code level with full-on E2E
	testing suites. Another part of my role at Gap was DevOps and maintaining core metrics for the
	app's health. I wore many hats at Gap, however the frontend was my main focus.
</p>
<p>
	<strong
		>React, Javascript, TypeScript, Node, Agile, Jira, Figma/FIGJAM, Confluence, Github, xAPI,
		Splunk, New Relic, Kubernetes, Redux, and Docker, HTML, AWS Edge Functions</strong
	>
</p>

<h5>Spotkey, San Francisco, CA — Senior (Lead) Frontend Developer</h5>
<p>2014 - 2016</p>
<p>
	As the senior frontend Developer, I was responsible for choosing and implementing the stack of our
	company's corporate website and core product. Worked closely with the Backend and iOS developers
	on the data schemas database design and the internal and external APIs. I wrote the entire front
	and UI of the website and app.
</p>
<p>
	<strong>Ruby on Rails, Angular 2, Javascript, Node, JAMstack, MySQL, MongoDB, Github</strong>
</p>

<h5>LafLife, Berkeley, CA — Senior UI Architect</h5>
<p>2013 - 2014</p>
<p>
	I was solely responsible for building and maintaining the front end of the application and company
	website. Because the design of the site was constantly changing and being improved, I learned to
	write more modules and reusable CSS with SASS, making it easier to update and maintain the CSS. I
	also worked with a junior back-end developer to help him become a better front-end developer. He
	in turn helped me to become a better backend developer. It was a great relationship.
</p>
<p><strong>Backbone, Foundation, SCSS, Javascript, Ruby on Rails, Node, jQuery</strong></p>

<h5>Zynga, San Francisco, CA — Email Marketing</h5>
<p>2010 - 2012</p>
<p>
	I built and maintained email marketing campaigns for several of Zynga's featured games. Hand-coded
	each email to ensure maximum compatibility with many email clients. We utilized testing suites to
	ensure quality and click-through. I was consulted on the layout and UI of mobile emails.
</p>
<p><strong>HTML, HAML, Javascript, Photoshop</strong></p>

<h5>The Clorox Company, San Francisco, CA— Frontend Developer</h5>
<p>
	My role was to update their codebase by removing jQuery and MooTools and replacing them with
	vanilla javascript. Another responsibility was building new mobile-first templates for their Brita
	products.
</p>
<p><strong>HTML, CSS, Javascript, jQuery</strong></p>

<h5>YesMail/InfoUSA, San Francisco, CA — Email Marketing</h5>
<p>2006 - 2008</p>
<p>
	I built and maintained email marketing campaigns for several prominent brands. Macy's, King's
	Hawaiian, and many others. Completely hand-coded all emails to ensure maximum compatibility with
	many email clients. We utilized testing suites to ensure quality and click-through.
</p>
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
			<li>Sociology</li>
		</ul>
	</li>
	<li>Contra Costa College - S.P.I.R.I.T, San Pablo, CA 2016 - 2018</li>
	<li>
		<ul>
			<li>County supervised peer support and social work training</li>
			<li>One on one peer interaction simulation</li>
			<li>Onsite training</li>
		</ul>
	</li>
</ul>
