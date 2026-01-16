ol.proj.proj4.register(proj4);
//ol.proj.get("USER:100000").setExtent([453672.248300, 4701954.644200, 482877.782800, 4738114.620200]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Huye_district_1 = new ol.format.GeoJSON();
var features_Huye_district_1 = format_Huye_district_1.readFeatures(json_Huye_district_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Huye_district_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huye_district_1.addFeatures(features_Huye_district_1);
var lyr_Huye_district_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huye_district_1, 
                style: style_Huye_district_1,
                popuplayertitle: 'Huye_district',
                interactive: true,
                title: '<img src="styles/legend/Huye_district_1.png" /> Huye_district'
            });
var format_Exist_health_facilities_2 = new ol.format.GeoJSON();
var features_Exist_health_facilities_2 = format_Exist_health_facilities_2.readFeatures(json_Exist_health_facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Exist_health_facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exist_health_facilities_2.addFeatures(features_Exist_health_facilities_2);
var lyr_Exist_health_facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exist_health_facilities_2, 
                style: style_Exist_health_facilities_2,
                popuplayertitle: 'Exist_health_facilities',
                interactive: true,
                title: '<img src="styles/legend/Exist_health_facilities_2.png" /> Exist_health_facilities'
            });
var format_Exist_roads_3 = new ol.format.GeoJSON();
var features_Exist_roads_3 = format_Exist_roads_3.readFeatures(json_Exist_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Exist_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exist_roads_3.addFeatures(features_Exist_roads_3);
var lyr_Exist_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exist_roads_3, 
                style: style_Exist_roads_3,
                popuplayertitle: 'Exist_roads',
                interactive: true,
                title: '<img src="styles/legend/Exist_roads_3.png" /> Exist_roads'
            });
var format_proposedhealthfacilities_4 = new ol.format.GeoJSON();
var features_proposedhealthfacilities_4 = format_proposedhealthfacilities_4.readFeatures(json_proposedhealthfacilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_proposedhealthfacilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proposedhealthfacilities_4.addFeatures(features_proposedhealthfacilities_4);
var lyr_proposedhealthfacilities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proposedhealthfacilities_4, 
                style: style_proposedhealthfacilities_4,
                popuplayertitle: 'proposedhealthfacilities',
                interactive: true,
                title: '<img src="styles/legend/proposedhealthfacilities_4.png" /> proposedhealthfacilities'
            });
var format_Proposedroad_5 = new ol.format.GeoJSON();
var features_Proposedroad_5 = format_Proposedroad_5.readFeatures(json_Proposedroad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Proposedroad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposedroad_5.addFeatures(features_Proposedroad_5);
var lyr_Proposedroad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposedroad_5, 
                style: style_Proposedroad_5,
                popuplayertitle: 'Proposedroad',
                interactive: true,
                title: '<img src="styles/legend/Proposedroad_5.png" /> Proposedroad'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Huye_district_1.setVisible(true);lyr_Exist_health_facilities_2.setVisible(true);lyr_Exist_roads_3.setVisible(true);lyr_proposedhealthfacilities_4.setVisible(true);lyr_Proposedroad_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Huye_district_1,lyr_Exist_health_facilities_2,lyr_Exist_roads_3,lyr_proposedhealthfacilities_4,lyr_Proposedroad_5];
lyr_Huye_district_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Exist_health_facilities_2.set('fieldAliases', {'OBJECTID_2': 'OBJECTID_2', 'objectid': 'objectid', 'layer': 'layer', 'district': 'district', 'name': 'name', 'type': 'type', 'sector': 'sector', 'cell': 'cell', 'village': 'village', 'lat': 'lat', 'long': 'long', 'comments': 'comments', 'source': 'source', 'capture': 'capture', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_Exist_roads_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid_2': 'objectid_2', 'road_no': 'road_no', 'settlement': 'settlement', 'new_id': 'new_id', 'class': 'class', 'status': 'status', 'district': 'district', 'commentsdi': 'commentsdi', 'type': 'type', 'source': 'source', 'capture': 'capture', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'shape_Leng': 'shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', });
lyr_proposedhealthfacilities_4.set('fieldAliases', {'Id': 'Id', });
lyr_Proposedroad_5.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Huye_district_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Exist_health_facilities_2.set('fieldImages', {'OBJECTID_2': 'TextEdit', 'objectid': 'TextEdit', 'layer': 'TextEdit', 'district': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'sector': 'TextEdit', 'cell': 'TextEdit', 'village': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'comments': 'TextEdit', 'source': 'TextEdit', 'capture': 'TextEdit', 'globalid': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_Exist_roads_3.set('fieldImages', {'OBJECTID': '', 'objectid_2': '', 'road_no': '', 'settlement': '', 'new_id': '', 'class': '', 'status': '', 'district': '', 'commentsdi': '', 'type': '', 'source': '', 'capture': '', 'globalid': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'shape_Leng': '', 'Shape_Le_1': '', 'Shape_Le_2': '', });
lyr_proposedhealthfacilities_4.set('fieldImages', {'Id': 'Range', });
lyr_Proposedroad_5.set('fieldImages', {'SHAPE_Leng': 'TextEdit', });
lyr_Huye_district_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Exist_health_facilities_2.set('fieldLabels', {'OBJECTID_2': 'no label', 'objectid': 'no label', 'layer': 'no label', 'district': 'no label', 'name': 'no label', 'type': 'no label', 'sector': 'no label', 'cell': 'no label', 'village': 'no label', 'lat': 'no label', 'long': 'no label', 'comments': 'no label', 'source': 'no label', 'capture': 'no label', 'globalid': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', });
lyr_Exist_roads_3.set('fieldLabels', {'OBJECTID': 'no label', 'objectid_2': 'no label', 'road_no': 'no label', 'settlement': 'no label', 'new_id': 'no label', 'class': 'no label', 'status': 'no label', 'district': 'no label', 'commentsdi': 'no label', 'type': 'no label', 'source': 'no label', 'capture': 'no label', 'globalid': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', });
lyr_proposedhealthfacilities_4.set('fieldLabels', {'Id': 'no label', });
lyr_Proposedroad_5.set('fieldLabels', {'SHAPE_Leng': 'no label', });
lyr_Proposedroad_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});