<script>
    import { bibliography } from './BibliographyStore';
  
    let citations = [];
    bibliography.subscribe((value) => {
      citations = value;
    });
  </script>
  
  {#if citations.length > 0}
    <h2>References</h2>
    <ul>
      {#each citations as citation}
        <li>{citation.authors}, <em>{citation.title}</em> ({citation.year}) <a href="{citation.url}" target="_blank" rel="noopener noreferrer">{citation.url}</a></li>
      {/each}
    </ul>
  {/if}
  