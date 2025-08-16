import { notFound } from "next/navigation";
import TeacherProfile from "./components/TeacherProfile";
import { getTeacherByUsername } from "@/lib/actions/userActions";



export async function generateMetadata({ params }) {
  const teacher = await getTeacherByUsername(params.username);
  
  if (!teacher) {
    return {
      title: "Teacher Not Found - EduMaths",
    };
  }

  return {
    title: `${teacher.name} - Abacus Classes | EduMaths`,
    description: `Join ${teacher.name}'s abacus and mental math classes. ${teacher.description || 'Learn abacus and improve your mathematical skills.'}`,
  };
}

export default async function TeacherPage({ params }) {
  const teacher = await getTeacherByUsername(params.username);

  if (!teacher) {
    notFound();
  }

  return <TeacherProfile teacher={teacher} />;
}
