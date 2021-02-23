const { param } = require("../routes");
const { query } = require("./connection");
const connection = require("./connection");

const executQuery = (query, parameters ='') => {
  return new Promise((resolve, reject) => {
    connection.query(query, parameters, (errors, results, fields) => {
      if (error) {
        reject(errors);
      } else {
        resolve(results);
      }
    });
  });
};
