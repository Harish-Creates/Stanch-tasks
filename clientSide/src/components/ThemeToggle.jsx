import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { DarkMode, LightMode } from "../components/Icons"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Switch
        isSelected={theme === "light"}
        onValueChange={handleThemeChange}
        thumbIcon={
          theme === "light" ? (
            <LightMode stroke={"#E2A42B"} h={15} w={15} fill={"#E2A42B"} />
          ) : (
            <DarkMode fill={"#39393A"} h={15} w={15} />
          )
        }
      />
    </>
  );
};

export default ThemeToggle;
