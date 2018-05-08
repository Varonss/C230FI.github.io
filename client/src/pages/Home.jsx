import React from "react";

import RestaurantList from "../component/Home/restaurant.jsx";


class Restaurants extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
          <div>
            <div>
              <center><RestaurantList /></center>
            </div>
          </div>
    );
  }
};

export default Restaurants;
