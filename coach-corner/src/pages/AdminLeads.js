// @flow

import React from "react";
import { connect } from "react-redux";
import { Table, Layout } from "antd";
import Navigation from "../components/Navigation";
import { fetchLeads } from "../redux/actions/leads";
import _ from "lodash";
import moment from "moment-timezone";
import "../styles/AdminLeads.css";

type Props = {
};

type State = {
};

const COLUMNS = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => (
    <span>
      {record.contactInfo.name}
    </span>
  ),
}, {
  title: 'Service(s)',
  dataIndex: 'services',
  key: 'services',
  render: (text, record) => {
    const serviceArr = record.services.map((service) => {
      return (
        <p>{`${service.name} ($${service.price}, ${service.length}m)`}</p>
      );
    });
    return (
      <div>
        {serviceArr}
      </div>
    )
  },
}, {
  title: 'Vehicle',
  dataIndex: 'vehicle',
  key: 'vehicle',
  render: (text, record) => (
    <span>
      {record.vehicle.year} {record.vehicle.make} {record.vehicle.model} {record.vehicle.engine}
    </span>
  ),
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
  render: (text, record) => (
    <span>
      {record.contactInfo.email}
    </span>
  ),
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
  render: (text, record) => (
    <span>
      {record.contactInfo.phone}
    </span>
  ),
}];

class AdminLeads extends React.Component<Props, State> {
  state = {
  };

  componentDidMount() {
    fetchLeads();
  }

  render() {
    return (
      <Layout>
        <Navigation index="5" />
        <Table
          columns={COLUMNS}
          dataSource={Object.values(this.props.leads)}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.data,
});

AdminLeads = connect(mapStateToProps)(AdminLeads);

export default AdminLeads;
