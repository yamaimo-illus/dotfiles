import { execa } from 'execa'

export async function existsCommand(command: string) {
  try {
    await execa(`command -v ${command}`, { shell: true })
    return true
  }
  catch {
    return false
  }
}
