const express = require('express')
const app = express()

// 利用express托管静态文件
app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(8081, () => console.log('Example app listening on port 8081! http://localhost:8081/'))