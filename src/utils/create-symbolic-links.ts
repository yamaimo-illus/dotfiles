import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execa } from 'execa'
import chalk from './chalk.js'
import { spinner } from './spinner.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SYMLINKS = ['bash', 'editorconfig', 'git', 'hushlogin', 'ibus-mozc', 'tmux']

export async function createSymbolicLinks() {
  const currentDir = __dirname
  const symlinksDir = path.resolve(currentDir, '../../symlinks/')

  try {
    spinner.start(chalk.gray('Linking dotfiles.'))
    await execa(`stow -v --adopt ${SYMLINKS.join(' ')} --dir=${symlinksDir} --target=$HOME`, {
      shell: true,
    })
    spinner.stop(chalk.green('Linking of dotfiles is complete.'))
  }
  catch (e) {
    spinner.stop(chalk.red(`An error has occurred. ${e}`))
    throw e
  }
}
