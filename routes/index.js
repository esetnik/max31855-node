var express = require('express');
var router = express.Router();

var data = [
          ['Age', 'Weight']
        ];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('public/index.htm');
});

router.get('/data.json', function(req, res){
    res.json(data);
});


setInterval(function(){
    var age = random(1,10);
    var weight = random(1,50);
    var array = [age, weight];
    console.log("adding array to data "+array);
    data.push(array);
}, 1000);

function random (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

module.exports = router;
