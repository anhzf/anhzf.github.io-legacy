import * as React from 'react';

interface ActionProps {
    text: string;
    action: Function | string;
    type?: 'strong' | 'default';
}

interface ActionsProps {
    children?: JSX.Element;
}

interface ContentListItemProps {
    content: string;
    [index: string]: any;
}

interface ContentListProps {
    items: ContentListItemProps[]
    actions?: ActionProps[]
}

interface homeSectionCardProps {
    title: string;
    children?: JSX.Element | string,
    colSpan?: number;
    colStart?: number;
    actions?: ActionsProps['children'];
}

export default function HomeSectionCard({
    title, children = '', actions, colSpan = 3, colStart = 0
}: homeSectionCardProps): JSX.Element {
    const baseClass = 'home-section-card';
    const gridColSpan = `grid:col-span-${colSpan}`;
    const gridColStart = colStart && `grid:col-start-${colStart}`;
    const classes = [baseClass, 'p-b-xl', gridColStart, gridColSpan].join(' ');


    return (
        <div className={classes}>
            <h1 className="home-section-card__title">{title}</h1>
            <div className="home-section-card__contents">
                {children}
            </div>

            <Actions>
                {actions}
            </Actions>
        </div>
    )
}

export function ContentList({
    items
}: ContentListProps): JSX.Element {
    return (
        <ul className="featured__container">
            {items.map((project, i) => (
                <ContentListItem
                    {...project}
                    key={`ContentListItem_${i}`}
                />
            ))}
        </ul>
    )
}

export function ContentListItem({
    content, ...attrs
}: ContentListItemProps): JSX.Element {
    return (
        <li className="featured__item">
            <a {...attrs}>{content}</a>
        </li>
    )
}

export function Actions({
    children
}: ActionsProps): JSX.Element {
    return (
        <div className="home-section-card__action__container">
            {children}
        </div>
    )
}

export function Action({
    text, action, type
}: ActionProps): JSX.Element {
    const baseClass = 'home-section-card__action';
    const modifier = !type ? '' : `${baseClass}--${type}`;
    const className = [baseClass, modifier].join(' ');
    const clickInteract =
        typeof action === 'string' ?
            { href: action } : { onClick: action };

    return React.createElement(
        'a',
        { className, ...clickInteract },
        text
    );
}