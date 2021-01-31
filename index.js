const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hey Ya 2')
})
app.listen(3000, () => console.log('Server running on port 3000'))
