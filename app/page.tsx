
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hello, my name is Russell Saniel
      </h1>

      <p className="mt-2">
        I am an Information Technology student
        learning web development.
        I enjoy building websites and exploring
        new technologies.
      </p>

      <Link
        href="/projects"
        className="mt-4 inline-block text-blue-500 underline"
      >
        See my projects
      </Link>
    </main>
  );
}
