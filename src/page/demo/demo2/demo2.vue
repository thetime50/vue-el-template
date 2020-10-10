<template>
<div class="component-demo2">
    demo2
</div>
</template>

<script>
/* message */
export default {
    name: "demo2",
    data () {
        return {
            // 
        };
    },
    methods:{
        // 
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$back:#424242;
.component-demo2{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;//.class1 .class2
    >*{
        min-width: 0;
        min-height: 0;
    }
}
</style>