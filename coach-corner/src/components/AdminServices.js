import React from "react";
import { Table, Form, Input, InputNumber, Button } from "antd";
import { addService } from "../redux/actions/services";
import _ from "lodash";

const FormItem = Form.Item;

const COLUMNS = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Length',
  dataIndex: 'length',
  key: 'length',
}];

class AdminServices extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        addService(values);

        this.props.form.resetFields();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const servicesList = Object.values(this.props.services).map((service) => {
      return (
        <p>
          {service._id}, {service.name}, {service.price}, {service.category}, {service.length}
        </p>
      );
    });
    const services = _.isEmpty(this.props.services)
      ? []
      : (
        <Table
          columns={COLUMNS}
          dataSource={Object.values(this.props.services)}
        />
      );

    return (
      <div>
        <h3>Enter A Service</h3>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Service Name" >
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: 'Please enter a service name'
              }],
            })(<Input placeholder="Enter a service name" />)}
          </FormItem>
          <FormItem label="Service Price" >
            {getFieldDecorator('price', {
              rules: [{
                required: true,
                message: 'Please enter a price for the service'
              }],
            })(<InputNumber min={0} step={0.01} />)}
          </FormItem>
          <FormItem label="Service Category" >
            {getFieldDecorator('category', {
              rules: [{
                required: true,
                message: 'Please enter a category for the service'
              }],
            })(<Input placeholder="Enter a service category" />)}
          </FormItem>
          <FormItem label="Service Length (In Minutes)" >
            {getFieldDecorator('length', {
              rules: [{
                required: true,
                message: 'Please enter a service length (in minutes)'
              }],
            })(<InputNumber min={0} />)}
          </FormItem>
          <FormItem>
            <Button htmlType="submit" type="primary">Submit</Button>
          </FormItem>
        </Form>
        {services}
      </div>
    );
  }
}

AdminServices = Form.create()(AdminServices);

export default AdminServices;
