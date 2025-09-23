import React, { Component } from "react";

class News extends Component {
  constructor(props) {
    super(props);

    // state is like a storage box
    this.state = {
      articles: [],
      loading: true,
    };
  }

  // Runs after the component is shown on screen
  componentDidMount() {
    const API_KEY = "YOUR_NEWS_API_KEY"; // 👉 replace with your key
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data.articles, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { articles, loading } = this.state;

    if (loading) {
      return <h3 style={{ textAlign: "center" }}>⏳ Loading news...</h3>;
    }

    return (
      <div>
        {articles.map((news, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              margin: "15px 0",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#34495e" }}>{news.title}</h2>
            {news.urlToImage && (
              <img
                src={news.urlToImage}
                alt="News"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            )}
            <p>{news.description}</p>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2980b9", textDecoration: "none" }}
            >
              🔗 Read more
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
const API_KEY = 10a5871ee538470eaf74590a05747b51; 
