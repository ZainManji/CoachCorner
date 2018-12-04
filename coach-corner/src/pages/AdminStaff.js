// @flow

import React from "react";
import { connect } from "react-redux";
import { Table, Layout, message } from "antd";
import AddStaffMember from "../components/AddStaffMember";
import Navigation from "../components/Navigation";
import { fetchStaff, addStaffMember } from "../redux/actions/staffs";
import _ from "lodash";
import moment from "moment-timezone";
import "../styles/AdminStaff.css";

type Props = {
};

type State = {
};

const COLUMNS = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
}];

class AdminStaff extends React.Component<Props, State> {
  state = {
  };

  componentDidMount() {
    fetchStaff();
  }

  onStaffMemberSubmit = (staffMember) => {
    // Call Add Lead redux function
    addStaffMember(staffMember);

    message.success('Saved Staff Member!');
  }

  render() {
    return (
      <Layout>
        <Navigation index="4" />
        <AddStaffMember
          onSubmit={this.onStaffMemberSubmit}
        />
        <Table
          dataSource={Object.values(this.props.staff)}
          columns={COLUMNS}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  staff: state.staffs.data,
});

AdminStaff = connect(mapStateToProps)(AdminStaff);

export default AdminStaff;
