<template>
    <transition name="vi-loading-fade">
        <div class="loading" :class="[fullscreen?'fullscreen':'']" v-show="visible">
            <svg version="1.1" id="L9" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <path fill="#ddd" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform 
                        attributeName="transform" 
                        attributeType="XML" 
                        type="rotate"
                        dur="1s" 
                        from="0 50 50"
                        to="360 50 50" 
                        repeatCount="indefinite" />
                </path>
            </svg>
            <p class="vi-loading-text" v-if="text">{{text}}</p>
        </div>
    </transition>
</template>

<script>
export default {
    name:'loading',
    data(){
        return{
            fullscreen:false,
            visible:false,
            text:'加载中...',
        }
    }
}
</script>

<style lang="scss">
.loading{
    background: rgba(0,0,0,.8);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .vi-loading-text{
        margin: 0;
    }
}
.loading.fullscreen{
    position: fixed;
}
svg {
    width: 50px;
    height: 50px;
    display: inline-block;
}
.vi-loading-fade-enter-active,.vi-loading-fade-leave-active{
    transition: opacity .2s;
}
.vi-loading-fade-enter,.vi-loading-fade-leave-to{
    opacity: 0;
}
</style>
