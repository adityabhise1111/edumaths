'use server'
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function findAllUsers(){
  try {
    return await prisma.user.findMany()
  }catch (error){
    throw new Error(`Failed to fetch users : ${error.message}`)
  }
}

export async function findUserById(id){
  try {
    return await prisma.user.findUnique(
     {
       where : {id}
     }
    )
  }catch (error){
    throw new Error(`Failed to fetch users : ${error.message}`)
  }
}

export async function findUserByEmail(email){
  try {
    return await prisma.user.findUnique(
     {
       where : {email} 
     }
    )
  }catch (error){
    throw new Error(`Failed to fetch users : ${error.message}`)
  }
}

export async function createUser(userData){
  try {
    return await prisma.user.create(
     {
       data:userData
     }
    )
  }catch (error){
    throw new Error(`Failed to fetch users : ${error.message}`)
  }
}

export async function updateUser(id, userData) {
  try {
    return await prisma.user.update({
      where: { id },
      data: userData
    });
  } catch (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}