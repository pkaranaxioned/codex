const PrimaryNav = () => {
  return (
    <div className="w-1/5 bg-gray-300">
      <h1 className="text-center pt-3 pb-3 font-bold text-lg">Inbox</h1>
      <ul className="flex flex-col overflow-y-auto">
        <li className="flex justify-between p-4">
          <a className="text-blue-800 w-full flex justify-between">
            <h4>You</h4>
            <span>5</span>
          </a>
        </li>
        <li className="flex justify-between p-4 bg-gray-500 text-white border-l-4 border-stone-800">
          <h4>Nikola Tesla</h4>
          <span>5d</span>
        </li>
        <li className="flex justify-between p-4">
          <h4>Fu Lan</h4>
          <span>2m</span>
        </li>
        <li className="flex justify-between p-4">
          <h4>Nicole</h4>
          <span>2d</span>
        </li>
        <li className="flex justify-between p-4">
          <h4>All</h4>
          <span>5m</span>
        </li>
      </ul>
    </div>
  );
};

export default PrimaryNav;
