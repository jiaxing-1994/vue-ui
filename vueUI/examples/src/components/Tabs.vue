<template>
    <div id="tabs">
        <vi-header
            text="tabs"
        >
        </vi-header>
        <div class="content">

        </div>
        <vi-tabs
            :tabBtn="tabObj"
            :defaultIndex="tabIndex"
            imgWidth="20px"
            imgHeight="20px"
            fontSize="11px"
            borderBottom="solid 1px #ddd"
            borderSplit="solid 1px #ddd"
            :isFixed="false"
        ></vi-tabs>
        <vi-tabs
            :tabBtn="tabObj"
            :defaultIndex="tabIndex"
            imgWidth="20px"
            imgHeight="20px"
            fontSize="11px"
            borderTop="solid 1px #ddd"
            borderSplit="solid 1px #ddd"
        ></vi-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabObj:[{
                img:'/static/imgs/tab/01.png',
                imgActive:'/static/imgs/tab/01y.png',
                text:'首页',
                textColor:'#333',
                textActiveColor:'#1873f2',
                func:this.switchTab,
            },{
                img:'/static/imgs/tab/02.png',
                imgActive:'/static/imgs/tab/02y.png',
                text:'行情',
                textColor:'#333',
                textActiveColor:'#1873f2',
                func:this.switchTab,
            },{
                img:'/static/imgs/tab/03.png',
                imgActive:'/static/imgs/tab/03y.png',
                text:'交易',
                textColor:'#333',
                textActiveColor:'#1873f2',
                func:this.switchTab,
            }],
            tabIndex:0,
        }
    },
    methods:{
        switchTab(index){
            switch(index){
                case 0:console.log(0);break;
                case 1:console.log(1);break;
                case 2:console.log(2);break;
            }
        }
    }
}
</script>

<style lang="scss">

</style>
