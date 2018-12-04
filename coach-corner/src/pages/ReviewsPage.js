// @flow

import React from "react";
import { connect } from "react-redux";
import { Card, Table, Layout, message } from "antd";
import Navigation from "../components/Navigation";
import { fetchReviews } from "../redux/actions/reviews";
import _ from "lodash";
import moment from "moment-timezone";
//import "../styles/ReviewsPage.css";

type Props = {
};

type State = {
};

class ReviewsPage extends React.Component<Props, State> {
  state = {
  };

  componentDidMount() {
    fetchReviews();
  }

  render() {
    const reviewCards = Object.values(this.props.reviews).map((review) => {
      return (
        <Card
          title={review.title}
        >
          <p>{review.review}</p>
          <p>{review.dateCreated}</p>
        </Card>
      );
    });

    return (
      <Layout>
        <Navigation index="7" />
        <div>
          {reviewCards}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.data,
});

ReviewsPage = connect(mapStateToProps)(ReviewsPage);

export default ReviewsPage;
