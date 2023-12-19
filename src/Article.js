import React from "react";

const Article = ({ article }) => {
  return (
    <article>
        <h4>{article.date}</h4>
      <h3>{article.title}</h3>
      <img src={article.src} alt={article.alt}/>
      <p>{article.body}</p>
      
    </article>
  );
};

export default Article;