import { installHelper } from '~/utils/install-helper.js'

export async function installLazygit() {
  await installHelper({
    commandName: 'lazygit',
    execaAction: (execa) => {
      return execa(
        `
        curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_0.44.1_Linux_x86_64.tar.gz"
        tar xf lazygit.tar.gz lazygit
        sudo install lazygit /usr/local/bin
        `,
        { shell: true },
      )
    },
  })
}
