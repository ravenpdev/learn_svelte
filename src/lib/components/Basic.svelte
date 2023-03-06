<script>
  // your script goes here
  let name = "Svelte";
  let src = "https://picsum.photos/200/200";
  let string = "Some <strong>string</strong>";
</script>

<img {src} alt="Some text {name}" />
<h1>Hello {name.toUpperCase()}</h1>
<p>
  {@html string}
</p>

<style>
  /* h1 { */
  /*   color: #ff0000; */
  /* } */
</style>
