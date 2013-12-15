var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    a: String,          
    b: Number,
    c: { type: Array, default: [1,2,3,4] },
});

modelSchema.methods.activate = function (req, res) {
    console.log(this.id);
}

var Model = mongoose.model('Model', modelSchema);

Model.find({'id': { $ne : 1 }, function(err, results) {
    if (err) { 
      conaole.log('shit!'); }
    else {
      results.forEach( function(result) {
        console.log(result);
      });
    }
  });

module.exports.Model = Model;
