declare module "*.scss";
declare module "*.jpg";
declare module "*.svg";
declare module "*.png";

declare interface Window {
  goCreate: () => void;
  loginComplite: (email: string, jsonChars: string, priceToBuy: number) => void;
  setLoginError: (error: string) => void;
  setRegisterError: (error: string) => void;
  setCreateError: (error: string) => void;
}

interface Mp {
  trigger(name: string, ...args: any[]): void;
}

declare const mp: Mp;
