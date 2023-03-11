import React, { useState } from "react";

const ShortRender = () => {
  const [parola] = useState("Valore");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="card align-items-center shadow p-5 mt-5 col-6">
      <h2>{parola || "Sono un esempio se non è stato inserito un valore"}</h2>
      {toggle ? (
        <h2 className="text-success">Vero</h2>
      ) : (
        <h2 className="text-danger">Falso</h2>
      )}
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
