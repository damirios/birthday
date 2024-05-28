import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageFirst = () => {
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputText !== "ПАУК") {
      setError("Ошибка. Неправильное ключевое слово!");
      return;
    }

    navigate("/2");
  };

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setInputText(currentTarget.value);
    setError(null);
  };

  return (
    <div>
      <h3>Привет!</h3>
      <h4>Нужно подтвердить личность-гусынность</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="first">
          ЖУК ВУК ВАВУК ЖУК
        </label>
        <input
          className="input"
          id="first"
          type="text"
          min={2}
          max={8}
          value={inputText}
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          Подтвердить
        </button>
      </form>
      {!!error && <div className="error">{error}</div>}
    </div>
  );
};
