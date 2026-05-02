import CourseGrid from "@/components/Course/CourseGrid";

async function getAllCourses() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  if (!res.ok) return [];

  const result = await res.json();
  return result.data;
}

export default async function AllCoursesPage() {
  const allCourses = await getAllCourses();

  return (
    <main className="bg-[#121212] min-h-screen pt-20">
      <div className="container mx-auto px-6 lg:px-12 pt-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          All <span className="text-orange-500">Courses</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Explore our entire catalog of expert-led courses designed to help you
          master modern web development and design skills.
        </p>
      </div>

      <CourseGrid courses={allCourses} />
    </main>
  );
}
