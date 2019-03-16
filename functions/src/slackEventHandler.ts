export function getSlackEventResponse(body: any): any|undefined {
  if (body.event.bot_id !== undefined) {
    console.log(`botからのリクエストです: ${body.event.bot_id}`)

    return
  }

  return
}
