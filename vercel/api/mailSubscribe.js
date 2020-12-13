const axios = require('axios')
const withCors = require('../withCors')

const MAILCHIMP_APIKEY = process.env.MAILCHIMP_APIKEY
const API_KEY = Buffer.from(`apikey:${MAILCHIMP_APIKEY}`).toString('base64')
const MEMBER_EXISTS = 'Member Exists'

async function SubscribeMailchimp ({ email, name }) {
  const [firstName, lastName] = name.trim().split(' ')
  const optionalFields = { FNAME: firstName }
  if (lastName) {
    optionalFields.LNAME = lastName
  }

  const mailchimpPayloadRequest = {
    email_address: email.trim(),
    email_type: 'html',
    status: 'subscribed',
    merge_fields: optionalFields
  }

  const headers = {
    Authorization: `Basic ${API_KEY}`
  }

  try {
    const { data } = await axios.post('https://us7.api.mailchimp.com/3.0/lists/9d99f26b84/members', mailchimpPayloadRequest, { headers })
    return data
  } catch (error) {
    if (error.response.data.title === MEMBER_EXISTS) {
      throw new Error(MEMBER_EXISTS)
    }

    throw error
  }
}

module.exports = withCors(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'not found' })
    return
  }

  if (!req.body.name) {
    res.status(400).json({ message: 'name is empty' })
    return
  }
  if (!req.body.email) {
    res.status(400).json({ message: 'email is empty' })
    return
  }

  try {
    const data = await SubscribeMailchimp(req.body)
    res.status(201).json(data)
  } catch (error) {
    if (error.message === MEMBER_EXISTS) {
      res.status(400).json({ message: MEMBER_EXISTS })
      return
    }

    res.status(500).json({ message: 'Unknown error', details: error.message })
  }
})
