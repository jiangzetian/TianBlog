<template>
  <div class="container">
    <Logo></Logo>
    <el-row>
      <ul class="social">
        <li>
          <el-tooltip class="item" effect="light" content="bilibili 主页点击跳转" placement="bottom" >
            <a href="https://space.bilibili.com/279625650/" target="_blank">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-CN_bilibiliB"></use>
              </svg>
            </a>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="light" placement="bottom" >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
            <div slot="content" style="text-align: center">
              <p>公众号：天小天个人网</p>
              <img src="../static/image/index/tianxiaotiangrw_code.jpg" width="140px" alt="公众号：天小天个人网">
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="light" content="QQ:1139246375" placement="bottom" >
            <a href="http://wpa.qq.com/msgrd?v=3&uin=1139246375&site=qq&menu=yes" target="_blank">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
            </a>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="light" content="Github主页点击跳转" placement="bottom" >
            <a href="https://github.com/jiangzetian" target="_blank">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-GitHub"></use>
              </svg>
            </a>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="light" content="Gitee主页点击跳转" placement="bottom" >
            <a href="https://gitee.com/jiangzetian" target="_blank">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gitee"></use>
              </svg>
            </a>
          </el-tooltip>
        </li>
      </ul>
    </el-row>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .social{
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .social .icon{
    font-size: 30px;
    margin: 0 10px;
  }
</style>
