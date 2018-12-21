import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./itemList.css";

class ItemList extends Component {
  id = 1;
  state = {
    itemList: []
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  renderItem(arr) {
    return arr.map(item => {
      return (
        <li
          key={this.id++}
          onClick={() => this.props.onItemSelected(item)}
          className="list-group-item"
        >
          {item}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    const items = this.renderItem(itemList);

    return (
      <div>
        <ul className="item-list list-group">{items}</ul>
      </div>
    );
  }
}
export default withRouter(ItemList);
