type ButtonProps = {
  children: string;
};

type PrimaryButtonProps = {
  primary: boolean;
  secondary?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary: boolean;
};

const buildClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = "";
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + " ";
  }
  return classNames.trim();
};

export const Button = ({ children, primary = false, secondary = false}: 
  ButtonProps & (PrimaryButtonProps | SecondaryButtonProps)) => {
    const classNames = buildClassNames({ primary, secondary });

    return <button className={classNames}>{children}</button>;
};
