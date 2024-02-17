"use strict";
// import { PrismaClient } from "@prisma/client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const prisma = new PrismaClient();
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//  const res = await prisma.user.create({
//   data: {
//    email: username,
//    password,
//    firstName,
//    lastName
//   },
//   //this means the res variable will only have these fields only these od and password
//   select:{
//    id:true,
//    password:true,
//    firstName:true,
//   }
//  })
//  console.log(res);
// }
// insertUser("venom1", "123456", "harkirat", "singh")
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// interface UpdateParams {
//  firstName: string;
//  lastName: string;
// }
// async function updateUser(username: string, {
//  firstName,
//  lastName
// }: UpdateParams) {
//  const res=await prisma.user.update({
//   where: {
//    email:username
//   },
//   data: {
//    firstName,
//    lastName
//   }
//  })
//  console.log(res)
// }
// updateUser('venom1',{
//  firstName:'shalabh',
//  lastName:'agarwal'
// })
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username,
            }
        });
        console.log(res);
    });
}
getUser("venom1");
