import { createServer } from 'node:http';

createServer(function (req, res) {
    if (req.url === '/api/health' && req.method === 'GET') {
        res.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        res.end(JSON.stringify({
            success: {
                status: 200,
                message: 'ok'
            }
        }))
        return;
    }
    res.writeHead(
        404,
        { 'content-type': 'application/json' }
    );
    res.end(JSON.stringify({
        success: {
            status: 404,
            message: 'Recurso não encontrado'
        }
    }))
}).listen(3000);