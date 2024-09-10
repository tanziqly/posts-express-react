export const UserInfo = ({ username, avatarUrl, addictionalText }) => {
  return (
    <div className="flex gap-2">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          className="object-cover flex-shrink-0 h-10 w-10 rounded-full"
        />
      ) : (
        <div className="bg-neutral-300 rounded-full h-10 w-10"></div>
      )}
      <div className="flex flex-col">
        <h4 className="font-bold">{username}</h4>
        <span className="font-light text-neutral-500 text-sm">
          {addictionalText}
        </span>
      </div>
    </div>
  );
};
