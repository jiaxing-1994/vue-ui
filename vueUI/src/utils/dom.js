import Vue from 'vue';

//是否服务器渲染
const isServer = Vue.prototype.$isServer;
//ie版本
const ieVersion = isServer ? 0: Number(document.documentMode);

export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};
export function addClass(el,cls){
    if(!element) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');
    for(var i=0,len=classes.length;i<j;i++){
        var clsName = classes[i];
        if(!clsName) continue;
        if(el.classList){
            el.classList.add(clsName);
        }else if(!hasClass(el,clsName)){
            curClass += ' '+clsName
        }
    }
    if(!el.classList){
        el.className = curClass;
    }
}
export function removeClass(element,className){
    
}
export function getStyle(element,styleName){
    if(isServer) return;
    if(!element||!styleName) return null;
    if(styleName == 'float'){
        styleName = 'cssFloat';
    }
    try{
        var computed = document.defaultView.getComputedStyle(element,'');
        return element.style[styleName] || computed?computed[styleName]:null;
    }catch(e){
        return element.style[styleName];
    }
}
export function setStyle(element,styleName,styleValue){
    if(isServer) return;
    if(!element||!styleName) return null;
    if(styleName == 'float'){
        styleName = 'cssFloat';
    }
    try{
        var computed = document.defaultView.getComputedStyle(element,'');
        element.style[styleName] = styleValue;
        return element;
    }catch(e){
        element.style[styleName] = styleValue;
        return element;
    }
}