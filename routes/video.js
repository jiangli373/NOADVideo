var express = require('express');
var router = express.Router();


var video = require('../lib/index');


router.post('/getmp4', function(req, res) {


  console.log(req.body);

  var url = req.body.url;

  video(url, 'MP4',function (err,data) {

    var retjson = {
      code:0,
      mag:''
    };
    if(err){
      retjson.code = -1;
      retjson.msg = err;
      return res.send(retjson);
    }
    retjson.data = data;
    res.send(retjson);

  });




});

module.exports = router;
