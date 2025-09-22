# javaScript backend project

<details>
  <summary>node project Stucture</summary>
  
  
## node project Installation

install packages 
```bash
  npm i dotenv express mongoose cors jsonwebtoken bcryptjs nodemailer cookie-parser
```
```bash
  npm i -D nodemon
```
Install prettier with npm
```bash
  npm i -D prettier@3.1.0
```

Install cookie parser with npm
Install cors with npm

```bash
  npm i cookie-parser@1.3.5
  npm i cors
```

## prettierrc file configaretion
```js
  {
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "semi": true,
    "trailingComma": "es5"
}
```
## .prittierignore file config
```code
/.vscode
/node_modules
./dist
*.env
.env
.env.*
```
## .package.json config
```js
{
  "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
}
```


## Folder structure

    .
    ├── node_modules/
    ├── public/
    │   ├── css/
    │   ├── js/
    │   └── index.html
    ├── src/
    │   ├── db/
    │   │   └── db.js
    │   ├── controllers/
    │   │   └── userController.js
    │   ├── models/
    │   │   └── User.js
    │   ├── routes/
    │   │   └── userRoutes.js
    │   ├── services/
    │   │   └── userService.js
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   └── utils/
    │   |   └── helpers.js
    |   |__ constants.js
    |   |__ app.js
    |   |__ index.js
    |
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── server.js




</details>

