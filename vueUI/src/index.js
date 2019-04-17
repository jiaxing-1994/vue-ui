import Loading from '../packages/loading';
import Layer from '../packages/layer'
import Header from '../packages/header'
import Toast from '../packages/toast'
console.log(Header)
const components = [
    Header
]
const install = (Vue)=>{
    Vue.use(Loading.LoadingDirective);

    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$layer = Layer.Layer;
    Vue.prototype.$toast = Toast.toast;
}
export default {
    install,
    Loading,
    Header,
    Toast
};