import { installHelper } from '~/utils/install-helper.js'

export async function installVolta() {
  await installHelper({
    commandName: 'volta',
    requirePassword: false,
    execaAction: (execa) => {
      return execa('curl https://get.volta.sh | bash', { shell: true })
    },
  })
}
