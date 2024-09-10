import { Link } from "react-router-dom";

export const Header = () => {
  const isAuth = true;

  const onClickLogOut = () => {};

  return (
    <header className="flex justify-center border-b border-neutral-200">
      <div className="max-w-[1220px] w-full flex justify-between items-center py-2">
        <Link className="text-2xl font-medium" to="/">
          TELLNUR
        </Link>
        {!isAuth ? (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium">
                Войти
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 rounded-lg text-white font-medium bg-green-500 hover:bg-green-600">
                Регистрация
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg text-sm bg-lime-400 hover:bbg-lime-500">
                Создать статью
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 rounded-lg text-sm hover:bg-neutral-100">
                Выйти
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
