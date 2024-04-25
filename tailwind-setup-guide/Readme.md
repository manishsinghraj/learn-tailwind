`npx tailwindcss init`
this creates tailwind.config.js

create 2 folder - dist and src

in dist > index.html
in src > input.css

add this in input.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


Make change in tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}


```

`npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch`

This will build style.css.
Now link this file in index.html