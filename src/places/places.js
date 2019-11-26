var fetch = require('node-fetch');


exports.handler = async (event, context) => {
    let status = 500;
    let output = {};
    try {
        const HERE_APP_ID = process.env.HereAppId;
        const HERA_APP_CODE = process.env.HereAppCode;
        const HERE_BASE_URL = process.env.HereBaseURL;
        const latLong = event.queryStringParameters.latlong;
        const url = `${HERE_BASE_URL}/discover/explore?at=${latLong}&cat=accommodation&app_id=${HERE_APP_ID}&app_code=${HERA_APP_CODE}`;
        const response = await fetch(url);
        output = await response.json();
        status = response.status;
    } catch (err) {
        console.error(err)
    } finally {
        //handling the response allways in finally
        //allow to reply to all request no matter what error happens
        return {
            statusCode: status,
            headers: {
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify(output.results.items)
        };
    }

};