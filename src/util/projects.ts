const projects = [
    {
        name: "Novomemo",
        description: "Novomemo is a note-taking app that focuses on simplicity and ease of use. Built with Nextjs, Typescript & Supabase.\n\nNovomemo supports both online & offline modes of note-taking (one can use the application offline if they do not wish to sign up). It supports note taking in both markdown and a visual editor, along with labelling and full text searching.",
        images: [
            "https://raw.githubusercontent.com/portableCoder/Novomemo/master/assets/Banner.png"
        ],
        technologies: ["NextJS", "Typescript", "Supabase", "TailwindCSS", "PostgreSQL"],
        link: ["", ""]
    },
    {
        name: "Lofi-Doro",
        description: `A pomodoro timer to study/ work to\n\nA pomodoro timer that plays lofi (or any) music from youtube. 
        It's a rewrite of the same react app that I wrote previously with Gatsby,  now with Nextjs & Typescript.`,
        images: [
            "https://raw.githubusercontent.com/portableCoder/Lofi-Doro/master/assets/logo.png",
            "https://raw.githubusercontent.com/portableCoder/Lofi-Doro/master/assets/img.png"
        ],
        link: ["", ""],
        technologies: ["NextJS", "Typescript"]
    },
    {
        name: "Soundly",
        description: `Soundly is a simple, easy to use music player built for Windows. 
        It provides a minimalistic interface for adding and customising music. 
        The goal with the design of the app was to reduce choice fatigue, and to reduce time exploring.
        \n\n
        Soundly allows you to add music from sources like youtube or your local file system. 
        The songs can be added as a playlist or as an individual song.`,
        images: [
            "https://github.com/portableCoder/Soundly/blob/master/assets/ff.png?raw=true"
        ],
        technologies: ["Windows", "Electron", "ReactJS",],
        link: ["", ""]
    },

    {
        name: "Spellify",
        description: "Spellify is a simple web-app built with NextJS, designed to improve comprehension skills. It uses the native voice synthesis api present on the Browser and generates spelling prompts in which the user has to listen to the generated word and spell it correctly.\n\nThe user must choose between three levels of difficulty: Easy, Medium & Hard. The number of prompts and lengths of words increases with each difficulty level. The user can see their score, and their spelling accuracy. The user can also practice incorrect words and hone their spelling.",
        images: [

            "https://raw.github.com/portableCoder/Spellify/master/Spellify.png"

        ],
        technologies: ["NextJS"],
        link: ["", ""]
    },

    {
        name: "portableThoughts",
        link: ["", ""],
        description: "My personal blog site, doubles as a versatile, minimalistic template-based site",
        images: [

            "https://raw.githubusercontent.com/portableCoder/portableThoughts/master/snippet.png"
        ],
        technologies: ["NextJS", "TailwindCSS", "Jest", "React-Testing-Library", "React-Markdown"]
    }
]
projects.forEach((el, i) => {
    projects[i].link = [`https://github.com/portableCoder/${el.name}`]
    if (el.name !== "Soundly") {
        projects[i].link.push(`https://portableCoder.github.io/${el.name}`)
    }
})


export default projects