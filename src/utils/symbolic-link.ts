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
    spinner.start(chalk.gray('Creating symbolic links.'))
    await execa(`stow -v --adopt ${SYMLINKS.join(' ')} --dir=${symlinksDir} --target=$HOME`, {
      shell: true,
    })
    spinner.stop(chalk.green('Symbolic links created.'))
  }
  catch (e) {
    spinner.stop(chalk.red(`An error has occurred. ${e}`))
    throw e
  }
}

export async function deleteSymbolicLinks() {
  const currentDir = __dirname
  const symlinksDir = path.resolve(currentDir, '../../symlinks/')

  try {
    spinner.start(chalk.gray('Deleting symbolic links.'))
    await execa(`stow -v -D ${SYMLINKS.join(' ')} --dir=${symlinksDir} --target=$HOME`, {
      shell: true,
    })
    spinner.stop(chalk.green('Symbolic links deleted.'))
  }
  catch (e) {
    spinner.stop(chalk.red(`An error has occurred. ${e}`))
    throw e
  }
}
