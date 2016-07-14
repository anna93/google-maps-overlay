'use strict';

var elasticsearch = require('elasticsearch');
var fs = require('fs');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


var geo = fs.readFile('india-gadm.json',function (err, data) {
    if(err) {
        return console.log(err);
    }
    var arrGeoJson = JSON.parse(data).features;
    var arrPostBody = [];

    arrGeoJson.forEach(function(e, i) {
        arrPostBody.push({ index:  { _index: 'maps', _type: 'geojson' } });
        arrPostBody.push(e);
    });

    // console.log(arrPostBody);

    client.bulk({
        body:arrPostBody
    }).then(function(res) {
        console.log(res);
    }, function(error) {
        console.log(error);
    })
});
