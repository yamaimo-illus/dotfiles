# Yamaimo's dotfiles for WSL

## Requirements

- Install curl and git

```shell
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git unzip
```

- Install Node.js (I personally use Volta)

```shell
curl https://get.volta.sh | bash
```

- Clone this repository into your workspace directory.

```shell
mkdir -p ~/ws
git clone git@github.com:yamaimo-illus/dotfiles-for-wsl.git ~/ws/dotfiles
```

## Usage

```shell
cd ~/ws/dotfiles
npm run execute
```

## Installation Overview

| Managers | Details                            |
| -------- | ---------------------------------- |
| GNU Stow | https://www.gnu.org/software/stow/ |

| Commands     | Details                                    |
| ------------ | ------------------------------------------ |
| bat          | https://github.com/sharkdp/bat             |
| eza          | https://github.com/eza-community/eza       |
| FFmpeg       | https://ffmpeg.org/                        |
| fzf          | https://github.com/junegunn/fzf            |
| jq           | https://jqlang.github.io/jq                |
| tree         | http://mama.indstate.edu/users/ice/tree/   |
| Volta        | https://volta.sh/                          |
| XSel         | https://github.com/kfish/xsel              |

| GUIs / TUIs | Details                                   |
| ----------- | ----------------------------------------  |
| Tmux        | https://github.com/tmux/tmux              |
| Lazygit     | https://github.com/jesseduffield/lazygit  |

| Other          | Details                 |
| -------------- | ----------------------- |
| Symbolic Links | Managing it using Stow. |

Also, please run the following command in your terminal to install the required applications:

```plaintext
winget install --id Amazon.Kindle
winget install --id Bitwarden.Bitwarden
winget install --id Discord.Discord
winget install --id EDRLab.Thorium
winget install --id Figma.Figma
winget install --id Google.Chrome
winget install --id Microsoft.PowerShell
winget install --id Microsoft.PowerToys
winget install --id Microsoft.VisualStudio.2022.Community
winget install --id Microsoft.VisualStudioCode
winget install --id Microsoft.WindowsTerminal
winget install --id Notion.Notion
winget install --id SlackTechnologies.Slack
winget install --id Unity.UnityHub
winget install --id Valve.Steam
winget install fancywm
```
