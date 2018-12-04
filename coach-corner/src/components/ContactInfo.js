import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class ContactInfo extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        this.props.onContactInfoSelect(values);

        this.props.form.resetFields();
      }
    });
  }

  hasErrors(fieldsValue, fieldsError) {
    const notFilled = Object.keys(fieldsValue).some(field => !fieldsValue[field]);
    const errors = Object.keys(fieldsError).some(field => fieldsError[field]);
    return notFilled || errors;
  }

  render() {
    const { getFieldDecorator, getFieldsValue, getFieldsError } = this.props.form;
    return (
      <div
        style={{
          'text-align': 'center',
          margin: '0px auto',
          width: '300px'
        }}
      >
        <h3>Enter Your Contact Info</h3>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Name" >
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: 'Please enter a name'
              }],
              initialValue: this.props.selectedContactInfo.name,
            })(
              <Input
                placeholder="Enter your name"
              />
            )}
          </FormItem>
          <FormItem label="Email" >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email',
                message: 'Please input a valid email'
              }, {
                required: true,
                message: 'Please enter your email'
              }],
              initialValue: this.props.selectedContactInfo.email,
            })(
              <Input
                placeholder="Enter your email"
              />)}
          </FormItem>
          <FormItem label="Phone Number" >
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Please enter your phone number'
              }],
              initialValue: this.props.selectedContactInfo.phone,
            })(
              <Input
                placeholder="Enter your phone number"
              />)}
          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
              type="primary"
              disabled={this.hasErrors(getFieldsValue(), getFieldsError())}
            >
              View Price
            </Button>
          </FormItem>
        </Form>
        <Button
          type="primary"
          onClick={this.props.onHandleBack}
        >
          Back
        </Button>
      </div>
    );
  }
}

ContactInfo = Form.create()(ContactInfo);

export default ContactInfo;
