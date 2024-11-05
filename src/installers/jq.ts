import { installHelper } from '~/utils/install-helper.js'

export async function installJq() {
  await installHelper({
    commandName: 'jq',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y jq', { shell: true })
    },
  })
}
