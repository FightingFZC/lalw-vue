<template>
    <div>
      <div id="first">
          <img :src="this.$store.getters.getUser.avatar" alt="网络已断开！">
          <h1>欢迎使用，用户：{{ this.$store.getters.getUser.email }}</h1>
          <div class="info">
              管理自己的信息、算法，让 吾爱线代 更好地满足您的需求。
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
#first {
    text-align: center;

}

h1 {
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    font-size: 1.75rem;
    font-weight: 400;
}

img {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
    width: 130px;
}

div.info {
    letter-spacing: .00625em;
    font-family: Roboto,Arial,sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word;
    color: #5f6368;
    margin-top: 16px;
}

</style>