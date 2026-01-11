/*import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was:${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm*/








/*

import "../styles/z1.css"; 
function PaymentForm() {
  const validateForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value.trim();
    const card = form.card.value.trim();
    const cvv = form.cvv.value.trim();
    const name = form.name.value.trim();
    const amount = form.amount.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(vit\.ac\.in|vitstudents\.ac\.in)$/;
    if (!emailRegex.test(email)) {
      alert("Allow the payment only who belongs to VIT");
      return;
    }

    const cardRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    if (!cardRegex.test(card)) {
      alert("Card number must be in format 0000-0000-0000-0000");
      return;
    }

    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(cvv)) {
      alert("CVV must be exactly 3 digits");
      return;
    }

    const firstName = name.split(" ")[0];
    const last4Digits = card.slice(-4);
    const username = `${firstName}${last4Digits}`;

    alert(`
      Welcome ${username},\n\nYour payment of rupees ${amount} is successful.`);
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Details</h2>
      <p>Complete your purchase by providing your payment details</p>
      <form onSubmit={validateForm}>
        <label>Email address:</label>
        <input type="email" name="email" required />

        <label>Card details:</label>
        <input type="text" name="card" placeholder="0000-0000-0000-0000" required />

        <label>CVV:</label>
        <input type="text" name="cvv" placeholder="CVV" required />

        <label>Cardholder name:</label>
        <input type="text" name="name" required />

        <label>Amount:</label>
        <input type="number" name="amount" required />

        <button type="submit">Validate</button>
      </form>
    </div>
  );
}
export default PaymentForm;/*











/*

import "../styles/z1.css"; 

function BankForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const prefix = form.prefix.value.trim();
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const dob = form.dob.value;

    const allowedPrefixes = ["Mr.", "Mrs.", "Dr"];
    if (!allowedPrefixes.includes(prefix)) {
      alert("Prefix must be Mr., Mrs., or Dr");
      return;
    }

    if (!/^[A-Z][a-z]*$/.test(firstName)) {
      alert("First name must start with an uppercase letter");
      return;
    }

    if (!/^[A-Z]$/.test(lastName)) {
      alert("Last name must be a single uppercase initial");
      return;
    }

    const birthYear = new Date(dob).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    alert(`Welcome ${prefix} ${firstName}${lastName}, you are ${age}!`);
  };

  return (
    <div className="form-container">
      <h2>Bank Account Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Account Information</legend>
          <label>Account Type</label>
          <select name="accountType" required>
            <option value="Saving">Saving Account</option>
            <option value="Current">Current Account</option>
            <option value="RD">RD</option>
          </select>

          <label>Currency Type</label>
          <select name="currencyType" required>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Personal Information</legend>
          <p className="info-note">
            The information given in this section is considered as the information of the primary account owner information.
          </p>

          <label>Prefix</label>
          <input type="text" name="prefix" placeholder="Mr., Mrs., Dr" required />

          <label>First Name</label>
          <input type="text" name="firstName" required />

          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="E.g., D" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="(000) 000-0000" required />

          <label>Date of Birth</label>
          <input type="date" name="dob" required />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default BankForm;*/











/*
import React from 'react';
import '../styles/z1.css';

function MedicalInsuranceCalculator() {
  function calculateSum(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const income = parseInt(document.getElementById("income").value);
    const depCount = parseInt(document.getElementById("deps").value);
    let allSenior = true;
    let valid = true;

    if (depCount >= 2) {
      for (let i = 1; i <= depCount; i++) {
        const age = parseInt(document.getElementById(`age${i}`).value);
        if (age <= 70) {
          allSenior = false;
        }
        if (!age || age < 0) {
          valid = false;
        }
      }
    } else {
      valid = false;
    }

    if (!valid) {
      alert("Please enter valid dependency info (at least 2, with valid ages).");
      return;
    }

    const sumAssured = allSenior ? 0.5 * income : 0.25 * income;
    alert(`Welcome ${name},\nSum Assured: ₹${sumAssured.toLocaleString()}`);
  }

  function generateDependencyFields() {
    const count = parseInt(document.getElementById("deps").value);
    const container = document.getElementById("dependencies");
    container.innerHTML = "";

    if (count >= 2) {
      for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.innerHTML = `
          <label>Relationship:</label>
          <input type="text" id="rel${i}" required />
          <label>Age:</label>
          <input type="number" id="age${i}" required />
          <label>Gender:</label>
          <input type="radio" name="gender${i}" value="Male" /> Male
          <input type="radio" name="gender${i}" value="Female" /> Female
          <br/><br/>
        `;
        container.appendChild(div);
      }
    }
  };

  return (
    <div>
      <h2>Medical Insurance Sum Calculator</h2>
      <form onSubmit={calculateSum}>
        <label>Name:</label>
        <input type="text" id="name" required />

        <label>Annual Income:</label>
        <select id="income" required>
          <option value="500000">Below ₹5,00,000</option>
          <option value="1000000">₹5,00,000 - ₹10,00,000</option>
          <option value="1500000">Above ₹10,00,000</option>
        </select>

        <label>Number of Dependencies:</label>
        <input type="number" id="deps" min="0" onChange={generateDependencyFields} required />

        <div id="dependencies"></div>

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default MedicalInsuranceCalculator;*/


















