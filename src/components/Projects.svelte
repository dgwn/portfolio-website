<script>
  import Tile from './Tile.svelte';

  const PROJECTS = [
    {
      title: "Canvas Deployment Docs",
      blurb: "Documentation for running a local development server for Canvas LMS on Ubuntu (Docker, nginx, Linux). Supplements incomplete official docs.",
      link: "https://github.com/ucfcdl/Running-Canvas-LMS-Locally",
      linux: true
    },
    {
      title: "Cyclops LTI",
      blurb: "An OCR image-to-text app built on the LTI 1.3 standard. Allows instructors to embed image text from course files into an LMS (e.g. Canvas) rich content editor.",
      link: "https://github.com/dgwn/cyclops",
      db: true,
      python: true
    },
    {
      title: "Blog App",
      blurb: "Blogging app with REST API, React frontend, Node/Express backend and MongoDB. Create a user and try it out!",
      liveLink: "https://fso-blog-mongodb.onrender.com/",
      link: "https://github.com/dgwn/fullstackopen/tree/master/part7/extended-bloglist",
      js: true, react: true, node: true, db: true
    },
    {
      title: "Phonebook",
      blurb: "Phonebook app with REST API, Node/Express backend and MongoDB. Made to fulfill Univ. of Helsinki's Full Stack Open coursework.",
      link: "https://github.com/dgwn/fullstackopen/tree/master/part3/phonebook",
      js: true, react: true, node: true, db: true
    },
    {
      title: "Portfolio Website",
      blurb: "My portfolio website built with Svelte (formerly React); you're here right now!",
      link: "https://github.com/dgwn/portfolio-website",
      js: true
    },
    {
      title: "Drum Machine",
      blurb: 'Fulfills FreeCodeCamp front-end-libraries project: "Build a Drum Machine"',
      liveLink: "https://codepen.io/dgwn/pen/eYYZEOr",
      js: true, react: true
    },
    // {
    //   title: "Markdown Previewer",
    //   blurb: 'Fulfills FreeCodeCamp front-end-libraries project: "Build a Markdown Previewer"',
    //   liveLink: "https://codepen.io/dgwn/pen/XWWWxXZ",
    //   js: true, react: true
    // },
    // {
    //   title: "Random Quote Generator",
    //   blurb: 'Fulfills FreeCodeCamp front-end-libraries project: "Build a Random Quote Machine"',
    //   liveLink: "https://codepen.io/dgwn/pen/BaBgwBd",
    //   js: true, react: true
    // },
    {
      title: "Etch Sketch",
      blurb: "Webpage with interactive cursor drawing",
      link: "https://github.com/dgwn/etch-sketch",
      js: true
    },
    // {
    //   title: "Bookmarker",
    //   blurb: "Client side application to store URL bookmarks",
    //   link: "https://github.com/dgwn/bookmarker-web-app",
    //   js: true
    // }
  ];
</script>

<h1 class="subheading">Projects</h1>
<div class="tile-container">
  {#each PROJECTS as project (project.title)}
    <Tile
      title={project.title}
      blurb={project.blurb}
      link={project.link}
      liveLink={project.liveLink}
      js={project.js}
      react={project.react}
      node={project.node}
      db={project.db}
      ss={project.ss}
      python={project.python}
      linux={project.linux}
    />
  {/each}
</div>
