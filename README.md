# homebridge-owfs

This is an attempt to integrate a 1-wire file system (owfs) setup 
with homebridge.

## Approach

1. Configure as a platform
1. Specify server name & port
2. Use the directory functions to span the owfs tree
3. Populate the accessories with this information?

## Alternate Approach

1. Configure as accessories
2. Need to specify server & port every time!
3. But can give nice names to accessories
