import { Commands, helpCommands } from "data/portfolio";

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
):void => {
    if(checkIfTheCommandExists(command)){
        const commandName:string = command.split(" ")[0];
        switch(commandName){
            case "help": 
                const operand = [...commandsHistory, ...helpCommands];
                setCommandsHistory(operand);
                break;
            case "clear":
                setCommandsHistory([]);
                break;
            default:
                break;
        }
    }
};
