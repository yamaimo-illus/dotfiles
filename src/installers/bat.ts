import { installHelper } from '~/utils/install-helper.js'

export async function installBat() {
  await installHelper({
    commandName: 'batcat',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y bat', { shell: true })
    },
  })
}
