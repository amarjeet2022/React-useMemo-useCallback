import React, { useState } from "react";
import "./App.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const App = () => {
  const validationSchema = Yup.object({
    blueCount: Yup.number()
      .min(1, "Minumum value is required")
      .required("Required"),
    bluePrefix: Yup.string()
      .matches(/^[a-zA-Z]*$/, "Only alphanumeric characters are allowed")
      .required("Required"),
    bluePerRow: Yup.number()
      .min(1, "Minumum value is required")
      .required("Required"),
    redCount: Yup.number()
      .min(1, "Minumum value is required")
      .required("Required"),
    redPrefix: Yup.string()
      .matches(/^[a-zA-Z]*$/, "Only alphanumeric characters are allowed")
      .required("Required"),
    redPerRow: Yup.number()
      .min(1, "Minumum value is required")
      .required("Required"),
  });
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [search, setSearch] = useState("");

  // Generate Tokens
  const generateTokens = (value) => {
    const newBlueTokens = Array.from(
      { length: parseInt(value.blueCount) },
      (_, i) => `${value.bluePrefix}${i + 1}`
    );
    const newRedTokens = Array.from(
      { length: parseInt(value.redCount) },
      (_, i) => `${value.redPrefix}${i + 1}`
    );

    setBlueTokens(newBlueTokens);
    setRedTokens(newRedTokens);
  };
  


  // const filterByPrefix=(tokens)=>{
  //   const [searchPrefix, searchNumber]= search.toLowerCase().split(' ').filter(Boolean);
  //   return tokens.filter((token)=>{
  //     const tokenPrefix = token.replace(/\d+$/, '').toLowerCase();
  //     const tokenNumber = token.replace(/^\D+/,'');
  //       })
  // }
  const filterdToken =(tokens)=> {
    return  tokens.filter((token)=> token.toLowerCase().includes(search.toLowerCase()))
  }
  //filter  token based on search result
  const filterRedToken = filterdToken(redTokens)
  const filterBlueToken = filterdToken (blueTokens)

  // Clear Tokens and Form
  const clearTokens = (resetForm) => {
    setBlueTokens([]);
    setRedTokens([]);
    resetForm();
    setSearch(" ")
  };

  return (
    <div className="token-generator-container">
      <h2>Token Generator</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          blueCount: 0,
          bluePrefix: "",
          bluePerRow: 1,
          redCount: 0,
          redPrefix: "",
          redPerRow: 1,
        }}
        onSubmit={(value, { resetForm }) => {
          generateTokens(value);
        }}
      >
        {({ values, resetForm, handleSubmit }) => (
          <>
            <Form className="token-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Number of Blue Tokens</label>
                <Field type="number" name="blueCount" />
                <ErrorMessage
                  name="blueCount"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label>Prefix for Blue Tokens</label>
                <Field type="text" name="bluePrefix" />{" "}
                <ErrorMessage
                  name="bluePrefix"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label>Blue Tokens per Row</label>
                <Field type="number" name="bluePerRow" />{" "}
                <ErrorMessage
                  name="bluePerRow"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label>Number of Red Tokens</label>
                <Field type="number" name="redCount" />{" "}
                <ErrorMessage
                  name="redCount"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label>Prefix for Red Tokens</label>
                <Field type="text" name="redPrefix" />{" "}
                <ErrorMessage
                  name="redPrefix"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label>Red Tokens per Row</label>
                <Field type="number" name="redPerRow" />{" "}
                <ErrorMessage
                  name="redPerRow"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Generate</button>
                <button type="button" onClick={() => clearTokens(resetForm)}>
                  Clear
                </button>
              </div>
            </Form>
            <div>
              <input
                type="text"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/*Blue Tokens Value display*/}
            {filterBlueToken.length > 0 && (
              <div>
                <h3>Blue Tokens</h3>
                <div
                  className="token-grid"
                  stysle={{
                    gridTemplateColumns: `repeat(${values.bluePerRow}, 1fr)`,
                  }}
                >
                  {filterBlueToken.map((token, index) => (
                    <div key={index} className="blue-token token">
                      {token}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/*Red Tokens Value display */}
            {filterRedToken.length > 0 && (
              <div>
                <h3>Red Tokens</h3>
                <div
                  className="token-grid"
                  style={{
                    gridTemplateColumns: `repeat(${values.redPerRow}, 1fr)`,
                  }}
                >
                  {filterRedToken.map((token, index) => (
                    <div key={index} className="red-token token">
                      {token}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;
