import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiSupabase,
    SiFirebase,
    SiPython,
    SiWindows,
    SiElectron,
    SiJest,
} from 'react-icons/si';

import { BiLogoJava } from 'react-icons/bi';

const technologies = {
    "ReactJS": {
        "description": "JavaScript library for building UI components and user interfaces.",
        "icon": SiReact
    },
    "NextJS": {
        "description": "Framework for server-rendered React applications.",
        "icon": SiNextdotjs
    },
    "TailwindCSS": {
        "description": "Utility-first CSS framework for rapid UI development.",
        "icon": SiTailwindcss
    },
    "Bootstrap": {
        "description": "CSS framework for responsive and mobile-first websites.",
        "icon": SiBootstrap
    },
    "HTML,CSS,JS": {
        "description": "Foundational technologies for building web pages and applications.",
        "icon": SiHtml5
    },
    "Javascript": {
        "description": "Versatile scripting language for web development.",
        "icon": SiJavascript
    },
    "Typescript": {
        "description": "Typed superset of JavaScript for scalable applications.",
        "icon": SiTypescript
    },
    "NodeJS": {
        "description": "JavaScript runtime environment for server-side applications.",
        "icon": SiNodedotjs
    },
    "Express": {
        "description": "Fast and minimalist web framework for Node.js.",
        "icon": SiExpress
    },
    "MySQL": {
        "description": "Open-source relational database management system.",
        "icon": SiMysql
    },
    "PostgreSQL": {
        "description": "Powerful open-source object-relational database system.",
        "icon": SiPostgresql
    },
    "Supabase": {
        "description": "Open-source alternative to Firebase with real-time APIs.",
        "icon": SiSupabase
    },
    "Firebase": {
        "description": "Comprehensive suite of cloud-based app development tools.",
        "icon": SiFirebase
    },
    "Java": {
        "description": "Versatile and widely-used object-oriented programming language.",
        "icon": BiLogoJava
    },
    "Python": {
        "description": "High-level programming language known for its simplicity and readability.",
        "icon": SiPython
    },
    "Windows": {
        "description": "Versatile operating system with a significant device & software ecosystem",
        "icon": SiWindows
    },
    "Electron": {
        "description": "Javascript framework for building robust cross platform application",
        "icon": SiElectron
    },
    "Jest": {
        "description": "Testing library for react applications",
        "icon": SiJest
    }
};
type Tech = keyof typeof technologies
export type {
    Tech
}
export default technologies;
