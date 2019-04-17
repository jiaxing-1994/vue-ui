<template>
    <transition name="fade">
        <div class="toast" v-show="show">
            <div class="text" :style="position">
                {{message}}
            </div>
        </div>

    </transition>
</template>

<script>
    export default {
        name:'toast',
        data() {
            return {
                show: true,
                message: "ssss",
                time:'',
                position:{
                    transform: 'translate(-50%,-50%)',
                     left: '50%',
                     top: '50%'
                }
            };
        },
        mounted(){
            console.log(this.message)
            if(this.time){
                setTimeout(()=>{
                    this.show=false
                },this.time)
            }
            if(this.cop=='top'){
                this.position={
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '10%'
                }
                return false
            }else if(this.cop=='bottom'){
                this.position={
                    transform: 'translateX(-50%)',
                    left: '50%',
                    bottom: '10%'
                }
                return false
            }else if(this.cop=='middle'){
                this.position={
                    transform: 'translate(-50%,-50%)',
                    left: '50%',
                    top: '50%'
                }
            }
        }
    };
</script>

<style scoped>
    /*.toast {*/
        /*position: fixed;*/
        /*top: 40%;*/
        /*left: 50%;*/
        /*margin-left: -15vw;*/
        /*padding: 2vw;*/
        /*width: 30vw;*/
        /*font-size: 4vw;*/
        /*color: #fff;*/
        /*text-align: center;*/
        /*background-color: rgba(0, 0, 0, 0.8);*/
        /*border-radius: 5vw;*/
        /*z-index: 999;*/
    /*}*/
    .toast {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255,0.2);
    }
    .text{
        position: absolute;
        padding: 10px;
        background-color: rgba(0,0,0,0.8);
        border-radius: 5px;
        color: #ffffff;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: 0.3s ease-out;
    }
    .fade-enter {
        opacity: 0;
        transform: scale(1.2);
    }
    .fade-leave-to {
        opacity: 0;
        transform: scale(0.8);
    }
</style>