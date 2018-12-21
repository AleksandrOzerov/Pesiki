import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./dogDetails.css";

export default class DogDetails extends Component {
  state = {
    image: null
  };

  componentDidMount() {
    this.updateDog();
  }

  componentDidUpdate(prevProps) {
    if (this.props.dogBreed !== prevProps.dogBreed) {
      this.updateDog();
    }
  }

  updateDog() {
    const { dogBreed, getData } = this.props;
    if (!dogBreed) {
      return;
    }

    getData(dogBreed).then(dog => {
      this.setState({
        image: dog.message
      });
    });
  }

  render() {
    const { image } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="card dog-detail ">
            <img
              className="card-img-top dog-detail"
              src={image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h3>
                <p className="card-text">{this.props.dogBreed}</p>
              </h3>
              <p className="card-text">
                <Link to="/dog-list">Вернуться к списку пород</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
