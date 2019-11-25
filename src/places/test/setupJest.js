global.fetch = require('test/node_modules/jest-fetch-mock');
jest.setMock('node-fetch', fetch);
