// @flow

import React from "react";
import { connect } from "react-redux";
import { Table, Layout, message } from "antd";
import AdminServices from "../components/AdminServices"
import Navigation from "../components/Navigation";
import { fetchServices } from "../redux/actions/services";
import _ from "lodash";
import moment from "moment-timezone";

type Props = {
};

type State = {
};

class AdminServicesPage extends React.Component<Props, State> {
  state = {
  };

  componentDidMount() {
    fetchServices();
  }

  render() {
    return (
      <Layout>
        <Navigation index="6" />
        <AdminServices
          services={this.props.services}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  services: state.services.data,
});

AdminServicesPage = connect(mapStateToProps)(AdminServicesPage);

export default AdminServicesPage;
