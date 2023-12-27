import styles from "./Authorization.module.css";
import {ReactComponent as VKLogo} from "../../assets/vectors/Logo.svg";
import {useState} from "react";
import {useForm} from "react-hook-form";

const Login = ({setAuth, onSubmit}) => {
  const switchAuth = () => {
    setAuth("register");
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: "onSubmit"});

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.form}>
      <div className={styles.form__logo}>
        <VKLogo />
      </div>
      <h3 className={styles.form__title}>Вход ВКонтакте</h3>
      <p className={styles.form__text}>
        Ваш пароль будет использоваться для входа в аккаунт
      </p>
      <input
        type="email"
        placeholder="Почта"
        {...register("mail", {
          required: "Вы не написали почту",
        })}
      />
      {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Напишите пароль",
        })}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      <label className={styles.form__save}>
        <input type="checkbox" />
        Запомнить меня
      </label>
      <button type="submit">Войти</button>
      <p className={styles.switch} onClick={switchAuth}>
        Регистрация
      </p>
    </form>
  );
};

const Register = ({setAuth, onSubmit}) => {
  const switchAuth = () => {
    setAuth("login");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: "onSubmit"});

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.form}>
      <div className={styles.form__logo}>
        <VKLogo />
      </div>
      <h3 className={styles.form__title}>Введите почту</h3>
      <p className={styles.form__text}>
        Ваша почта будет использоваться для входа в аккаунт
      </p>
      <input
        type="email"
        placeholder="Почта"
        {...register("email", {
          required: "Вы не написали почту",
        })}
      />
      {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Напишите пароль",
          minLength: {
            value: 6,
            message: "Минимальная длина пароля 6 символов",
          },
          maxLength: {
            value: 16,
            message: "Максимальная длина пароля 16 символов",
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
            message: "Пароль должен содержать буквы и цифры",
          },
        })}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      <input
        type="password"
        placeholder="Потвердите пароль"
        {...register("ConfirmPassword", {
          required: "Потвердите пароль",
          validate: (value) => value === watch("password"),
          message: "Пароли не совпадают",
        })}
      />
      {errors.ConfirmPassword && (
        <p className={styles.error}>{errors.ConfirmPassword.message}</p>
      )}
      <label className={styles.form__save}>
        <input type="checkbox" />
        Запомнить меня
      </label>
      <button type="submit">Регистрация</button>
      <p className={styles.switch} onClick={switchAuth}>
        Войти
      </p>
    </form>
  );
};

export default function Authorization() {
  const [auth, setAuth] = useState("login");

  const handleSubmit = (data) => {
    console.log(data);
    switch (auth) {
      case "login":
        setAuth("login");
        break;
      case "register":
        setAuth("register");
        break;
      default:
        break;
    }
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          {auth === "login" && (
            <Login setAuth={setAuth} onSubmit={handleSubmit} />
          )}
          {auth === "register" && (
            <Register setAuth={setAuth} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </main>
  );
}
