default: install move-rc make-zsh-default

install:
	sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

move-rc:
	echo $(cat ./.zshrc) > ~/.zshrc

make-zsh-default:
	chsh -s $(which zsh)