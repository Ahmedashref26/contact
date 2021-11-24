import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from 'form-serialize'

const CraeteContact = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });

    props.onCreateContact && props.onCreateContact(values);
  };

  return (
    <div>
      <Link to="/" className="close-create-contact">
        Close
      </Link>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default CraeteContact;
