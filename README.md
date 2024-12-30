
# Dev , undone , no assets included in repo ~

## branch name : main



? DEV_started_command.sh file is used for linking the module folder while in development and automatically updating changes.



there are 2 auth server folders. one will be removed when done.


## Validation

validation happens on the client side and when reaching the api call. also basic validation is happening before inserting data to the database, with sequelize.

## email verification code

currently this app sends verification code via cookie because it does not use emailSender.
the code fills up automatically in the verification page

- the email ,password and verification code are stored in redis up until the user submits the code,then the data is stored to postgres

//server auth
env:
REDIS_HOSTNAME, //if required
REDIS_PASSWORD //if required
REDIS_PORT

PORT
SECRET_KEY //jwt

//app
REACT_APP_USER_URL







EXPRESS SESSION ***


  


REDIS STORE ***

EXPRESS BODY PARSER ***


##EXPRESS CORS ***


to transfer session cookies
 between different (origins?) [like ports..] localhost:3000 to localhost:5000
 you must: on the server..
 // 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Credentials': true
and send 'credentials' in the front.
