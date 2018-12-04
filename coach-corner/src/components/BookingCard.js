import React from "react";
import { connect } from "react-redux";
import { DatePicker, TimePicker, Select, Card } from "antd";
import { updateBooking } from "../redux/actions/bookings";
import moment from "moment-timezone";
import _ from "lodash";
import "../styles/BookingCard.css";

const Option = Select.Option;

class BookingCard extends React.Component {

  assignedToChanged = (staffID, bookingID) => {
    const updatedBooking = _.cloneDeep(this.props.booking);
    updatedBooking.assignedTo = staffID
      ? this.props.staff[staffID]
      : null;
    updateBooking(updatedBooking);
  }

  onDateChanged = (date, bookingID) => {
    const updatedBooking = _.cloneDeep(this.props.booking);
    updatedBooking.date.date = date;
    updateBooking(updatedBooking);
  }

  onTimeChanged = (time, bookingID) => {
    const updatedBooking = _.cloneDeep(this.props.booking);
    updatedBooking.date.time = time;
    updateBooking(updatedBooking);
  }

  render() {
    const staff = Object.values(this.props.staff);
    const booking = this.props.booking;

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

    const assignedTo = booking.assignedTo
      ? booking.assignedTo._id
      : null;

    const serviceArr = booking.services.map((service) => {
      return service.name;
    });
    const vehicleStr = `${booking.vehicle.year} ${booking.vehicle.make} ` +
      `${booking.vehicle.model} ${booking.vehicle.engine}`;

    return (
      <Card
        title={serviceArr.join(', ')}
        key={booking._id}
        className="bookingCard"
      >
        <p>Date: {booking.date.date}</p>
        <p>Time: {booking.date.time}</p>
        <p>Vehicle: {vehicleStr}</p>
        <p>Contact: {`${booking.contactInfo.name} ${booking.contactInfo.email} ${booking.contactInfo.phone}`}</p>
        <p>Notes: {booking.finalInfo.notes}</p>
        <div>
          <p>Assign A Staff Member</p>
          <Select
            defaultValue={assignedTo}
            onChange={(staffID) => this.assignedToChanged(staffID, booking._id)}
            style={{ width: "200px" }}
          >
            {assignedToOptions}
          </Select>
        </div>
        <div>
          <p>Reschedule Date</p>
          <DatePicker
            onChange={(date) => this.onDateChanged(date, booking._id)}
            defaultValue={moment(booking.date.date)}
          />
        </div>
        <div>
          <p>Reschedule Time</p>
          <TimePicker
            onChange={(time) => this.onTimeChanged(time, booking._id)}
            defaultValue={moment(booking.date.time)}
          />
        </div>
        <div>
          <p>
            Review Link:&nbsp;
            <a href={`/write-a-review/${booking._id}`}>
              localhost:3000/write-a-review/{booking._id}
            </a>
          </p>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
});

BookingCard = connect(mapStateToProps)(BookingCard);

export default BookingCard;
