// nodery 0.0.4

var mongoose = require('mongoose')
var modelSchema = mongoose.Schema({
    a:String,b:Number,c:{type:Array,default:[1,2]},
})
modelSchema.methods.logMe = function (req, res) {
    console.log(this)
}
var Model = mongoose.model('Model', modelSchema)


var path = require('path')
app = require('express.io')()
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.http().io()

app.io.route('ready', function(req) {
    Model.find({}, function(err, results){
        log(results);
    });
})

app.get('/', function(req, res) {
	res.render('index');
})

app.listen(7076);

var log = function(a) { console.log(a); }

// module.exports.Model = Model