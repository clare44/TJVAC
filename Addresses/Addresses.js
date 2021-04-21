




var map = new ol.Map({
        target: 'map1',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-79.405620, 43.667900]),
          zoom: 19
        })
      });



      var map = new ol.Map({
        target: 'map2',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-79.381, 43.666]),
          zoom: 18
        })
      });



      var map = new ol.Map({
        target: 'map3',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-79.358570, 43.656730]),
          zoom: 19
        })
      });


