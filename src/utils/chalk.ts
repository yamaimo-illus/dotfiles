import { styleText } from 'node:util'

function gray(...data: any[]) {
  return styleText('gray', data.join())
}

function red(...data: any[]) {
  return styleText('red', data.join())
}

function yellow(...data: any[]) {
  return styleText('yellow', data.join())
}

function cyan(...data: any[]) {
  return styleText('cyan', data.join())
}

function green(...data: any[]) {
  return styleText('green', data.join())
}

export default {
  gray,
  red,
  yellow,
  cyan,
  green,
}
