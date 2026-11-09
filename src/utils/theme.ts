export interface Theme {
   panelBackground: string;
   panelText: string;
   border: string;
   inputBg: string;
   inputBorder: string;
   primary: string;
   activeText: string;
   activeBg: string;
   hoverBorder: string;
   hoverText: string;
   panelShadow: string;
}

export const theme: { dark: Theme; light: Theme } = {
   dark: {
      panelBackground: "#FAF9F6",
      panelText: "#000000",
      border: "#767676",
      inputBg: "#E0E0E0",
      inputBorder: "#767676",
      primary: "#0056B3",
      activeText: "#FAF9F6",
      activeBg: "#0056B3",
      hoverBorder: "#0056B3",
      hoverText: "#0056B3",
      panelShadow: "0 4px 12px rgba(0,0,0,0.05)",
   },
   light: {
      panelBackground: "#000000",
      panelText: "#FAF9F6",
      border: "#767676",
      inputBg: "#222222",
      inputBorder: "#767676",
      primary: "#0056B3",
      activeText: "#FAF9F6",
      activeBg: "#0056B3",
      hoverBorder: "#80B8FF",
      hoverText: "#80B8FF",
      panelShadow: "0 4px 12px rgba(0,0,0,0.5)",
   },
};

export type ThemeMode = "light" | "dark";

export const getTheme = (dark?: boolean): Theme => (dark ? theme.dark : theme.light);
