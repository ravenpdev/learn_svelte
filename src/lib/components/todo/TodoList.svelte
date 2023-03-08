<script>
  import { FaTrash } from "svelte-icons/fa";
  import { createEventDispatcher } from "svelte";
  import Button from "../Button.svelte";

  export let todos = [];

  const dispatch = createEventDispatcher();

  function handleDeleteTodo(todo) {
    const isNotCancelled = dispatch(
      "deleteTodo",
      {
        todo,
      },
      { cancelable: true }
    );
  }

  function handleCustomEvent() {
    dispatch("customEvent", {});
  }
</script>

<div>
  {#each todos as todo, index (todo.id)}
    {@const number = index + 1}
    <div class="flex gap-2 items-center justify-between p-2 bg-zinc-200 mb-2">
      <div class="flex items-center gap-2">
        <span>{number}.</span>
        <input type="checkbox" bind:checked={todo.completed} />
        <p>{todo.name} - {todo.completed}</p>
      </div>

      <Button
        on:click={() => handleDeleteTodo(todo)}
        class="w-4 h-4 text-error-500"><FaTrash /></Button
      >
    </div>
  {/each}

  <!-- <Button on:click={handleCustomEvent} variant="filled" color="secondary" -->
  <!--   >Trigger custom event</Button -->
  <!-- > -->
</div>
