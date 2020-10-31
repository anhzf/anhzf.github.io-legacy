export function joinClass(...classes : string[]): string {
    return classes.join(' ');
}

export function classesToArray(...classes : string[]): string[] {
    return classes.flatMap(c => c.split(' '));
}

export function joinPath(url: string, ...path: string[]) {
    const Url = new URL(url);
    const paths = Url.pathname.split('/');

    Url.pathname = [...paths, ...path].join('/');
    return Url.toString()
}

export function buildQuery(
    url: string,
    queries: {
        [index: string]: any
    }): string {
    const Url = new URL(url);
    const Params = Url.searchParams;

    Object.entries(queries).forEach(([key, val]) => Params.set(key, String(val)));

    return Url.toString();
}