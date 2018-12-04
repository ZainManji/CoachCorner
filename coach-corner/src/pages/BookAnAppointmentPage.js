// @flow
import React from "react";
import { connect } from "react-redux";
import { Card, Icon, Layout, message } from "antd";
import { isEmpty } from "lodash";
import Navigation from "../components/Navigation";
import BookAnAppointmentStep from "../components/BookAnAppointmentStep";
import SelectService from "../components/SelectService";
import SelectVehicle from "../components/SelectVehicle";
import ContactInfo from "../components/ContactInfo";
import SelectDate from "../components/SelectDate";
import FinalSteps from "../components/FinalSteps";

import { addBooking } from "../redux/actions/bookings";
import { addLead } from "../redux/actions/leads";
import { fetchServices } from "../redux/actions/services";
import { fetchUsersByEmail } from "../redux/actions/users";
import _ from "lodash";


const { Meta } = Card;

type Props = {
};

type State = {
};

class BookAnAppointmentPage extends React.Component<Props, State> {
  state = {
    currentIndex: 0,
    selectedServices: {},
    selectedVehicle: {},
    contactInfo: {},
    date: {},
    finalInfo: {}
  };

  componentDidMount() {
    fetchServices();
    fetchUsersByEmail("zain@fiix.io");
  }

  onHandleBack = () => {
    const newIndex = this.state.currentIndex - 1;
    this.setState({
      currentIndex: newIndex
    });
  }

  onServiceSelect = (selectedServices) => {
    this.setState({
      currentIndex: 1,
      selectedServices: selectedServices
    });
  }

  onVehicleSelect = (selectedVehicle) => {
    this.setState({
      currentIndex: 2,
      selectedVehicle: selectedVehicle
    });
  }

  onContactInfoSelect = (contactInfo) => {
    this.setState({
      currentIndex: 3,
      contactInfo: contactInfo
    });

    // Call Add Lead redux function
    addLead({
      services: this.state.selectedServices,
      vehicle: this.state.selectedVehicle,
      contactInfo: contactInfo
    });

    message.success('Lead Saved!');
  }

  onDateSelect = (date) => {
    this.setState({
      currentIndex: 4,
      date: date
    });
  }

  onFinalSelect = (finalInfo) => {
    this.setState({
      currentIndex: 5,
      finalInfo: finalInfo
    });

    message.success('All Steps Complete!');

    // Call redux to book appointment
    addBooking({
      services: this.state.selectedServices,
      vehicle: this.state.selectedVehicle,
      contactInfo: this.state.contactInfo,
      date: this.state.date,
      finalInfo: finalInfo
    });
  }

  render() {
    let step;
    const user = _.isEmpty(this.props.users)
      ? null
      : Object.values(this.props.users)[0];

    if (this.state.currentIndex === 0) {
      step = (
        <SelectService
          onServiceSelect={this.onServiceSelect}
          services={!isEmpty(this.props.services) ? this.props.services : {}}
          selectedServices={Object.values(this.state.selectedServices)}
        />
      );
    } else if (this.state.currentIndex === 1) {
      step = (
        <SelectVehicle
          onVehicleSelect={this.onVehicleSelect}
          onHandleBack={this.onHandleBack}
          selectedVehicle={this.state.selectedVehicle}
        />
      );
    } else if (this.state.currentIndex === 2) {
      step = (
        <ContactInfo
          onContactInfoSelect={this.onContactInfoSelect}
          onHandleBack={this.onHandleBack}
          selectedContactInfo={this.state.contactInfo}
        />
      );
    } else if (this.state.currentIndex === 3) {
      step = (
        <SelectDate
          onDateSelect={this.onDateSelect}
          user={user}
          onHandleBack={this.onHandleBack}
          selectedDate={this.state.date}
        />
      );
    } else if (this.state.currentIndex === 4) {
      step = (
        <FinalSteps
          onFinalSelect={this.onFinalSelect}
          onHandleBack={this.onHandleBack}
        />
      );
    }

    const serviceList = Object.values(this.state.selectedServices).map((service) => {
      return (<p>{service.name}</p>);
    });

    const servicesCard = _.isEmpty(this.state.selectedServices)
      ? []
      : (
          <Card
            title="Services"
          >
            {serviceList}
          </Card>
        );

    const contactInfoList = Object.values(this.state.contactInfo).map((info) => {
      return (<p>{info}</p>);
    });

    const contactInfoCard = _.isEmpty(this.state.contactInfo)
      ? []
      : (
          <Card
            title="Contact Info"
          >
            {contactInfoList}
          </Card>
        );

    const finalInfo = Object.values(this.state.finalInfo).map((info) => {
      return (<p>{info}</p>);
    });
    const finalInfoCard = _.isEmpty(this.state.finalInfo)
      ? ""
      : (
        <Card
          title="Final Details"
        >
          {finalInfo}
        </Card>
      );

    const vehicle = this.state.selectedVehicle;
    const vehicleCard = _.isEmpty(vehicle)
      ? ""
      : (
          <Card
            title="Vehicle"
          >
            <p>{`${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.engine}`}</p>
          </Card>
      );

    const dateCard = _.isEmpty(this.state.date)
      ? []
      : (
        <Card
          title="Date & Time"
        >
          <p>{`${this.state.date.date}`}</p>
          <p>{`${this.state.date.time}`}</p>
        </Card>
      );

    return (
      <Layout>
        <Navigation index="1" />
        <div
          style={{
            width: '65%'
          }}
        >
          <div
            style={{
              margin: '50px auto'
            }}
          >
            <BookAnAppointmentStep
              currentIndex={this.state.currentIndex}
            />
          </div>
          <div
            style={{
              margin: '0 auto'
            }}
          >
            <div
              style={{
              }}
            >
              {step}
            </div>
            {servicesCard}
            {vehicleCard}
            {contactInfoCard}
            {dateCard}
            {finalInfoCard}
          </div>
        </div>
        <div
          style={{
            width: '25%'
          }}
        >
          <Card
            style={{ width: '300px' }}
            cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="Did You Know?"
              description={
                <div>
                  <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>Test 1
                  <br />
                  <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>Test 2
                  <br />
                  <div>
                    <a href="/reviews">Read 1000+ Reviews</a>
                  </div>
                </div>
              }
            />
          </Card>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  bookings: state.bookings.data,
  leads: state.leads.data,
  services: state.services.data,
  users: state.users.data,
});

BookAnAppointmentPage = connect(mapStateToProps)(BookAnAppointmentPage);

export default BookAnAppointmentPage;
