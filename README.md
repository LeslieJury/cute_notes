# Overview

Cute Notes is a small note-taking app written in TypeScript. Users can create notes, choose a mood, search notes, and delete notes. The notes are saved in the browser with `localStorage`.

I wrote this software to improve my understanding of TypeScript. The project gives me practice with types, interfaces, classes, arrays, functions, recursion, asynchronous functions, and error handling.

The video below will demonstrate the running app and walk through the TypeScript code. Replace the placeholder with the public or unlisted video link after recording.

[Software Demo Video](https://youtu.be/JPurccaOd1o)

# Development Environment

I used Visual Studio Code, a web browser, the TypeScript compiler, and PowerShell. The project uses HTML and CSS for the page and TypeScript compiled into JavaScript.

The main TypeScript file demonstrates a `Note` interface, a `NoteBook` class, typed lists, a recursive word counter, an asynchronous save message, and handled exceptions. The `terminal.ts` file prints a small TypeScript demonstration to the terminal.

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
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

# Future Work

- Add an edit button so an existing note can be changed.
- Add categories and a favorite-note filter.
- Make a habit tracker/to-do list

