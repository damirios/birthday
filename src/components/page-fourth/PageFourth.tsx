import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageFourth = () => {
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputText !== "28.08.2021") {
      setError("Нееееееееееееет. Попробуй ещё раз!");
      return;
    }

    navigate("/final");
  };

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setInputText(currentTarget.value);
    setError(null);
  };

  return (
    <div>
      <h4>Последняя проверка! Дата встречи мальков в формате ДД.ММ.ГГГГ</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="first">
          введите дату малька
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
