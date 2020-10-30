import * as React from 'react';
import C, { BtnModifier } from './classes';
import * as Icon from '@/components/icons';

export interface ButtonProps {
    children: string;
    action: Function | string;
    type?: BtnModifier;
    externalLink?: Boolean;
}


export default function Button({
    children, action, type = BtnModifier.default, externalLink = false
}: ButtonProps): JSX.Element {
    const baseClass = C.btn;
    const className = [baseClass, type].join(' ');

    const clickInteraction =
        typeof action === 'string' ?
            { href: action } : { onClick: action };

    return React.createElement(
        typeof action === 'string' ?
            'a' : 'button',
        {
            className,
            ...(externalLink ?
                { ...clickInteraction, target: '_blank' } : clickInteraction
            )
        },
        (<>
            {children}
            { externalLink && <Icon.ExternalLink className="inline-block ml-1 h-4" />}
        </>)
    );
}