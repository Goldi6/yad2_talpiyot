
// Connect to 127.0.0.1:6380, db 4, using password "authpassword":
// new Redis("redis://:authpassword@127.0.0.1:6380/4");

// // Username can also be passed via URI.
// new Redis("redis://username:authpassword@127.0.0.1:6380/4");

const redisConfig = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    // username: "default", // needs Redis >= 6
    // password: process.env.REDIS_PASSWORD,
    // db: 0, // Defaults to 0


};


module.exports = redisConfig;