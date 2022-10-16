import { atom } from 'recoil'

export const redState = atom({
  key: 'redId',
  default: '',
})

export const blueState = atom({
  key: 'blueId',
  default: '',
})
