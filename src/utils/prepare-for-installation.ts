import { execa } from 'execa'
import chalk from './chalk.js'
import { password } from './read-password.js'
import { spinner } from './spinner.js'

export async function prepareForInstallation() {
  try {
    spinner.start(chalk.gray('Preparing for installation.'))
    await execa(`echo ${password}`, { shell: true }).pipeStdout?.(
      execa(
        `
        sudo -S apt update &&
        sudo -S apt upgrade -y &&
        sudo -S apt full-upgrade -y &&
        sudo apt autoremove -y &&
        sudo -S apt autoclean -y
        sudo -S apt install -y git curl wget build-essential software-properties-common
        `,
        { shell: true },
      ),
    )
    spinner.stop(chalk.green('Preparation for installation is complete.'))
  }
  catch (e) {
    spinner.stop(chalk.red(`An error has occurred. ${e}`))
    throw e
  }
}
