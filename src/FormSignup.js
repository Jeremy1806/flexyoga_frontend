import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import axios from "axios";

function FormSignup({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();

  const [showMessageEdit, setShowMessageEdit] = useState(false);
  const [messageEdit, setMessageEdit] = useState();

  const [showMessagePay, setShowMessagePay] = useState(false);
  const [messagePay, setMessagePay] = useState();

  function submit_enroll() {
    console.log(values);
    axios
      .post("https://priyanshusingh1806.pythonanywhere.com/api/enroll", {
        body: values,
      })
      .then((response) => {
        console.log(response);
        setShowMessage(true);
        setMessage(response.data["message"]);
        // return <h1>{response.data["msg"]}</h1>;
        console.log(response.data["message"]);
        // alert(response.data["msg"]);
      });
  }

  function submit_edit() {
    console.log(values);
    axios
      .put("https://priyanshusingh1806.pythonanywhere.com/api/batch", {
        body: values,
      })
      .then((response) => {
        setShowMessageEdit(true);
        setMessageEdit(response.data["message"]);
        // return <h1>{response.data["msg"]}</h1>;
        console.log(response.data["message"]);
      });
  }

  function submit_payment() {
    console.log(values);
    axios
      .put("https://priyanshusingh1806.pythonanywhere.com/api/pay", {
        body: values,
      })
      .then((response) => {
        setShowMessagePay(true);
        setMessagePay(response.data["message"]);
        // return <h1>{response.data["msg"]}</h1>;
        console.log(response.data["message"]);
      });
  }

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Strengthen your Immune system with yoga</h1>
        <h2>Join us Today</h2>
        {/* user name */}
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Users Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Your Full Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        {/*  */}

        {/* user email*/}
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Entern Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        {/*  */}
        {/* user age */}

        <div className="form-todo">
          <label htmlFor="age" className="form-label1">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            className="form-age"
            placeholder="Enter your Age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div className="form-inputs">
          <label for="batch">Select Batch</label>
          <select
            id="batch"
            name="batch"
            value={values.batch}
            onChange={handleChange}
          >
            <option value="6-7 AM">6am-7am</option>
            <option value="7-8 AM">7am-8am</option>
            <option value="8-9 AM">8am-9am</option>
            <option value="5-6 PM">5pm-6pm</option>
          </select>
        </div>
        <div className="btn">
          <div>
            <button
              className="form-input-btn1"
              type="submit"
              name="enroll"
              onClick={submit_enroll}
            >
              Add User
            </button>
            {showMessage && <p>{message}</p>}
          </div>
          <div>
            <button
              className="form-input-btn2"
              type="submit"
              name="edit"
              onClick={submit_edit}
            >
              Change Batch
            </button>
            {showMessageEdit && <p>{messageEdit}</p>}
          </div>

          <div>
            <button
              className="form-input-btn3"
              type="submit"
              name="payment"
              onClick={submit_payment}
            >
              PayFee
            </button>
            {showMessagePay && <p>{messagePay}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSignup;
