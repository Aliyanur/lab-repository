import React, { useState } from "react";

function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault();
    setOpened(!isOpened);
  };

  return (
    <li>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={onClickToggle}>
        {article.title}
      </a>

      <button onClick={() => onClickRemove(article.id)}>Remove</button>

      <p style={{ display: isOpened ? "block" : "none" }}>
        {article.summary}
      </p>
    </li>
  );
}

export default ArticleItem;
