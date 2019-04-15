import Layer from './src/layer';

export default {
    install:(Vue)=>{
        Vue.prototype.$layer = Layer;
    },
    Layer
}