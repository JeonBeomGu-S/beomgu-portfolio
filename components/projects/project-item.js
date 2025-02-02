import Image from 'next/image';

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const gitHub = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const img = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) {
      return `(${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'})`;
    } else if (remainingMonths === 0) {
      return `(${years} ${years === 1 ? 'year' : 'years'})`;
    }
    return `(${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${
      remainingMonths === 1 ? 'month' : 'months'
    })`;
  };

  const bgColors = [
    'bg-orange-200 dark:bg-orange-700',
    'bg-lime-200 dark:bg-lime-700',
    'bg-emerald-200 dark:bg-emerald-700',
    'bg-sky-200 dark:bg-sky-700',
    'bg-yellow-200 dark:bg-yellow-700',
  ];

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={img}
        alt="cover image"
        width="100"
        height="50"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-bold">{title}</h1>
        <h3 className="mt-4 text-base">{description}</h3>
        {gitHub ? (
          <a className="mt-2" href={gitHub}>
            Github Link
          </a>
        ) : (
          <></>
        )}
        <p className="my-1">
          Duration: {start} ~ {end} {calculatedPeriod(start, end)}
        </p>
        <div className="flex flex-wrap items-start mt-2">
          {tags.map((tag, index) => {
            return (
              <>
                <h1
                  className={`px-2 py-1 mt-2 mr-2 rounded-md ${
                    bgColors[index % bgColors.length]
                  } w-30`}
                  key={tag.id}
                >
                  {tag.name}
                </h1>
                {(index + 1) % 4 === 0 && <div className="w-full"></div>}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
