# Role-based auth with React, React Router, Redux Query

How to start the app

```
$ npm install
$ npm run dev
```

## App configuration

```
$ npx create-react-app@latest ./ --template typescript

$ npm install -D tailwindcss postcss autoprefixer json-server concurrently react-toastify
$ npx tailwindcss init -p
```

```
// tailwind.config.js
content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
```

```
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
// package.json
"scripts": {
    //...
    "dev": "concurrently \"json-server --watch ./src/data/db.json --port 4000\" \"npm start\""
},
```

Start the app

```
npm run dev
```