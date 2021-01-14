<template>
<div class="component-tab-router-view flex-layout">
    <el-tabs class="flex-none" v-model="currentPath" v-on="$listeners">
        <template v-for="(item,index) in tabs">
            <el-tab-pane :label="item.title" :name="item.route" :key="item.route"></el-tab-pane>
        </template>
    </el-tabs>
    <router-view class="flex-auto"></router-view>
</div>
</template>

<script>
/* message */
import {
    mapState,
} from "vuex"

export default {
    name: "tab-router-view",
    props:{
        /*
        [{
            title:"page1",
            route:"page1",
        }]
        */
        tabs:{type:Array, required:true},
        deep:{type:Number, required:true},
    },
    data () {
        return {
            path:'',
        };
    },
    computed:{
        ...mapState(['routeInfo']),

        currentPath:{
            get(){
                let path = this.routeInfo.path.split('/')
                let base = path.slice(0,this.deep)
                let currentPath = path[this.deep]
                return currentPath
            },
            set(val){
                let path = this.routeInfo.path.split('/')
                let base = path.slice(0,this.deep)
                let currentPath = path[this.deep]
                let dest = base.concat(val).join('/')
                if(this.routeInfo.path.slice(dest.lenght)!=dest){
                    this.$router.push(base.concat(val).join('/'))
                }
            },
        },
    },
    methods:{
        // 
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.component-tab-router-view{
    
}
</style>