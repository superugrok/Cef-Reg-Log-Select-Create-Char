interface IElementContent {
  title: string;
  element?: JSX.Element;
  elementType?: "Switcher" | "SwitchRange";
  type?: string;
  range?: boolean;
}

export interface IElements {
  category: string;
  content: IElementContent[];
}
