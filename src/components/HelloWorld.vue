<template>
  <div>
    <map-box></map-box>
  </div>
</template>

<script>
  import MapBox from './MapBox';

  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    components: {
      'map-box': MapBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
