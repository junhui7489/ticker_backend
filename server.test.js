const request = require('supertest')
const app = require('./server')
const{generateRandom,setCurrentDate,setRandomTickerPrice} = require('./functions');


describe('Get Endpoints', () => {
  it('Get Tickers', async () => {
    const res = await request(app)
      .get('/api/getTickers')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({"list": ["Water", "Tesl", "goog"]})
  })

  it('Get Sources', async () => {
    const res = await request(app)
      .get('/api/getSources')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({"list": ["SRC1", "SRC2", "SRC3"]})
  })

  it('Get Src 1 Data Tesl', async () => {
    const res = await request(app)
      .get('/api/getSrc1Data')
    expect(res.statusCode).toEqual(200);   
    res.body['updated_src1'].push(
      { 
        "source": "SRC1",
        "stock": "Tesl",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("Tesl")
        }
    )
    for(i of res.body['updated_src1']){
      console.log(i);
    expect(Object.keys(i)).toEqual(["source", "stock", "time", "price"])
    }
  })
  

  it('Get Src 2 Data', async () => {
    const res = await request(app)
      .get('/api/getSrc2Data')
    expect(res.statusCode).toEqual(200)
    res.body['updated_src2'].push(
      { 
        "source": "SRC2",
        "stock": "Water",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("Water")
        }
    )
    for(i of res.body['updated_src2']){
      console.log(i);
    expect(Object.keys(i)).toEqual(["source", "stock", "time", "price"])
    }
  })

  it('Get Src 3 Data', async () => {
    const res = await request(app)
      .get('/api/getSrc3Data')
    expect(res.statusCode).toEqual(200)
    res.body['updated_src3'].push(
      {
        "source": "SRC3",
        "stock": "goog",
        "time": setCurrentDate(),
        "price": setRandomTickerPrice("goog")
      }
    )
    for(i of res.body['updated_src3']){
      console.log(i);
    expect(Object.keys(i)).toEqual(["source", "stock", "time", "price"])
    }
  })

  test('generate Random function is working', () => {
    // arrange and act
    var result = generateRandom()
    expect(result).toBeLessThanOrEqual(10);
  });

  test('setCurrentDate function is working', () => {
    // arrange and act
    var result = setCurrentDate()
    expect(result).toBeDefined();
  });

  test('setRandomTickerPrice for `Water` stock function is working', () =>{
    var result = setRandomTickerPrice("Water")
    expect(parseInt(result)).toBeGreaterThanOrEqual(149)
  })

  test('setRandomTickerPrice for `Tesl` stock function is working', () =>{
    var result = setRandomTickerPrice("Tesl")
    expect(parseInt(result)).toBeGreaterThanOrEqual(99)
  })

  test('setRandomTickerPrice for `goog` stock function is working', () =>{
    var result = setRandomTickerPrice("goog")
    expect(parseInt(result)).toBeGreaterThanOrEqual(100)
  })
})
 
