interface MenuItem {
  id: string;
  to: string;
  exact: boolean;
  text: string;
}

export const items: { login: MenuItem[]; logout: MenuItem[] } = {
  login: [
    {
      id: "1",
      to: "/diary",
      exact: true,
      text: "Дневник",
    },
    {
      id: "2",
      to: "/calculator",
      exact: true,
      text: "Калькулятор",
    },
  ],
  logout: [
    {
      id: "3",
      to: "/login",
      exact: true,
      text: "Вход",
    },
    {
      id: "4",
      to: "/registration",
      exact: true,
      text: "Регистрация",
    },
  ],
};
