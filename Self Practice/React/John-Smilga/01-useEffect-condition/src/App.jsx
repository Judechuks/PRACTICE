import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const wrongUrl = "https://api.github.com/users/QuincyLarsons";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState("default user");

  useEffect(() => {
    // fetch(wrongUrl)
    fetch(url)
      .then((resp) => {
        // fetch API does not throw an error if file is not found, it only throws an error when there is a network error
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          setErrorMsg(resp.status);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 className="text-center">{errorMsg}</h1>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <main className="">
      <h1>{user}</h1>
    </main>
  );
}
