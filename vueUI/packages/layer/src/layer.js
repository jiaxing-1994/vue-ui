import Vue from 'vue';
import Layer from './layer.vue';
import {middlePosition} from '../../../src/utils/dom';

const layerConstructor = Vue.extend(Layer);

let uId = 1000;
const layer = (options) =>{
    var dataParams = {
        uId:uId
    };
    if(options){
        Object.keys(options).forEach(property=>{
            dataParams[property] = options[property];
        })
    }
    const layerInstance = new layerConstructor({
        el:document.createElement('div'),
        data:dataParams
    });
    layerInstance.vm = layerInstance;
    layerInstance.dom = layerInstance.$el;
    document.body.appendChild(layerInstance.dom);
    layerInstance.domInsert = true;
    console.log(layerInstance.vm);
    uId++;
    middlePosition(document.body,layerInstance.dom.childNodes[0]);
    layerInstance.vm.$on('closeLayer',()=>{
        removeDom(layerInstance.vm,document.body,layerInstance.dom);
        uId--;
    });
}

const removeDom = (vm,parent,dom)=>{
    if(vm.domInsert){
        parent.removeChild(dom);
    }
}


export default layer;