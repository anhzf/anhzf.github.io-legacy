import * as React from 'react';
import * as Icons from '@/components/icons';
import C from './classes';

export interface navItem {
    title: string;
    target: string;
}

interface navItemsProps {
    items: navItem[];
}

export default function navItems({
    items
}: navItemsProps) {
    return (
        <ul className={C.navbar__container}>
            {items.map((item, i) => (

                <a href={item.target} className={C.navbar__item} key={i}>
                    <li>{ item.title }</li>
                </a>

            ))}
            
            <Icons.Menu className={C.navbar__hamburger} />
        </ul>
    )
}