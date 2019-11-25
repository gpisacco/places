const places = require('../../places');
const fetch = require('test/node_modules/node-fetch');
const fs = require('fs')
beforeEach(() => {
  fetch.resetMocks();
});

test('adds 1 + 2 to equal 3', async () => {
  process.env.HereAppId = 'xxx';
  process.env.HereAppCode= 'xxx';
  process.env.HereBaseURL = 'https://places.demo.api.here.com/places/v1';
  let rawdata = fs.readFileSync('./test/mock.json');

  fetch.mockResponse(JSON.stringify(JSON.parse(rawdata)));
  await places.handler(null, null, a =>{console.log(a)});
});