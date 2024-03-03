import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
 
  {
    _id: uuid(),
    firstName: "Rojesh",
    lastName: "Pradhan",
    email: "Rojesh03@gmail.com",
    password: "123456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Rojesh Pradhan",
        street: "04, Kathmandu",
        city: "Kathmandu",
        state: "03",
        zipcode: '44600',
        country: 'Nepal',
        mobile: '9861155960',
    },
    ]
  },
];
