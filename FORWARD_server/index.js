const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define different paths and their corresponding target servers
const serverMapping = {
    '/service1': 'http://localhost:3001',
    '/service2': 'http://localhost:3002',
    '/service3': 'http://localhost:3003',
    // Add more paths and corresponding servers as needed
};

// Loop through the server mappings and create proxy middleware for each
Object.entries(serverMapping).forEach(([path, target]) => {
    app.use(path, createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            [`^${path}`]: '', // Optional path rewrite, modify as needed
        },
    }));
});






// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});