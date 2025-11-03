type Menu = "home" | "products" | "about";
type ButtonVariant = "primary" | "secondary";

type FlexibleAutoComplete<T> = T | (string & {});

type FlexibleMenu = FlexibleAutoComplete<Menu>;
type FlexibleButtonVariant = FlexibleAutoComplete<ButtonVariant>;

export const menus: FlexibleMenu[] = ["home", "products", "about", "other..."];

export const buttonVariants: FlexibleButtonVariant[] = [
  "primary",
  "secondary",
  "other...",
];
