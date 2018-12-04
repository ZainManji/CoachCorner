// @flow

import React from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { message, Layout, Form, Input, Button } from "antd";
import { fetchBookingByID } from "../redux/actions/bookings";
import {
  addReview,
  updateReview,
  fetchReviewByBookingID
} from "../redux/actions/reviews";
import _ from "lodash";

const { TextArea } = Input;
const FormItem = Form.Item;

class AddReviewPage extends React.Component {

  state = {
    disabled: false
  };

  componentDidMount() {
    // fetch booking details
    fetchBookingByID(this.props.bookingID);
    fetchReviewByBookingID(this.props.bookingID);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values: ", values);

        if (_.isEmpty(this.props.review) || !this.props.review) {
          const submission = {
            title: values.title,
            review: values.review,
            bookingID: this.props.booking._id
          };
          addReview(submission);
        } else {
          const submission = _.cloneDeep(this.props.review);
          submission.title = values.title;
          submission.review = values.review;
          updateReview(submission);
        }

        this.setState({
          disabled: true
        });
        message.success("Saved");
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

    const buttonStr = _.isEmpty(this.props.review) || !this.props.review
      ? "Add Review"
      : "Update Review";
    
    return (
      <Layout>
        <Navigation index="7" />
        <div
          style={{
            'text-align': 'center',
            margin: '0px auto',
            width: '300px'
          }}
        >
          <h3>Add Review</h3>
          <Form
            onSubmit={this.handleSubmit}
          >
            <FormItem label="Title" >
              {getFieldDecorator('title', {
                rules: [{
                  required: true,
                  message: 'Please enter a title'
                }],
                initialValue: !_.isEmpty(this.props.review)
                  ? this.props.review.title
                  : ''
              })(
                <Input
                  placeholder="Enter a title"
                />
              )}
            </FormItem>
            <FormItem label="Review" >
              {getFieldDecorator('review', {
                rules: [{
                  required: true,
                  message: 'Please enter a review'
                }],
                initialValue: !_.isEmpty(this.props.review)
                  ? this.props.review.review
                  : ''
              })(
                <TextArea
                  placeholder="Enter a review..."
                />)}
            </FormItem>
            <FormItem>
              <Button
                htmlType="submit"
                type="primary"
                disabled={this.state.disabled || this.hasErrors(getFieldsValue(), getFieldsError())}
              >
                {buttonStr}
              </Button>
            </FormItem>
          </Form>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  booking: state.bookings.booking,
  review: state.reviews.review,
});

AddReviewPage = connect(mapStateToProps)(AddReviewPage);

AddReviewPage = Form.create()(AddReviewPage);

export default AddReviewPage;
