const jwt = require("jsonwebtoken");
const { ERR } = require("messages");
const { setError } = ERR;

const tokenSecret = process.env.TOKEN_SECRET || "my_jwt_secret_key";
const tokenExpiration = "3600s"; //hour

function generateAccessToken(userID) {
  const payload = { userID };
  return jwt.sign(payload, tokenSecret, { expiresIn: tokenExpiration });
}

function setToken(req, res, next) {
  try {
    //generate token
    const token = generateAccessToken(req.body.user.id);
    res.cookie("token", token, { httpOnly: true });

    next();
  } catch (error) {
    next(error);
  }
}

//TODO: handle errors
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    //return res.sendStatus(401); 401- unauthorized
    throw new Error(setError("MISSING_TOKEN"));
  try {
    const { userId } = jwt.verify(token, tokenSecret);
    req.body.userId = userId;
    next();
  } catch (error) {
    console.log("error verifying token", error);
    // if (err) return res.sendStatus(403)
    if (error instanceof jwt.TokenExpiredError) {
      // Token has expired
      // Handle accordingly
    } else if (error instanceof jwt.JsonWebTokenError) {
      // General JWT error (invalid signature, malformed token, etc.)
      // Handle accordingly
    } else if (error instanceof jwt.NotBeforeError) {
      // Token is not yet valid (based on "nbf" claim)
      // Handle accordingly
    } else if (error instanceof jwt.TokenRevokedError) {
      // Token has been revoked or invalidated
      // Handle accordingly
    } else if (error instanceof jwt.InvalidAlgorithmError) {
      // Algorithm mismatch
      // Handle accordingly
    } else if (error instanceof jwt.RequireClaimError) {
      // Required claim missing or doesn't match
      // Handle accordingly
    } else {
      // Other unexpected errors
      // Handle accordingly
    }
  }
}

module.exports = { setToken, authenticateToken };
