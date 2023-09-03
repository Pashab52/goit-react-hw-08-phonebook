import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { BiLogIn } from 'react-icons/bi';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Login</h2>
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
        <BiLogIn size={24} />
      </button>
    </form>
  );
};
