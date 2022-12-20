import { Commands } from "data/portfolio";
import { DarkTheme } from "styled/main";

export const checkIfTheCommandExists = (
    checkedCommand: string
):boolean => {
    return Commands.filter((elem: {
        command: string,
        flags: string[],
    }) => elem.command === checkedCommand.trim().split(" ")[0]).length > 0;
}

export const processTheLatestCommand = (
    command: string,
    commandsHistory: string[],
    setCommandsHistory: (newState: string[]) => void,
    currentColor: string,
    setConsoleColor: (newColor: string) => void,
):void => {
    if(checkIfTheCommandExists(command)){
        const commandParts:string[] = command.split(" ");
        const commandName:string = commandParts[0];
        switch(commandName){
            case "help": 
                const commandsOperand:string[] = Commands.map((elem: {
                    command: string,
                    description: string,
                    hasArgument: boolean,
                    flags: string[],
                }) => `${elem.command}: ${elem.description}`);
                const operand = [...commandsHistory, ...commandsOperand];
                setCommandsHistory(operand);
                break;
            case "clear":
                setCommandsHistory([]);
                break;
            case "chcc":
                switch(commandParts[1]){
                    case "--reset": 
                        const resetOperand = [...commandsHistory, `Colour reseted to ${DarkTheme.colors.consoleColor}`];
                        setConsoleColor(DarkTheme.colors.consoleColor);
                        setCommandsHistory(resetOperand);
                        break;
                    case "--list":
                        const listOperand = [...commandsHistory, currentColor];
                        setCommandsHistory(listOperand);
                        break;
                    default:
                        const colorsDefaultOperand = [...commandsHistory, `Colour switched to ${commandParts[1]}`];
                        setConsoleColor(commandParts[1]);
                        setCommandsHistory(colorsDefaultOperand);
                        break;
                }
                break;
            default:
                break;
        }
    }
};
