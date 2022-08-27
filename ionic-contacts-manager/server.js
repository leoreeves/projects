const express = require('express')

const app = express()
app.use(express.static('www'))
app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${  app.get('port')}`)
})
