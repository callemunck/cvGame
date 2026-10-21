export interface Zone {
    name: string;
    years: string;
    text: string;
    skills: string[];
    color: number;
}

export const zones: Zone[] = [
    { name: 'Utbildning', years: '2020–2025', text: 'M.Sc in Computer Science', skills: ['C'], color: 0xbfe3ff }, // #bfe3ff
    { name: 'JOST Umeå', years: '2024-2025', text: 'Business Intelligence Developer', skills: ['Power BI'], color: 0xffe0b2 }, // #ffe0b2
    { name: 'Master’s Thesis and Publication', years: '2025', text: 'Published', skills: ['C#'], color: 0xd1c4e9 }, // #d1c4e9
    { name: 'Capgemini', years: '2025', text: 'Software Engineer', skills: ['.NET'], color: 0xc8e6c9 }, // #c8e6c9
];