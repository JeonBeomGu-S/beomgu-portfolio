import Layout from '../components/layout';
import { DATABASE_ID, TOKEN } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Projects:
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 p-12 m-4 xl:w-4/5">
          {projects.results.map(project => {
            return <ProjectItem key={project.id} data={project} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { Client } = require('@notionhq/client');

  const notion = new Client({ auth: TOKEN });

  const getProjects = async () => {
    const databaseId = DATABASE_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'WorkPeriod',
          direction: 'descending',
        },
      ],
    });

    return response;
  };

  const projects = await getProjects();

  return { props: { projects } };
}
