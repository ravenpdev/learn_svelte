<script>
  import { FaSlidersH } from "svelte-icons/fa";

  let showOptions = false;

  function toggleAction() {
    showOptions = !showOptions;
  }
</script>

<div class="max-w-sm w-full flex justify-between">
  <h1>Task</h1>

  <div class="relative">
    <button class="w-5 h-5" on:click={toggleAction}><FaSlidersH /></button>

    {#if showOptions}
      <div
        class="absolute right-0 flex flex-col w-48 bg-zinc-100 items-end max-w-sm text-sm"
      >
        <button
          class="hover:bg-primary-500 hover:text-primary-50 w-full text-left py-2 px-4"
          >Clear All</button
        >
        <button
          class="hover:bg-primary-500 hover:text-primary-50 w-full text-left py-2 px-4"
          >Remove Finished Task</button
        >
      </div>
    {/if}
  </div>
</div>
