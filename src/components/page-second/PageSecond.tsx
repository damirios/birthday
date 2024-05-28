import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageSecond = () => {
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputText !== "0451") {
      setError("Ошибка. Неправильный код! Вас съели пирожомби!");
      return;
    }

    navigate("/3");
  };

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setInputText(currentTarget.value);
    setError(null);
  };

  return (
    <div>
      <h4>Введите код, который можно найти у ПИРОЖОМБИ!</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="first">
          код от ПИРОЖОМБИ
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
