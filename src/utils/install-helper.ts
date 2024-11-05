import { $, execa, type ExecaChildProcess } from 'execa'
import chalk from './chalk.js'
import { existsCommand } from './exists-command.js'
import { logger } from './logger.js'
import { password } from './read-password.js'
import { spinner } from './spinner.js'

interface InstallHelperOptions {
  commandName: string
  requirePassword?: boolean
  /** When execute the sudo command, please add the -S option. */
  execaAction: (arg1: typeof execa, arg2: typeof $) => ExecaChildProcess
  overrideExistsMethod?: () => Promise<boolean>
}

export async function installHelper({
  commandName,
  requirePassword = true,
  execaAction,
  overrideExistsMethod,
}: InstallHelperOptions) {
  const exists = overrideExistsMethod ? await overrideExistsMethod() : await existsCommand(commandName)
  if (exists) {
    logger.success(`✔  ${commandName} is already installed.`)
    return
  }

  try {
    spinner.start(chalk.gray(`Installing ${commandName}.`))
    if (requirePassword) {
      await execa(`echo ${password}`, { shell: true }).pipeStdout?.(execaAction(execa, $))
    }
    else {
      await execaAction(execa, $)
    }
    spinner.stop(chalk.green(`${commandName} has been installed.`))
  }
  catch (e) {
    spinner.stop(chalk.red(`✗ An error has occurred. ${e}`))
    throw e
  }
}
