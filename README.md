# Global Trend Assignment

Overview
--------
Global Trend Assignment is a simple front-end project that visualizes global trend data (charts, tables, or interactive UI) using plain HTML, CSS, and JavaScript. The project is intended as a small demo/assignment that is easy to run locally without any build tools.

Features implemented
--------------------
- Responsive layout using CSS
- Interactive charts or visualizations (if included in js/)
- Client-side data fetching and rendering (from local JSON or provided APIs)
- Clean separation of structure (index.html), styles (css/), and behavior (js/)
- Static assets organized in assets/ (images, fonts, data)

How to run locally
------------------
1. Clone the repository:
   ```bash
   git clone https://github.com/Nsanjayboruds/Global-Trend-assisgnment.git
   cd Global-Trend-assisgnment
   ```

2. Open directly in the browser:
   - Double-click `index.html` or open it from your browser: `file:///path/to/Global-Trend-assisgnment/index.html`
   - Note: Some browsers block local AJAX (fetch) requests from file://. If the app requests local JSON data, run a simple HTTP server instead.

3. Run a simple local HTTP server (recommended):
   - Using Python 3:
     ```bash
     python3 -m http.server 8000
     # then open http://localhost:8000 in your browser
     ```
   - Using Node (http-server):
     ```bash
     npx http-server -p 8000
     # then open http://localhost:8000
     ```
   - Using VSCode Live Server extension:
     - Install Live Server extension.
     - Right-click `index.html` → "Open with Live Server".

4. Development tips:
   - Edit files in `css/` and `js/`, then refresh the browser.
   - If using external APIs, ensure CORS is configured or use a local proxy.

Folder structure
----------------
Project root should include these files/folders:

- index.html
  - The entry point of the app. Loads styles and scripts and contains the main markup.
- css/
  - Contains all stylesheet files (e.g., `styles.css`, `responsive.css`).
- js/
  - Contains JavaScript source files (e.g., `app.js`, `charts.js`, `utils.js`).
- assets/
  - Static assets such as images, fonts, and sample data (e.g., `images/`, `fonts/`, `data/`).

Example tree:
```
Global-Trend-assisgnment/
├─ index.html 
├─ styles.css
|_script.js

```

Notes
-----
- No build tools are required; this is a static front-end project.
- If you want, I can:
  - Add this README directly to the repository and open a PR.
  - Expand the README with screenshots, live demo link, or contribution guidelines.
  - Detect repository files and tailor the README to match actual filenames in your repo.

Author
------
Nsanjayboruds
