import { UserInfo } from "./UserInfo";

import WatchedIcon from "../assets/post/eye-solid.svg";
import CommentIcon from "../assets/post/comment-solid.svg";
import EditIcon from "../assets/post/pen-solid.svg";
import CloseIcon from "../assets/post/xmark-solid.svg";
import { PostSkeleton } from "./PostSkeleton";

export const Post = ({
  _id,
  isEditable,
  user,
  createdAt,
  title,
  tags,
  viewsCount,
  children,
  commentsCount,
  isLoading,
  imageUrl,
  isFullPost,
}) => {
  if (isLoading) {
    return <PostSkeleton />;
  }
  const onClickRemove = () => {};

  return (
    <div className="w-full mb-4 rounded-lg border overflow-hidden">
      <div className="flex flex-col gap-2 p-4">
        {imageUrl && (
          <img
            className="object-cover object-center w-full h-[350px] rounded-md"
            src={imageUrl}
            alt=""
          />
        )}
        <div className="flex flex-col w-full">
          <UserInfo {...user} addictionalText={createdAt} />
          <h2 className="text-3xl font-bold">
            {isFullPost ? (
              title
            ) : (
              <a className="hover:text-neutral-700" href={`/posts/&{_id}`}>
                {title}
              </a>
            )}
          </h2>
          <ul className="flex gap-2 font-light text-neutral-500 text-sm">
            {tags.map((name) => (
              <li key={name}>
                <a className="hover:text-neutral-400" href={`/tag/${name}`}>
                  #{name}
                </a>
              </li>
            ))}
          </ul>
          {children && <div className="my-4">{children}</div>}
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-neutral-500 text-sm font-ligt">
                <img className="h-4" src={WatchedIcon} alt="" />
                {viewsCount}
              </div>
              <div className="flex items-center gap-1 text-neutral-500 text-sm font-ligt">
                <img className="h-4" src={CommentIcon} alt="" />
                {commentsCount}
              </div>
            </div>
            {isEditable && (
              <div className="flex items-center gap-3">
                <a
                  href={`/posts/${_id}/edit`}
                  className="px-3 py-3 bg-neutral-100 rounded-full hover:bg-neutral-200"
                >
                  <img className="h-4" src={EditIcon} alt="" />
                </a>
                <button
                  onClick={onClickRemove}
                  className="px-3 py-2 bg-neutral-100 rounded-full hover:bg-neutral-200"
                >
                  <img className="h-6" src={CloseIcon} alt="" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
