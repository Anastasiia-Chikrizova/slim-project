interface MenuItem {
  id: string;
  to: string;
  text: string;
}

export const items: { login: MenuItem[]; logout: MenuItem[] } = {
  login: [
    {
      id: "1",
      to: "/diary",
      text: "Diary",
    },
    {
      id: "2",
      to: "/calculator",
      text: "Calculator",
    },
  ],
  logout: [
    {
      id: "3",
      to: "/login",
      text: "Log in",
    },
    {
      id: "4",
      to: "/registration",
      text: "Sign up",
    },
  ],
};
