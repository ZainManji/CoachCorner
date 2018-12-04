import React from "react";
import { connect } from "react-redux";
import { Button, Select } from "antd";
import {
  fetchVehicleYears,
  fetchVehicleMakes,
  fetchVehicleModels,
  fetchVehicleEngines
} from "../redux/actions/vehicles";

const Option = Select.Option;

class SelectVehicle extends React.Component {

  state = {
    year: null,
    make: null,
    model: null,
    engine: null
  };

  componentDidMount() {
    // Fetch vehicle years
    fetchVehicleYears();

    this.setState({
      year: this.props.selectedVehicle.year,
      make: this.props.selectedVehicle.make,
      model: this.props.selectedVehicle.model,
      engine: this.props.selectedVehicle.engine
    });
  }

  handleSubmit = () => {
    this.props.onVehicleSelect({
      year: this.state.year,
      make: this.state.make,
      model: this.state.model,
      engine: this.state.engine
    });
  }

  onYearChange = (year) => {
    fetchVehicleMakes(year);
    this.setState({
      year: year,
      make: null,
      model: null,
      engine: null
    });
  }

  onMakeChange = (make) => {
    fetchVehicleModels(this.state.year, make);
    this.setState({
      make: make,
      model: null,
      engine: null
    });
  }

  onModelChange = (model) => {
    fetchVehicleEngines(this.state.year, this.state.make, model);
    this.setState({
      model: model,
      engine: null
    });
  }

  onEngineChange = (engine) => {
    this.setState({
      engine: engine
    });
  }

  render() {
    const years = this.props.years 
      ? this.props.years.map(year => <Option key={year}>{year}</Option>)
      : [];
    const makes = this.props.makes
      ? this.props.makes.map(make => <Option key={make}>{make}</Option>)
      : [];
    const models = this.props.models
      ? this.props.models.map(model => <Option key={model}>{model}</Option>)
      : [];
    const engines = this.props.engines
      ? this.props.engines.map(engine => <Option key={engine}>{engine}</Option>)
      : [];

    return (
      <div
        style={{
          'text-align': 'center',
          margin: '0px auto'
        }}
      >
        <h3>Select A Vehicle</h3>
        <p>Select A Year</p>
        <Select
          style={{ width: '300px' }}
          placeholder="Select a year"
          onChange={this.onYearChange}
          value={this.state.year}
        >
          {years}
        </Select>
        <p>Select A Make</p>
        <Select
          style={{ width: '300px' }}
          placeholder="Select a make"
          onChange={this.onMakeChange}
          value={this.state.make}
        >
          {makes}
        </Select>
        <p>Select A Model</p>
        <Select
          style={{ width: '300px' }}
          placeholder="Select a model"
          onChange={this.onModelChange}
          value={this.state.model}
        >
          {models}
        </Select>
        <p>Select An Engine Size</p>
        <Select
          style={{ width: '300px' }}
          placeholder="Select an engine"
          onChange={this.onEngineChange}
          value={this.state.engine}
        >
          {engines}
        </Select>
        <Button
          type="primary"
          onClick={this.props.onHandleBack}
          style={{
            margin: '25px auto',
            display: 'flex'
          }}
        >
          Back
        </Button>
        <Button
          type="primary"
          onClick={this.handleSubmit}
          style={{
            margin: '25px auto',
            display: 'flex'
          }}
          disabled={!(this.state.year && this.state.make && this.state.model && this.state.engine)}
        >
          Next
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  years: state.vehicles.years,
  makes: state.vehicles.makes,
  models: state.vehicles.models,
  engines: state.vehicles.engines
});

SelectVehicle = connect(mapStateToProps)(SelectVehicle);

export default SelectVehicle;
