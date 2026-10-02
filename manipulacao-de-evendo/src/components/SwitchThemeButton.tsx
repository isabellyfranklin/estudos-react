import type { PropsWithChildren } from "react"
import { Button } from "./Button";

interface Props{
    theme: "dark" | "light"
}

export function SwitchThemeButton ( { theme, children }: PropsWithChildren<Props> ){
    
    const handleClick = () => {
        const shouldChangeTheme = confirm(`você selecionou o tema ${theme}`);
        console.log("shouldChangeThem", shouldChangeTheme)

        //shouldChangeTheme === false
        if(!shouldChangeTheme){
            return;
        }

        document.body.classList.add(`${theme}-theme`)
        const themeToRemove = theme === "light" ? "dark" : 'light';
         document.body.classList.remove(`${themeToRemove}-theme`)
    }

    return(
        <Button onClick={handleClick}>{children}</Button>
    )
}