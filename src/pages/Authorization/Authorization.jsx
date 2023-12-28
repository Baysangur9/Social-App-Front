import styles from "./Authorization.module.css";
import {yupResolver} from "@hookform/resolvers/yup";
import {ReactComponent as VKLogo} from "../../assets/vectors/Logo.svg";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {InputField} from "../../components/Ui/index";
import * as yup from "yup";

const Login = ({setAuth, onSubmit}) => {
  const switchAuth = () => {
    setAuth("register");
  };

  const loginSchema = yup.object().shape({
    mail: yup
      .string()
      .required("Обезательно напишите почту")
      .email("Введите коректную почту"),
    password: yup.string().required("Обезательно напишите пароль"),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: "onSubmit", resolver: yupResolver(loginSchema)});

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.form}>
      <div className={styles.form__logo}>
        <VKLogo />
      </div>
      <h3 className={styles.form__title}>Вход ВКонтакте</h3>
      <p className={styles.form__text}>
        Ваш пароль будет использоваться для входа в аккаунт
      </p>
      <InputField
        errorClassName={styles.error}
        label="Почта"
        type="email"
        register={register}
        name="mail"
        errors={errors}
      />
      {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
      <InputField
        errorClassName={styles.error}
        label="Пароль"
        type="password"
        register={register}
        name="password"
        errors={errors}
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

  const registerSchema = yup.object().shape({
    mail: yup
      .string()
      .required("Обезательно напишите почту")
      .email("Введите коректную почту"),
    password: yup
      .string()
      .required("Обезательно напишите пароль")
      .min(6, "Минимальная длина пароля 6 символов")
      .max(20, "Максимальная длина пароля 20 символов")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
        "Пароль должен содержать буквы и цифры"
      ),
    confirmPassword: yup
      .string()
      .required("Обезательно напишите пароль")
      .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: "onSubmit", resolver: yupResolver(registerSchema)});

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.form}>
      <div className={styles.form__logo}>
        <VKLogo />
      </div>
      <h3 className={styles.form__title}>Введите почту</h3>
      <p className={styles.form__text}>
        Ваша почта будет использоваться для входа в аккаунт
      </p>
      <InputField
        errorClassName={styles.error}
        label="Почта"
        type="email"
        register={register}
        name="mail"
        errors={errors}
      />
      {errors.mail && <p className={styles.error}>{errors.mail.message}</p>}
      <InputField
        errorClassName={styles.error}
        label="Пароль"
        type="password"
        register={register}
        name="password"
        errors={errors}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      <InputField
        errorClassName={styles.error}
        label="Повторите пароль"
        type="password"
        register={register}
        name="confirmPassword"
        errors={errors}
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
