import * as React from 'react';
import * as Icon from '@/components/icons';
import { ButtonProps } from '@/components/Button';
import C from './classes';
import { joinClass } from '@/utils';

export interface CardListItemProps {
    title: string;
    desc?: string;
    codeLink?: string;
    demoLink?: string;
    [index: string]: any;
}

export interface CardListProps {
    items: CardListItemProps[]
    actions?: ButtonProps[]
}

export default function CardList({
    items
}: CardListProps): JSX.Element {
    return (
        <ul className={C.cardList}>
            {items.map((project, i) => (
                <CardListItem
                    {...project}
                    key={`CardListItem_${i}`}
                />
            ))}
        </ul>
    )
}

export function CardListItem({
    title, desc, codeLink, demoLink, ...attrs
}: CardListItemProps): JSX.Element {
    const baseClass = C.cardList__item__content;
    const mergedAttrs = { ...attrs, className: joinClass(attrs.class, baseClass) };

    return (
        <li className={C.cardList__item}>
            <article {...mergedAttrs}>
                <h3 className={C.cardList__item__title}>{title}</h3>
                <p className={C.cardList__item__desc}>
                    {desc}
                </p>
            </article>
            <div className={C.cardList__item__action}>
                {codeLink && (
                    <a href={codeLink} className={C.cardList__item__action__btn} target="_blank" rel="noopener noreferrer" title="View Code">
                        <Icon.Code className={C.cardList__item__action__icon} />
                    </a>
                )}
                {demoLink && (
                    <a href={demoLink} className={C.cardList__item__action__btn} target="_blank" rel="noopener noreferrer" title="View Demo">
                        <Icon.GlobeAlt className={C.cardList__item__action__icon} />
                    </a>
                )}
            </div>
        </li>
    )
}
