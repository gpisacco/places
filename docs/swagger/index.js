import SwaggerUI from '../../src/node_modules/swagger-ui'
// or use require, if you prefer

SwaggerUI({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: '#api'
})
