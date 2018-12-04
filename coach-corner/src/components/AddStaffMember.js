import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class AddStaffMember extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        this.props.onSubmit(values);

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
        <h3>Add Staff Member</h3>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Name" >
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: 'Please enter a staff name'
              }],
            })(
              <Input
                placeholder="Enter staff name"
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
                message: 'Please enter staff email'
              }],
            })(
              <Input
                placeholder="Enter staff email"
              />)}
          </FormItem>
          <FormItem label="Phone Number" >
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Please enter a staff phone number'
              }],
            })(
              <Input
                placeholder="Enter staff phone number"
              />)}
          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
              type="primary"
              disabled={this.hasErrors(getFieldsValue(), getFieldsError())}
            >
              Add Staff Member
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

AddStaffMember = Form.create()(AddStaffMember);

export default AddStaffMember;
