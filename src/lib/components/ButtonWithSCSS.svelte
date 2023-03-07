<script>
  export let size = "normal";
  export let shadow = false;
  export let variant = "text";
</script>

<button
  class:size-sm={size === "small"}
  class:size-lg={size === "large"}
  class:variant-text={variant === "text"}
  class:variant-fill={variant === "fill"}
  class:shadow
>
  <slot>Fallback</slot>
</button>

<style lang="scss">
  @use "../styles/colors.scss";

  button {
    border: none;
    font-weight: 500;
    border-radius: 4px;
    padding: 10px 12px;
    cursor: pointer;
    &.size-sm {
      padding: 8px 10px;
      font-size: 14px;
    }
    &.size-lg {
      padding: 12px 14px;
      font-size: 18px;
    }
    &.shadow {
      box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
    }
    &.variant-text {
      color: colors.$text;
      &:hover {
        background-color: colors.$gray;
      }
    }
    &.variant-fill {
      color: #fff;
      background-color: colors.$primary;
      &:hover {
        filter: brightness(95%);
      }
    }
  }
</style>
