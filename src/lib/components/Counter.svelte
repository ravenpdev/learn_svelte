<script>
  // your script goes here
  let count = 0;

  // let text;

  // reactive statement
  $: text = `You have clicked ${count} times.`;
  // $: {
  //   console.log(`The count is ${count}`);
  // }
  // conditional reactive statement
  // $: if (count > 5) {
  //   console.log(`The count is ${count}`);
  // }
  // $: {
  //   text = `You have click ${count}`;
  // }

  // reactive statement gotchas

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }

  let count1 = 0;
  let count2 = 0;

  function getTotal() {
    return count1 + count2;
  }

  // Not going to work
  $: total = `The total count is ${getTotal()}`;

  function increment1() {
    count1 += 1;
  }

  function increment2() {
    count2 += 2;
  }

  let count3 = 0;
  let count4 = 0;

  function setCount4(value) {
    count4 = value;
  }

  $: setCount4(count3);
  $: txt = `Count4 is ${count4}`;

  function increment3() {
    count3 += 1;
  }
</script>

<section>
  <div>
    <h1>{txt}</h1>

    <button on:click={increment3}>Increment</button>
  </div>

  <div>
    <h1>{total}</h1>
    <button on:click={increment1}>Increment Count 1 - {count1}</button>
    <button on:click={increment2}>Increment Count 2 - {count2}</button>
  </div>

  <div>
    <h1>{text}</h1>
    <button on:click={increment}>Increment</button>
    <button on:click={decrement}>Decrement</button>
  </div>
</section>

<style>
  button {
    padding: 10px;
  }
</style>
