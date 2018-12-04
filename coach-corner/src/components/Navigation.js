// @flow
import React from "react";
import { Menu } from "antd";

type Props = {
  index: string
};

type State = {
};

class Navigation extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <Menu
        selectedKeys={[this.props.index]}
        mode="horizontal"
      >
        <Menu.Item key="0">
          <a href="/">
            Dashboard
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/book">
            Book An Appointment
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="/admin">
            Admin
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="/scheduler">
            Scheduler
          </a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="/staff">
            Staff
          </a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="/leads">
            Leads
          </a>
        </Menu.Item>
        <Menu.Item key="6">
          <a href="/services">
            Services
          </a>
        </Menu.Item>
        <Menu.Item key="7">
          <a href="/reviews">
            Reviews
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
