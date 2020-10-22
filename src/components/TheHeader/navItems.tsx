import * as React from 'react';

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
        <ul className="navbar__container">
            {items.map((item, i) => (

                <a href={item.target} className="navbar__item" key={i}>
                    <li>{ item.title }</li>
                </a>

            ))}
        </ul>
    )
}