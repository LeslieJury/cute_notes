# Overview

Cute Notes is a small, beginner-friendly note-taking app written in TypeScript. Users can create notes, choose a mood, search their notes, and delete notes. Notes are saved in the browser with `localStorage`, so they remain available after refreshing the page.

I wrote this software to practice TypeScript types, interfaces, classes, arrays, functions, recursion, asynchronous functions, and basic error handling in a project that feels useful and welcoming. The design is intentionally soft and playful so organizing thoughts feels less intimidating.

The video below will demonstrate the running app and walk through the TypeScript code. Replace the placeholder with the public or unlisted video link after recording.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

I used Visual Studio Code, a web browser, the TypeScript compiler, and the PowerShell terminal. The project uses a simple HTML/CSS front end with TypeScript compiled into JavaScript. It does not need a framework or external runtime library.

The main TypeScript file demonstrates a `Note` interface, a `NoteBook` class, typed lists, a recursive word counter, an asynchronous save message, and thrown/handled exceptions for empty notes and invalid saved data. `terminal.ts` also prints a small TypeScript demonstration to the terminal.

To run the project:

```text
npm install
npm run build
npm run demo
```

Then open `index.html` in a browser. For a local development server, use any simple static server, such as the Live Server extension in VS Code.

# Useful Websites

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript New Project Guide](https://www.digitalocean.com/community/tutorials/typescript-new-project)
- [BYU-Idaho TypeScript Module](https://byui-cse.github.io/cse310-course/modules/language_typescript/README.html)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Markdown Guide](https://www.markdownguide.org/cheat-sheet/)

# Future Work

- Add an edit button so an existing note can be changed.
- Add categories and a favorite-note filter.
- Publish the project in its own public GitHub repository.
- Replace the video placeholder with a 4–5 minute software demonstration link.

