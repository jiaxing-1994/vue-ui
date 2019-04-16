<template>
    <div id="headerComponent">
        <vi-header
            text="头部固定文字"
            bottomLine="#ddd"
        >
        </vi-header>

        <vi-header
            text="右侧图标"
            :rightBtn="headerRightBtn"
            bottomLine="#ddd"
        >
        </vi-header>

        <vi-header
            bottomLine="#ddd"
            text="左侧对齐"
            textColor="blue"
            textPosition="flex-start"
        >
        </vi-header>

        <vi-header
            bottomLine="#ddd"
            text="居中对齐"
            textColor="green"
            textPosition="center"
        >
        </vi-header>

        <vi-header
            bottomLine="#ddd"
            text="右侧对齐"
            textColor="red"
            textPosition="flex-end"
        >
        </vi-header>

        <vi-header
            textColor="#fff"
            textPosition="center"
            bgColor="#333"
            :backBtn="headerBackBtn"
        >
        <div class="input-box">
            <input type="text" value="插槽头部"/>
        </div>
        </vi-header>

        <vi-header
            bottomLine="#ddd"
            text="返回按钮插槽"
            textPosition="center"
            :backBtn="{type:3}"
        >
        <div class="backBtnType3" slot="backBtn">
            <img src="/static/imgs/arrow-left.png"/>
            <span>返回</span>
        </div>
        </vi-header>

        <vi-header
            bottomLine="#ddd"
            text="右侧按钮插槽"
            textPosition="center"
            :backBtn="{type:3}"
        >
        <div class="rightBtnType" slot="rightBtn" @click="goBack">
            <span>返回</span>
            <img src="/static/imgs/arrow-left.png"/>
        </div>
        </vi-header>
    </div>    
</template>

<script>
export default {
    name:'headerComponent',
    data(){
        return{
            headerText:'头部组件',
            headerRightBtn:[{
                type:2,
                value:'/static/imgs/circle_add.png',
                func:this.openLayer
            }],
            headerBackBtn:{
                type:1,
                value:'返回',
                color:'#fff'
            }
        }
    },
    mounted(){
        
    },
    methods:{
        openLayer(){
            this.$layer({
                headerText:false,
                btn:[],
                contentText:'头部右侧图标'
            });
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
#headerComponent{
    .input-box{
        height: 100%;
        padding: 10px 0;
        box-sizing: border-box;
    }
    .backBtnType3{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        font-size: 12px;
        img{
            margin-right: 5px;
            width: 15px;
            height: 15px;
        }
    }
    .rightBtnType{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        font-size: 12px;
        img{
            margin-right: 5px;
            margin-left: 5px;
            width: 15px;
            height: 15px;
            transform: rotate(180deg);
        }
    }
}
</style>
