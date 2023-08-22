let arr1 = [
  {
    PRODUCT: { PRODUCT_CODE: "BG", PRODUCT_NAME: "555" },
    _id: "649e93374b2dcb5e62783158",
    __v: 0,
  },
  {
    PRODUCT: { PRODUCT_CODE: "BG", PRODUCT_NAME: "555" },
    _id: "649e93374b2dcb5e62783158",
    __v: 0,
  },
];

let arr2 = [
  {
    id: "1",
    name: "gheth",
  },
  {
    id: "2",
    name: "5yjuytj",
  },
];

let modified = [];

for (let i = 0; i < arr1.length; i++) {
  modified.push({
    id: arr1[i].PRODUCT.PRODUCT_CODE,
    name: arr1[i].PRODUCT.PRODUCT_NAME,
  });
}
