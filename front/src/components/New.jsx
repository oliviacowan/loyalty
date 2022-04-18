import React from "react";
import './New.css';

export default function New() {
  return (
    <section  >
      <h3>Add a New Loyalty Member:</h3>
      <span className="new-name">
      <label>Name: </label>
      <input className="name"/>
      <button>Save</button>
      </span>
    </section>
  )
}