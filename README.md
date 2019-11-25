# Places API SAR Project 

This project holds a lambda function that gets information about near hotels from HERE api.

Test site is located in [here](https://gpisacco.github.io/places/swagger/dist/index.html)

Coverage information is located in [here](https://gpisacco.github.io/places/docs/coverage/lcov-report/index.html)

## Package and Deploy

```aws cloudformation package --template-file stack.yml --output-template-file stack-output.yml --s3-bucket your-bucket```

```aws cloudformation deploy --template-file stack-output.yml --stack-name contact-us --capabilities CAPABILITY_IAM  --parameter-overrides "HereAppId=???" "HereAppCode=???" "HereBaseURL=https://places.demo.api.here.com/places/v1"```
