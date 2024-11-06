# Yamaimo's dotfiles for WSL

## Requirements

- Install curl and git

```shell
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git unzip
```

- Install Node.js (I'm using Volta)

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
| delta        | https://github.com/dandavison/delta        |
| eza          | https://github.com/eza-community/eza       |
| FFmpeg       | https://ffmpeg.org/                        |
| fzf          | https://github.com/junegunn/fzf            |
| jq           | https://jqlang.github.io/jq                |
| tree         | http://mama.indstate.edu/users/ice/tree/   |
| Volta        | https://volta.sh/                          |
| XSel         | https://github.com/kfish/xsel              |

| GUIs / TUIs | Details                                  |
| ----------- | ---------------------------------------- |
| Tmux        | https://github.com/tmux/tmux             |

| Other          | Details                 |
| -------------- | ----------------------- |
| Symbolic Links | Managing it using Stow. |

Also, please run the following command in your terminal to install the required applications:

```plaintext
winget install -e --id Amazon.Kindle
winget install -e --id Bitwarden.Bitwarden
winget install -e --id Discord.Discord
winget install -e --id EDRLab.Thorium
winget install -e --id Figma.Figma
winget install -e --id Fork.Fork
winget install -e --id Google.Chrome
winget install -e --id Microsoft.PowerShell
winget install -e --id Microsoft.PowerToys
winget install -e --id Microsoft.VisualStudio.2022.Community
winget install -e --id Microsoft.VisualStudioCode
winget install -e --id Microsoft.WindowsTerminal
winget install -e --id Notion.Notion
winget install -e --id SlackTechnologies.Slack
winget install -e --id Unity.UnityHub
winget install -e --id Valve.Steam
winget install -e --id=JesseDuffield.lazygit
winget install -e fancywm
```
