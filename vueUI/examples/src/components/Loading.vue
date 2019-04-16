<template>
    <div id="loading">
        <vi-header
            text="加载动画"
        ></vi-header>
        <button @click="startLoading">开始加载</button>
        <button @click="startFullLoading">全屏加载加载</button>
        <button @click="endLoading">结束加载</button>
        <div class="loading-box" v-loading="isLoad" vi-loading-text="5秒后结束">
            内容加载
        </div>
        <div :style="{'display':'none'}" v-loading.fullscreen="isLoad2" vi-loading-text="2秒后结束">
            全屏加载
        </div>
    </div>    
</template>

<script>
export default {
    name:'loading',
    data(){
        return{
            isLoad:false,
            isLoad2:false,
            loadTimer:null,
            loadTimer2:null,
        }
    },
    methods:{
        startLoading(){
            this.isLoad = true;
            this.loadTimer = setTimeout(()=>{
                this.isLoad = false;
            },5000);
        },
        startFullLoading(){
            this.isLoad2 = true;
            this.loadTimer2 = setTimeout(()=>{
                this.isLoad2 = false;
            },2000);
        },
        endLoading(){
            this.loadTimer&&clearTimeout(this.loadTimer);
            this.isLoad = false;
            this.loadTimer2&&clearTimeout(this.loadTimer2);
            this.isLoad2 = false;
        }
    }
}
</script>

<style lang="scss">
#loading{
    .loading-box{
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    }
}
</style>
