const Redis = require("ioredis");

const redisConfig = {
    // host: process.env.REDIS_HOSTNAME,
    // port: process.env.REDIS_PORT,
    // password: process.env.REDIS_PASSWORD,
};

const redis = new Redis(redisConfig);

//----------CONFIGURATION-----------
const codeLength = 6;
const verificationExpirationTime = 1200; // 20 minutes
const userExpirationTime = 36000; // hour


//------------------HELPER FUNCTIONS----------------
const emailCode_ListKey = (email) => "email-code:" + email; //TODO: change to sessionId
const UserLikes_hashKey = (userId) => "user_likes:" + userId;//userId??
const User_hashKey = (userId) => "user_profile:" + userId;//userId??



//NOTE: Its possible to limit the number of items in a list, with LTRIM

//=================REDIS CLASS================

class RedisMethods {



    //--------------uses hashmap-----------------
    static generateRandomCode() {
        let result = "";
        const characters = "0123456789";

        for (let i = 0; i < codeLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }




    //!! @remove 
    //NOTE: identifier_email might/should be email or sessionId
    static async storeUserVerification(identifier_email, verificationCode = this.generateRandomCode()) {

        try {

            await redis.pipeline()
                .lpush(emailCode_ListKey(identifier_email), verificationCode)
                .expire(verificationExpirationTime)
                .exec();

            console.log("\nStored user data in redis for: ", identifier_email);
            return verificationCode; //* for sending email
        } catch (error) {
            console.error("\nError storing user data in Redis:", error);
            throw new Error("Redis Error storing user data with code");
        } finally {
            // Close the Redis connection
            // redis.quit();
        }
    }

    //pushes verification codes to list -
    static async updateUserVerification(email, verificationCode = this.generateRandomCode()) {
        console.log("\Pushing new verification code for: ", email);

        try {
            //? no need to check beause if update reuqst was set and somwhat  
            // const res = await redis.exists(email);
            // if (!res) throw new Error("Update Email does not exist in Redis");

            // Update the 'verificationCode' field in the hash
            await redis.pipeline()
                .lpush(emailCode_ListKey(email), verificationCode)
                .expire(verificationExpirationTime)
                .exec();

            console.log("Updated user data in Redis:", email);
            return verificationCode; //for sending email
        } catch (error) {
            console.error("Error updating verification code:", error);
            throw new Error("Redis Error updating user code");
        } finally {
            // redis.quit();
        }
    }

    //gets the last item in the '"email-code:" + email' list
    static async verifyCode(email, code) {
        try {
            // Retrieve the 'verificationCode' field from the list

            const verificationCode = await redis.lpop(emailCode_ListKey(email));
            if (!verificationCode) throw new Error("Verify Email does not exist in Redis");

            return verificationCode === code

        } catch (error) {
            console.error("\nRedis Error verifying code:", error);
            throw error;
        } finally {
            /// redis.quit();
        }
    }

    // Deletes email verification codes list
    static async deleteUserVerification(email) {
        try {
            await redis.pipeline()
                .del(emailCode_ListKey(email)).exec();
            console.log("\nDeleted user verification data in Redis:", email);
        } catch (error) {
            console.error("\nRedis Error deleting user data:", error);
            throw error;
        } finally {
            // redis.quit();
        }
    }

    //------------Uses hashmap key-value pair-------


    // ─── User ────────────────────────────────────────────────────────────


    //Sets user data as Hashmap, {'"user-profile":userID',user} 
    static async setUser(user) {

        const key = User_hashKey(user.id);

        try {
            await redis.pipeline()
                .hmset(key, { ...user }).expire(userExpirationTime).exec();

            console.log("\nStored user data in redis for with token as key: ", user.email);

        } catch (error) {
            console.error("\nError storing user data in Redis:", error);
            throw error;
        }
    }


    static async getUser(userId) {

        const key = User_hashKey(userId);

        try {
            const user = await redis.hgetall(key);
            if (!user) throw new Error("User does not exist in Redis");

            return user;

        } catch (error) {
            console.error("\nRedis Error getting user data:", error);
            throw error;
        }
    }

    static async deleteUser(userId) {

        const key = User_hashKey(userId);

        try {
            await redis.del(key);
            console.log("\nDeleted user data in Redis:", userId);
        } catch (error) {
            console.error("\nRedis Error deleting user data:", error);
            throw error;
        }
    }

    // ─── Likes ───────────────────────────────────────────────────────────


    // ─── Posts ───────────────────────────────────────────────────────────


}

module.exports = RedisMethods;