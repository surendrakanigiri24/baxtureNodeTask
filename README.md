## Environment Variables and Global Constants

Truly Global constants are defined in `/src/config.js` which is also acts as a centralized access point to all the env variables.

**Not implemented `process.env.*` directly; rather, implemented the setting in config.js and accessed it from there**

## Environment variables:
```
# PORT DEFINE
PORT = 3005

```

## To install dependencies
npm i

## To run the project
npm run start:dev

## eslint
npm install eslint --save-dev
npx eslint --init
npm run lint


## Folder structure
| Folder               | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| src/                 | All the tools to construct the application                       |  
| src/index.js         | Initial point from where the machine starts                      |
| src/config           | All env variable can be accessed from here                       | 





