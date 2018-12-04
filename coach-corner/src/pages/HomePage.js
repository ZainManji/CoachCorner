// @flow
import React from "react";
import { Layout } from "antd";
import Navigation from "../components/Navigation";

type Props = {
};

type State = {
};

class HomePage extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <Layout>
        <Navigation index="0" />
      </Layout>
    );
  }
}

export default HomePage;
