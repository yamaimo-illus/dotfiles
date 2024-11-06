/* eslint-disable no-console */
import process from 'node:process'
import {
  installBat,
  installDelta,
  installEza,
  installFfmpeg,
  installFzf,
  installGitHubCli,
  installJq,
  installLazygit,
  installStow,
  installTmux,
  installTree,
  installVolta,
  installXsel,
} from '~/installers/index.js'
import {
  createSymbolicLinks,
  logger,
  prepareForInstallation,
  readPassword,
} from './utils/index.js'

async function main() {
  console.clear()

  if (!(await readPassword())) {
    throw new Error('Please enter correct password.')
  }
  await prepareForInstallation()

  // Managers
  logger.info('\nManagers')
  await installStow()

  // Commands
  logger.info('\nCommands')
  await installBat()
  await installDelta()
  await installEza()
  await installFfmpeg()
  await installFzf()
  await installGitHubCli()
  await installJq()
  await installTree()
  await installVolta()
  await installXsel()

  // GUIs / TUIs
  logger.info('\nGUIs / TUIs')
  await installTmux()
  await installLazygit()

  // Symbolic link
  logger.info('\nSymbolic links')
  await createSymbolicLinks()

  process.exit(0)
}

main().catch((err) => {
  logger.error('Aborting installation...')
  if (err instanceof Error) {
    logger.error(err)
  }
  else {
    logger.error('An unknown error has occurred.')
  }
  process.exit(1)
})
