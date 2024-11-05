import { installHelper } from '~/utils/install-helper.js'

export async function installXsel() {
  await installHelper({
    commandName: 'xsel',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y xsel', { shell: true })
    },
  })
}
