import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./override.css";
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  return (
    <Header className={`ant-layout-header ${isFixed ? "fixed" : ""}`}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item onClick={() => navigate("/")} key="1" style={{ fontSize: "20px" }}>
          US News
        </Menu.Item>

        <Menu.Item onClick={() => navigate("/tech")} key="2" style={{ fontSize: "20px" }}>
          Technology
        </Menu.Item>

        <Menu.Item onClick={() => navigate("/bbc")} key="3" style={{ fontSize: "20px" }}>
          BBC News
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
