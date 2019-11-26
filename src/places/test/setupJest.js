global.fetch = require('../node_modules/jest-fetch-mock');
jest.setMock('node-fetch', fetch);
