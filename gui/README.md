# Schedule Diary - Frontend Part

This module is designed to work with the frontend part of the application.

Here are some tips for the future:

- `src` folder - It stores the application interface.
- `src-tauri` folder - It stores files for working with the backend part of the application.

For the frontend, I use ⚡️ **[Vite](https://vitejs.dev/)** + 🛠️ **[Svelte](https://svelte.dev/)**.<br>
Backend stack is 🦀 **[Rust](https://www.rust-lang.org/)** with ❤️ **[Tauri](https://tauri.app/)**.

_Other libraries, tools and packages can be found in source code._

## How it works?

So, the frontend part is compiled using Vite, the frontend part itself is written in Svelte,
inside the Svelte code the library `@tauri-apps/api` is used to interact with the backend.

The web application will be used as a Telegram Mini App to view the schedule.

**So, how do I get a link to a web application?**

Answer: It's simple, there is a GitHub Action that automatically creates GitHub Pages and updates its contents.

## How to run?

There is nothing complicated here, you need to go to this directory (`gui`) and execute the following commands:

```shell
pnpm install
pnpm run dev
```
