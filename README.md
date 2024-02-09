# Component example 

## Develop

component : a dxp component
cs_app: client side app built with Vite

```
npm i 
npm run dev

```


## Deploy

To avoid sending the node_modules to the DXP all dev occurs  component folder.
deployment needs to occur using commands in the components folder

```
dxp-next auth login --tenant=
dxp-next cmp deploy ./
```