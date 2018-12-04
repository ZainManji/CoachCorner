import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class FinalSteps extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        this.props.onFinalSelect(values);

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
          width: '300px',
          margin: '0px auto'
        }}
      >
        <h3>Enter Your Contact Info</h3>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Extra Notes" >
            {getFieldDecorator('notes', {
              rules: [{
                required: true,
                message: 'Please enter any additional notes'
              }],
            })(<Input placeholder="Enter any additional notes" />)}
          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
              type="primary"
              disabled={this.hasErrors(getFieldsValue(), getFieldsError())}
            >
              Book Appointment
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

FinalSteps = Form.create()(FinalSteps);

export default FinalSteps;
