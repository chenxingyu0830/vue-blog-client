<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
      <h1>Let's share of client-blog</h1>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">Let's share</router-link></h1>
      <router-link to="/create">
        <img class="edit" title="新增" src="../assets/add.svg" />
      </router-link>
      <div class="user">
        <img
          class="avatar"
          :src="user.avatar"
          :alt="user.username"
          :title="user.username"
        />
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import auth from "@/api/auth";
window.auth = auth;

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLogin", "user"]),
  },

  created() {
    this.checkLogin();
  },

  methods: {
    ...mapActions(["checkLogin", "logout"]),

    onLogout() {
      this.logout();
    },
  },
};
</script>


<style lang="less" scoped>
@import "../assets/base.less";

header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 20px 0 0 0;
    text-transform: uppercase;

    a {
      color: #fff;
    }
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  button {
    margin: 20px 5px 0;
  }
}

header.login {
  display: flex;
  align-items: center;
  background: @bgColor;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;

    a {
      color: #fff;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;
    img {
      transition: all 0.5s;
      &:hover {
        transform: rotate(1turn);
        transition-duration: 2s;
        transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
      }
    }

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      border-radius: 5px;
      margin: 0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 16px;
        display: block;
        padding: 10px 20px;
        white-space: nowrap;

        &:hover {
          background-color: #eaeaea;
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }
}
</style>
