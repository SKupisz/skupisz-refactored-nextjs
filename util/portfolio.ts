import { Commands } from "data/portfolio";

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
        console.log(commandName);
        switch(commandName){
            case "clear":
                console.log("jest");
                setCommandsHistory([]);
                break;
            default:
                break;
        }
    }
};
