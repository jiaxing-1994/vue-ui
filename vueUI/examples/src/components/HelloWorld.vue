<template>
  <div class="hello" v-loading.fullscreen="isLoad">
    <vi-header 
      :text="headText">
      <div class="header-text">
        <input type="text" placeholder="输入关键字"/>
      </div>
    </vi-header>
    <h1>{{ msg }}</h1>
    <h2 id="vi-layer" class="vi-layer-content">Essential Links</h2>
    <button @click="openLayer">弹窗</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLoad:false,
      headText:''
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isLoad = false;
    },1000);
  },
  methods:{
    openLayer(){
      this.$layer({
        content:document.getElementById('vi-layer'),
        btn:[{
          text:'取消',
          method:'关闭'
        },{
          text:'打开第二个弹窗',
          method:this.openAnthorLayer
        }]
      });
    },
    openAnthorLayer(){
      this.$layer({
        content:'#vi-layer',
        btn:[{
          text:'关闭',
          method:'关闭'
        },{
          text:'确认',
          method:'关闭'
        }]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vi-layer-content{
  display: none;
}
.header-text{
  color:red;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
}
</style>
