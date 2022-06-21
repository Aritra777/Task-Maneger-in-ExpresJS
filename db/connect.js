// const connectStr = 'mongodb+srv://Huracan:<password>@taskmanegerexpress.itwq8.mongodb.net/?retryWrites=true&w=majority';

const mongoose = require("mongoose");

// main().then(()=> console.log("connection successful")).catch(err => console.log(err));

async function main(URL) {
  await mongoose.connect(URL);
  // .then(() => console.log("connection successful"))
  // .catch((err) => console.log(err));
}

module.exports = main;
