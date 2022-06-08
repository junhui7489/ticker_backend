const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const src1_data = require('./src1.json');
const src2_data = require('./src2.json');
const src3_data = require('./src3.json');
const {generateRandom, setCurrentDate, setRandomTickerPrice } = require('./functions');
var updated_src1 = src1_data;
var updated_src2 = src2_data;
var updated_src3 = src3_data;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/getSrc1Data', function(req, res) {
  let criteria = generateRandom();
  if (criteria == 1){
    updated_src1.push(
    { 
    "source": "SRC1",
    "stock": "Water",
    "time": setCurrentDate(),
    "price": setRandomTickerPrice("Water")
    }
    )
  }
  else if(criteria == 2){
    updated_src1.push(
      {
        "source": "SRC1",
        "stock": "Tesl",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("Tesl")
      },
    )
  }
  else if (criteria == 3){
    updated_src1.push(
      {
        "source": "SRC1",
        "stock": "goog",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("goog")
      }
    )
  }
  res.send({
    updated_src1
  });
});

app.get('/api/getSrc2Data', function(req, res) {
  let criteria = generateRandom();
  if (criteria == 4){
    updated_src2.push(
    { 
    "source": "SRC2",
    "stock": "Water",
    "time": setCurrentDate(),
    "price": setRandomTickerPrice("Water")
    }
    )
  }
  else if (criteria == 5){
    updated_src2.push(
      {
        "source": "SRC2",
        "stock": "Tesl",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("Tesl")
      },
    )
  }
  else if (criteria == 6){
    updated_src2.push(
      {
        "source": "SRC2",
        "stock": "goog",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("goog")
      }
    )
  }
  res.send({
    updated_src2
  });
});


app.get('/api/getSrc3Data', function(req, res) {
  let criteria = generateRandom();
  if (criteria == 7){
    updated_src3.push(
    { 
    "source": "SRC3",
    "stock": "Water",
    "time": setCurrentDate(),
    "price": setRandomTickerPrice("Water")
    }
    )
  }
  else if (criteria == 8){
    updated_src3.push(
      {
        "source": "SRC3",
        "stock": "Tesl",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("Tesl")
        },
    )
  }
  else if (criteria == 9){
    updated_src3.push(
      {
        "source": "SRC3",
        "stock": "goog",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("goog")
      }
    )
  }
  res.send({
    updated_src3
  });
});

app.get('/api/getTickers', function(req,res){
  // let list = [{source1: [...new Set(updated_src1.map(item => item.stock))], source2: [...new Set(updated_src2.map(item => item.stock))], source3: [...new Set(updated_src3.map(item => item.stock))]}]; // [ 'A', 'B']
  let list = ["Water", "Tesl", "goog"]
  res.send({
  list
})
})

app.get('/api/getSources', function(req,res){
  let list = [];
  list.push(updated_src1[0].source,updated_src2[0].source,updated_src3[0].source);
  res.send({
  list
})
})

module.exports = app.listen(3000,() => {
console.log("Started on PORT 3000");
})

// module.exports = app;




