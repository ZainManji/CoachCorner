// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookAnAppointmentPage from './pages/BookAnAppointmentPage';
import AddReviewPage from "./pages/AddReviewPage";
import AdminLeads from "./pages/AdminLeads";
import AdminPage from "./pages/AdminPage";
import AdminScheduler from "./pages/AdminScheduler";
import AdminServicesPage from "./pages/AdminServicesPage";
import AdminStaff from "./pages/AdminStaff";
import ReviewsPage from "./pages/ReviewsPage";
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: false,
    };
  }

  componentDidMount() {
    store.init();
    this.setState({ isClient: true });
  }

  render() {
    if (this.state.isClient) {
      return (
        <Provider store={store.getStore()}>
          <Router>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/book" component={BookAnAppointmentPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/scheduler" component={AdminScheduler} />
              <Route path="/staff" component={AdminStaff} />
              <Route path="/leads" component={AdminLeads} />
              <Route path="/services" component={AdminServicesPage} />
              <Route path="/reviews" component={ReviewsPage} />
              <Route
                path="/write-a-review"
                render={(props) => {
                  const bookingID = props.location.pathname.split('/')[2];
                  return <AddReviewPage bookingID={bookingID} />;
                }}
              />
            </div>
          </Router>
        </Provider>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default App;
