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
    <div className="w-1/4 bg-white overflow-y-auto overflow-x-hidden h-screen flex flex-col">
      <div className="flex justify-between p-4">
        <div className="text-blue-800 w-full flex justify-between flex-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>

          <h4 className="font-bold text-lg">You</h4>
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
