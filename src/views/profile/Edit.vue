<template>
  <div class="edit-container">
      <van-nav-bar
      class="app-nav-bar"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell is-link >头像
        <span class="right-item">
            <van-image
                class="login-avatar"
                round
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </span>
    </van-cell>
    <van-cell is-link @click="showName = true">昵称
        <span class="right-item">{{ $store.state.user.name }}</span>
    </van-cell>
    <van-popup class="popup-bg" v-model="showName"  position="bottom" :style="{ height: '100%' }" >
        <van-nav-bar
        title="昵称"
        left-text="取消"
        right-text="完成"
        @click-left="showName = false"
        @click-right="onNameClickRight"
        />
        <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            maxlength="7"
            placeholder="请输入昵称"
            show-word-limit
         />
    </van-popup>
     <van-cell is-link @click="showSex = true">性别
        <span class="right-item">男</span>
    </van-cell>
    <van-popup class="popup-bg" v-model="showSex"  position="bottom" :style="{ height: '50%' }" >
        <van-picker
            title="性别"
            show-toolbar
            :columns="sexList"
            @confirm="onSexConfirm"
            @cancel="showSex = false"
            />
    </van-popup>
    <van-cell is-link @click="showBirth = true">出生日期
        <span class="right-item">{{ birthday }}</span>
    </van-cell>
    <van-popup class="popup-bg" v-model="showBirth"  position="bottom" :style="{ height: '50%' }" >
        <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel="showBirth = false"
            @confirm="onBirthConfirm"
        />
    </van-popup>
  </div>    
</template>

<script>
export default {
    name:'edit',
    data(){
        return {
            showName: false, // 姓名弹出层
            showSex: false, // 性别弹出层
            showBirth: false, // 出生日期弹出层
            sexList: ['男','女'],
            birthday: '2020-10-18',
            minDate: new Date(1999, 0, 1),
            maxDate: new Date(),
            currentDate: new Date(),
            message: ''
        }
    },
    methods: {
        onNameClickRight(){
            this.$toast({
                message: '修改成功',
                position:'top'
            })
            this.showName = false
        },
        onSexConfirm(value, index){ // 修改性别确认
            this.$toast({
                message: value+index,
                position:'top'
            })
        },
        onBirthConfirm(aa){
            console.log(aa);
        }
    }
}
</script>

<style scoped lang="less">
.popup-bg{
    background: #f5f7f9;
}
.right-item{
    float: right;
    color: #999;
}
.login-avatar{
    width: 22px;
    height: 22px;
}
</style>