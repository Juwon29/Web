

var testmessage = new Array();
var i =0;

module.exports = {

  content:function(title){
    if(title == 'KAFKA'){

      var kafka = require('kafka-node');
      var Consumer = kafka.Consumer;
      var Offset = kafka.Offset;
      var Client = kafka.KafkaClient;
      var topic = 'vtest2';

      var client = new Client({ kafkaHost:'192.168.56.1:9092'});
      var topics = [{topic: topic, partition:0}];
      var options = {autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024*1024};

      var consumer = new Consumer(client, topics, options);
      var offset = new Offset(client);
      // var testmessage = new Array();
      // var i =0;
      console.log("시작");
      
      consumer.on('message', function (message){
        //testmessage=message;
        testmessage[i]= message.value("embar");
        i = i+1;
        //console.log(message.value);
        // console.log(testmessage[i]);
        // console.log(message.value);
      });

      consumer.on('error', function (err){
        console.log('error',err);
        
      });

     
      return testmessage;

    }
    else{
      return "없음";
    }

      

  }
  
  
}


// var kafka = require('kafka-node');
// var Consumer = kafka.Consumer;
// var Offset = kafka.Offset;
// var Client = kafka.KafkaClient;
// var topic = 'vtest';

// var client2 = require('../main.js');
// var express =require('express');
// var aapp = express();

// var client = new Client({ kafkaHost:'192.168.56.1:9092'});
// var topics = [{topic: topic, partition:0}];
// var options = {autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024*1024};

// var consumer = new Consumer(client, topics, options);
// var offset = new Offset(client);
// var testmessage;

// consumer.on('message', function (message){
//   console.log(message);
// });

// consumer.on('error', function (err){
//   console.log('error',err);
// });