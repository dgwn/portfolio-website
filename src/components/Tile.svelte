<script>
  export let title;
  export let blurb;
  export let link = null;
  export let liveLink = null;
  export let js = false;
  export let react = false;
  export let node = false;
  export let db = false;
  export let python = false;
  export let ss = false;
  export let linux = false;
</script>

<div class="tile">
  <h2 style="white-space: pre-line" class="tileHeader">{title}</h2>
  <div class="linkStyle">
    {#if liveLink}
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
    {/if}
    {#if link}
      <a href={link} target="_blank" rel="noopener noreferrer">Code Link</a>
    {/if}
  </div>
  <br />
  <p>{blurb}</p>
  <div class="techUsed">
    <p>Technologies Used:</p>
    {#if js}<i class="fab fa-js" style="font-size: 30px; padding: 10px" role="img" title="Javascript"></i>{/if}
    {#if react}<i class="fab fa-react" style="font-size: 30px; padding: 10px" role="img" title="ReactJS"></i>{/if}
    {#if node}<i class="fab fa-node-js" style="font-size: 30px; padding: 10px" role="img" title="NodeJS"></i>{/if}
    {#if python}<i class="fab fa-python" style="font-size: 30px; padding: 10px" role="img" title="Python"></i>{/if}
    {#if db}<i class="fas fa-database" style="font-size: 30px; padding: 10px" role="img" title="Database"></i>{/if}
    {#if ss}<i class="fab fa-squarespace" style="font-size: 30px; padding: 10px" role="img" title="Squarespace"></i>{/if}
    {#if linux}<i class="fa fa-linux" style="font-size: 30px; padding: 10px" role="img" title="Linux"></i>{/if}
  </div>
</div>
