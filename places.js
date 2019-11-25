var fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Validate the recaptcha
    //var input_data = JSON.parse(event.body);
    const HERE_APP_ID = process.env.HereAppId;
    const HERA_APP_CODE = process.env.HereAppCode;
    const HERE_BASE_URL = process.env.HereBaseURL;
    
    const url  = `${HERE_BASE_URL}/discover/explore?at=52.5159%2C13.3777&cat=accommodation&app_id=${HERE_APP_ID}&app_code=${HERA_APP_CODE}`;

    const response = await fetch(url);
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));

        return {
            statusCode: '200',
            headers: {
                "Access-Control-Allow-Methods" : "GET, OPTIONS",
                "Access-Control-Allow-Headers" : "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify(myJson)
        };

};

exports.handler(null, null, a =>{console.log(a)});