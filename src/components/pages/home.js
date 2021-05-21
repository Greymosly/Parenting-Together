import React, { Component } from "react";

import homeImage from "../../../static/assets/Images/Imogene/Banner2.png";

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="homepage">
        <div className="homepage__img">
          <img src={homeImage} />
        </div>
        <div className="homepage__text">
        “Co-parenting is not a competition. It’s a collaboration of two homes
          working together with the best interest of the child at heart. Work
          for your kids, not against them.” This is all about Imogene and the
          joy she brings to all our lives. This is here to celebrate Imogene and
          allow us to manage the parenting schedule and plan for big events in
          her life. Imogene may have two houses but she shares one united home
          in the bettering of her life.
        </div>
      </div>
    );
  }
}
