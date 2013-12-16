// nodery 0.0.4


// MODEL

var mongoose = require('mongoose')

var modelSchema = mongoose.Schema({
    a: String, b: Number,
    c: { type: Array, default: [1,2,3,4] },
})

modelSchema.methods.activate = function (req, res) {
    console.log(this.id)
}

var Model = mongoose.model('Model', modelSchema)

Model.find({'id': { $ne : 1 }, function( err, results ) {
	err ? log('could not find '):
        results.forEach( function(result) {
            log(result);
        });
});

module.exports.Model = Model


// SERVER

var path = require('path')

app = require('express.io')()
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.http().io()

app.io.route('ready', function(req) {
	    req.io.emit( 'test', "Hello!" )
})

app.get('/', function(req, res) {
	res.render('index')
})

app.listen(7076)

var log = function(thing){console.log(thing)}
