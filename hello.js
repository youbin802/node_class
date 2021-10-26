// const { response } = require('express');
const http = require('http');

// 웹 서버 구축
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    //200:잘 접속했다는 코드 번호
    response.write('Hello Server!')
    response.end()
}).listen(3000) //localhost:포트번호