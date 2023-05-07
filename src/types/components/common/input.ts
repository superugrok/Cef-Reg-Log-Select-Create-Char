export interface IInputProps {
  type: "email" | "password";
  placeholder: string;
  style?: React.CSSProperties;
  onChange?: Function;
  inputRef?: any;
  label?: string;
  maxLength?: number;
  minLength?: number;
  validate?: boolean;
}
