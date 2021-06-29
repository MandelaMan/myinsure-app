import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />
  );
  return <Spin indicator={antIcon} />;
};

export default Loader;
