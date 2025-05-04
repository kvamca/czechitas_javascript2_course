# Czechitas render

```sh
npm install @czechitas/render
```

## Usage

### `vite.config.js`

```js
import { czechitasRenderVitePlugin } from '@czechitas/render/plugin'
export default defineConfig({
	plugins: [czechitasRenderVitePlugin()],
})
```

### `main.jsx`

```jsx
import { App } from './components/App'
import { render } from '@czechitas/render'

const root = document.querySelector('#root')
const data = await fetch('https://example.com/data.json').then((response) =>
	response.json(),
)
root.innerHTML = render(<App data={data} />)
```
