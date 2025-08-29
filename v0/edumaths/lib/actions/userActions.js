'use server'
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


// Get all classes for debugging
export async function getAllClasses() {
  try {
    const allClasses = await prisma.Class.findMany({
      select: { id: true, teacherId: true }
    });
    return allClasses;
  } catch (error) {
    console.error('Error fetching all classes:', error);
    return [];
  }
}

// Get the first class ID for a given teacherId
export async function getClassIdByTeacherId(teacherId) {
  try {
    console.log("getClassIdByTeacherId called with teacherId:", teacherId);
    
    const classObj = await prisma.Class.findFirst({
      where: { teacherId },
      select: { id: true },
    });
    
    console.log("Database query result:", classObj);
    
    const result = classObj ? classObj.id : null;
    console.log("Returning class ID:", result);
    
    return result;
  } catch (error) {
    console.error('Error fetching class by teacherId:', error);
    return null;
  }
}
// Create a class for a teacher by teacherId
export async function createClassForTeacher(teacherId, classData = {}) {
  try {
    console.log("createClassForTeacher called with teacherId:", teacherId);
    
    // Create new class with teacherId
    const newClass = await prisma.Class.create({
      data: {
        id: uuidv4(),
        ...classData,
        teacherId: teacherId,
      },
    });
    
    console.log("Created new class:", newClass);
    return { success: true, class: newClass };
  } catch (error) {
    console.error('Error creating class for teacher:', error);
    return { success: false, error: error.message };
  }
}

// Legacy function for email-based class creation (keeping for backward compatibility)
export async function createClassForTeacherByEmail(email, classData) {
  try {
    // Find the teacher by email
    const teacher = await prisma.User.findUnique({
      where: { email },
    });
    if (!teacher) {
      throw new Error('Teacher not found');
    }
    // Use the main function
    return await createClassForTeacher(teacher.id, classData);
  } catch (error) {
    console.error('Error creating class for teacher by email:', error);
    return { success: false, error: error.message };
  }
}
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
    return await prisma.User.findUnique(
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
    return await prisma.User.create(
     {
       data:userData
     }
    )
  }catch (error){
    throw new Error(`Failed to fetch users : ${error.message}`)
  }
}

export async function createClass(classData){
  try {
    return await prisma.Class.create(
     {
       data:classData
     }
    )
  }catch (error){
    throw new Error(`Failed to fetch users : ${error.message}`)
  }
}

export async function updateProfile(email, userData) {
  try {
    console.log("updateProfile called with email:", email, "userData:", userData);
    
    const { id, email: userEmail, ...updateData } = userData;
    
    // Only update fields that exist in the User model
    const updatedUser = await prisma.User.update({
      where: { email },
      data: {
        name: updateData.name,
        username: updateData.username,
        profilePicture: updateData.profilePicture,
        role: updateData.role,
        // Note: orgname, address, phone, description, coverPicture don't exist in User model
        // They might need to be added to the schema or stored elsewhere
      }
    });
    
    console.log("Profile updated successfully:", updatedUser);
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error('Update profile error:', error);
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