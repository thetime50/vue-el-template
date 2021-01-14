<template>
<el-scrollbar class="component-menu-tree" :class="{vertical}" wrapStyle="overflow-x:auto;">
    <el-menu
        :default-active="activeIndex" :mode="vertical ? 'vertical' : 'horizontal'"
        @select="menuSelected"
    >
        <template v-for="(mv,mi) in menu">
            <menu-item :menu="mv" :path="[mv]" :ipath="[mi]"/>
        </template>
    </el-menu>
</el-scrollbar>
</template>

<script>
/* message */
import {
    mapState,
} from "vuex"
import menuItem from "./menuItem.vue"
import Common from "@/js/common.js"

export default {
    name: "menu-tree",
    components:{
        menuItem,
    },
    props:{
        menu:{type:Array,default:[],},
        vertical:{type:Boolean,default:false},
    },
    data () {
        return {
            activeIndex:"2-1",
        };
    },
    computed:{
        ...mapState({routePath:(status)=>{
            return status.routeInfo && status.routeInfo.path
        }}),
    },
    methods:{
        menuSelected(index,indexPath,vm){
            this.$router.push('/'+vm.route)
            // console.log(vm.route)
        },
    },
    watch:{
        routePath:{
            handler(after,before){
                if(!after){
                    return
                }
                let path = after//.match(/^\/root\/.*/)[0]
                path = path.split('/').slice(1)

                let match = null
                Common.traverseTree({children:this.menu},
                    null,null,
                    (t,s,d,p,pi)=>{//遍历菜单
                        if(path.length && !t.children){//p.length>1){ // && p.length-1 == path.length){ // 不需要完全匹配
                            let tpath = p.slice(1).map(v=>v.route)
                            let check = tpath.reduce((tt,v,i,a)=>{//比较路径
                                return tt && (v == path[i])
                            },true)

                            if(check){
                                match=t
                            }
                        }
                    }
                )
                // console.log(match)
                if(match){
                    this.$nextTick(()=>{
                        // this.$refs.menu.open(match.id)
                        this.activeIndex = match.id
                    })
                }
            },
            // deep:true,
            immediate:true,
        },
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.component-menu-tree{
    /deep/ .el-scrollbar__view{
        min-height: 100%;
    }
    .el-menu{
        min-height: 100%;
    }
    // &.vertical .component-menu-item{
    //     // margin-right: 8px;
    // }
    &.vertical /deep/ .el-submenu__icon-arrow{
        right: 15px;
    }
}
</style>