<template>
  <div class="container">
    <div>
      <Logo></Logo>
      <ul class="social">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-CN_bilibiliB"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-GitHub"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gitee"></use>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Logo from '../components/Logo'
  export default {
    components:{
      "Logo":Logo
    },
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
  .social{
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .social li .icon{
    font-size: 40px;
    margin: 0 10px;
  }
  .bilibili{
    color: #23ACE5;
  }
  .weixin{
    color: #11D31D;
  }
  .qq{
  }
  .github{
  }
  .gitee{
  }
</style>
