<script>
  import { onMount } from 'svelte';
  import Landing from './components/Landing.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';
  import resume from './assets/resume1.pdf';

  let navOpen = false;
  let currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  function navigate(path) {
    history.pushState({}, '', path);
    currentPath = path.replace(/\/$/, '') || '/';
    navOpen = false;
  }

  onMount(() => {
    const onPopState = () => {
      currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      navOpen = false;
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  });

  let contentEl;
  function skipToContent() {
    contentEl.focus();
  }
</script>

<div class="App">
  <div class="demo-big-content">
    <button on:click={skipToContent} class="skipButton">
      Skip to Main Content
    </button>
    <header class="header-color nav">
      <button
        class="nav-hamburger"
        aria-label="Open navigation menu"
        aria-expanded={navOpen}
        on:click={() => navOpen = !navOpen}
        on:keydown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); navOpen = !navOpen; }}}
      >
        <span class="visually-hidden">Open navigation menu</span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="main-nav" class:open={navOpen} aria-label="Main navigation">
        <a href="/" style="color: black" on:click|preventDefault={() => navigate('/')}>Home</a>
        <a href={resume} style="color: black" target="_blank" rel="noopener noreferrer">
          Resume &nbsp;<i class="fas fa-external-link-alt" role="img" title="PDF"></i>
        </a>
        <a href="/projects" style="color: black" on:click|preventDefault={() => navigate('/projects')}>Projects</a>
        <a href="/contact" style="color: black" on:click|preventDefault={() => navigate('/contact')}>Contact</a>
      </nav>
    </header>
    <main tabindex="-1" bind:this={contentEl}>
      <div class="page-content">
        {#if currentPath === '/' || currentPath === '/index.html'}
          <Landing />
        {:else if currentPath === '/projects'}
          <Projects />
        {:else if currentPath === '/contact'}
          <Contact />
        {/if}
        <p class="copyright">&copy; 2019 - 2026 Daniel Gawne</p>
      </div>
    </main>
  </div>
</div>

