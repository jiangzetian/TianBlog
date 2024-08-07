<template>
  <div id="copyright">
    <ul>
      <li>天小天版权所有©</li>
      <template
        v-if="host.includes('tianxiaotian') || host.includes('localhost')"
      >
        <li>
          备案号：
          <a no-prefetch target="_blank" href="https://beian.miit.gov.cn/">
            湘ICP备18008856号
          </a>
        </li>
        <li>
          <a
            no-prefetch
            target="_blank"
            href="https://beian.mps.gov.cn/#/query/webSearch?code=43011102001726"
          >
            <img src="@/static/image/layout/备案图标.png" />
            <span>湘公网安备 43011102001726号</span>
          </a>
        </li>
      </template>
      <template v-else-if="host.includes('ttshouna')">
        <li>
          备案号：
          <a no-prefetch target="_blank" href="https://beian.miit.gov.cn/">
            湘ICP备18008856号
          </a>
        </li>
        <li>
          <a
            no-prefetch
            target="_blank"
            href="https://beian.mps.gov.cn/#/query/webSearch?code=43010302001867"
          >
            <img src="@/static/image/layout/备案图标.png" />
            <span>湘公网安备 43010302001867号</span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  data() {
    return {
      host: "",
    };
  },

  mounted() {
    if (process.browser) {
      this.host = location.host;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/layout/copyright.scss";
</style>
