<script>
  import CounterWithProps from "../components/CounterWithProps.svelte";

  // const initialCountValue = 3;
  // const maxCountValue = 10;

  const props = {
    initialCountValue: 0,
    maxCountValue: 10,
  };
</script>

<section>
  <!-- spread props -->
  <CounterWithProps
    {...props}
    x="x"
    y="y"
    person={{ name: "raven", age: 30 }}
    another={0}
  />

  <!-- <CounterWithProps {initialCountValue} {maxCountValue} /> -->
  <!-- <CounterWithProps initialCountValue={3} /> -->
  <!-- <CounterWithProps initialCountValue={3} maxCountValue={10} /> -->
</section>
