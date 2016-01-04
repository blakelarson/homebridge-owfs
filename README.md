# homebridge-owfs

This is an attempt to integrate a 1-wire file system (owfs) setup 
with homebridge.

## Approach

1. Configure as a platform
1. Specify server name & port
1. Use the directory functions to span the owfs tree
1. Populate the accessories with this information?
1. Or just specify each one as an accessory
