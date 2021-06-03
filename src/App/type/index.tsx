export type FilterBarProps = {
  name: string;
  children: JSX.Element;
}

export type FilterBarButtonProps = {
  name?: string;
  color?: string;
  active: boolean;
  onClick: any;
}

export type FilterResultCardProps = {
  color: string;
  shape: string;
}

export type LoginData = {
  email: string;
  password: string;
}