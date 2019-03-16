import { https, Request, Response } from 'firebase-functions'

const STATUS_OK = 200
const STATUS_ERROR = 500

export const slackEvent = https.onRequest((request: Request, response: Response) => {
  const { body } = request

  if (body.type === 'event_callback') {
    return response.status(STATUS_OK).send('OK')
  }

  if (body.type === 'url_verification') {
    return response.status(STATUS_OK).json({ 'challenge': body.challenge })
  }

  console.log('予期せぬリクエストです')
  console.log(body)

  return response.status(STATUS_ERROR).send('error')
})
