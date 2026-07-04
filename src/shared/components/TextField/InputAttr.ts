interface InputAttrConfig {
  name: string;
  placeholder: string;
  title?: string;
  required: boolean;
  type?: string;
}

const inputAttr: Record<"name" | "email" | "password", InputAttrConfig> = {
  name: {
    name: "username",
    placeholder: "Имя",
    title:
      "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
    required: true,
  },
  email: {
    name: "email",
    placeholder: "Логин",
    title: "Введите email в формате user@example.com, в качестве логина",
    required: true,
  },
  password: {
    name: "password",
    placeholder: "Пароль",
    type: "password",
    required: true,
  },
};

export default inputAttr;
