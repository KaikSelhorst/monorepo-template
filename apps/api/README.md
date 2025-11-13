### Bun Warning on Windows (bun run dev)

When you run `bun run dev` on Windows, you get a message saying that some files from packages like `@org/package-name` 
are “outside the project directory” and therefore won’t be watched (meaning changes won’t trigger an automatic reload).

This only happens on Windows. The reason is an old limitation of the operating system: it allows only a very limited number
of file watchers to exist at the same time. To avoid risking slowing down or crashing your computer, Bun decides (by default) 
to watch only files that are inside your project folder. Files located in `node_modules` (even if they belong to packages you’re using) 
are considered “external” and get ignored.

On Linux and macOS this restriction basically doesn’t exist, so Bun watches everything normally there — that’s why many people say
“the issue only happens on Windows”.

In short, and in a relaxed way: it’s just a safety measure that Bun applies automatically on Windows so your machine doesn’t choke. 
It’s not a serious bug; it’s simply different behavior because of Windows itself.
