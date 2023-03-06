<script>
  export let initialCountValue = 0;
  export let maxCountValue = undefined;
  // export let maxCountValue = undefined;

  console.log($$props);
  console.log($$restProps);

  let count = initialCountValue;

  function increment() {
    if (count === maxCountValue) return;

    count += 1;
  }
</script>

<div>
  <h1>{count}</h1>

  <button on:click={increment}>Clicks {count}</button>
</div>
