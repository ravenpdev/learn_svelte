<script>
  import { v4 as uuid } from "uuid";
  import Todo from "../components/todo/Todo.svelte";

  let todos = [
    {
      id: uuid(),
      name: "Todo 1",
      completed: false,
    },
    {
      id: uuid(),
      name: "Todo 1",
      completed: false,
    },
  ];

  function handleAddTodo(event) {
    // event.preventDefault();

    const { name } = event.detail;

    if (name === "") return;

    const todo = {
      id: uuid(),
      name,
      completed: false,
    };

    todos = [...todos, todo];
  }

  function handleCustomEvent(event) {
    alert("custom event was triggered!");
  }
</script>

<div class="max-w-lg px-8 py-4">
  <Todo {todos} on:addTodo={handleAddTodo} on:customEvent={handleCustomEvent} />
</div>
