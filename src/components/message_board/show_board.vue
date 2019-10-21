<template>
  <div class="container">
    <h3>留言板</h3>
    <ul v-if="msgArr.length">
      <li v-for="(item,index) in msgArr" :key="index">
        <span>第{{index+1}}条：{{item.msg}}</span>
        <button @click="del(item._id)">×</button>
      </li>
    </ul>
    <div v-else class="nomore">没有更多留言啦</div>
  </div>
</template>
<script>
//引入获取和删除的api接口
import { getMsg, delMsg } from "@/api/axios";
export default {
  data() {
    return {
      msgArr: []
    };
  },
  created() {
    getMsg()
      .then(res => {
        if (res.data.state) {
          this.msgArr = res.data.data;
          console.log("获取留言成功");
        } else {
          console.log("获取留言失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    const _this = this;
    this.bus.$on("update", function(input) {
      _this.msgArr = input;
    });
  },
  methods: {
    del(id) {
      delMsg(id)
        .then(res => {
          if (res.data.state) {
            alert("删除数据成功");
            //删除完毕后更新表格
            getMsg().then(res => {
              this.msgArr = res.data.data;
            });
          } else {
            alert("删除数据失败");
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
* {
  margin: 0;
  padding: 0;
}
h3,
.nomore {
  color: hotpink;
  text-align: center;
}
.container {
  width: 420px;
  height: 500px;
  border: 1px solid black;
}
ul,
.nomore {
  width: 400px;

  margin: 10px;
  list-style: none;
}
ul {
  height: 430px;
  border: 1px solid hotpink;
  overflow: auto;
}
li {
  width: 100%;
  border-bottom: 1px solid hotpink;
  line-height: 40px;
  overflow: hidden;
}
li > span {
  float: left;
}
li > button {
  width: 15px;
  height: 15px;
  float: right;
}
</style>