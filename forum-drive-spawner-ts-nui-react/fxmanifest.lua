fx_version 'cerulean'

name '<res>'
author '<author>'
description '<description>'

version '1.0.0'

game 'gta5'

dependencies {
  'spawnmanager'
}

server_script 'server/dist/**/*.js'
client_script 'client/dist/**/*.js'

ui_page 'web/dist/index.html'

files {
  'web/dist/index.html',
  'web/dist/**/*',
}
