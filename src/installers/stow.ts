import { installHelper } from '~/utils/install-helper.js'

export async function installStow() {
  await installHelper({
    commandName: 'stow',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y stow', { shell: true })
    },
  })
}
