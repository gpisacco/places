# Places API SAR Project 

This project holds a lambda function that gets information about near hotels from HERE api.

It can be deployed using cloudformation command or from AWS SAR Repository.

Test site is located in [here](https://gpisacco.github.io/places/swagger/dist/index.html)

Coverage information is located in [here](https://gpisacco.github.io/places/coverage/lcov-report/index.html)

The API can be tested in https://km7ftnobv9.execute-api.us-east-1.amazonaws.com/Prod/places?latlong=52.51577,13.38022

## Requirements

* HERE api appId, appCode and BaseURL set in src/places/env.json
* Those values should be obtained from HERE website https://developer.here.com/develop/rest-apis


## Build and test project
```bash
npm install # to install deps
npm test # run unit test
npm run test:cov #generates coverage doc
npm build # generates coverage and swagger ui testing site
npm run package <bucket> # packages sam application
npm run deploy HereAppId=??? HereAppCode=??? HereBaseURL=https://places.demo.api.here.com/places/v1 # deploy application to aws

```

## Build , test and execute locally the lambda function

Check readme [here](https://github.com/gpisacco/places/tree/master/src)


## Package and Deploy

The application has been created and set up a SAM application hosted in AWS SAR repository, it can be deployed in 3 ways:

### From [AWS SAR repository](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:291241680294:applications~Find-Places) (easier)

## Using npm (wrapping aws cli and sam cli)
```bash
npm run package <bucket> # packages sam application
npm run deploy  HereAppId=??? HereAppCode=??? HereBaseURL=https://places.demo.api.here.com/places/v1 # deploy application to aws
```

### Using aws cli

```bash
sam package --template-file src/template.yaml --output-template-file packaged.yaml --s3-bucket  <your-bucket>

aws cloudformation deploy --template-file stack-output.yaml --stack-name places --capabilities CAPABILITY_IAM  --parameter-overrides "HereAppId=???" "HereAppCode=???" "HereBaseURL=https://places.demo.api.here.com/places/v1"
```

## The project uses
* Lambda (API Function) to process the requests
* API Gateway (HTTP proxy to Lambda) to handle the HTTP part
* Cloudformation (SAM) for deployment 
* Jest for unit testing and coverage (it uses embedded istambul in order to calculate the coverage and generate the html output)
* Swagger UI for testing
* Webpack to build the swagger site