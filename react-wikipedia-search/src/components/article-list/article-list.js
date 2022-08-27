import React, { Component } from 'react'

import './article-list.css'

class ArticleList extends Component {
  generatePageUrl(pageTitle) {
    const underscoredTitle = pageTitle.split(' ').join('_')
    const articleUrl = `http://en.wikipedia.org/wiki/${underscoredTitle}`
    window.location.href = articleUrl
  }

  render() {
    const ArticleCards = () => {
      return this.props.pages.map((page) => {
        return (
          <div className="article-card" onClick={() => this.generatePageUrl(page.title)} key={page.pageid}>
            <ArticleImage {...page} />
            <h2 className="card-title">{page.title}</h2>
            <p className="card-content">{page.extract}</p>
          </div>
        )
      })
    }

    const ArticleImage = (page) => {
      if (page.thumbnail) {
        return (
          <div className="card-image-container">
            <img className="card-image" src={page.thumbnail.source} alt={page.title}></img>
          </div>
        )
      } else {
        return null
      }
    }

    if (this.props.pages.length > 0) {
      return (
        <article className="article-list">
          <ArticleCards />
        </article>
      )
    } else {
      return null
    }
  }
}

export default ArticleList
