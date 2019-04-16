<template>
    <div id="home">
      <ul>
        <li @click="choose(item)" v-for="(item,index) in list">
            <span>{{item.text}}</span>
            <img src="@/../static/imgs/arrow-right.png" />
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
        list:[{
            text:'弹窗',
            path:''
        },{
            text:'loading',
            path:''
        },{
            text:'toast',
            path:''
        },{
            text:'alert',
            path:''
        },{
            text:'头部组件',
            path:'/header'
        }]
        }
    },
    mounted(){

    },
    methods:{
        choose(item){
        this.$router.push({
            path:item.path
        })
        }
    }
}
</script>

<style lang="scss" scoped>
#home{
    li{
        height:50px;
        display:flex;
        justify-content: center;
        align-items: center;
        border-bottom: solid 1px #eee;
        position: relative;
        img{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            width: 8px;
        }
    }
}
</style>
