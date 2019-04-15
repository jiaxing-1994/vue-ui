import Loading from '../packages/loading';
import Layer from '../packages/layer'

const components = [
]
const install = (Vue)=>{
    Vue.use(Loading.LoadingDirective);

    Vue.prototype.$layer = Layer.Layer;
}
export default {
    install,
    Loading
};