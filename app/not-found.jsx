import { sitePath } from "../content/site-path";
export default function NotFound() {
  return (
    <main id="main" className="case">
      <header>
        <small>404</small>
        <h1>Page not found.</h1>
        <a className="back" href={sitePath("/#work")}>Browse the work</a>
      </header>
    </main>
  );
}
