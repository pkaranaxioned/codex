const PrimaryNav = () => {
  return (
    <div className="w-1/5 bg-gray-300">
      <h1 className="text-center pt-3 pb-3 font-bold text-xs">Inbox</h1>
      <ul className="flex flex-col">
        <li className="flex justify-between p-4">
          <a className="text-blue-800 w-full flex justify-between">
            <h4>You</h4>
            <span>5</span>
          </a>
        </li>
        <li className="flex justify-between p-4">
          <h4>Mentions</h4>
          <span>123</span>
        </li>
        <li className="flex justify-between p-4">
          <h4>Unassigned</h4>
          <span>512</span>
        </li>
        <li className="flex justify-between p-4">
          <h4>Article</h4>
          <span>1125</span>
        </li>
        <li className="flex justify-between p-4">
          <h4>All</h4>
          <span>511</span>
        </li>
      </ul>
    </div>
  );
};

export default PrimaryNav;
