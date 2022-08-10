import React from 'react'

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((article, index) => {
        return (      
        <div key={index}>
        <img src={article.urlToImage}></img>
        <p>{article.title}</p>
        <a href={article.url}>기사로 이동하기</a>
        </div>
        );
      })}
    </div>
  )
}

export default NewsList