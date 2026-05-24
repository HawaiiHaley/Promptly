# Promptimistic

[Open the web app](https://hawaiihaley.github.io/Promptly/)

Promptimistic is a journal prompt web app designed to help people pause, reflect, and turn a quiet moment into something useful.

The app gives users thoughtful writing prompts based on what they want to focus on, the tone they want, how much time they have, and the intention behind their reflection. After generating a prompt, users can write directly in the app, save their reflection, return to it later, edit it, export it, or choose whether it stays private or appears on a separate public reflections page.

The goal of Promptimistic is to make journaling feel approachable, flexible, and emotionally useful. It is built for people who want a little structure without feeling boxed in.

## Features

- Generate journal prompts by focus, tone, time, and intention
- Save reflections in the browser
- Edit or delete individual saved reflections
- Search and filter saved reflections
- Export reflections as TXT, PDF, or copied text
- Autosave draft writing
- Choose whether each reflection is private or shared openly
- View shared reflections on a separate public page
- Light and dark mode

## Who It Is For

Promptimistic is for anyone who wants a simple place to reflect, especially people who:

- Want to journal but do not always know what to write about
- Like guided prompts for self-growth, clarity, healing, gratitude, relationships, career, or dreams
- Want to save meaningful reflections and revisit them later
- May eventually want to share selected reflections publicly

## How It Works Right Now

Promptimistic is currently a static web app built with HTML, CSS, and JavaScript.

Saved reflections are stored in the user's browser with `localStorage`. That means reflections are available on the same device and browser, but they are not yet synced across devices or accounts.

The public reflections page currently shows reflections that the same browser has marked as shared openly. For truly public sharing across the internet, the app will eventually need accounts, authentication, and a database.

## Current Status

This is an early version of the app. It works as a browser-based journaling tool and can be published as a static website, but the account-based version has not been built yet.

## Files

- `index.html` - the main journal app
- `public.html` - the public reflections page
- `styles.css` - visual design and responsive styling
- `app.js` - prompt generation, saving, editing, exporting, and archive behavior
- `public.js` - displays reflections marked as public

## Future Ideas

- User accounts
- Cloud-synced saved reflections
- Real public sharing links
- Reflection tags
- Streaks or gentle progress tracking
- Optional reminders
- Mobile app version
