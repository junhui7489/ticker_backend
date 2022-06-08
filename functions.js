function generateRandom(){
  let min = 1;
  let maxLimit = 10;
  let diff = maxLimit - min;
  let rand = Math.random();
  rand = Math.floor(rand * diff);
  // add with min value 
  rand = rand + min;
  return rand;
}

function setCurrentDate(){
  let current_date = new Date(Date.now())
  let current_Date_string = current_date.getFullYear() + "-" + ('0' + (current_date.getMonth()+1)).slice(-2) + "-" + ('0' + current_date.getDate()).slice(-2)
  + " " + ('0' + current_date.getHours()).slice(-2) + ":" + ('0' + current_date.getMinutes()).slice(-2) + ":" + ('0' + current_date.getSeconds()).slice(-2);
  return current_Date_string;
}

function setRandomTickerPrice(ticker){
  if(ticker == "Water"){
    return parseFloat(Math.random() + 149).toFixed(2);
  }
  else if(ticker == "Tesl"){
    return parseFloat(Math.random() + 99).toFixed(2);
  }
  else{
    return parseFloat(Math.random() + 100).toFixed(2);
  }
}

module.exports = {
  generateRandom,
  setCurrentDate,
  setRandomTickerPrice
};