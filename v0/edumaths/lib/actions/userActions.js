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

export async function updateProfile(email, userData) {
  try {
    const { id, email: userEmail, ...updateData } = userData;
    
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        name: updateData.name,
        username: updateData.username,
        orgname: updateData.orgname,
        address: updateData.address,
        phone: updateData.phone,
        description: updateData.description,
        profilePicture: updateData.profilePicture,
        coverPicture: updateData.coverPicture,
      }
    });
    
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error('Update profile error:', error);
    // alert("Error updating profile: " + error.message);
    return { success: false, error: error.message };
  }
}

export async function getTeacherByUsername(username) {
  try {
    const teacher = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return teacher;
  } catch (error) {
    console.error("Error fetching teacher:", error);
    return null;
  }
}