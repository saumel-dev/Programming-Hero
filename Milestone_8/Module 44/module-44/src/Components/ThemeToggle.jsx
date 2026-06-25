"use client";
import { useTheme } from "next-themes";

import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {({ isSelected }) => (
                    <>
                        <Switch.Control
                            className={`h-7.75 w-12.75 bg-white ${isSelected ? "bg-black shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                        >
                            <Switch.Thumb
                                className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                            >
                                <Switch.Icon>
                                    {isSelected ? (
                                        <Sun className="size-4 text-cyan-600" />
                                    ) : (
                                        <Moon className="size-4 text-blue-600" />
                                    )}
                                </Switch.Icon>
                            </Switch.Thumb>
                        </Switch.Control>
                    </>
                )}
            </Switch>
        </div>
    );
};

export default ThemeToggle;