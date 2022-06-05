import React from "react";
import { useState } from "react";
import EmailInput from "../shared/EmailInput";
import PasswordInput from "../shared/PasswordInput";
import SingleClickButton from "../shared/SingleClickButton";
import TextInput from "../shared/TextInput";
import axios from "axios";
import { DatePicker } from "../shared/DatePicker";

interface CreateAccountRequest {
    firstName: string;
    lastName: string,
    dob: Date,
    email: string;
    password: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;

}

function ClientCreate() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDOB] = useState(new Date());
    const[email, setEmail] = useState("");
    const[password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const handleClientFirstNameInput = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {
        setfirstName((event.target as HTMLInputElement).value);
      };

      const handleClientLastNameInput = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {
        setLastName((event.target as HTMLInputElement).value);
      };

    
      const handleEmailInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setEmail((event.target as HTMLInputElement).value);
      };
    
      const handlePassword1Input = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {
        setPassword1((event.target as HTMLInputElement).value);
      };
    
      const handlePassword2Input = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {
        setPassword2((event.target as HTMLInputElement).value);
      };
    
      const handleAddress1Input = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {
        setAddress1((event.target as HTMLInputElement).value);
      };
    
      const handleAddress2Input = (
        event: React.KeyboardEvent<HTMLInputElement>
      ) => {
        setAddress2((event.target as HTMLInputElement).value);
      };
    
      const handleCityInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setCity((event.target as HTMLInputElement).value);
      };
    
      const handleStateInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setState((event.target as HTMLInputElement).value);
      };
    
      const handleZipInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setZip((event.target as HTMLInputElement).value);
      };
    
      function comparePasswords() : boolean {
          let response = true;
          if (password1 != password2) {
              alert("Passwords do not match");
              response = false;
          }
          return response;
      }
    
      function buildRequest() {
          let passwordsMatch = comparePasswords();
          let response = {} as CreateAccountRequest;
          if (passwordsMatch) {
              response.firstName = firstName;
              response.lastName = lastName;
              response.dob = dob;
              response.email = email;
              response.password = password1;
              response.address1 = address1;
              response.address2 = address2;
              response.city = city;
              response.state = state;
              response.zip = zip;
          }
          return response;
      }
    
      function createAccount() {
          let request = buildRequest();
          axios.post("http://localhost:4000/client/create", request)
          .catch((error) => {
              console.log(error);
          });
      }
    
      return (
        <>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="col-span-2"></div>
            <div className="col-span-4 h-4">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-2xl">
                <h1 className="text-2xl mb-4">Create Account</h1>
                <div className="grid grid-cols-6 gap-2">
                  <div className="col-span-3">
                  
                    <TextInput
                      label="FirstName"
                      placeholder="First Name"
                      keyUpHandler={handleClientFirstNameInput}
                    />
                    
                  </div>
                  <div className="col-span-3">
                    <TextInput
                        label="LastName"
                        placeholder="Last Name"
                        keyUpHandler={handleClientLastNameInput}
                      />
                  </div>

                  <div className="col-span-6">

                    <DatePicker setDate={ setDOB } labelText = {"Date of Birth"} />
                  </div>

                  <div className="col-span-6">
                    <EmailInput keyUpHandler={handleEmailInput} />
                  </div>
                  <div className="col-span-6">
                    <PasswordInput
                      label="Password"
                      placeholder="Password"
                      keyUpHandler={handlePassword1Input}
                    />
                  </div>
                  <div className="col-span-6">
                    <PasswordInput
                      label="Confirm"
                      placeholder="Confirm Password"
                      keyUpHandler={handlePassword2Input}
                    />
                  </div>
                  <div className="col-span-6">
                    <TextInput
                      label="Adress 1"
                      placeholder="Address 1"
                      keyUpHandler={handleAddress1Input}
                    />
                  </div>
                  <div className="col-span-6">
                    <TextInput
                      label="Address 2"
                      placeholder="Address 2"
                      keyUpHandler={handleAddress2Input}
                    />
                  </div>
                  <div className="col-span-2">
                    <TextInput
                      label="City"
                      placeholder="City"
                      keyUpHandler={handleCityInput}
                    />
                  </div>
                  <div className="col-span-2">
                    <TextInput
                      label="State"
                      placeholder="State"
                      keyUpHandler={handleStateInput}
                    />
                  </div>
                  <div className="col-span-2">
                    <TextInput
                      label="Zip"
                      placeholder="Zip"
                      keyUpHandler={handleZipInput}
                    />
                  </div>
                  <div className="col-span-6">
                      <button onClick={() => {
                          createAccount();
                      }}>Click me</button>
                      <div className="flex justify-end">
                    <SingleClickButton 
                        buttonText="Create"
                        onClickHandler={() => {
                            createAccount(); 
                        }}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );



}

export default ClientCreate;