const PrimaryNav = ({ isMainOpen }) => {
  const contentList = [
    {
      name: "Content",
      title: "...",
    },
    {
      name: "Array List",
      title: "...",
    },
    {
      name: "JavaScript",
      title: "...",
    },
    {
      name: "React JS",
      title: "...",
    },
    {
      name: "Next JS",
      title: "...",
    },
    {
      name: "WordPress",
      title: "...",
    },
    {
      name: "Gatsby",
      title: "...",
    },
    {
      name: "Markdown",
      title: "...",
    },
    {
      name: "Vue JS",
      title: "...",
    },
    {
      name: "PHP",
      title: "...",
    },
    {
      name: "HTML",
      title: "...",
    },
    {
      name: "CSS",
      title: "...",
    },
    {
      name: "3D",
      title: "...",
    },
    {
      name: "Redux",
      title: "...",
    },
    {
      name: "Javascript",
      title: "...",
    },
    {
      name: "Web",
      title: "...",
    },
    {
      name: "JamStack",
      title: "...",
    },
    {
      name: "Adobe",
      title: "...",
    },
    {
      name: "Tailwind",
      title: "...",
    },
    {
      name: "React Native",
      title: "...",
    },
    {
      name: "Snippet",
      title: "...",
    },
    {
      name: "Code",
      title: "...",
    },
  ];

  return (
    <div
      className={`bg-white flex flex-col md:w-72 w-[83%] md:block h-screen ${
        isMainOpen ? "block" : "min-w-[12rem] hidden"
      } md:shrink-0`}
    >
      <div className="flex justify-between p-[13px] border-b-2 border-b-slate-500">
        <div className="text-blue-800 w-full flex justify-between flex-none">
          <h4 className="font-bold text-lg">Codex</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <ul className="flex flex-col overflow-y-auto overflow-x-hidden h-screen">
        {contentList.map((item, i) => {
          return (
            <li key={i} className="block p-4 border-b-2">
              <a className="flex justify-between">
                <h4
                  className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[8rem] break-normal"
                  title={item.name}
                >
                  {item.name}
                </h4>
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PrimaryNav;
