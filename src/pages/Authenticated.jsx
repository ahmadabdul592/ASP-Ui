import { Layout, Menu, Button } from "antd";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Forum from "./Forum";
import logo from "../assets/logo.png";

const { Header, Content, Footer } = Layout;

const Authenticated = () => {
  const navigate = useNavigate();
  return (
    <Layout
      style={{
        height: "120vh",
        margin: "0px",
      }}
    >
      <Header
        theme="light"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
          }}
        >
        <div className="logo" style={{ padding: 10 }}>
          <img src={logo} alt="logo" height={50} />
        </div>
        
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={[
            {
              key: "home",
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "forum",
              label: "Forum",
              onClick: () => navigate("/forum"),
            },
          ]}
          />
        <div style={{ padding: "0px 10px" }}>
        <Button
          style={{
            borderRadius: "5px",
          }}
          >
          Logout
        </Button>
        </div>
      </div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Authenticated;
