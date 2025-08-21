import { create } from "zustand";

interface ThemeState {
  theme: boolean;
  toggleTheme: () => void;
  initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: false,
  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.theme;
      const root = document.documentElement;
      if (newTheme) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return { theme: newTheme };
    });
  },
  initTheme: () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    set({ theme: isDark });
  },
}));