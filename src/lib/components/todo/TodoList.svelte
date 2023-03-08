<script>
  export let todos = [];
</script>

<div>
  {#each todos as todo, index (todo.id)}
    {@const number = index + 1}
    <div class="flex gap-2 items-center p-2 bg-zinc-200 mb-2">
      <span>{number}.</span>
      <input type="checkbox" bind:checked={todo.completed} />
      <p>{todo.name} - {todo.completed}</p>
    </div>
  {/each}
</div>
