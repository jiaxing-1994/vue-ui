import LoadingDirective from './src/directive';
export default {
    install:(Vue)=>{
        Vue.use(LoadingDirective);
    },
    LoadingDirective
}