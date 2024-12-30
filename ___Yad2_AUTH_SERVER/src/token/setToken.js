export function setToken(email) {
  const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
  // Store the token in Redis
  redisClient.set(email, token, "EX", 3600); // Token expires in 1 hour
  // ... (rest of the login route)
}
