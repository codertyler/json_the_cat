const breedName = require('./index');

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
 
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) { 
  return console.log("Your request is failed", error); };
  
  const data = JSON.parse(body);
  
  
  if(data.length === 0) {
    return console.log("The breed doesn't exist");
  };
  
  console.log(data[0].description);

  
})
};

 

module.exports = { fetchBreedDescription };
