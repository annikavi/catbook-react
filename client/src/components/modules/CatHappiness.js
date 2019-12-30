import React, { Component } from "react";
import "./CatHappiness.css";

/**
 * Component that renders cat happiness
 *
 * Proptypes
 * @param {int} catHappiness is how happy your cat is
 */
class CatHappiness extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CatHappiness-container">
        <div className="CatHappiness-story">
          <p className="CatHappiness-storyContent">
            //TODO: insert happiness counter here!
          </p>
        </div>
      </div>
    );
  }
}

export default CatHappiness;
