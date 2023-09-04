import request from 'superagent'

const baseUrl = '/api/v1/wimf'

export async function getIngredients(state: string) {
  switch (state) {
    case 'fridge': {
      const res = await request.get(`${baseUrl}/fridge`)
      return res.body
      break
    }
    case 'freezer': {
      const res = await request.get(`${baseUrl}/freezer`)
      return res.body
      break
    }
    case 'pantry': {
      const res = await request.get(`${baseUrl}/pantry`)
      return res.body
      break
    }
  }
}
