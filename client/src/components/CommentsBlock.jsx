import { SideBlock } from "./SideBlock";

export const CommentsBlock = ({ items, children, isLoading = false }) => {
  return (
    <SideBlock title="Комментарии">
      <div>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <div key={index}>
            <div className="flex border-y border-neutral-100 py-2">
              {isLoading ? (
                <div className="bg-neutral-300 rounded-full h-10 w-10 ml-4 mr-2"></div>
              ) : (
                <img
                  className="object-cover flex-shrink-0 h-10 w-10 rounded-full ml-4 mr-2"
                  src={obj.user.avatarUrl}
                  alt=""
                />
              )}
              {isLoading ? (
                <div>
                  <h3>Loading...</h3>
                  <span className="text-sm text-neutral-500">Loading...</span>
                </div>
              ) : (
                <div>
                  <h3>{obj.user.username}</h3>
                  <span className="text-sm text-neutral-500">{obj.text}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {children}
    </SideBlock>
  );
};
