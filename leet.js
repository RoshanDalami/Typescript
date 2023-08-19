// const user = {
//   username: "roshan",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`);
//     console.log(this);
//   },
// };

// // user.welcomeMessage();
// // user.username = "Dalami";
// // user.welcomeMessage();

// console.log(this);

//arrow functions
const chai = () => {
  let username = "roshan";
  console.log(this);
};

const test = () => {
  console.log("testing github");
};
chai();
