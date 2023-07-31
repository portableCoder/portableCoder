interface Skill {
    [key: string]: Skill
}
const Skills: Skill = {
    "Frontend": {
        "Frameworks & tools": {
            "ReactJS": {},
            "NextJS": {},
            "TailwindCSS": {},
            "Bootstrap": {},
            "HTML,CSS,JS": {},
            "Electron": {}
        },

    },
    "Backend": {
        "Frameworks & Tools": {
            "NodeJS": {},
            "Express": {

            },
        },
        "Databases": {
            "MySQL": {},
            "PostgreSQL": {},
            "Supabase": {},
            "Firebase": {

            }
        },


    },
    "Languages": {
        "Javascript": {},
        "Typescript": {},
        "Python": {},
        "Java": {},

    }
}
export type { Skill }
export default Skills