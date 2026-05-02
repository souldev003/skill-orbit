import CourseGrid from "@/components/Course/CourseGrid";

async function getAllCourses() {
  const res = await fetch("https://skill-orbit-two.vercel.app/data.json");

  if (!res.ok) return [];

  const result = await res.json();
  return result.data;
}

export default async function AllCoursesPage() {
  const allCourses = await getAllCourses();

  return (
    <main className="bg-[#121212] min-h-screen">
      <CourseGrid courses={allCourses} />
    </main>
  );
}
