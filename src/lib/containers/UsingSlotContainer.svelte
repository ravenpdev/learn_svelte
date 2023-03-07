<script>
  import Button from "../components/slot/Button.svelte";
</script>

<section>
  <h1>Using Slot</h1>

  <div>
    <h2>Variant Text</h2>
    <Button size="small" color="primary">Small</Button>
    <Button color="primary">Regular</Button>
    <Button size="large" color="primary">Large</Button>
  </div>

  <div>
    <h2>Outlined Text</h2>
    <Button variant="outlined" size="small" color="primary">Small</Button>
    <Button variant="outlined" color="primary">Regular</Button>
    <Button variant="outlined" size="large" color="primary">Large</Button>
  </div>

  <div>
    <h2>Filled Text</h2>
    <Button variant="filled" size="small" color="primary">Small</Button>
    <Button variant="filled" color="primary">Regular</Button>
    <Button variant="filled" size="large" color="primary">Large</Button>
  </div>
</section>
