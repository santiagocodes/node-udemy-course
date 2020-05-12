// Object property shorthand

const name = "Maria";
const userAge = 32;

const user = {
  name, // is the same as name: name
  age: userAge, // can't use shorthand because names are different
  location: "Madrid",
};

console.log(user);

// Object destructuring

const product = {
  label: "red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const label = product.label;
const stock = product.stock;

const { label: productLabel, stock, rating = 5 } = product; // this is the same as the above, just in one line
// label:productLabel renames label to productLabel

const transaction = (type, myProduct) => {
  const { label, stock } = myProduct;
};

//or//

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
