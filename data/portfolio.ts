export const Commands:{
    command: string,
    description: string,
    hasArgument: boolean,
    flags: string[],
}[] = [
    {
        command: "help",
        description: "shows all of the commands",
        hasArgument: false,
        flags: []
    },
    {
        command: "clear",
        description: "clears the console",
        hasArgument: false,
        flags: []
    },
    {
        command: "chcc",
        description: "changes console text's color to the hex code or the RGB given or resets is with --reset. To know which color formats are allowed to use, type chcc --list",
        hasArgument: true,
        flags: ["--reset","--list"]
    }
];

export const Data = {
    projects: [
        {

        }
    ],
    skills: [

    ],
};