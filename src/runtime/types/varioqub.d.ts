// Глобальные типы SDK Varioqub (ymab)

export interface VarioqubInitAnswer {
  flags: Record<string, boolean>;
  experiments: string;
  testids: Array<number | string>;
}

export type YMABFunction = {
  (namespace: string, method: 'init', cb: (answer: VarioqubInitAnswer) => void): void;
  (namespace: string, method: string, ...args: unknown[]): void;
};

declare global {
  interface Window {
    ymab?: YMABFunction;
  }
}

export {};
