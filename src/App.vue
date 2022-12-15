<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>

</script>
<style lang="scss">
    @import "./styles/iconfont.css";//高彩桥设计的 引入iconfont 图标，地址： https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.12&manage_type=myprojects&projectId=2319664&keyword=&project_type=&page=
    @import "./assets/scss/globalStyle.scss";
    @import "./assets/scss/globalMedia.scss";
    .el-loading-mask.is-fullscreen{
         z-index: 9999 !important;
    }

</style>
