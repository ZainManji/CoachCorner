import React from "react";
import { Card } from "antd";
import BookingCard from "../components/BookingCard";
import { connect } from "react-redux";
import { fetchStaff } from "../redux/actions/staffs";
import "../styles/AdminBookings.css";

class AdminBookings extends React.Component {

  componentDidMount() {
    fetchStaff();
  }

  render() {
    const bookings = this.props.bookings ?
      this.props.bookings.map((booking, index) => {
        return (
          <BookingCard
            booking={booking}
            staff={this.props.staff}
          />
        );
      })
    : [];
    return (
      <div>
        {bookings}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  staff: state.staffs.data,
});

AdminBookings = connect(mapStateToProps)(AdminBookings);

export default AdminBookings;
