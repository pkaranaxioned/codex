const PrimaryNav = () => {
  const data = [
    {
      name: "Fu Lan",
      day: "5d",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
    {
      name: "Fu Lan",
      day: "1m",
    },
    {
      name: "Fu Lan",
      day: "5d",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
    {
      name: "Fu Lan",
      day: "1m",
    },
    {
      name: "Fu Lan",
      day: "5d",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
    {
      name: "Fu Lan",
      day: "1m",
    },
    {
      name: "Fu Lan",
      day: "5d",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
    {
      name: "Fu Lan",
      day: "1m",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
    {
      name: "Nicole",
      day: "2m",
    },
    {
      name: "Blake",
      day: "2d",
    },
  ];
  return (
    <div className="bg-white overflow-y-auto overflow-x-hidden h-screen flex flex-col md:w-72 w-full min-w-[10rem]">
      <div className="flex justify-between p-4">
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
      <ul className="flex flex-col flex-auto overflow-y-auto">
        <li className="block p-4 bg-gray-100 text-black border-stone-200 rounded-2xl">
          <a className="flex justify-between">
            <h4>Nick</h4>
            <span>2m</span>
          </a>
        </li>
        {data.map((item, i) => {
          return (
            <li key={i} className="block p-4 border-b-2">
              <a className="flex justify-between">
                <h4>{item.name}</h4>
                <span>{item.day}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PrimaryNav;
