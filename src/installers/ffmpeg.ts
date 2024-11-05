import { installHelper } from '~/utils/install-helper.js'

export async function installFfmpeg() {
  await installHelper({
    commandName: 'ffmpeg',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y ffmpeg', { shell: true })
    },
  })
}
