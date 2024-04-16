import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.loginLabel}>
        Email
        <input className={css.loginInput} type="email" name="email" />
      </label>
      <label className={css.loginLabel}>
        Password
        <input className={css.loginInput} type="password" name="password" />
      </label>
      <button className={css.loginBtn} type="submit">Log In</button>
    </form>
  );
};
