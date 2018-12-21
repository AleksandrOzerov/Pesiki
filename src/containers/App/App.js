import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Hello from "../../components/Hello/Hello";
import RandomDog from "../../components/RandomDog/RandomDog";
import DogDetails from "../../components/DogDetails/DogDetails";
import ItemList from "../../components/ItemList/ItemList";
import Service from "../../service/service";
import { connect } from "react-redux";
import { getPhoto } from "../../actions/randomDogActions";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  service = new Service();

  dogPageDetail = () => {
    return (
      <DogDetails
        getData={this.service.getBreedDog}
        dogBreed={this.state.selectedDog}
      />
    );
  };

  dogListItem = ({ history }) => {
    return (
      <ItemList
        getData={this.service.getAllDogs}
        onItemSelected={dogBreed => {
          const newPath = `/breed/${dogBreed}`;
          history.push(newPath);
        }}
      />
    );
  };

  render() {
    const { randomDog, dogList, getPhotoActions } = this.props;

    return (
      <Router>
        <div className="container">
          <Header />
          <RandomDog />

          <Route path="/" component={Hello} exact />
          <div className="row mb-2 justify-content-center">
            <div className="col-md-10">
              <Route path="/dog-list" render={this.dogListItem} />
            </div>
          </div>

          <Route path="/breed/" exact render={this.dogPageDetail} />

          <Route
            path="/breed/:breed"
            render={({ match, history }) => {
              const { breed } = match.params;

              return (
                <DogDetails
                  getData={this.service.getBreedDog}
                  dogBreed={breed}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = store => {
  console.log(store);
  return {
    randomDog: store.randomDog,
    dogList: store.dogList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotoActions: image => dispatch(getPhoto(image))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
