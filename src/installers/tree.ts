import { installHelper } from '~/utils/install-helper.js'

export async function installTree() {
  await installHelper({
    commandName: 'tree',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y tree', { shell: true })
    },
  })
}
