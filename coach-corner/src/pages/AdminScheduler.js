// @flow
import React from "react";
import { connect } from "react-redux";
import { DatePicker, Layout } from "antd";
import Navigation from "../components/Navigation";
import SchedulerColumns from "../components/SchedulerColumns";
import _ from "lodash";
import moment from "moment-timezone";

type Props = {
};

type State = {
};

class AdminScheduler extends React.Component<Props, State> {
  state = {
    selectedDate: moment()
  };

  onDateChange = (date) => {
    // Change the date of state
    // Call redux action to fetch bookings for this day
    this.setState({
      selectedDate: date
    });
  }

  render() {
    return (
      <Layout>
        <Navigation index="3" />
        <div>
          <h3>Select A Date</h3>
          <DatePicker
            defaultValue={moment()}
            onChange={this.onDateChange}
          />
        </div>
        <div>
          <SchedulerColumns
            selectedDate={this.state.selectedDate}
          />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
});

AdminScheduler = connect(mapStateToProps)(AdminScheduler);

export default AdminScheduler;
