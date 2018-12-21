import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Service from "../../service/service";
import "./randomDog.css";

export default class RandomDog extends Component {
  service = new Service();

  state = {
    image: null,
    error: false
  };

  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.getData, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData = () => {
    this.service
      .getRandomDog()
      .then(this.onDogLoaded)
      .catch(this.onError);
  };

  onDogLoaded = image => {
    this.setState({
      image: image.message
    });
  };

  onError = err => {
    this.setState({
      error: true
    });
  };

  render() {
    const { error, image } = this.state;

    const errorMesseage = error ? <ErrorIndicator /> : null;
    const cont = !error ? <DogImage image={image} /> : null;

    return (
      <div className="random-dog container-fluid jumbotron rounded">
        {errorMesseage}
        {cont}
      </div>
    );
  }
}

const DogImage = ({ image }) => {
  return (
    <React.Fragment>
      <img
        src={image}
        className="img-fluid rounded mx-auto d-block"
        alt="random-dog"
      />
    </React.Fragment>
  );
};
