const places = require('../../places');
const fetch = require('../node_modules/node-fetch');
const fs = require('fs')
beforeEach(() => {
  fetch.resetMocks();
});

test('Check ok response', async () => {
  process.env.HereAppId = 'xxx';
  process.env.HereAppCode= 'xxx';
  process.env.HereBaseURL = 'https://places.demo.api.here.com/places/v1';
  let mock = fs.readFileSync('./test/mock_ok.json');
  let event = JSON.parse(fs.readFileSync('./test/event_ok.json'));

  fetch.mockResponse(JSON.stringify(JSON.parse(mock)));
  const response = await places.handler(event, null);
  expect(response.statusCode).toBe(200);
});

test('Check 401 response', async () => {
  process.env.HereAppId = 'xxx';
  process.env.HereAppCode= 'xxx';
  process.env.HereBaseURL = 'https://places.demo.api.here.com/places/v1';
  let mock = fs.readFileSync('./test/mock_ok.json');
  let event = JSON.parse(fs.readFileSync('./test/event_ok.json'));

  fetch.mockResponse(JSON.stringify(JSON.parse(mock)), { status: 401 });
  const response = await places.handler(event, null);
  expect(response.statusCode).toBe(401);
});

test('Check unexpected fail', async () => {
   let mock = fs.readFileSync('./test/event_ok.json');

  fetch.mockResponse(JSON.stringify(JSON.parse(mock)), { status: 401 });
  const response = await places.handler({}, null);
  expect(response.statusCode).toBe(500);
  expect(response.body).toBe("{}");

});