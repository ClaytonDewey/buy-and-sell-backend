import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'hapi-server',
  password: '5x3k55jETs+LHX?nRj$s',
  database: 'buy-and-sell'
});

export const db = {
  connect: () => connection.connect(),
  query: (queryString, escapedValues) => 
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) reject(error);
        resolve({ results, fields });
      })
    }),
  end: () => connection.end()
}