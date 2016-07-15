var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname + '/bower_components/'));
app.use('/resources', express.static(__dirname + '/resources/'));
// app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/search', function (req, res) {
    var queryParams = req.query;
    if(queryParams.hasOwnProperty('q')) {
        var searchPlace = queryParams.q;

        var elasticsearch = require('elasticsearch');

        var client = new elasticsearch.Client({
          host: 'localhost:9200',
          log: 'trace'
        });

        client.search({
            index: 'maps',
            body: {
                query: {
                    match: {
                        "properties.NAME_3":searchPlace
                    }
                }
            }
        }).then(function(result) {
            if(result.hits.total > 0) {
                res.send(result.hits.hits[0]._source);
            } else {
                res.send( { } );
            }
        }, function(err) {
            res.send({});
        })

    } else {
        res.send({});
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
