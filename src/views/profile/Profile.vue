<template>
  <div class="home-container">
    <div class="top-info">
      <van-row class="avatar">
        <van-col class="wrap-a" span="16">
          <van-image class="img"
              round
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          <span class="name">{{ $store.state.user.name }}</span>
        </van-col>
        <van-col span="8" class="edit">
          <van-button round type="info" @click="editInfo" class="edit-btn">编辑资料</van-button>
        </van-col>
      </van-row>
      <van-row class="my-data">
        <van-col span="6">
          <p>62000</p>
          <p>头条</p>
        </van-col>
        <van-col span="6">
          <p>62000</p>
          <p>头条</p>
        </van-col>
        <van-col span="6">
          <p>62000</p>
          <p>头条</p>
        </van-col>
        <van-col span="6">
          <p>62000</p>
          <p>头条</p>
        </van-col>
      </van-row>
    </div>
    <van-grid class="handle-data">
      <van-grid-item class="item item-border" icon="star-o" text="收藏" />
      <van-grid-item class="item" icon="eye-o" text="历史" />
    </van-grid>
    <van-notice-bar class="chat" color="#999" background="#fff" mode="link">小智同学</van-notice-bar>
    <van-button style="width:100%; border:0;" type="default">退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "profile",
  methods:{
    editInfo(){
      this.$router.push('/edit');
    }
  }
};
</script>

<style scoped lang="less">
.top-info{
  height: 160px;
  padding: 20px 10px;
  background-color: #3296fa;
}
.wrap-a{
  display: flex;
  .img{
    width: 80px;
    height: 80px;
    border:2px solid #fff
  }
  .name{
    display: flex;
    justify-items: center;
    align-items: center;
    margin-left: 10px;
    color: #eee;
  }
}
.edit{
  display: flex;
  height: 84px;
  justify-items: center;
  align-items: center;
  .edit-btn{
    height: 30px;
    margin-left: auto;
    color: #000;
    background-color: #fff;
  }
}
.my-data{
  margin-top: 24px;
  font-size: 16px;
  text-align: center;
  
}
p{
  margin: 0;
  padding: 0;
  color: #eee;
}
.handle-data{
  display: flex;
  .item{
    flex-basis: 50% !important;
  }
  .item-border{
    border-right: 1px solid #f1f0f0;
  }
}
.chat{
  margin: 12px 0;
}
</style>