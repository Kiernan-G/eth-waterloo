import React, { useState } from "react";

const AddForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with name and address here
    console.log(`Name: ${name}, Address: ${address}`);

    // Clear the input fields and hide the form
    setName("");
    setAddress("");
    setIsFormVisible(false);
  };

  return (
    <div>
      {!isFormVisible && (
        <button onClick={() => setIsFormVisible(true)}>Add</button>
      )}

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddForm;
