import React from "react";
import { Steps } from "antd";

const Step = Steps.Step;

class BookAnAppointmentStep extends React.Component {

  render() {
    return (
      <Steps
        size="small"
        current={this.props.currentIndex}
        progressDot
      >
        <Step title="Select A Service" />
        <Step title="Select Your Vehicle" />
        <Step title="View Your Price" />
        <Step title="Select A Date And Time" />
        <Step title="Final Details" />
      </Steps>
    );
  }
}

export default BookAnAppointmentStep;
