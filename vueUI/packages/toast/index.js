import toast from './src/index';
export default {
    install:(Vue)=>{
        Vue.prototype.$toast = toast.toast;
    },
    toast
}