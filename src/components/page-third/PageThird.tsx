import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageThird = () => {
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputText !== `${24 * 23}` && inputText !== `${24 * 24}`) {
      setError(
        "Ошибка. Неправильное количество! Двое охранников дают вам ещё один шанс."
      );
      return;
    }

    navigate("/4");
  };

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setInputText(currentTarget.value);
    setError(null);
  };

  return (
    <div>
      <h4>
        Отправляйтесь в знаменитому археологическому памятнику (где ещё можно
        сфоткаться за 5 деняк).
      </h4>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="first">
          Введите число, равное количеству блоков в сооружении, умноженному на
          возраст Гуська
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
