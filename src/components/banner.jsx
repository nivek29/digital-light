import React from "react";

export const Banner = (props) => {
  return (
    <div
      className="row py-5"
      style={{ justifyContent: "center", backgroundColor: "#EEEEEE" }}
    >
      <div className="col-md-12 col-xl-12  " style={{ textAlign: "center" }}>
        <h2 className="ms-4">{props.head}</h2>
        <p className="ms-4">
          {props.message}
        </p>
      </div>

      <div className="col-md-8 col-xl-8  ">
        {props.data.map((user) => (
          <button key={user} type="button" className="btn btn-secondary btn-lg m-2 px-5">
            {user}
          </button>
        ))}
      </div>
    </div>
  );
};
