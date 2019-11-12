const express = require('express')
const app = express()

app.use('/public', express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3000, () => {
  console.log('Server is ready!')
})
