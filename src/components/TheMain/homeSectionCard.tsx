import { joinClass } from '@/utils';
import * as React from 'react';
import C from './classes';

type titleAlign = 'text-left' | 'text-center' | 'text-right';
type titleSize = 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl';

interface ActionsProps {
    children?: JSX.Element;
}

interface homeSectionCardProps {
    title: string;
    titleAlign?: titleAlign;
    titleSize?: titleSize;
    children?: JSX.Element | string,
    colSpan?: number;
    colStart?: number;
    actions?: ActionsProps['children'];
}

export default function HomeSectionCard({
    title, titleAlign = 'text-left', titleSize='text-2xl', children = '', actions, colSpan = 3, colStart = 0
}: homeSectionCardProps): JSX.Element {

    const baseClass = C.homeSectionCard;
    const gridColSpan = `col-span-${colSpan}`;
    const gridColStart = colStart && `col-start-${colStart}`;
    const classes = [baseClass, 'p-b-xl', gridColStart, gridColSpan].join(' ');


    return (
        <div className={classes}>
            <h1 className={joinClass(C.homeSectionCard__title, titleAlign, titleSize)}>{title}</h1>
            <div className={C.homeSectionCard__content}>
                {children}
            </div>

            <Actions>
                {actions}
            </Actions>
        </div>
    )
}

export function Actions({
    children
}: ActionsProps): JSX.Element {
    return (
        <div className={C.homeSectionCard__action}>
            {children}
        </div>
    )
}
