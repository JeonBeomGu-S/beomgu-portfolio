import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hello, I&apos;m Beomgu!
          <br className="hidden lg:inline-block" />I am a innovative software engineer!
        </h1>
        <p className="mb-8 leading-relaxed">
          Detail-oriented backend developer with 2 years of experience, skilled in writing
          high-quality code and optimizing user experiences. Strong communicator, collaborative
          problem solver, and eager to contribute to innovative projects.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            Go to Projects
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
