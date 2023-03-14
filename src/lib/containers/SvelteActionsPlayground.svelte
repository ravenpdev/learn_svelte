<script>
  import { onMount } from 'svelte';

  // actions are functions that can be called when dom element is created and destroyed
  import tippy from 'tippy.js';
  import 'tippy.js/dist/tippy.css';

  import longpress from '../actions/longpress';
  import tooltip from '../actions/tooltip';
  import tippyWithAction from '../actions/tippy';

  let showButton = true;
  let duration = 1000;
  let showHover = false;

  onMount(() => {
    tippy('.tooltip', {
      content: 'default tooltip'
    });
  });
</script>

<h1>Svelte Actions</h1>

<div>
  <h1>Use Tippy with Actions</h1>

  <button use:tippyWithAction={{ content: 'Test' }}> Action + Tippy </button>
</div>

<div>
  <h1>Tooltip</h1>

  <button
    class="py-2 px-4 bg-success-500 text-success-50 relative"
    use:tooltip
    on:hover={() => (showHover = true)}
    on:unhover={() => (showHover = false)}
  >
    Button
    <div
      class:hidden={!showHover}
      class="absolute -top-8 bg-zinc-200 p-1 text-zinc-900 text-xs min-w-[100px]"
    >
      Hover Text
    </div>
  </button>
</div>

<div>
  <h1>Tippy</h1>

  <div class="flex gap-4">
    <button class="tooltip py-2 px-4 bg-success-500 text-success-50"
      >Button</button
    >
    <button
      class="tooltip py-2 px-4 bg-success-500 text-success-50"
      data-tippy-content="Button tooltip">Button</button
    >
  </div>
</div>

<div class="mt-10">
  <div>
    {showButton}
    <input
      type="checkbox"
      bind:checked={showButton}
      on:input={() => (showButton = !showButton)}
    />
  </div>

  {#if showButton}
    <!-- content here -->
    <label for="duration" class="flex items-center gap-2">
      <input
        type="range"
        id="duration"
        bind:value={duration}
        max={4000}
        step={100}
      />
      {duration}
    </label>

    <button
      class="bg-info-500 text-info-50 py-1 px-3"
      use:longpress={{ duration: duration }}
      on:longpress={() => alert('longpressed!!')}>Hello</button
    >
  {/if}
</div>

<style>
</style>
