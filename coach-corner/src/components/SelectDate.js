import React from "react";
import { DatePicker, TimePicker, Button, Form } from "antd";

const FormItem = Form.Item;

class SelectDate extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        this.props.onDateSelect(values);

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
    const { getFieldDecorator, getFieldsError, getFieldsValue } = this.props.form;
    const businessHoursStr = this.props.user
      ? Object.keys(this.props.user.businessHours).map((key) => {
        return (<div>{key}: {this.props.user.businessHours[key]}</div>);
      })
      : [];

    return (
      <div
        style={{
          'text-align': 'center',
           width: '300px',
           margin: '0px auto'
        }}
      >
        <h3>Enter The Time</h3>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Date" >
            {getFieldDecorator('date', {
              rules: [{
                type: 'object',
                required: true,
                message: 'Please select a date'
              }],
              initialValue: this.props.selectedDate.date,
            })(<DatePicker />)}
          </FormItem>
          <FormItem label="Time" >
            {getFieldDecorator('time', {
              rules: [{
                type: 'object',
                required: true,
                message: 'Please select a time'
              }],
              initialValue: this.props.selectedDate.time,
            })(<TimePicker use12Hours format="H:mm" minuteStep={30} />)}
          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
              type="primary"
              disabled={this.hasErrors(getFieldsValue(), getFieldsError())}
            >
              Next
            </Button>
          </FormItem>
        </Form>
        <Button
          type="primary"
          onClick={this.props.onHandleBack}
        >
          Back
        </Button>
        <h3>Hours Of Business</h3>
        {businessHoursStr}
      </div>
    );
  }

}

SelectDate = Form.create()(SelectDate);

export default SelectDate;
