import { createContext } from "react";
const userContext = createContext({
  user: {
    name: "Prashant Timilsina",
    email: "prashanttimilsina16@gmail.com",
  },
});
export default userContext;
