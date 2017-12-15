import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

import axios from "axios";

class App extends Component {
  state = {
    articles: [],
    articleSearch: "",
    yearFrom: "",
    yearTo: "",
    isLoading: true,
  };

  componentDidMount() {
    console.log('component mounted!!!');
        
    // This variable will be pre-programmed with our authentication key
    // (the one we received when we registered)
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
    // the user hits the search button
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=bitcoin";
        
    axios.get(url)
        .then((response) => {
            console.log('this is response', response.data.response.docs);
            this.setState({
                isLoading: false,
                articles: response.data.response.docs,
            }); 
        });
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };
  
  render() {
    if (this.state.isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <Container>
                {this.state.articles.map(article => (
                  <Row key={article._id}>
                    <h1>{article.headline.main}</h1>
                    <p>{article.snippet}</p>
                  </Row>
                ))}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;