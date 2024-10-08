import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex gap-2 p-4 flex-col w-full max-w-[350px] rounded-lg border">
        <h3 className="text-center text-xl font-medium my-3">Авторизация</h3>
        <label
          className="flex flex-col gap-1 text-sm text-neutral-500"
          htmlFor="username"
        >
          Имя пользователя
          <input
            type="text"
            placeholder="Введите имя"
            id="username"
            className="border text-black rounded-lg p-2"
          />
        </label>
        <label
          className="flex flex-col gap-1 text-sm text-neutral-500"
          htmlFor="password"
        >
          Пароль
          <input
            type="password"
            placeholder="Введите пароль"
            id="password"
            className="border text-black rounded-lg p-2"
          />
        </label>
        <button className="px-4 py-2 text-sm my-3 rounded-md bg-lime-400">
          Войти
        </button>
        <span className="text-sm flex gap-1 justify-center">
          Впервые здесь?
          <Link to="/sign-up" className="text-lime-500 underline">
            Регистрация
          </Link>
        </span>
      </div>
    </div>
  );
};
