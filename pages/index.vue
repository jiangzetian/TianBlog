<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        天小天
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title:'首页 | 天小天',
    }
  },
}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 500;
  font-size: 80px;
  color: #33333D;
  letter-spacing: 1px;
}
</style>
