import { NextResponse } from 'next/server';
import { getClassIdByTeacherId, createClassForTeacher, getAllClasses } from '@/lib/actions/userActions';

export async function GET(request) {
  try {
    console.log("=== API /class-id called ===");
    
    const { searchParams } = new URL(request.url);
    const teacherId = searchParams.get('teacherId');
    
    console.log("teacherId from params:", teacherId);

    if (!teacherId) {
      console.log("No teacherId provided");
      return NextResponse.json(
        { error: 'teacherId is required' }, 
        { status: 400 }
      );
    }

    // Let's also check what's in the database
    console.log("Checking database for all classes...");
    const allClasses = await getAllClasses();
    console.log("All classes in database:", allClasses);

    console.log("Calling getClassIdByTeacherId with:", teacherId);
    const classId = await getClassIdByTeacherId(teacherId);
    console.log("getClassIdByTeacherId returned:", classId);
    
    if (!classId) {
      console.log("No class found for teacher, attempting to create one...");
      try {
        const newClassId = await createClassForTeacher(teacherId);
        console.log("Created new class with ID:", newClassId);
        return NextResponse.json({ classId: newClassId });
      } catch (createError) {
        console.error("Error creating class:", createError);
        return NextResponse.json({ error: 'No class found and failed to create one' }, { status: 404 });
      }
    }
    
    return NextResponse.json({ classId });
  } catch (error) {
    console.error('Error in API route /class-id:', error);
    return NextResponse.json(
      { error: 'Failed to fetch class ID', details: error.message }, 
      { status: 500 }
    );
  }
}
