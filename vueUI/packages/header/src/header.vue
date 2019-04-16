<template>
    <div class="vi-header" :style="headerStyle">
        <div v-if="backBtn" class="vi-header-back" :style="{'min-width':height}" @click="defalutBack">
            <span v-if="backBtn.type==1" :style="{'color':backBtn.color?backBtn.color:'#333'}">{{backBtn.value}}</span>
            <img v-if="backBtn.type==2" :src='backBtn.value'/>
            <slot v-if="backBtn.type==3" name="backBtn"></slot>
        </div>
        <div class="vi-header-content" :style="{'justify-content':textPosition}">
            <span v-if="text" :style="{'color':textColor}">{{text}}</span>
            <slot v-if="text==''"></slot>
        </div>
        <div class="vi-header-right" v-if="rightBtn.length>0">
            <div @click="btnClick(item)" class="vi-header-right-item" v-for="(item,index) in rightBtn" :key="index"  :style="{'min-width':height}">
                <span v-if="item.type==1">{{item.value}}</span>
                <img v-if="item.type==2" :src="item.value" />
            </div>
        </div>
        <div class="vi-header-right" v-if="rightBtn.length==0">
            <slot name="rightBtn"></slot>
        </div>
    </div>    
</template>

<script>
export default {
    name:'vi-header',
    props:{
        height:{
            type:String,
            default:'50px'
        },
        text:{
            type:String,
            default:''
        },
        textColor:{
            type:String,
            default:'#333'
        },
        textPosition:{
            type:String,
            default:'center'
        },
        textPadding:{
            type:String,
            default:'10px'
        },
        backBtn:{
            default:function(){
                return {
                    type:2,
                    color:'#333',
                    value:'/static/imgs/arrow-left.png',
                }
            }
        },
        backFun:{
            type:Function,
            default:this.defalutBack
        },
        rightBtn:{
            type:Array,
            default:function(){
                return []
            }
        },
        bgColor:{
            type:String,
            default:'#fff'
        },
        bottomLine:{
            type:String,
            default:'',
        },
    },
    data(){
        return{
            headerStyle:{
                'background-color':this.bgColor,
                'border-bottom':this.bottomLine!=''?'solid 1px '+this.bottomLine:'none',
                'height':this.height,
                'padding':this.textPadding?'0 '+this.textPadding:'0',
                'padding-left':this.backBtn?this.height:this.textPadding?this.textPadding:'0',
                'padding-right':this.backBtn&&this.textPosition=='center'?this.height:this.textPadding?this.textPadding:'0',
            }
        }
    },
    methods:{
        defalutBack(){
            this.$router.go(-1);
        },
        btnClick(item){
            console.log(item);
            item.func&&typeof item.func === 'function'&&item.func(); 
        }
    }
}
</script>

<style lang="scss">
.vi-header{
    height: 50px;
    background: #ddd;
    position: relative;
    .vi-header-back{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        height: 100%;
        img{
            width: 20px;
            height: 20px;
        }
    }
    .vi-header-content{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .vi-header-right{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
        display: flex;
        height: 100%;
        .vi-header-right-item{
            min-width: 50px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            img{
                width: 20px;
                height: 20px;
            }
        }
    }
}
</style>
