default: intall install-wasm set-beta install-creates

install:
	curl https://sh.rustup.rs -sSf | sh

install-wasm:
	curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

set-beta:
	rustup default beta

install-crates:
	cargo install cargo-generate