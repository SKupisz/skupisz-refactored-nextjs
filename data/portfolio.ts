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
    },
    {
        command: "show",
        description: "By using this command with a specific flag, you can my skills (--skills) or my current programming history (--career)",
        hasArgument: true,
        flags: ["--skills", "--career"]
    },
];

export const Data = {
    projects: [
        {
            projectName: "Sparkledge",
            projectRole: "Founder and President, main front-end developer",
            projectTechnologies: "ReactJS, Typescript, Axios",
            projectDescription: "A notes hub produced in cooperation with the Student Research Group of Warsaw University of Technology"
        }
    ],
    skills: [
        {
            name: "Frontend web-development",
            technologies: [
                {
                    technologyName: "Javascript",
                    technologySkill: "mid-advanced",
                },
                {
                    technologyName: "Typescript",
                    technologySkill: "mid"
                },
                {
                    technologyName: "ReactJS",
                    technologySkill: "mid-advanced"
                },
                {
                    technologyName: "NextJS",
                    technologySkill: "mid"
                },
                {
                    technologyName: "CSS",
                    technologySkill: "mid-advanced"
                },
                {
                    technologyName: "HTML",
                    technologySkill: "mid-advanced"
                }
            ]
        }
    ],
};