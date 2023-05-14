export interface IInputProps {
  type: "email" | "password" | "player";
  placeholder: string;
  style?: React.CSSProperties;
  onChange?: Function;
  inputRef?: any;
  label?: string;
  maxLength?: number;
  minLength?: number;
  validate?: boolean;
}
