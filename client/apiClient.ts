import request from 'superagent'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/wimf')
  return res.body.greeting
}
