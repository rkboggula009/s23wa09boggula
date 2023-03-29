var express = require('express');
var router = express.Router();


/* Interesting fact about me */
router.get('/', function(req, res, next) {
    var x;
    var rand = Math.random();
    console.log(req.query.x);
    num = req.query.x;
//   res.render('mydata', { title: 'Praveen Babu Narni' });
x =3
//  req.params()
if(x == undefined){
    x=rand;
}

let cos = Math.acosh(x);
let log = Math.log1p(x);
let tab = Math.tan(x);
let sq = Math.sqrt(x);

res.render('computation',{
    title:'computation',
    values:'Math.acosh() applied to '+x+' is '+cos,
    value1:'Math.log1p() applied to '+x+' is '+log,
    value2:'Math.tan() applied to '+x+' is '+tab, 
    values3:'Math.sqrt() applied to '+x+' is '+sq
});
});



module.exports = router;