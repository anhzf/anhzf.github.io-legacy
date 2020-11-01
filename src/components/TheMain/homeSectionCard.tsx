import { joinClass } from '@/utils';
import * as React from 'react';
import C from './classes';

type titleAlign = 'text-left' | 'text-center' | 'text-right';
type titleSize = 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl';

interface ActionsProps {
    children?: JSX.Element;
}

interface homeSectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    titleAlign?: titleAlign;
    titleSize?: titleSize;
    children?: JSX.Element | string,
    actions?: ActionsProps['children'];
}

export default function HomeSectionCard({
    title, titleAlign = 'text-left', titleSize='text-2xl', children, actions, className, ...attrs
}: homeSectionCardProps): JSX.Element {

    const baseClass = C.homeSectionCard;
    const defaultGridColSpan = 'col-span-3';
    const defaultGridColStart = 'col-start-1';
    const classes = joinClass(baseClass, 'p-b-xl', defaultGridColSpan, defaultGridColStart, className ?? '');

    return (
        <div className={joinClass(classes)} {...attrs}>
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
