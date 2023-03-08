<svelte:options immutable={true} />

<script>
  import { FaPencilAlt, FaTrash } from "svelte-icons/fa";
  import { createEventDispatcher } from "svelte";
  import Button from "../Button.svelte";

  export let todos;

  let editingTodo = null;

  const dispatch = createEventDispatcher();

  function handleRemoveTodo(todo) {
    const isNotCancelled = dispatch(
      "deleteTodo",
      {
        todo,
      },
      { cancelable: true }
    );
  }

  function handleCompleteTodo(todo) {
    const isNotCancelled = dispatch(
      "completeTodo",
      { todo },
      { cancelable: true }
    );
  }

  function handleSubmitUpdate(todo) {
    const isNotCancelled = dispatch(
      "updateTodo",
      { id: todo.id, name: todo.name },
      { cancelable: true }
    );

    editingTodo = null;
  }

  function handleCustomEvent() {
    dispatch("customEvent", {});
  }
</script>

<div>
  {#each todos as todo, index (todo.id)}
    {@const number = index + 1}
    <div
      class="flex gap-2 items-center justify-between py-3 px-4 bg-zinc-200 mb-2"
    >
      <div
        class="flex items-center gap-2 h-10 w-full"
        on:dblclick={() => (editingTodo = todo)}
      >
        <span>{number}.</span>
        <input
          type="checkbox"
          bind:checked={todo.completed}
          on:input={() => handleCompleteTodo(todo)}
        />

        {#if editingTodo !== null && editingTodo.id === todo.id}
          <form on:submit|preventDefault={handleSubmitUpdate} class="w-full">
            <input
              class="py-1 px-2 w-full"
              type="text"
              bind:value={todo.name}
            />
          </form>
        {/if}
        <p
          class:invisible={editingTodo !== null && editingTodo.id === todo.id}
          class:line-through={todo.completed}
        >
          {todo.name}
        </p>
      </div>

      <Button
        on:click={() => handleRemoveTodo(todo)}
        class="w-4 h-4 text-error-500"><FaTrash /></Button
      >
    </div>
  {/each}

  <!-- <Button on:click={handleCustomEvent} variant="filled" color="secondary" -->
  <!--   >Trigger custom event</Button -->
  <!-- > -->
</div>
