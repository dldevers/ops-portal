const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('../src/app');

function request(server, path) {
  const address = server.address();

  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: address.port,
        path,
        method: 'GET'
      },
      (res) => {
        let body = '';

        res.setEncoding('utf8');

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body
          });
        });
      }
    );

    req.on('error', reject);
    req.end();
  });
}

test('GET /health returns service health', async () => {
  const server = app.listen(0);

  try {
    const response = await request(server, '/health');
    const payload = JSON.parse(response.body);

    assert.equal(response.statusCode, 200);
    assert.equal(payload.status, 'ok');
    assert.equal(payload.service, 'ops-portal');
    assert.equal(payload.version, '0.1.0');
    assert.ok(payload.timestamp);
  } finally {
    server.close();
  }
});
