#!/usr/bin/env node

/**
 * Blend Admin Phase 2 Application
 * Entry point for the Node.js application
 */

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    message: 'Blend Admin Phase 2 Application',
    version: '1.0.0',
    status: 'running'
  }));
});

server.listen(PORT, () => {
  console.log(`Blend Admin server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
