import { useState } from "react";
import React from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";


function ArticleManager() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  // For adding a new article
  const onClickAdd = () => {
    if (!title || !summary) return; // optional: prevent empty articles

    setArticles([
        ...articles,
        {
          id: Date.now(),
          title,
          summary,
        },
      ]);
      
    setTitle(""); // clear input
    setSummary("");
  };

  // Remove Article
  const onClickRemove = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      {AddArticle({
        name:"Articles",
        title,
        summary,
        onChangeTitle:(e) => setTitle(e.target.value),
        onChangeSummary:(e) => setSummary(e.target.value),
        onClickAdd
      })}

      {ArticleList({
        articles,
        onClickRemove,
    })}
    </div>
  );
}

export default ArticleManager;