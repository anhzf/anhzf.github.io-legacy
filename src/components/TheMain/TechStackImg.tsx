import * as React from 'react';
import C from './classes';

export interface TechStackImgProps {
    src: string;
    [index: string]: string;
}

export default function TechStackImg({
    src
}: TechStackImgProps): JSX.Element {
    const styles = {
        backgroundImage: `url(${src})`,
    }

    return (
        <div style={styles} className={C.techStack__item}></div>
    );
}
