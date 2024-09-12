import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const AddPost = () => {
  const [value, setValue] = useState("");

  const imageUrl = "";
  const handleChangeFile = () => {};
  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <div className="w-full p-2 flex justify-start gap-4 flex-col">
      <button className="w-fit px-4 py-2 rounded-lg text-sm bg-lime-400 hover:bg-lime-500">
        Загрузить превью
      </button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <button
          className="w-fit px-4 py-2 rounded-lg text-sm bg-red-400 hover:bbg-red-500"
          onClick={onClickRemoveImage}
        >
          Удалить
        </button>
      )}
      {imageUrl && (
        <img
          className="w-14 h-14 object-cover"
          src={`http://localhost:4444${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <input
        type="text"
        placeholder="Заголовок"
        className="text-3xl border-b p-1"
      />
      <input
        type="text"
        placeholder="Теги"
        className="py-1 px-2 rounded-md text-base border"
      />
      <SimpleMDE value={value} onChange={onChange} options={options} />
      <div className="flex gap-2">
        <button className="w-fit px-4 py-2 rounded-lg text-sm bg-lime-400 hover:bbg-lime-500">
          Опубликовать
        </button>
        <Link to="/">
          <button className="w-fit px-4 py-2 rounded-lg text-sm bg-neutral-100 hover:bg-neutral-200">
            Отменить
          </button>
        </Link>
      </div>
    </div>
  );
};
