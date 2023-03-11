import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setisError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5 col-6">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="rounded-circle shadow my-4"
      />
      <h3>{user.login}</h3>
    </article>
  );
};

const Loading = () => {
  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <h2>Loading...</h2>;
    </article>
  );
};

const Error = () => {
  return <h2>Sorry, there is an Error</h2>;
};

export default ConditionalRendering;
