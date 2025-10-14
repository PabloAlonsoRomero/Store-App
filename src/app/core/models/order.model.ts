/* 
{
    "id": 1,
    "total": 100,
    "createdAt": "2025-08-27T16:00:11.9536625",
    "user": {
      "id": 1,
      "email": "pabloealonsor@gmail.com",
      "firstName": "Pablo Emilio",
      "lastName": "Alonso Romero"
    }
  }
*/

import { User } from "./user.model";

export interface Order {
  id : number;
  total : number;
  createdAt : Date;
  user : User
}