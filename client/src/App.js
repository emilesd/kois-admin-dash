import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb, Icon, Typography } from "antd";
import KoisLogo from "./images/scvlogo.png";
import ScvLogo from "./images/koislogo.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//rotes import
import Login from "./routes/Login";
import Points from "./routes/Points";
import Admins from "./routes/Admins";
import Tasks from "./routes/Tasks";
import Documentation from "./routes/Documentation";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export default function() {
  const [collapsed, setCollapsed] = useState(false);
  //const [currentRoute, setCurrentRoute] = useState("points");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{ background: "#345" }}
        width={"300"}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <div style={{ padding: 20 }}>
          <img
            style={{
              width: "100%",
              marginBottom: 15
            }}
            src={KoisLogo}
          />
          <img
            style={{
              width: "100%",
              padding: 15,
              paddingBottom: 0
            }}
            src={ScvLogo}
          />
        </div>
        <hr />
        <Menu
          onClick={e => (window.location = e.key)}
          theme="dark"
          style={{ background: "#345" }}
          mode="inline"
        >
          <Menu.Item key="/points">
            <Icon type="environment" />
            <span>Points</span>
          </Menu.Item>
          <Menu.Item key="/admins">
            <Icon type="user" />
            <span>Admins</span>
          </Menu.Item>
          <Menu.Item key="/documentation">
            <Icon type="file-search" />
            <span>Documentation</span>
          </Menu.Item>
          <Menu.Item key="/tasks">
            <Icon type="paper-clip" />
            <span>Tasks</span>
          </Menu.Item>
          <Menu.Item key="/login">
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#002140",
            padding: 10,
            borderLeft: "1px solid white",
            boxShadow: "0 4px 2px -2px gray"
          }}
        >
          <Title style={{ color: "#fff" }}>
            <Icon type="dashboard" /> Kois Administracija
          </Title>
        </Header>
        <Router>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: "40vh" }}>
              <Switch>
                <Route path="/points">
                  <Points />
                </Route>
                <Route path="/admins">
                  <Admins />
                </Route>
                <Route path="/documentation">
                  <Documentation />
                </Route>
                <Route path="/tasks">
                  <Tasks />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </div>
          </Content>
        </Router>
        <Footer style={{ textAlign: "center" }}>
          Samo Pritrznik & Janez Sedeljsak 2019/20 ©
        </Footer>
      </Layout>
    </Layout>
  );
}