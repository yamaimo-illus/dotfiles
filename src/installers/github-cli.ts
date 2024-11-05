import { installHelper } from '~/utils/install-helper.js'

export async function installGitHubCli() {
  await installHelper({
    commandName: 'gh',
    requirePassword: false,
    execaAction: (execa) => {
      return execa(
        `
        curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
        && sudo -S chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
        && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
        && sudo -S apt update \
        && sudo -S apt install -y gh
        `,
        { shell: true },
      )
    },
  })
}
