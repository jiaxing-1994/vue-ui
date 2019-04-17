<template>
    <div class="vi-tabs" :style="tabStyle">
        <div @click="chooseTab(item,index)" :class="['tab-item',chooseIndex==index?'tab-active':'']" :style="{'color':chooseIndex==index?item.textActiveColor:item.textColor,'border-right':borderSplit?borderSplit:'none'}" v-for="(item,index) in tabBtn" :key="index">
            <img :style="imgStyle" v-if="item.imgActive&&item.img" :src="chooseIndex==index?item.imgActive:item.img"/>
            <span v-if="item.text">{{item.text}}</span>
        </div>
    </div>    
</template>

<script>
export default {
    name:'vi-tabs',
    props:{
        tabBtn:{
            type:Array,
        },
        defaultIndex:{
            type:Number,
            default:0
        },
        imgWidth:{
            type:String,
            default:'15px'
        },
        imgHeight:{
            type:String,
            default:'15px'
        },
        fontSize:{
            type:String,
            default:'14px'
        },
        isFixed:{
            type:Boolean,
            default:true
        },
        borderTop:{
            type:String,
            default:''
        },
        borderBottom:{
            type:String,
            default:''
        },
        borderSplit:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            chooseIndex:this.defaultIndex,
            imgStyle:{
                'width':this.imgWidth,
                'height':this.imgHeight,
                'font-size':this.fontSize
            },
            tabStyle:{
                'position':this.isFixed?'fixed':'initial',
                'bottom':'0px',
                'border-top':this.borderTop?this.borderTop:'none',
                'border-bottom':this.borderBottom?this.borderBottom:'none',
            }
        }
    },
    methods:{
        chooseTab(item,index){
            this.chooseIndex = index;
            item.func(index);
        }
    }
}
</script>

<style lang="scss">
.vi-tabs{
    height: 50px;
    display: flex;
    font-size: 14px;
    width: 100%;
    border-top: solid 1px #ddd;
    box-sizing: border-box;
    .tab-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: solid 1px #ddd;
        img{
            width: 20px;
            height: 20px;
        }
    }
    .tab-item:last-child{
        border-right: none!important;
    }
    .tab-active{

    }
}
</style>
