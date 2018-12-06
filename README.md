# Isabelle

## add yarn and node to your repo at raspberry:
`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

## Build and start
*`npm install --global --production windows-build-tools` for Windows

`yarn install`

### production:

`yarn start`

### development:

`yarn start:watch`

`yarn build:watch`

### commands to say:

`isabelle` to start capture commands. Its like "OK Google".
 
 `(która) godzina`
 
 `data`
 
 `jak masz na imię`
 
 `mam na imię (imie)`
 
 `(powiedz) dowcip`
 
 `jak mam na imię`

`(to wszystko) dziękuję` to stop capture commands


 
