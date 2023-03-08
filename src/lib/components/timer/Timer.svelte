<script>
  import Button from "../Button.svelte";

  let minutes = 25;
  let seconds = 60;

  let interval;

  function start(config) {
    stop();

    switch (config) {
      case "pomodoro":
        minutes = 25;
        break;
      case "shortBreak":
        minutes = 5;
        break;
      case "longBreak":
        minutes = 15;
        break;
    }

    seconds = 60;

    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          return;
        } else {
          minutes -= 1;
          seconds = 59;
        }
      } else {
        seconds -= 1;
      }
    }, 1000);
  }

  function stop() {
    if (!interval) return;

    clearInterval(interval);
  }

  function pad(num) {
    return num < 10 ? "0" + num : num === 60 ? "00" : num;
  }

  $: formattedTime = `${pad(minutes)}:${pad(seconds)}`;
</script>

<div>
  Time left: {formattedTime}

  <div class="flex gap-2">
    <Button on:click={() => start("pomodoro")} color="primary" variant="filled"
      >Pomodoro</Button
    >
    <Button
      on:click={() => start("shotBreak")}
      color="secondary"
      variant="filled">Short Break</Button
    >

    <Button
      on:click={() => start("longBreak")}
      size="large"
      color="success"
      variant="filled">Long Break</Button
    >
  </div>
</div>
