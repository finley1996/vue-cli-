<template>
  <div class="container">
    <textarea placeholder="请输入留言" v-model="msg"></textarea>
    <button @click="input(msg)">添加</button>
  </div>
</template>
<script>
import { inputMsg, getMsg } from "@/api/axios";
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    input(msg) {
      inputMsg(msg)
        .then(res => {
          if (res.data.state) {
            alert("添加留言成功");
            this.msg='';
            //删除完毕后更新表格
            getMsg().then(res => {
              this.bus.$emit('update',res.data.data);
            });
          } else {
            alert("添加留言失败");
          }
        })
        .catch(err => {
          console.log(err);
          aler("服务器出错");
        });
    }
  }
};
</script>
<style scoped>
.container {
  width: 420px;
  height: 200px;
  border: 1px solid black;
}
textarea {
  width: 320px;
  height: 190px;
}
button {
  width: 90px;
  height: 190px;
  position: relative;
  top: -90px;
}
</style>