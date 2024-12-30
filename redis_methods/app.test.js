const Redis = require("ioredis");
const RedisMethodsMock = require("./index");
const exp = require("constants");



// Mocking the redisConfig object since it's not used in these functions
const redisConfig = {};

const redis = new Redis(redisConfig);

// Mocking codeLength, verificationExpirationTime, and userExpirationTime since they're used in generateRandomCode
const codeLength = 6;
const verificationExpirationTime = 1200; // 20 minutes
const userExpirationTime = 36000; // hour

// Mocking the helper functions since they're not directly used in the class
const emailCode_ListKey = jest.fn();
const userPassword_Key = jest.fn();
const UserLikes_hashKey = jest.fn();
const User_hashKey = jest.fn();




//=================REDIS CLASS================

test("generateRandomCode", () => {
    const result = RedisMethodsMock.generateRandomCode();
    expect(result).toHaveLength(codeLength);
});

test("storeUserVerification", async () => {
    const identifier = "test@test.com";
    const password = "123456";
    const verificationCode = '123456';
    const result = await RedisMethodsMock.storeUserVerification(identifier, password, verificationCode);
    expect(result).toBe(verificationCode);
});

test("storeUserVerification", async () => {
    const identifier = "test@test.com";
    const verificationCode = '66666';
    const result = await RedisMethodsMock.updateUserVerification(identifier, verificationCode);
    expect(result).toBe(verificationCode);
});

test("verifyCode", async () => {
    const identifier = "test@test.com";
    const code = '66666';
    const result = await RedisMethodsMock.verifyCode(identifier, code);
    expect(result).toBe(true);

});

test("deleteUserVerification", async () => {
    const identifier = "test@test.com";


    try {
        // Call the function that is not expected to throw an error
        const result = await RedisMethodsMock.deleteUserVerification(identifier);

        // If the function completes without throwing an error, the test passes
    } catch (error) {
        // If an error is thrown, fail the test with an assertion
        fail(`Function threw an unexpected error: ${error}`);
    }
});


test("setUserInRedis", async () => {
    const user = {
        id: 1,
        email: "some@Email.com",
    }

    try {
        const result = await RedisMethodsMock.setUser(user);

    } catch (error) {
        // If an error is thrown, fail the test with an assertion
        fail(`Function threw an unexpected error: ${error}`);
    }
});

// Export the mock class for testing
module.exports = RedisMethodsMock;
