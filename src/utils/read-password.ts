import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'
import { execa } from 'execa'

export let password = ''

const rl = readline.createInterface({ input, output })

export async function readPassword() {
  const result = await rl.question('Enter password: ')
  if (!result) {
    return false
  }

  try {
    await execa('sudo -S true', { input: `${result}`, shell: true })
    password = result
    return true
  }
  catch {
    return false
  }
}
