<svelte:options immutable={true} />

<script>
  import { FaPen, FaPencilAlt, FaTimes, FaTrash } from "svelte-icons/fa";
  import { createEventDispatcher } from "svelte";
  import Button from "../Button.svelte";

  export let todos;

  let todoToEdit = null;
  let nameInputRef;

  const dispatch = createEventDispatcher();

  function handleRemoveTodo(todo) {
    if (confirm("Are you sure?")) {
      const isNotCancelled = dispatch(
        "deleteTodo",
        {
          todo,
        },
        { cancelable: true }
      );
    }
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

    todoToEdit = null;
  }

  function handleEditTodo(todo, inputRef) {
    todoToEdit = todo;

    if (!nameInputRef) return;
  }

  function focusInput(el) {
    el.focus();
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
        on:dblclick={() => handleEditTodo(todo)}
      >
        <span>{number}.</span>
        <input
          type="checkbox"
          bind:checked={todo.completed}
          on:input={() => handleCompleteTodo(todo)}
        />

        {#if todoToEdit !== null && todoToEdit.id === todo.id}
          <form on:submit|preventDefault={handleSubmitUpdate} class="w-full">
            <input
              class="py-1 px-2 w-full"
              type="text"
              bind:value={todo.name}
              use:focusInput
            />
          </form>
        {/if}
        <p
          class:invisible={todoToEdit !== null && todoToEdit.id === todo.id}
          class:line-through={todo.completed}
        >
          {todo.name}
        </p>
      </div>

      <div class="flex gap-4">
        {#if todoToEdit !== null && todoToEdit.id === todo.id}
          <Button
            on:click={() => (todoToEdit = null)}
            class="w-4 h-4 text-error-500"><FaTimes /></Button
          >
          <!-- content here -->
        {:else}
          <Button
            on:click={() => handleEditTodo(todo)}
            class="w-4 h-4 text-info-500"><FaPen /></Button
          >
        {/if}

        <Button
          on:click={() => handleRemoveTodo(todo)}
          class="w-4 h-4 text-error-500"><FaTrash /></Button
        >
      </div>
    </div>
  {/each}

  <!-- <Button on:click={handleCustomEvent} variant="filled" color="secondary" -->
  <!--   >Trigger custom event</Button -->
  <!-- > -->
</div>
