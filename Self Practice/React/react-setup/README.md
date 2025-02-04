# Grocery List

An app where you can create a list of grocery that you plan on getting or shopping.
It makes use of local data file, (as a storage/database).

## Starting App

To start the app, you have to run the jons-server first by:

```
  npx json-server -p 3500 -w data/db.json
```

or

```
  npm run json-server
```

which is a script in the package.json file for the first code

Where port 3500 is where you have set your json-server to run on
` data/db.json` is the path to local data file (`data` if the folder's name, `db` is the file name)
-p: port, -w: watch
It will run the database file at:

```
http://localhost:3500/items
```

Then you can run the app by:

```
  npm run dev
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
