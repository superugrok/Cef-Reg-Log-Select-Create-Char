interface IElementContent {
  title: string;
  element: JSX.Element;
}

export interface IElements {
  category: string;
  content: IElementContent[];
}
