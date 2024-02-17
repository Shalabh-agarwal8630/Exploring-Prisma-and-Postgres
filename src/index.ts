// import { PrismaClient } from "@prisma/client";

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


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
 const res=await prisma.user.findFirst({
  where:{
   email:username,
  }
 }) 
 console.log(res)
}

getUser("venom1");