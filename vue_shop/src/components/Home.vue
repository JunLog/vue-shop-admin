<template>
  <el-container class="home">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/JunLog.jpg" alt="Logo" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧栏 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <!-- 折叠按钮 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>

        <!-- 侧栏菜单 -->
        <el-menu
          background-color="#333"
          text-color="#fff"
          active-text-color="#409eff"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
            <template slot="title">
              <!-- 一级菜单 -->
              <i class="menuIcon" :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item
              :index="subItem.id + ''"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <!--路由占位符  -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      iconsObj: {
        '125': 'el-icon-user',
        '103': 'el-icon-s-check',
        '101': 'el-icon-shopping-bag-1',
        '102': 'el-icon-tickets',
        '145': 'el-icon-data-analysis'
      },
      //是否折叠
      isCollapse: false
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList() {
      // 获取菜单
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    },
    //点击按钮，切换菜单展开与折叠
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.el-header {
  background-color: rgb(25, 34, 39);
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  color: #fff;
  div {
    display: flex;
    align-items: center;
    img {
      margin-left: 15px;
      height: 50px;
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: rgb(25, 34, 39);
}
.el-main {
  background-color: rgb(234, 237, 242);
}
.el-menu {
  border-right: none;
}
.menuIcon {
  margin-right: 15px;
}
.toggle-button {
  background-color: rgb(38, 50, 56);
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  letter-spacing: 0.2em;
  // cursor 设置光标
  cursor: pointer;
}
</style>
