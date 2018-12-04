import React from "react";
import { Icon, Menu, Button } from "antd";
import _ from "lodash";

const { SubMenu } = Menu;

class SelectService extends React.Component {

  state = {
    selectedKeys: {}
  };

  handleSubmit = () => {
    this.props.onServiceSelect(Object.values(this.state.selectedKeys));
  }

  handleClick = (e) => {
    const temp = this.state.selectedKeys;
    if (e.key in temp) {
      delete temp[e.key];
    } else {
      temp[e.key] = this.props.services[e.key];
    }

    this.setState({
      selectedKeys: temp
    });
  }

  render() {
    // Need to get defaultSelectedKeys and defaultOpenKeys
    const defaultSelectedKeys = [];
    const defaultOpenKeys = {};
    this.props.selectedServices.forEach((selectedService) => {
      defaultSelectedKeys.push(selectedService._id);
      if (!(selectedService.category in defaultOpenKeys)) {
        defaultOpenKeys[selectedService.category] = true;
      }
    });

    const grouped = {};
    Object.keys(this.props.services).forEach((serviceID) => {
      const service = this.props.services[serviceID];
      if (service.category in grouped) {
        grouped[service.category].push(service);
      } else {
        grouped[service.category] = [service];
      }
    });

    const items = [];

    Object.keys(grouped).forEach((group) => {
      const subItems = [];

      grouped[group].forEach((service) => {
        subItems.push(
          <Menu.Item key={service._id}>
            {service.name}
          </Menu.Item>
        );
      });

      items.push(
        <SubMenu
          key={group}
          title={<span><Icon type="appstore" /><span>{group}</span></span>}
        >
          {subItems}
        </SubMenu>
      );
    });

    return (
      <div
        style={{
          width: '100%'
        }}
      >
        <Menu
          mode="inline"
          multiple={true}
          onClick={this.handleClick}
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={Object.keys(defaultOpenKeys)}
        >
          {items}
        </Menu>
        <Button
          type="primary"
          onClick={this.handleSubmit}
          style={{
            margin: '25px auto',
            display: 'flex'
          }}
          disabled={_.isEmpty(this.state.selectedKeys)}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default SelectService;
