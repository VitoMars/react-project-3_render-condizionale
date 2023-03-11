import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="card align-items-center shadow mt-5 p-5 col-6">
      <button className="btn btn-primary shadow" onClick={() => setShow(!show)}>
        {!show ? "Mostra componente 'Timer'" : "Nascondi componente 'Timer'"}
      </button>
      <label htmlFor="">{show && <Timer />}</label>
    </div>
  );
};

const Timer = () => {
  const [contatore, setContatore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => oldValue + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [contatore]);

  return (
    <div className="mt-2">
      <h2>{contatore}</h2>
    </div>
  );
};

export default ShowHide;
