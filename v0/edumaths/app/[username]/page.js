import { notFound } from "next/navigation";
import TeacherProfile from "./components/TeacherProfile";
import { getTeacherByUsername , getClassByOrgname } from "@/lib/actions/userActions";



export async function generateMetadata({ params }) {
  const { username } = await params;
  const classData = await getClassByOrgname(username);

  if (!classData) {
    return {
      title: "Class Not Found - EduMaths",
    };
  }

  return {
    title: `${classData.name} - Abacus Classes | EduMaths`,
    description: `Join ${classData}'s abacus and mental math classes. ${classData || 'Learn abacus and improve your mathematical skills.'}`,
  };
}

export default async function TeacherPage({ params }) {
  const {username} = await params;
  const classData = await getClassByOrgname(username);

  if (!classData) {
    notFound();
  }

  return <TeacherProfile teacher={classData} />;
}
