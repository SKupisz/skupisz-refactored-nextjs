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
        command: "show",
        description: "By using this command with a specific flag, you can my skills (--skills), the projects I did (--projects) or my current programming history (--career)",
        hasArgument: true,
        flags: ["--skills", "--projects", "--career"]
    },
    {
        command: "chcc",
        description: "changes console text's color to the hex code or the RGB given or resets is with --reset. To know which color formats are allowed to use, type chcc --list",
        hasArgument: true,
        flags: ["--reset","--list"]
    },
    {
        command: "exit",
        description: "exits to the given subpage (main, blog or contact) or to the main page defaultly",
        hasArgument: true,
        flags: [],
    },
];

export const Data = {
    career: [
        {
            companyName: "Sparkledge app",
            startingDate: "2022",
            endingDate: "",
            role: "President of the project, frontend developer",
        },
        {
            companyName: "Koło Naukowe Informatyków PW - Student IT Research Group of Warsaw University of Technology",
            startingDate: "2021",
            endingDate: "",
            role: "Member and Vice President",
        },
        {
            companyName: "LTD Softway",
            startingDate: "2021",
            endingDate: "",
            role: "IT & SEO support",
        },
        {
            companyName: "Hackclub association",
            startingDate: "2019",
            endingDate: "",
            role: "Co-leader",
        },
        {
            companyName: "SGK-news",
            startingDate: "2019",
            endingDate: "2021",
            role: "President of the project, fullstack dev",
        },
    ],
    projects: [
        {
            projectName: "Sparkledge",
            projectRole: "Founder and President, main front-end developer",
            projectTechnologies: "ReactJS, Typescript, Axios",
            projectDescription: "A notes hub produced in cooperation with the Student Research Group of Warsaw University of Technology",
        },
        {
            projectName: "LTD Softway business calculator",
            projectRole: "Main fullstack developer",
            projectTechnologies: "ReactJS, NextJS, Typescript, NestJS, Axios",
            projectDescription: "A business calculator made for optimizing the LTD Softway company clients' businesses",
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