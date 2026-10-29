import { useState } from 'react';
import './App.css';

export const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    isPdAccepted: false,
  });

  return (
    <form>
      <h2>Регистрация</h2>
      <input type="text" placeholder="Введиите имя" required />
      <input type="text" placeholder="Введите фамилию" required />
      <input type="email" placeholder="Введите адрес электронной почты" required />
      <select
        name="role"
        value={formData.role}
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="" hidden disabled>
          Выберите роль...
        </option>
        <option value="user">Пользователь</option>
        <option value="manager">Менеджер</option>
        <option value="admin">Админ</option>
      </select>
      <label>
        Согласие на обработку персональных данных
        <input type="checkbox" placeholder="dasd" required />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
