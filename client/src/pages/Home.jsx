import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { Post } from "../components/Post";

import User1 from "../assets/users/user1.jpg";
import User2 from "../assets/users/user2.jpg";
import User3 from "../assets/users/user3.jpg";

export const Home = () => {
  return (
    <>
      <div className="flex gap-2 my-4">
        <button className="px-4 py-2 rounded-md bg-lime-400">Новые</button>
        <button className="px-4 py-2 rounded-md hover:bg-neutral-100">
          Популярные
        </button>
      </div>
      <div className="flex justify-center gap-12">
        <div className="flex flex-col w-full flex-1">
          {[...Array(5)].map((_, index) => (
            <Post
              key={index}
              id={1}
              title="Roast the code #1 | Rock Paper Scissors"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={{
                avatarUrl:
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
                username: "Keff",
              }}
              createdAt={"12 июня 2022 г."}
              viewsCount={150}
              commentsCount={3}
              tags={["react", "fun", "typescript"]}
              isEditable
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          <TagsBlock items={["React", "Express", "MongoDB", "NodeJS"]} />
          <CommentsBlock
            items={[
              {
                user: {
                  avatarUrl: User1,
                  username: "Gdstbb",
                },
                text: "Hello, Nikita",
              },
              {
                user: {
                  avatarUrl: User2,
                  username: "Dimon",
                },
                text: "Салам алейкум",
              },
              {
                user: {
                  avatarUrl: User3,
                  username: "Perec",
                },
                text: "Валейкум салам",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
