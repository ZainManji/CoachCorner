import React from "react";
import { connect } from "react-redux";
import { DatePicker, TimePicker, Select, List, Card } from "antd";
import BookingCard from "../components/BookingCard";
import { fetchBookingsForDay, updateBooking } from "../redux/actions/bookings";
import { fetchStaff } from "../redux/actions/staffs";
import moment from "moment-timezone";
import _ from "lodash";
import "../styles/SchedulerColumns.css";

const Option = Select.Option;

class SchedulerColumns extends React.Component {

  componentDidMount() {
    fetchStaff();
    fetchBookingsForDay(this.props.selectedDate);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedDate != this.props.selectedDate) {
      fetchBookingsForDay(this.props.selectedDate);
    }
  }

  render() {
    const columns = {};
    const bookings = Object.values(this.props.bookings);
    const staff = Object.values(this.props.staff);

    const assignedToOptions = staff.map((staffMember) => {
      return (
        <Option
          key={staffMember._id}
          value={staffMember._id}
        >
          {staffMember.name}
        </Option>
      );
    });

    assignedToOptions.unshift(
      <Option
        key="unassignedOption"
        value={null}
      >
        Unassigned
      </Option>
    );

    bookings.forEach((booking) => {
      const bookingDay = moment(booking.date.date);
      if (!this.props.selectedDate.isSame(bookingDay, 'date')) {
        return;
      }

      const card = (
        <BookingCard
          booking={booking}
          staff={this.props.staff}
        />
      );

      const assignedTo = booking.assignedTo
        ? booking.assignedTo._id
        : null;

      if (assignedTo in columns) {
        columns[assignedTo].push(card);
      } else {
        const columnTitle = (
          <h2 key={booking.assignedTo} className="columnTitle">
            {booking.assignedTo ? booking.assignedTo.name : "Unassigned"}
          </h2>
        );
        columns[assignedTo] = [columnTitle, card];
      }
    });


    const lists = Object.values(columns).map((columnCards, index) => {
      return (
        <List
          key={`column${index}`}
          className="schedulerColumn"
          dataSource={columnCards}
          renderItem={item => (
            <List.Item>
              <div className="listItem">
                {item}
              </div>
            </List.Item>
          )}
        />
      );
    });
    
    return (
      <div
        className="schedulerContainer"
      >
        {lists}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookings: state.bookings.data,
  staff: state.staffs.data,
});

SchedulerColumns = connect(mapStateToProps)(SchedulerColumns);

export default SchedulerColumns;
