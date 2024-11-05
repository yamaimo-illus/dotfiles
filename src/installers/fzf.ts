import { installHelper } from '~/utils/install-helper.js'

export async function installFzf() {
  await installHelper({
    commandName: 'fzf',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y fzf', { shell: true })
    },
  })
}
