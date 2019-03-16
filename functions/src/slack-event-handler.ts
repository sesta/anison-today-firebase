export function getSlackEventResponse(body: any): any|undefined {
  if (body.event.bot_id !== undefined) {
    console.log(`botの発言です。 bot_id: ${body.event.bot_id}`)

    return
  }

  if (body.event.type !== 'message') {
    console.log(`予期せぬイベントタイプです。type: ${body.event.type}`)

    return
  }

  const message: string = body.event.text
  console.log(message)

  return
}
