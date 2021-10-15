/*
    ===== Código de TypeScript =====
*/
let habilidades: (string | number | boolean)[] = ['Bash', 'Counter', 'Healing'];

habilidades.push(true);

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Santiago';

console.table(personaje);