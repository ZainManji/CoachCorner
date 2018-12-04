// @flow
import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Navigation from "../components/Navigation";
import AdminBookings from "../components/AdminBookings";
import AdminBusinessHours from "../components/AdminBusinessHours";
import { fetchBookings } from "../redux/actions/bookings";
import { fetchUsersByEmail } from "../redux/actions/users";
import _ from "lodash";

type Props = {
};

type State = {
};

class AdminPage extends React.Component<Props, State> {
  state = {
  };

  componentDidMount() {
    fetchBookings();
    fetchUsersByEmail("zain@fiix.io");
  }

  render() {
    const user = _.isEmpty(this.props.users)
      ? null
      : Object.values(this.props.users)[0];
    
    return (
      <Layout>
        <Navigation index="2" />
        <AdminBookings
          bookings={Object.values(this.props.bookings)}
        />
        <AdminBusinessHours
          user={user}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  bookings: state.bookings.data,
  users: state.users.data
});

AdminPage = connect(mapStateToProps)(AdminPage);

export default AdminPage;
