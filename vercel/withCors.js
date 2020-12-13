module.exports = fn => async (req, res) => {
  /*
  if (['https://treinamento.vuejsbrasil.org'].includes(req.headers.origin)) {
    res.status(400).json({ message: 'Domain not allowed' })
  }
  */

  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    '*'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  return await fn(req, res)
}
