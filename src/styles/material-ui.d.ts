declare module "@mui/material/styles" {
  interface CustomTheme {
    background: {
      black: string;
    };
    button: {
      blue: string;
    };
    text: {
      white: string;
    };
  }
  interface CustomThemeOptions {
    background?: {
      black?: string;
    };
    button?: {
      blue?: string;
    };
    text?: {
      white?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
