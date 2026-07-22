# TravelTrucks — Camper Rental

Frontend test task for **TravelTrucks**, a camper rental company. Built with
React + Vite, Redux Toolkit, React Router and Axios, styled with CSS Modules
following the provided design mockup.

## Live demo

- Deployed app: _add your Vercel/Netlify link here after deploying_
- Source repository: _add your GitHub link here_

## Tech stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/) — state management
- [React Router](https://reactrouter.com/) — routing
- [Axios](https://axios-http.com/) — HTTP requests
- [react-toastify](https://fkhadra.github.io/react-toastify/) — booking success notification
- [react-icons](https://react-icons.github.io/react-icons/) — icon set
- CSS Modules — component-scoped styling

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

The app will be available at the URL Vite prints (typically
`http://localhost:5173`).

### Build for production

```bash
npm run build
```

The optimized build is output to `dist/`. Preview it locally with:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
  api/            Axios instance + API calls
  components/     Reusable UI pieces (Header, CamperCard, FilterForm, Gallery, ...)
  pages/          Route-level components (HomePage, CatalogPage, CamperDetailsPage, NotFoundPage)
  redux/          Redux Toolkit slices, selectors and store
  utils/          Shared formatting helpers
```

## Features

- **Home page** with a hero banner and a "View Now" call to action leading to
  the catalog.
- **Catalog page**
  - Filter by location (text), camper form, engine and transmission
    (single-select each).
  - "Search" re-queries the camper list and resets pagination so results
    always reflect the latest filters.
  - "Load More" reveals additional cards, respecting the active filters.
  - Add/remove a camper to Favorites (heart icon), persisted in
    `localStorage`.
  - Friendly empty state when no campers match the current filters.
- **Camper details page** (`/catalog/:id`)
  - Photo gallery with thumbnail navigation.
  - Vehicle details: transmission, engine, AC, kitchen, bathroom, TV, radio,
    refrigerator, microwave, gas, water (only shown when present on the
    camper) plus form, length, width, height, tank and consumption.
  - Reviews with a five-star rating.
  - Booking form with client-side validation; a successful submission shows
    a toast notification.
- A loading indicator is shown for every asynchronous request (catalog
  fetch, camper details fetch).

## Data source

The app consumes the read-only mock API provided for this task:

```
GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/:id
```

Since the mock backend doesn't reliably support server-side filtering for
every field the UI needs (boolean equipment flags, partial location
matches), the full camper list is fetched once and filtered client-side.
The booking form does not submit to a real endpoint — there is no booking
API provided — so a successful, validated submission simply confirms with a
toast notification.

## Deploying

1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com) or
   [Netlify](https://netlify.com) (framework preset: Vite).
3. Build command: `npm run build`, output directory: `dist`.
4. Add the live URL to this README once deployed.
