## Tailwind Example

```html
<h1 class="text-center text-lg text-blue-400">Hello World</h1>
<div class="bg-violet-200 w-full h-10 border-red-950 rounded-md my-4 p-2">
  <p class="text-center font-mono font-extrabold">A div</p>
</div>
```

## Custom Styling

```html
<h1 class="text-center text-lg text-blue-400">Hello World</h1>
<div class="bg-violet-200 w-full h-10 border-red-950 rounded-md my-4 p-2">
  <p class="text-center font-mono font-extrabold text-[50px]">A div</p> <!-- text-[50px] is custom styling -->
</div>
```

The custom styling you've applied to the `<p>` element, `text-[50px]`, will generate the following utility class:

```css
.text-\[50px\] {
  font-size: 50px;
}
```

## Examples

```HTML
<main class='p-5'>
  <h1 class="text-center text-lg text-green-400">Hello World<h1>
<div class="w-full h-10 bg-violet-200 border-violet-600 border-2 rounded-md my-4 р-2">
  <p class="text-center font-mono font-extrabold">A div</p>
</div>

<!-- <!-Layout> -->
<!-- flex  -->
<div class="fixed w-10 h-10 bg-red-500 top-0"></div>
  <div class="flex justify-between">
  <div class="h-16 w-16 rounded-full bg-blue-500"></div>
  <div class="h-16 w-16 rounded-full bg-blue-500"></div>
  <div class="h-16 w-16 rounded-full bg-blue-500"></div>
</div>

<!-- grid -->
<div class="grid grid-cols-3 gap-2 mt-3">
  <div class="bg-violet-500 h-12"></div>
  <div class="bg-violet-500 h-12"></div>
  <div class="bg-violet-500 h-12"></div>
</div>

<!-- responsive -->
<div class="md:block hidden">
  <p>I will appear for dvice resultion > 768px
</div>
<div class="max-md:block hidden">
  <p>I will appear for dvice resultion 768px
</div>

<button class="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-black-600 active:bg-blue-800"> 
  click me
</button>

<ul class="my-2 space-y-2">
  <li class="bg-white p-2 first:bg-yellow-200">Item 1</li>
  <li class="bg-white p-2 first:bg-yellow-200 odd:bg-blue-200 even:bg-green-500">Item 2</li>
  <li class="bg-white p-2 first:bg-yellow-200 odd:bg-blue-200 even:bg-green-500">Item 3</li>
  <li class="bg-white p-2 first:bg-yellow-200 odd:bg-blue-200 even:bg-green-500">Item 4</li>
</ul>

</main>
```


## Dark Theme

```
<!-- taliwind config -->
/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class", //this
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [],
}
```


```html
<!-- theme -->

<div class="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-500/5 dark:bg-black dark:ring-yellow-300">
  <h3 class="text-base font-medium tracking-tight text-slate-700 dark:text-white">This is h3 text</h3>
  <p class="mt-2 text-sm text-slate-500 dark:text-white">This is longer p  text sdaj,hghsadg  </p>

  <button 
  id="toggleDark"
  class="text-black-500 rounded-lg bg-red-400 py-2 px-4 my-2"
  onclick="document.body.classList.toggle('dark')">
    Toggle Dark Mode
  </button>
</div>
</main>

<!-- // To showcase the demo of dark theme. Copy paste :) -->
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark')
    toggleDark.addEventListener('click', function() {
      if(document.documentElement.classList.includes('dark')) {
        document.documentElement.classList.remove('dark')
      }
      else {
        document.documentElement.classList.add('dark')
      }
      alert("click!")
    });
  });
</script>
```
