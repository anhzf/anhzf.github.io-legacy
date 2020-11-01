import * as React from 'react';
import C from './classes';

export interface TechStackImgProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    src: string;
}

export default function TechStackImg({
    src, ...attrs
}: TechStackImgProps): JSX.Element {
    const styles = {
        backgroundImage: `url(${src})`,
    }

    return (
        <a {...attrs}>
            <div style={styles} className={C.techStack__item__img}></div>
        </a>
    );
}
