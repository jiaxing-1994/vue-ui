import Loading from '../packages/loading';
import Layer from '../packages/layer'
import Header from '../packages/header'
import Tabs from '../packages/tabs'
console.log(Header)
const components = [
    Header,
    Tabs
]
const install = (Vue)=>{
    Vue.use(Loading.LoadingDirective);

    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$layer = Layer.Layer;
}
export default {
    install,
    Loading,
    Header,
    Tabs
};