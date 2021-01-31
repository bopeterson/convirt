const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hey Ya 2021-01-31 21:48 macbop')
})
app.listen(3000, () => console.log('Server running on port 3000'))
