
// =======! ALIAS !=======

//NOTE!: ...remove and install the module when done editing it....
require('module-alias/register');

const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAlias('redis_methods', path.resolve(__dirname, '../redis_methods'));
moduleAlias.addAlias('messages', path.resolve(__dirname, '../module/messages'));
moduleAlias.addAlias('sequelize_models', path.resolve(__dirname, '../sequelize_models'));

// =======!---!=======

// ─── Express + Session ──────────────────────────────────────────────────────────────────


const express = require("express");
const session = require('express-session');

// ─── Init Express App ──────────────────────────────────────────────────────────────────

const app = express();


app.use(express());


//===================================================================================================

//#region Middlewares

// ─── Cookie Parser ───────────────────────────────────────────────────────────


// const cookieParser = require("cookie-parser");

// app.use(cookieParser());


// ─── Cors ────────────────────────────────────────────────────────────────────

const cors = require("cors");


//...cors config...

// 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Credentials': true
// IMPORTANT: this config allows cookies to be sent over cross-origin requests 
app.use(cors({ credentials: true, origin: true }));

// ─── Body Parser ─────────────────────────────────────────────────────────────

//...body parser *explain*...

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//#endregion

//===================================================================================================




// ─── Https Only - Proxy (nginx) ──────────────────────────────────────────────────────────────

//: enable this if you run behind a proxy (e.g. nginx)

// app.set('trust proxy', 1) // trust first proxy  

// #region RedisStore , session

// ─── Redis + Redis Store───────────────────────────────────────────────────────────────────

// - const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');

// Redis configuration
const redisOptions = {
  // Redis server configuration options here
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  // Add other configurations as needed
};

// Create a Redis client instance
const redisClient = new Redis(redisOptions);

// ─── Redis Store ─────────────────────────────────────────────────────────────


const RedisStore = require("connect-redis").default

// Create a session store using connect-redis

// ─── Initialize Redis Store. ───────────────────────────────────────────


let redisStore = new RedisStore({
  client: redisClient,
  // prefix: process.env.REDIS_STORE_PREFIX || "myapp:",
  // disableTouch : true //defailt true
  // disableTTL : true //default false
  // serializer : JSON.stringify //default JSON.stringify
  //scanCount : 100 //default 100
})



// ─── Session Config ──────────────────────────────────────────────────────────


const sessionConfig = {

  store: redisStore,
  resave: false, // required: force lightweight session keep alive (touch)
  saveUninitialized: false, // recommended: only save session when data exists
  secret: process.env.SESSION_SECRET || "keyboard cat",
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  }
  // cookie: { secure: true }, //enable with https only
}


// ─── Init Session Store ──────────────────────────────────────────────────────

// Initialize  Express session setup using connect-redis /RedisStore

app.use(
  session(sessionConfig)
)

//#endregion

// ─── Helmet ──────────────────────────────────────────────────────────────────

/* Helmet is a security middleware for Express.js, 
commonly used to set various HTTP headers that enhance security 
by mitigating certain types of attacks and vulnerabilities.  */


// ─── Routes ──────────────────────────────────────────────────────────────────

const routers = require("./src/routes");

//.....split paths to different routers.....eg: app.use("/auth", ^ ,authRouter).....=>^<=
//? middleware handles general purpose  :: routers handles specific
//put verifyInput in middleware.....
app.use('/api', routers.registerRouter);
app.use('/api', routers.loginRouter);
app.use('/api', routers.userRouter);



const errors = require("./src/errors");

app.use(errors.errorHandler);
//   router.use(errorLogger);
// router.use(clientErrorHandler);
// router.use(internalErrorHandler);


// ─── Server ──────────────────────────────────────────────────────────────────
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
