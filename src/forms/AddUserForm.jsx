import React, { useState } from "react";
import { Input, Form } from "./validateForm";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <label>Name</label>
        <Input
          type="text"
          onChange={handleInputChange}
          name="name"
          value={user.name}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <label>Username</label>
        <Input
          type="text"
          onChange={handleInputChange}
          name="username"
          value={user.username}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <button>Add new user</button>
      </Form>
    </div>
  );
};

export default AddUserForm;
