import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { FaRegPenToSquare } from 'react-icons/fa6';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.title}>Registration</h2>
      <label className={css.label}>
        <p className={css.txt}>Name</p>

        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          minLength="3"
          maxLength="30"
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.txt}>Email</p>
        <input
          className={css.input}
          type="email"
          name="email"
          minLength="7"
          maxLength="30"
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.txt}>Password</p>
        <input
          className={css.input}
          type="password"
          name="password"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Password may contain only letters, apostrophe, dash and spaces."
          minLength="7"
          maxLength="30"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        <FaRegPenToSquare size={22} />
      </button>
    </form>
  );
};
