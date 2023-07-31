import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_UMPIRE_MUTATION = gql`
  mutation CreateUmpire($input: NewUmpire!) {
    createUmpire(input: $input) {
      name
      username
      email
    }
  }
`;

const CreateUmpire = () => {
  const [umpireInfo, setUmpireInfo] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [createUmpire, { loading, error, data }] = useMutation(CREATE_UMPIRE_MUTATION);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUmpire({
      variables: { input: umpireInfo },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUmpireInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Create Umpire</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={umpireInfo.name} onChange={handleChange} />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={umpireInfo.username} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={umpireInfo.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={umpireInfo.password} onChange={handleChange} />
        </label>
        <button type="submit">Create Umpire</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <p>
          New Umpire Created - Name: {data.createUmpire.name}, Username: {data.createUmpire.username}, Email: {data.createUmpire.email}
        </p>
      )}
    </div>
  );
};

export default CreateUmpire;
