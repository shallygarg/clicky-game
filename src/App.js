import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import image from "./images.json";
import "./App.css";

class App extends Component {
  // Sets state to empty
  state = {
    image,
    clickedImage: [],
    score: 0
  };

  imageClick = event => {
    const currentImage = event.target.alt;
    const alreadyClickedImage =
      this.state.clickedImage.indexOf(currentImage) > -1;
    if (alreadyClickedImage) {
      this.setState({
        image: this.state.image.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
      alert("You lose. Play again?");
    } else {
      this.setState(
        {
          image: this.state.image.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(currentImage),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              image: this.state.image.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  };

  // Map over this.state.imagess and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} />
        <Jumbotron />
        {this.state.image.map(image => (
          <ImageCard
            imageClick={this.imageClick}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            occupation={image.occupation}
            location={image.location}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
