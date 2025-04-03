import express from 'express'
import { TestController } from './controller.js'

const app = express()
const port = 3000

app.get('/', TestController.helloWorld)

app.get('/test', TestController.testEndp)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})