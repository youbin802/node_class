const express = require('express')
// 경로 추가 생성 처리
const router = express.Router()

router.get('/', (req, res) => {
    res.send('admin 이후 url')
})

router.get('/products', (req, res) => {
    // res.send('admin products 이후 url')
    res.render('admin/products.html')
})

router.get('/write', (req, res) => {
    res.render('admin/write.html')
    // res.send(req.body)
})

router.post('/write', (req, res)=> {
    res.send(req.body)
    // res.send(req.body.name)  // 만일 body안에 name부분만 파싱하고 싶을 때
})

module.exports = router
