export function joinClass(...classes : string[]): string {
    return classes.join(' ');
}

export function classesToArray(...classes : string[]): string[] {
    return classes.flatMap(c => c.split(' '));
}
