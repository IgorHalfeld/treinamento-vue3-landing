const withCors = require('../withCors')

module.exports = withCors((req, res) => {
  if (req.method !== 'GET') {
    res.status(404).json({ message: 'not found' })
    return
  }
  res.status(200).json({ message: `${new Date().toLocaleString()}` })
})
