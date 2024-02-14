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
Text File Analysis System/
├── src/
│   ├── controllers/
│   │   ├── fileController.js
│   │   ├── analysisController.js
│   ├── routes/
│   │   ├── fileRoutes.js
│   │   ├── analysisRoutes.js
│   ├── services/
│   │   ├── fileService.js
│   │   ├── analysisService.js
│   ├── clients/
│   │   ├── db.js
│   │   ├── models
|   |   |   ├── files.js
|   |   |   ├── analysis.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md






