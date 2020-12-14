<template>
  <div class="Tian-card">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: "Tian-card",
      props:{

      }
    }
</script>

<style lang="scss" scoped>
@import "./index";
</style>
