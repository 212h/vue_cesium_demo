<template>
  <div class="main-container">
    <div id="cesiumCtn"></div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  mounted(){
    var viewer = new Cesium.Viewer('cesiumCtn')
    console.log(Cesium.Ion)
  }
};
</script>

<style scoped lang="scss">
.main-container {
  height: 100%;
}
</style>



