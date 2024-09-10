export const SideBlock = ({ title, children }) => {
  return (
    <div className="flex flex-col p-2 rounded-lg border border-neutral-200">
      <h2 className="text-xl text-neutral-900 font-medium mx-4 my-3">
        {title}
      </h2>
      {children}
    </div>
  );
};
