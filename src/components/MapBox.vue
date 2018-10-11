<template>
  <div style="width: 100%; height: 100%;">
    <div id='mapBox'></div>
    <ul id="menu">
      <li v-for="(layer, index) in layerids" :key="'layerid' + index">
        {{layer.layerid}}
        <span class="eye-icon" :class="{'active': layer.className}" @click="toggle(layer.layerid, index)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    initMap
  } from '../assets/javascript/map.js';

  export default {
    name: 'MapBox',
    props: [
      'layerids'
    ],
    data() {
      return {
        map: null,
        level: 11,
        center: [116.413005, 39.973209]
      };
    },
    methods: {
      toggle(clickedLayer, index) {
        let map = this.map;
        let visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        if (visibility === 'visible') {
          this.layerids[index]['className'] = '';
          map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        } else {
          this.layerids[index]['className'] = 'active';
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
      }
    },
    mounted() {
      this.map = initMap('mapBox', this.level, this.center);
      this.map.on('load', () => {
        this.$emit('map-loaded');
      });
    }
  };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  #mapBox {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  #menu {
    background: #fff;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;
    border-radius: 3px;
    width: 120px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    font-family: 'Open Sans', sans-serif;
  }

  #menu li {
    font-size: 13px;
    color: #404040;
    display: block;
    margin: 0;
    padding: 10px;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  #menu li .eye-icon {
    display: inline-block;
    width: 30px;
    height: 15px;
    cursor: pointer;
    float: right;
    background-image: url('../../static/images/eye_close.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  #menu li .eye-icon.active {
    background-image: url('../../static/images/eye.png');
  }
</style>
