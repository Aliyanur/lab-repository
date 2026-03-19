export default function About() {
    return (
      <div>
        <h1>About Page (SSG)</h1>
        <p>Generated at build time.</p>
        <p>{new Date().toISOString()}</p>
      </div>
    );
  }