<script>
  import Button from "../components/Button.svelte";
  import {
    FaAddressBook,
    FaAddressCard,
    FaAd,
    FaAngellist,
  } from "svelte-icons/fa";
</script>

<section>
  <h1>Using Slot</h1>

  <div>
    <h2>Variant Text</h2>
    <div class="flex gap-2">
      <!-- slot props -->
      <!-- event forwarding -->
      <!-- event modifiers -->
      <Button
        let:isLeftHovered
        size="small"
        color="primary"
        shadow
        on:click|once={() => alert("clicked!")}
        disabled
      >
        <div slot="leftContent" class="w-5 h-5">
          {#if isLeftHovered}
            <FaAddressCard />
          {:else}
            <FaAddressBook />
          {/if}
        </div>
        Small
        <span slot="rightContent" class="h-5 w-5"><FaAd /></span>
      </Button>

      <Button color="primary" shadow>
        <div slot="leftContent" class="h-5 w-5"><FaAngellist /></div>
        Regular
      </Button>

      <Button size="large" color="primary" shadow>Large</Button>
    </div>
  </div>

  <div>
    <h2>Outlined Text</h2>

    <div class="flex gap-2">
      <Button variant="outlined" size="small" color="primary">Small</Button>
      <Button variant="outlined" color="primary">Regular</Button>
      <Button variant="outlined" size="large" color="primary">Large</Button>
    </div>
  </div>

  <div>
    <h2>Filled Text</h2>

    <div class="flex gap-2">
      <Button variant="filled" size="small" color="primary">Small</Button>
      <Button variant="filled" color="primary">Regular</Button>
      <Button variant="filled" size="large" color="primary">Large</Button>
    </div>
  </div>
</section>
