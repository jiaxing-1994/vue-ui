<template>
    <div id="layerComponent">
        <vi-header
            text="弹窗"
        ></vi-header>
        <button @click="openLayer">弹窗</button>
    </div>    
</template>

<script>
export default {
    name:'vi-layer',
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{
        openLayer(){
            this.$layer();
        }
    }
}
</script>

<style lang="scss">

</style>


