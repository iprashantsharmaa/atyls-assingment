export type SvgIconProps = {
  className?: string;
}

export type ApiHookProps = {
  onSuccess: () => void;
};

export type LoginValues = {
  userName: string;
  password: string;
};

export type SignUpValues = {
  email: string;
  userName: string;
  password: string;
};

export type Post = {
  id: number;
  content: string;
  metaInfo: string;
  user: string;
  userAvatar: string;
  emoji: string;
  comments: number;
}
