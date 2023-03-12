<script>
  import Button from '../Button.svelte';
  import { FaPen, FaTimes, FaTrash } from 'svelte-icons/fa';
  import { createEventDispatcher } from 'svelte';

  // your script goes here
  export let todo;
  let todoToEdit = null;
  let nameInputRef;

  const dispatch = createEventDispatcher();

  function handleRemoveTodo(todo) {
    if (confirm('Are you sure?')) {
      const isNotCancelled = dispatch(
        'deleteTodo',
        {
          todo
        },
        { cancelable: true }
      );
    }
  }

  function handleCompleteTodo(todo) {
    const isNotCancelled = dispatch(
      'completeTodo',
      { todo },
      { cancelable: true }
    );
  }

  function handleSubmitUpdate(todo) {
    const isNotCancelled = dispatch(
      'updateTodo',
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
</script>

<div class="flex gap-2 items-center justify-between py-3 px-4 bg-zinc-200 mb-2">
  <div
    class="flex items-center gap-2 h-10 w-full"
    on:dblclick={() => handleEditTodo(todo)}
  >
    <input
      type="checkbox"
      bind:checked={todo.completed}
      on:input={() => handleCompleteTodo(todo)}
    />

    {#if todoToEdit !== null && todoToEdit.id === todo.id}
      <!-- content here -->
      <form on:submit|preventDefault={handleSubmitUpdate} class="w-full">
        <input
          type="text"
          bind:value={todo.name}
          use:focusInput
          class="w-full"
        />
      </form>
    {:else}
      <!-- else content here -->
      <p
        class="w-full"
        class:invisible={todoToEdit !== null && todoToEdit.id === todo.id}
        class:line-through={todo.completed}
      >
        {todo.name}
      </p>
    {/if}
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
