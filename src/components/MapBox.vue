<template>
  <div style="width: 100%; height: 100%;">
    <div id='mapBox'></div>
    <nav id="menu"></nav>
  </div>
</template>

<script>
  import {
    initMap
  } from '../assets/javascript/map.js';

  export default {
    name: 'MapBox',
    data() {
      return {
        map: null,
        level: 11,
        center: [116.413005, 39.973209]
      }
    },
    methods: {
      toggle(map, layerids) {
        let toggleableLayerIds = layerids;
        for (let i = 0; i < toggleableLayerIds.length; i++) {
          let id = toggleableLayerIds[i];
          let link = document.createElement('a');
          link.href = '#';
          link.className = 'active';
          link.textContent = id;

          link.onclick = function (e) {
            let clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            let visibility = map.getLayoutProperty(clickedLayer, 'visibility');

            if (visibility === 'visible') {
              map.setLayoutProperty(clickedLayer, 'visibility', 'none');
              this.className = '';
            } else {
              this.className = 'active';
              map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
          };

          let layers = document.getElementById('menu');
          layers.appendChild(link);
        }
      }
    },
    mounted() {
      this.map = initMap('mapBox', this.level, this.center);
      this.map.on('load', () => {
        this.$emit('map-loaded');
      });
      this.toggle(this.map, ['cat', 'lineSource', 'polygon'])
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
    border: 1px solid rgba(0,0,0,0.4);
    font-family: 'Open Sans', sans-serif;
  }

  #menu a {
    font-size: 13px;
    color: #404040;
    display: block;
    margin: 0;
    padding: 10px;
    text-decoration: none;
    border-bottom: 1px solid rgba(0,0,0,0.25);
    text-align: center;
  }

  #menu a:last-child {
    border: none;
  }

  #menu a:hover {
    background-color: #f8f8f8;
    color: #404040;
  }

  #menu a.active {
    background-color: #3887be;
    color: #ffffff;
  }

  #menu a.active:hover {
    background: #3074a4;
  }
</style>
