# nodeJsExpress — Beispielapplikation

Ein kleines Express-Skeleton zum schnellen Starten.

## Voraussetzungen

- Node.js >= 14
- npm

## Installation

1. Abhängigkeiten installieren:
   ```
   npm install
   ```

2. Entwicklung starten:
   ```
   npm run dev
   ```

3. Produktion starten:
   ```
   npm start
   ```

Die App läuft standardmäßig auf http://localhost:3000.

Verfügbare Endpoints:
- GET / -> API Root (Begrüßung)
- GET /users -> Liste von Beispiel-Usern
- GET /users/:id -> Einzelner User
- GET /health -> Health-Check
