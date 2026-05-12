ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([35.169720, -15.828831, 35.180067, -15.823756]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mainroad_1 = new ol.format.GeoJSON();
var features_Mainroad_1 = format_Mainroad_1.readFeatures(json_Mainroad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mainroad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mainroad_1.addFeatures(features_Mainroad_1);
var lyr_Mainroad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mainroad_1, 
                style: style_Mainroad_1,
                popuplayertitle: 'Main road',
                interactive: true,
                title: '<img src="styles/legend/Mainroad_1.png" /> Main road'
            });
var format_carparks_2 = new ol.format.GeoJSON();
var features_carparks_2 = format_carparks_2.readFeatures(json_carparks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_carparks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carparks_2.addFeatures(features_carparks_2);
var lyr_carparks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carparks_2, 
                style: style_carparks_2,
                popuplayertitle: 'car parks',
                interactive: true,
                title: '<img src="styles/legend/carparks_2.png" /> car parks'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Mainroad_1.setVisible(true);lyr_carparks_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Mainroad_1,lyr_carparks_2];
lyr_Mainroad_1.set('fieldAliases', {'id': 'id', 'rd': 'rd', });
lyr_carparks_2.set('fieldAliases', {'id': 'id', 'cp': 'cp', });
lyr_Mainroad_1.set('fieldImages', {'id': '', 'rd': '', });
lyr_carparks_2.set('fieldImages', {'id': '', 'cp': '', });
lyr_Mainroad_1.set('fieldLabels', {'id': 'no label', 'rd': 'no label', });
lyr_carparks_2.set('fieldLabels', {'id': 'no label', 'cp': 'no label', });
lyr_carparks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});