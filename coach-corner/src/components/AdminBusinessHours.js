import React from "react";
import { Form, TimePicker, Button } from "antd";
import { updateUser } from "../redux/actions/users";
import moment from "moment-timezone";
import _ from "lodash";

const FormItem = Form.Item;

class AdminBusinessHours extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        const hours = _.cloneDeep(this.props.user.businessHours);
        Object.keys(values).forEach((key) => {
          if (values[key]) {
            hours[key] = values[key];
          } else if (!hours[key]) {
            hours[key] = null;
          }
        });

        updateUser({
          _id: this.props.user._id,
          businessHours: hours
        });

        this.props.form.resetFields();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const format = "H:mm";

    const businessHoursStr = this.props.user
      ? Object.keys(this.props.user.businessHours).map((key) => {
        return (<div>{key}: {this.props.user.businessHours[key]}</div>);
      })
      : [];

    return (
      <div>
        <h3>Hours</h3>
        {businessHoursStr}
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Sunday" >
            {getFieldDecorator('sundayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('sundayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="Monday" >
            {getFieldDecorator('mondayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('mondayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="Tuesday" >
            {getFieldDecorator('tuesdayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('tuesdayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="Wednesday" >
            {getFieldDecorator('wednesdayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('wednesdayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="Thursday" >
            {getFieldDecorator('thursdayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('thursdayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="Friday" >
            {getFieldDecorator('fridayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('fridayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="Saturday" >
            {getFieldDecorator('saturdayStart', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem label="" >
            {getFieldDecorator('saturdayEnd', {
            })(
              <TimePicker
                use12Hours
                format={format}
                minuteStep={30}
              />
            )}
          </FormItem>
          <FormItem>
            <Button htmlType="submit" type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

AdminBusinessHours = Form.create()(AdminBusinessHours);

export default AdminBusinessHours;
