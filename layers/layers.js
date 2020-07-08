var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PENGGUNAAN_LAHAN_1 = new ol.format.GeoJSON();
var features_PENGGUNAAN_LAHAN_1 = format_PENGGUNAAN_LAHAN_1.readFeatures(json_PENGGUNAAN_LAHAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENGGUNAAN_LAHAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENGGUNAAN_LAHAN_1.addFeatures(features_PENGGUNAAN_LAHAN_1);
var lyr_PENGGUNAAN_LAHAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENGGUNAAN_LAHAN_1, 
                style: style_PENGGUNAAN_LAHAN_1,
                interactive: true,
    title: 'PENGGUNAAN_LAHAN<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_0.png" /> TEGALAN<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_1.png" /> TANAH TERBUKA<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_2.png" /> SEMAK<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_3.png" /> SAWIT<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_4.png" /> SAWAH<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_5.png" /> PERMUKIMAN<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_6.png" /> PEKARANGAN<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_7.png" /> MAKAM<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_8.png" /> BADAN JALAN<br />\
    <img src="styles/legend/PENGGUNAAN_LAHAN_1_9.png" /> <br />'
        });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_sungai_RBI_25K_3 = new ol.format.GeoJSON();
var features_sungai_RBI_25K_3 = format_sungai_RBI_25K_3.readFeatures(json_sungai_RBI_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_RBI_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_RBI_25K_3.addFeatures(features_sungai_RBI_25K_3);
var lyr_sungai_RBI_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_RBI_25K_3, 
                style: style_sungai_RBI_25K_3,
                interactive: true,
                title: '<img src="styles/legend/sungai_RBI_25K_3.png" /> sungai_RBI_25K'
            });
var format_LINE_BATAS_ADMIN_4 = new ol.format.GeoJSON();
var features_LINE_BATAS_ADMIN_4 = format_LINE_BATAS_ADMIN_4.readFeatures(json_LINE_BATAS_ADMIN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINE_BATAS_ADMIN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINE_BATAS_ADMIN_4.addFeatures(features_LINE_BATAS_ADMIN_4);
var lyr_LINE_BATAS_ADMIN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LINE_BATAS_ADMIN_4, 
                style: style_LINE_BATAS_ADMIN_4,
                interactive: true,
                title: '<img src="styles/legend/LINE_BATAS_ADMIN_4.png" /> LINE_BATAS_ADMIN'
            });

lyr_google_0.setVisible(true);lyr_PENGGUNAAN_LAHAN_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_sungai_RBI_25K_3.setVisible(true);lyr_LINE_BATAS_ADMIN_4.setVisible(true);
var layersList = [lyr_google_0,lyr_PENGGUNAAN_LAHAN_1,lyr_Jalan_2,lyr_sungai_RBI_25K_3,lyr_LINE_BATAS_ADMIN_4];
lyr_PENGGUNAAN_LAHAN_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'WADMKD': 'WADMKD', 'PL': 'PL', 'LUAS_HA': 'LUAS_HA', });
lyr_Jalan_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_sungai_RBI_25K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LINE_BATAS_ADMIN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'Shape_Leng': 'Shape_Leng', });
lyr_PENGGUNAAN_LAHAN_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'WADMKD': 'TextEdit', 'PL': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_sungai_RBI_25K_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LINE_BATAS_ADMIN_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PENGGUNAAN_LAHAN_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'WADMKD': 'no label', 'PL': 'no label', 'LUAS_HA': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_sungai_RBI_25K_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LINE_BATAS_ADMIN_4.set('fieldLabels', {'OBJECTID': 'no label', 'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'Shape_Leng': 'no label', });
lyr_LINE_BATAS_ADMIN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});