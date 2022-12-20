import { Commands, Data } from "data/portfolio";
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
                if(commandParts.length >= 2){
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
                }
                else{
                    const colorsErrorOperand = [...commandsHistory, "Missing a parameter or a flag"];
                    setCommandsHistory(colorsErrorOperand);
                }
                break;
            case "show":
                if(commandParts.length >= 2 && Commands.filter((elem) => elem.command === commandName && elem.flags.indexOf(commandParts[1]) !== -1).length > 0){
                    switch(commandParts[1]){
                        case "--skills":
                            const skillsOperand = [...commandsHistory];
                            Data.skills.forEach((elem, index) => {
                                skillsOperand.push(`${index+1}) ${elem.name}`);
                                elem.technologies.forEach((elem) => {
                                    skillsOperand.push(`${elem.technologyName} - ${elem.technologySkill}`);
                                })
                            });
                            setCommandsHistory(skillsOperand);
                            break;
                        case "--projects":
                            const careerOperand = [...commandsHistory];
                            Data.projects.forEach((elem, index) => {
                                careerOperand.push(`${index+1}) ${elem.projectName}`);
                                careerOperand.push(`Role - ${elem.projectRole}`);
                                careerOperand.push(elem.projectDescription);
                                careerOperand.push(`Made with ${elem.projectTechnologies}`);
                                careerOperand.push("");
                            });
                            setCommandsHistory(careerOperand);
                            break;
                        default: 
                            break;
                    }
                }
                else{
                    const showErrorOperand = [...commandsHistory, "Missing a correct parameter or a flag"];
                    setCommandsHistory(showErrorOperand);
                }
                break;
            default:
                break;
        }
    }
};
