import UserImg from "../assets/users/user1.jpg";

export const AddComment = () => {
  return (
    <div className="flex py-2 px-4 rounded-lg  gap-2">
      <img
        className="object-cover flex-shrink-0 h-10 w-10 rounded-full"
        src={UserImg}
        alt=""
      />
      <input
        className="flex-1 text-sm px-2 rounded-lg border border-neutral-200"
        placeholder="Введите текст"
        type="text"
      />
      <button className="px-4 py-2 rounded-lg text-sm bg-lime-400 hover:bbg-lime-500">
        Отправить
      </button>
    </div>
  );
};
