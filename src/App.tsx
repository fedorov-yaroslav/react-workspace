import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import './App.css';

export const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    isPdAccepted: false,
  });

  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="Введиите имя"
        required
        onChange={handleData}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Введите фамилию"
        required
        onChange={handleData}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Введите адрес электронной почты"
        required
        onChange={handleData}
      />
      <select name="role" value={formData.role} onChange={handleData} required>
        <option value="" hidden disabled>
          Выберите роль...
        </option>
        <option value="user">Пользователь</option>
        <option value="manager">Менеджер</option>
        <option value="admin">Админ</option>
      </select>
      <label>
        Согласие на обработку персональных данных
        <input
          type="checkbox"
          name="isPdAccepted"
          checked={formData.isPdAccepted}
          required
          onChange={handleData}
        />
      </label>
      <button type="submit" disabled={!formData.isPdAccepted}>
        Зарегистрироваться
      </button>
    </form>
  );
};
