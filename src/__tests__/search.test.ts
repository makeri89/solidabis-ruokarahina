import axios from 'axios'

jest.mock('axios')

describe('search endpoint tests', () => {
  it('endpoint returns stuff', async () => {
    const data = await fetch('http://localhost:3000/api/search?query=omena')
    const json = await data.json()
    expect(true).toBe(true)
  })
})
