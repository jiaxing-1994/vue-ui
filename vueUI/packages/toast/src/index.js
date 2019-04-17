import Vue from 'vue'
import toastComponent from './toast.vue'
const ToastConstructor = Vue.extend(toastComponent)

// const Toast = (options,time,positions) => {
//     const toastInstance = new ToastConstructor({
//         el:document.createElement('div'),
//         data:{
//             message:options,
//             time:time,
//             cop:positions
//         }
//     });
//     toastInstance.dom = toastInstance.$el;
//     document.body.appendChild(toastInstance.dom);
// }

function toastPro() {

}
toastPro.prototype={
    base(...array){
        let msg,time,position
        if(array.length){
            array.forEach(item=>{
                if(typeof item == 'undefined'){
                    return
                }
                if(typeof item == 'number'){
                    time =item
                }else if(item == 'top' || item == 'bottom'|| item == 'middle'){
                    position=item
                }else if(typeof item == 'string'){
                    msg=item
                }
            })
            let toastInstance = new ToastConstructor({
                el:document.createElement('div'),
                data:{
                    message: msg ,
                    time:time,
                    cop:position
                }
            });
            toastInstance.dom = toastInstance.$el;
            document.body.appendChild(toastInstance.dom);
            return
        }else{

        }

    },
    text(msg,time,position){
       this.base(msg,time,position);
    }
}
let Toast = new toastPro()
console.log(Toast)
export default Toast

