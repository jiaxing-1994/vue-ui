<template>
  <div class="toast">
    <vi-header
      text="信息弹窗"
    ></vi-header>
    <div>
      <button @click="middle">居中弹窗</button>
    </div>
   <div>
     <button @click="top">顶部弹窗</button>
   </div>
    <div>
      <button @click="bottom">底部弹窗</button>
    </div>
  </div>
</template>

<script>
    export default {
      name:'Toast',
      methods:{
        middle(){
          this.$toast.text('居中弹窗',2000,'middle')
        },
        top(){
          this.$toast.text('顶部弹窗',2000,'top')
        },
        bottom(){
          this.$toast.text('底部弹窗',2000,'bottom')
        }
      }
    }
</script>

<style>
.toast>div{
  margin-top: 10px;
}  
button{
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid;
  transition:all 2s;
  cursor: pointer;
}
  button:hover{
    background-color: red;
  }
</style>
