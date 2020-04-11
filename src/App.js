import React, { Component } from "react";

class App extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=corona-virus&apiKey=929a392e0f7a4d71a489da482473cdd2&pageSize=10"
    )
      .then(res => res.json())
      .then(news => {
        this.setState({ articles: news.articles });

        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1> Today's Top News</h1>
          {this.state.articles.map((news, title) => (
            <div className="card" key={title}>
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {news.completed && <span>Completed</span>}
                  {!news.completed && <span>Pending</span>}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
