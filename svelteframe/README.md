## SvelteFrame

SvelteFrame is the main frame which serves and redirects the client.

Overview:
 - [Creating the SvelteFrame from scratch](#creating-the-svelteframe)
 - [Material UI](#material-ui)
 - [Svelte Build](#svelte-build)

<br>
<br>

## Creating the SvelteFrame

---

First downloading the Typescript template frame.

```sh
npx degit sveltejs/template svelteframe
cd svelte-typescript-app
node scripts/setupTypeScript.js
```

Editing the `rollup.config.js` file.

```js
output: {
    dir: 'public/build'
}
```

<br>
<br>

## Material UI

---

Installing Material UI
 - `npm install svelte-material-ui`
 - `npm install node-sass`
 - `npm install rollup-plugin-postcss`
 - rollup.config.file changes

#### Rollup Config Changes

```js
const postcssOptions = () => ({
	extensions: ['.scss', '.sass'],
	extract: false,
	minimize: true,
	use: [
        ['sass', {
            includePaths: [
            './src/theme',
            './node_modules'
            ]
        }]
	]
});
```

And add the call to the `postcss` in plugins: `postcss(postcssOptions())`

### Theme file

`src/theme/smui-theme.scss`

### Material UI Icons

Install Material UI Icons by running 

```properties
npm install svelte-material-icons
```

<br>
<br>

## Svelte Build

---

Svelte compiles the app into ES-type modules and they are served to the client. If the clients' browsers doesn't support ES modules, we call the `dimport` library which can interpret them in any browser.

```html
<script defer 
    type="module" 
    src="https://unpkg.com/dimport?module" 
    data-main="/build/main.js">
</script>
<script defer
    type="nomodule"
    src="https://unpkg.com/dimport/nomodule"
    data-main="/build/main.js">
</script>
```

Also, we need to add a `link` tag to the bundled css:

```html
<link rel='stylesheet' href='/build/bundle.css'>
```

### Script and Style Tags

Script and Style tags across each svelte document should have `lang` and `type` attributes as follows:

```html
<script lang="ts"> </script>
<style type="text/scss"> </style>
```

### Typescript config

The typescript config file by default (Svelte's template) extends upon their own `@tsconfig/svelte`, but we have to add the following compiler options:

```json
"compilerOptions": {
    "removeComments": true,
    "sourceMap": true,
    "module": "ES6",
},
```

<br>
<br>

## Deployment

---

We use Express.JS with conjunction to Node.JS to deploy our apps. So, we have to deploy the SvelteFrame from a separate directory. All of the static links that we use should start with `/frame`, so that Express knows that these links would be served statically.

<br>

---

### Complications

VSCode could be throwing an error about the following line: `type="text/scss"`, this error was fixed when we added the `svelte.config.js`.