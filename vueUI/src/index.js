import Loading from '../packages/loading'

const components = [
]
const install = (Vue)=>{
    Vue.use(Loading.LoadingDirective);
}
export default {
    install,
    Loading
};