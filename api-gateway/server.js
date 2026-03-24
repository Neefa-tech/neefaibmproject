const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy routes to services
app.use('/api/users', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/recipes', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/reviews', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});