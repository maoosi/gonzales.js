# Gonzales.js

⚡ 🐭 💨 Speedy JS library for custom mouse pointers.

> Work in progress

```html
<div id="my-cursor"></div>
```

```javascript
const cursor = Gonzales('#my-cursor') // new mouse cursor

cursor.on('mousedown', (el) => {})
cursor.on('mouseup', (el) => {})

cursor.activate() // use cursor
cursor.deactivate() // disable cursor

cursor.destroy() // destroy and reset
```
