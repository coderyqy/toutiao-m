<template>
  <div class="home-container">
    <div class="top-info">
      <!-- 登录前显示 -->
      <div @click="$router.push('/login')" v-if="!$store.state.user">
        <div class="login-wrap">
          <van-image
            class="login-img"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <p class="login-btn">注册/登录</p>
      </div>

      <!-- 登录后显示 -->
      <div v-else>
        <van-row class="avatar">
          <van-col class="wrap-a" span="16">
            <van-image
              class="img"
              round
              :src="currentUser.photo"
            />
            <span class="name">{{ currentUser.name }}</span>
          </van-col>
          <van-col span="8" class="edit">
            <van-button round type="info" @click="editInfo" class="edit-btn"
              >编辑资料</van-button
            >
          </van-col>
        </van-row>
        <van-row class="my-data">
          <van-col span="6">
            <p>{{currentUser.art_count}}</p>
            <p>头条</p>
          </van-col>
          <van-col span="6">
            <p>{{currentUser.follow_count}}</p>
            <p>关注</p>
          </van-col>
          <van-col span="6">
            <p>{{currentUser.fans_count}}</p>
            <p>粉丝</p>
          </van-col>
          <van-col span="6">
            <p>{{currentUser.like_count}}</p>
            <p>获赞</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <van-grid class="handle-data">
      <van-grid-item class="item item-border" icon="star-o" text="收藏" />
      <van-grid-item class="item" icon="eye-o" text="历史" />
    </van-grid>
    <van-notice-bar class="chat" color="#999" background="#fff" mode="link"
      >小智同学</van-notice-bar
    >
    <van-button
      v-if="user"
      @click="loginOut"
      style="width: 100%; border: 0"
      type="default"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getCurrentUser } from '@/api/user'

export default {
  name: "profile",
  data() {
    return {
      showFlag: true,
      currentUser: {}
    };
  },
  created () {
    this.loadCurrentUser()
  },
  methods: {
    editInfo() {
      this.$router.push("/edit");
    },
    loginOut() {
      this.$dialog.confirm({
        title: "标题",
        message: "弹窗内容",
      })
        .then(() => {
          // on confirm
          // 如果直接移除本地存储中的user，视图是不会响应变化的，置空的话可以使视图发生变化
          this.$store.commit("setUser", null);
        })
        .catch(() => {
          // on cancel
        })
    },
    async loadCurrentUser(){
      const {data} = await getCurrentUser();
      this.currentUser = data.data;
      console.log(this.currentUser);
    }
  },
  computed: {
    ...mapState(["user"]), //拿到vuex里面的user
    showFlagFun() {},
  },
};
</script>

<style scoped lang="less">
.top-info {
  height: 160px;
  padding: 20px 10px;
  background-color: #3296fa;
}
.wrap-a {
  display: flex;
  .img {
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
  }
  .name {
    display: flex;
    justify-items: center;
    align-items: center;
    margin-left: 10px;
    color: #eee;
  }
}
.edit {
  display: flex;
  height: 84px;
  justify-items: center;
  align-items: center;
  .edit-btn {
    height: 30px;
    margin-left: auto;
    color: #000;
    background-color: #fff;
  }
}
.my-data {
  margin-top: 24px;
  font-size: 16px;
  text-align: center;
}
p {
  margin: 0;
  padding: 0;
  color: #eee;
}
.handle-data {
  display: flex;
  .item {
    flex-basis: 50% !important;
  }
  .item-border {
    border-right: 1px solid #f1f0f0;
  }
}
.chat {
  margin: 12px 0;
}

.login-btn {
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
}
.login-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  .login-img {
    width: 80px;
    height: 80px;
  }
}
</style>