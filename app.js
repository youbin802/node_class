const express = require('express')
const nunjucks = require('nunjucks')
// install 없이 바디파서는 사용가능 -> express 안의 내장함수라는 것임
// require 조차 안해도 됨
// const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const app = express()
const port = 3000

// nunjucks가 돌아가는 엔진을 템플릿이라는 폴더에서 찾는다.
nunjucks.configure('template', {
    // 보안설정
    autoescape : true,
    express : app
})

app.use(express.json()) //json 파싱
app.use(express.urlencoded({extended:false})) //query-string 모듈 사용 ()
app.use('/uploads', express.static('uploads'))
app.use((req, res, next)=> {
    app.locals.req_path = req.path; //request의 path를 뷰 변수로 저장
    next()
})

function testMiddleware(req, res, next) {
    console.log('fisrt middleware')
    app.locals.isGold = true
    next()
}

function testMiddleware2(req, res, next) {
    console.log('two middleware')
    next()
}

app.get('/', testMiddleware, testMiddleware2, (req, res)=> {
    res.send('hello express haha')
})

app.use('/admin', admin)



app.listen(port, () => {
    console.log('Express listening on port', port)
})