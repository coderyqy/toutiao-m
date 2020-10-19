<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />
    <van-form 
      @submit="onSubmit" ref="login-form"
      @failed="onFailed"
      :show-error-message="false" 
      :show-error="false"

     >
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field
        v-model="user.mobile"
        clearable
        label="手机号"
        name="mobile"
        left-icon="music-o"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
      />
      <!-- 验证码 -->
      <van-field
        v-model="user.code"
        center
        left-icon="music-o"
        label="验证码"
        name="code"
        placeholder="请输入短信验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button size="small" @click.prevent="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <!-- 登录按钮 -->
      <div class="wrap">
        <van-button type="primary" class="btn" size="large">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from "@/api/user";
import { Toast } from "vant";

export default {
  name: "login",
  data() {
    return {
      tel: "",
      user: {
        // 用户注册登录信息
        mobile: '17090086870',
        code: '246810',
      },
      formRules: {
        mobile: [
          { required: true, message: "请填写手机号" },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: "手机号格式不正确" },
        ],
        code: [
          { required: true, message: "请填写验证码" },
          { pattern: /^\d{6}$/, message: "请输入六位数" },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      Toast.loading({
        message: "登录中...",
        forbidClick: true, // 是否禁止背景点击
        duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
      });
      // 1.找到数据接口
      // 2.封装请求方法
      // 3.请求调用方法
      try {
        const { data } = await login(this.user);
        Toast.success("登录成功");
        // 将后端返回的用户登录状态放到VueX容器中
        this.$store.commit('setUser', data.data)
        this.$router.push('/profile')
      } catch (error) {
        // 4.处理响应结果
        console.log(error);
        Toast.fail("登录失败，手机号或验证码错误");
      }
    },
    // 获取验证码
    async onSendSms() {
      try {
        // vant 自带的验证方法
        await this.$refs['login-form'].validate('mobile');
      } catch (error) {
        console.log(error.message);
        Toast({
          message: error.message,
          position:'top'
        })
      }
    },
    // 
    onFailed(error){
      if(error.errors[0]){
        Toast({
          message: error.errors[0].message,
          position:'top'
        })
      }
    }
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 20px 8px;
  .btn {
    border-radius: 4px;
    background-color: #3296fa;
    border: 0;
    height: 40px;
  }
}
</style>