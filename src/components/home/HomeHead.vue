<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-container>
          <el-header>
            <el-menu :default-active="this.$route.path" mode="horizontal" class="head-nav" router>
              <a href="#/"><img src="@/assets/home.png" id="homeImage" alt="图片未加载" /></a>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/calculator">计算工具</el-menu-item>
              <el-menu-item index="/question">论坛</el-menu-item>
              <el-menu-item index="/history">历史计算</el-menu-item>
              <div class="sign-link-component" ref="signButton">
                <a href="/#/sign/Login" class="sign-link">登录</a>
                <a href="/#/sign/Register" class="sign-link">注册</a>
              </div>
              <!-- 用户 -->
              <div class="shortcut-component" hidden ref="userInfo">
                <el-dropdown class="sign-link" @command="handleSettings">
                  <img src="@/assets/headImage_default.png" id="headImage" alt="图片未加载" />
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="/user/account">账号设置</el-dropdown-item>
                    <el-dropdown-item command="/user/algSetting">我的算法</el-dropdown-item>
                    <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <!-- 管理员 -->
              <div class="shortcut-component" hidden ref="adminInfo">
                <el-dropdown class="sign-link" @command="handleSettings">
                  <img src="@/assets/headImage_default.png" id="headImage" alt="图片未加载" />
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="/admin/account">账号设置</el-dropdown-item>
                    <el-dropdown-item command="/admin/usersSetting">用户管理</el-dropdown-item>
                    <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-menu>
          </el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeHead',
  data() {
    return {}
  },
  methods: {
    loginOut() {
      this.$axios.delete('http://localhost:8080/token')
      localStorage.removeItem('token')
      this.$store.commit('setUser', null)
      this.$refs.userInfo.hidden = true
      this.$refs.signButton.hidden = false
    },
    /*跳转到指定的设置界面*/
    handleSettings(settingName) {
      if (settingName == 'loginOut') {
        this.loginOut()
      } else {
        this.$router.push(settingName)
      }
    },
  },
  mounted() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
      let identity = localStorage.getItem('identity')
      
      if (identity == 'user') {
        this.$refs.userInfo.hidden = false
        this.$refs.signButton.hidden = true
      }else if(identity == 'admin') {
        this.$refs.adminInfo.hidden = false
        this.$refs.signButton.hidden = true
      }
    }
  },
}
</script>

<style scoped>
.sign-link {
  float: right;
  text-decoration: none;
  color: #303133;
}

a.sign-link {
  margin: 25px 20px;
}

.sign-link:hover {
  text-decoration: underline;
}

#headImage {
  width: 47px;
  margin: 5px 10px;
  border-radius: 100%;
}

#homeImage {
  width: 70px;
  /* display: inline-block; */
  float: left;
  margin: 9px 10px;
}
</style>