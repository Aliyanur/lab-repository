function Card({ title, children }) {
    return (
      <article className="card">
        <h3>{title}</h3>
        <div>{children}</div>
      </article>
    );
  }
  
  export default Card;

// Reusable Card component