<template>
    <div class="vi-layer">
        <div :class="['vi-layer-box',animationClass]" :style="{'width':width,'z-index':uId+2}">
            <div v-if="heightText" class="vi-layer-header" :style="{'height':height[0]}">
                {{heightText}}
            </div>
            <div v-if="!isDom" v-html="content" class="vi-layer-content" :style="{'height':height[1]?height[1]:'80px'}"></div>
            <div v-if="isDom" :id="'vi-layer-'+uId" class="vi-layer-content" :style="{'height':height[1]?height[1]:'80px'}"></div>
            <div v-if="btn.length>0" class="vi-layer-btn" :style="{'height':height[2]?height[2]:'40px'}">
                <span v-for="(item,index) in btn" :key="index" @click="clickBtn(item.method)">{{item.text}}</span>
            </div>
        </div>
        <div @click="clickBtn('关闭')" :class="['vi-layer-mask',animationBgClass]" :style="{'z-index':uId+1}"></div>
    </div>
</template>

<script>
export default {
    name:'viLayer',
    data(){
        return{
            isShowBg:true,
            height:['40px','160px','40px'],
            width:'80%',
            heightText:'系统提示',
            isDom:false,
            content:'',
            btn:[{
                text:'取消',
                method:'关闭'
            },{
                text:'确定',
                method:'关闭'
            }],
            animationType:'fade',
            animationClass:'layer-in',
            animationBgClass:'',
            uId:1,
        }
    },
    mounted(){
        this.content = this.getContent(this.content);
        this.isDom = this.isElement(this.content);
        if(this.isDom){
            this.content = this.content.cloneNode(true);
            this.content.style.display = 'block';
        }
        this.$nextTick(()=>{
            this.openAnim();
            if(this.isDom){
                this.insertDom();
            }
        })
    },
    methods:{
        clickBtn(method){
            if(method){
                if(typeof method == 'function'){
                    method();
                }else if(method == '关闭'){
                    this.animationClass = 'layer-out';
                    this.animationBgClass = 'layer-bg-out';
                    setTimeout(()=>{
                        this.$emit('closeLayer');
                    },300);
                }else{
                    console.log('找不到method');
                }
            }
        },
        openAnim(){
            this.animationClass = 'layer-in';
        },
        getContent(name){
            if(typeof name == 'string'){
                if(name.indexOf('#')===0){
                    var id = name.split('#')[1];
                    return document.getElementById(id);
                }else{
                    return name;
                }
            }else if(this.isElement(name)){
                return name;
            }
            
        },
        isElement(obj){
            var isDom = (typeof HTMLElement === 'object')?function(obj){
                return obj instanceof HTMLElement;
            }:function(obj){
                return obj&&typeof obj === 'object'&&obj.nodeType===1&&typeof obj.nodeName === 'string';
            }
            return isDom(obj);
        },
        insertDom(){
            var dom = document.getElementById('vi-layer-'+this.uId);
            dom.appendChild(this.content);
        }
    },
}
</script>

<style lang="scss">
.vi-layer{
    .vi-layer-box{
        position: fixed;
        background: #fff;
        border-radius: 5px;
        .vi-layer-header{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: solid 1px #ddd;
        }
        .vi-layer-content{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .vi-layer-btn{
            display: flex;
            border-top: solid 1px #ddd;
            span{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .vi-layer-mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.3);
    }
}
.layer-in{
    animation: fade-in .3s forwards;
}
.layer-out{
    animation: fade-out .3s forwards;
}
.layer-bg-out{
    animation: fade-bg-out .3s forwards;
}
@keyframes fade-in{
    0%{
        opacity: 0;
        transform: scale(0.5,0.5);
    }
    100%{
        opacity: 1;
        transform: scale(1,1);
    }
}
@keyframes fade-out{
    0%{
        opacity: 1;
        transform: scale(1.1,1.1);
    }
    100%{
        opacity: 0;
        transform: scale(0.5,0.5);
    }
}
@keyframes fade-bg-out{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>



