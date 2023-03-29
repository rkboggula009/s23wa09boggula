var express = require('express');
var router = express.Router();


/* Interesting fact about me */
router.get('/', function(req, res, next) {
    var x;
    var rand = Math.random();
    console.log(req.query.x);
    num = req.query.x;
//   res.render('mydata', { title: 'Rama Krishna Reddy Boggula' });
x =3
//  req.params()
if(x == undefined){
    x=rand;
}

let cos = Math.abs(x);
let log = Math.acos(x);
let tab = Math.sin(x);
let sq = Math.sinh(x);

res.render('computation',{
    title:'computation',
    values:'Math.abs() applied to '+x+' is '+cos,
    value1:'Math.acos() applied to '+x+' is '+log,
    value2:'Math.sin() applied to '+x+' is '+tab, 
    values3:'Math.sinh() applied to '+x+' is '+sq
});
});



module.exports = router;