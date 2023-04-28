<h1 align="center">
  mstable.org
</h1>

## Develop

    yarn
    yarn dev

This project uses:

- [Vite](https://github.com/vitejs/vite) for frontend tooling
- [React](https://reactjs.org/) for UI components
- [React Router](https://reactrouter.com/) for routing
- [Styled Components](https://styled-components.com/) for styling the UI
- And a few other libraries for various components

## Build

    yarn build

## Serve locally (with SSR)

    yarn start

## Files

- `/src/pages/*.tsx`: Pages defined here are served on routes dynamically (based on the file name).
- `/src/components/SEO.tsx`: All meta titles and descriptions are here.
- `/src/components/images/*`: All images used in page content, including SVGs