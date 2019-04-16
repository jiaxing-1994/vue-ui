import Vue from 'vue';
import { getStyle,setStyle } from '../../../src/utils/dom'
import Loading from './loading.vue';

const Mask = Vue.extend(Loading); 

const loadingDirective = {};
loadingDirective.install = Vue => {
    Vue.directive('loading',{
        //初次绑定指令的时候调用
        bind:function(el,binding,vnode){
            console.log(el);
            const text = el.getAttribute('vi-loading-text');
            const vm = vnode.context; //绑定节点的vm
            const loading = new Mask({
                el:document.createElement('div'),
                data:{
                    fullscreen:binding.modifiers.fullscreen?true:false,
                    text: text
                }
            });
            el.instance = loading; //储存loading实例
            el.dom = loading.$el; //储存loading dom
            el.domStyle = {};
            el.domInserted = false; //是否插入dom
            el.domVisible = false;//loading是否可见
            toggleLoading(el,binding);
        },
        update:function(el,binding){
            //指令值更新时候调用
            console.log(binding);
            toggleLoading(el,binding);
        },
        unbind:function(el,binding){
            if(el.domInserted){
                el.dom&&
                el.dom.parentNode&&
                el.dom.parentNode.removeChild(el.dom);
            }
        }
    })
    const toggleLoading = (el,binding)=>{
        if(binding.value){
            //开启加载
            Vue.nextTick(()=>{
                if(el.domInserted){
                    //以及插入dom
                    el.instance.visible = true;
                }else{
                    if(binding.modifiers.fullscreen){
                        //全屏
                        el.originalPosition = getStyle(document.body,'position');
                        el.originalOverflow = getStyle(document.body,'overflow');
                        el.domStyle.zIndex = getStyle(document.body,'zIndex');
                        insertDom(document.body,el,binding);
                    }else{
                        //挂载dom
                        el.originalPosition = getStyle(el,'position');
                        el.originalOverflow = getStyle(el,'overflow');
                        el.domStyle.zIndex = getStyle(el,'zIndex');
                        insertDom(el,el,binding);
                    }
                }
            })
        }else{
            //关闭加载
            if(binding.modifiers.fullscreen){

            }else{
            }
            el.instance.visible = false;
            
        }
    }
    const insertDom = (parent,el,binding)=>{
        if(!el.domVisible&&getStyle(parent,'display')!=='none'&&getStyle(parent,'visibility')!=='hidden'){
            Object.keys(el.domStyle).forEach(property=>{
                el.dom[property] = el.domStyle[property]
            })
            if(el.originalPosition!=='absolute'){
                parent.style.position = 'relative';
            }
            if(el.originalOverflow!=='hidden'){
                parent.style.overflow = 'hidden';
            }
            el.domVisible = true;
            parent.appendChild(el.dom);
            Vue.nextTick(()=>{
                el.instance.visible = true;
            })
            el.domInserted = true;
        }
    }
};

export default loadingDirective;