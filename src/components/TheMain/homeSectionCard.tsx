import * as React from 'react';
import C, { ActionBtnModifier } from './classes';
import { joinClass } from '../../utils';
import { ExternalLink } from '../icons';

interface ActionProps {
    text: string;
    action: Function | string;
    // type?: 'strong' | 'default';
    type?: ActionBtnModifier;
    externalLink?: Boolean;
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
    // const baseClass = 'home-section-card';
    const baseClass = C.homeSectionCard;
    const gridColSpan = `col-span-${colSpan}`;
    const gridColStart = colStart && `col-start-${colStart}`;
    const classes = [baseClass, 'p-b-xl', gridColStart, gridColSpan].join(' ');


    return (
        <div className={classes}>
            <h1 className={C.homeSectionCard__title} /* className="home-section-card__title" */>{title}</h1>
            <div className={C.homeSectionCard__content} /* className="home-section-card__contents" */>
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
        <ul className={C.homeSectionCard__content__list} /* className="featured__container" */>
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
    const baseClass = 'block';
    const mergedAttrs = {...attrs, className: joinClass(attrs.class, baseClass)};

    return (
        <li className={C.homeSectionCard__content__list__item} /* className="featured__item" */>
            <a {...mergedAttrs}>{content}</a>
        </li>
    )
}

export function Actions({
    children
}: ActionsProps): JSX.Element {
    return (
        <div className={C.homeSectionCard__action} /* className="home-section-card__action__container" */>
            {children}
        </div>
    )
}

export function Action({
    text, action, type = ActionBtnModifier.default, externalLink = false
}: ActionProps): JSX.Element {
    // const baseClass = 'homeSectionCard__action';
    const baseClass = C.homeSectionCard__action__btn;
    // const modifier = !type ? '' : `${baseClass}--${type}`;
    // const modifier = `${baseClass}--${type}`;
    const className = [baseClass, type].join(' ');

    const clickInteraction =
        typeof action === 'string' ?
            { href: action } : { onClick: action };

    return React.createElement(
        'a',
        { className, ...clickInteraction },
        (<>
            {text}
            { externalLink && <ExternalLink className="inline-block ml-1 h-4" /> }
        </>)
    );
}