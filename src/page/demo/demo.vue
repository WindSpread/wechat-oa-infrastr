<template>
  <div class="relation-phone">
    <flexbox orient="vertical">
      <flexbox>
        <div class="flex-demo head-portrait">
          <img src="../../assets/images/touxiang.jpg" alt="头像">
        </div>
      </flexbox>
      <flexbox><div class="flex-demo head-explain">为了您的账号安全，请绑定您的手机号</div></flexbox>
      <flexbox><div v-bind:class="state" class="flex-demo head-prompt">{{ prompt }}</div></flexbox>
      <flexbox><div v-if="status === 2" class="flex-demo head-prompt font-yellow">{{ prompt }}</div></flexbox>
      <flexbox><div v-if="status === 3" class="flex-demo head-prompt font-red">{{ prompt }}</div></flexbox>
    </flexbox>
    <group title="" >
      <x-input class="cell" title="手机号码" name="mobile" v-model="phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <div class="btn">
      <x-button type="primary" @click.native="bindingPhone()">绑定手机号</x-button>
    </div>
  </div>
</template>

<script>
import { Flexbox, XInput, Group, XButton, Cell } from 'vux'

export default {
  name: 'relation-phone',
  data () {
    return {
      phone: '1388888888',
      prompt: '错误提示',
      state: null,
      status: null
    }
  },
  // 调用vux组件
  components: {
    Flexbox,
    XInput,
    XButton,
    Group,
    Cell
  },
  // 创建数据之前
  beforeCreate () {

  },
  // 创建数据 我们在这里的得到我们在data里面创建的数据,实例已经创建完成之后被调用
  created () {
    // 组件创建完后获取数据
    // this.bindingPhone()
  },
  // Dom渲染完成前
  beforeMount () {

  },
  // Dom渲染完成
  mounted () {

  },
  // 更新视图 在beforeUpdate触发时，视图已经更新完成
  beforeUpdate () {

  },
  // 更新数据调用的函数、。
  Updated () {

  },
  // methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
  methods: {
    // 绑定手机号
    bindingPhone (params) {
      // 判断 参数是否存在，如果不存在则设为空或自定义参数
      if (!params) params = {phone: this.phone, platform: 'wechat'}
      // 调用 api的get方法（参数按先后顺序分别为：请求路径，请求参数，成功方法，失败方法）
      this.$api.post('/v1/api/user/bind', params, r => {
        this.status = r.data.status
        // 如果绑定成功
        if (r.data.status === 1) {
          // 调用vux插件 返回成功结果
          this.$vux.toast.text(r.data)
          // 跳转到首页
          this.$router.push({path: '/'})
        } else if (r.data.status === 2) {
          this.state = 'font-yellow'
        } else if (r.data.status === 3) {
          this.state = 'font-red'
        }
      })
    },
    greet: function () {
      alert(11)
    }
  }
}
</script>

<style scoped>
.head-portrait{
  width: 10rem;
  height: 10rem;
  margin: 5rem auto 1.5rem auto;
  border: 2px solid #F8F8F8;
  border-radius: 50%;
}
.head-portrait img {
  width: 100%;
  height: auto;
  display: black;
  border-radius: 50%;
}
.head-explain {
  margin: 0 auto;
}
.head-prompt {
  margin: 0 auto;

}
.btn{
  padding: 0 1.5rem;
  margin-top: 3rem;
}
  .cell {
    padding: 10px 30px;
    font-size: 1.4rem;
  }
  .weui-input {
    font-size: 1.4rem;
  }
</style>
