import React from "react";
import Section from "../Section/Section";
import { Contianer } from "./styles";

const Home = () => {
  return (
    <Contianer>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />{" "}
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />{" "}
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />{" "}
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Less Than a New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButtonText="Shop now"
      />
    </Contianer>
  );
};

export default Home;
