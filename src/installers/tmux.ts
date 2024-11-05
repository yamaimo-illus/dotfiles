import { installHelper } from '~/utils/install-helper.js'

export async function installTmux() {
  await installHelper({
    commandName: 'tmux',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y tmux', { shell: true })
    },
  })
}
