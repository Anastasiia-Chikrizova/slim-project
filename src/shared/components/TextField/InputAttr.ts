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
    placeholder: "Name",
    title:
      "Name can only contain letters, apostrophes, hyphens, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",
    required: true,
  },
  email: {
    name: "email",
    placeholder: "Email",
    title: "Enter your email in the format user@example.com",
    required: true,
  },
  password: {
    name: "password",
    placeholder: "Password",
    type: "password",
    required: true,
  },
};

export default inputAttr;
