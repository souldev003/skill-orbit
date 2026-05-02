import Banner from "@/components/Banner/Banner";
import Features from "@/components/Banner/Features";
import CourseGrid from "@/components/Course/CourseGrid";

async function getCourses() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  const result = await res.json();

  return result.data.sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <div>
      <Banner />
      <Features />
      <CourseGrid courses={courses} />
    </div>
  );
}
