import React from "react";
import Logo from "../img/footer.png";

export const Footer = () => {
  return (
    <nav
      className=""
      style={{ backgroundColor: "#AAD8D3", borderBottom: "1px solid black",textAlign: "center" }}
    >
      <div className="">
        <a>
          <img src={Logo} alt="" style={{ width: 150, height: 130 }} />
        </a>
      </div>
    </nav>
  );
};
