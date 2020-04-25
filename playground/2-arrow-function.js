// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(2));

// const event = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     console.log("Guest list for " + this.name);
//   },
// };

// Guest list for Birthday Party

// const event = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log("Guest list for " + this.name);
//   },
// };

// Guest list for undefined

const event = {
  name: "Birthday Party",
  guestList: ["Mari", "Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
