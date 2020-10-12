<template>
  <div class="edit-container">
      <van-nav-bar
      class="app-nav-bar"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell is-link @click="showName = true">昵称
        <span class="right-item">{{ $store.state.user.name }}</span>
    </van-cell>
    <van-popup class="popup-bg" v-model="showName"  position="bottom" :style="{ height: '100%' }" >
        <van-nav-bar
        title="昵称"
        left-text="取消"
        right-text="完成"
        @click-left="showName = false"
        @click-right="onClickRight"
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
  </div>    
</template>

<script>
export default {
    name:'edit',
    data(){
        return {
            showName: false,
            message: ''
        }
    },
    methods: {
        onClickRight(){
            this.$toast({
                message: '修改成功',
                position:'top'
            })
            this.showName = false
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
</style>