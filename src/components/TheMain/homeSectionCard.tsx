import * as React from 'react';
// import { ButtonProps } from '@/components/Button';
import C from './classes';
// import { joinClass } from '@/utils';
// import * as Icon from '@/components/icons';

interface ActionsProps {
    children?: JSX.Element;
}

// interface ContentListItemProps {
//     content: string;
//     [index: string]: any;
// }

// interface ContentListProps {
//     items: ContentListItemProps[]
//     actions?: ButtonProps[]
// }

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

    const baseClass = C.homeSectionCard;
    const gridColSpan = `col-span-${colSpan}`;
    const gridColStart = colStart && `col-start-${colStart}`;
    const classes = [baseClass, 'p-b-xl', gridColStart, gridColSpan].join(' ');


    return (
        <div className={classes}>
            <h1 className={C.homeSectionCard__title}>{title}</h1>
            <div className={C.homeSectionCard__content}>
                {children}
            </div>

            <Actions>
                {actions}
            </Actions>
        </div>
    )
}

// export function ContentList({
//     items
// }: ContentListProps): JSX.Element {
//     return (
//         <ul className={C.homeSectionCard__content__list}>
//             {items.map((project, i) => (
//                 <ContentListItem
//                     {...project}
//                     key={`ContentListItem_${i}`}
//                 />
//             ))}
//         </ul>
//     )
// }

// export function ContentListItem({
//     content, ...attrs
// }: ContentListItemProps): JSX.Element {
//     const baseClass = C.homeSectionCard__content__list__item__content;
//     const mergedAttrs = { ...attrs, className: joinClass(attrs.class, baseClass) };

//     return (
//         <li className={C.homeSectionCard__content__list__item}>
//             <article {...mergedAttrs}>
//                 <h3 className={C.homeSectionCard__content__list__item__title}>{content}</h3>
//                 <p className={C.homeSectionCard__content__list__item__desc}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem facilis eos voluptate accusamus doloremque dignissimos laboriosam voluptatibus, ullam nesciunt.
//                 </p>
//             </article>
//             <div className={C.homeSectionCard__content__list__item__action}>
//                 <div className={C.homeSectionCard__content__list__item__action__btn} title="View Code">
//                     <Icon.Code className={C.homeSectionCard__content__list__item__action__icon}/>
//                 </div>
//                 <div className={C.homeSectionCard__content__list__item__action__btn} title="View Demo">
//                     <Icon.GlobeAlt className={C.homeSectionCard__content__list__item__action__icon}/>
//                 </div>
//             </div>
//         </li>
//     )
// }

export function Actions({
    children
}: ActionsProps): JSX.Element {
    return (
        <div className={C.homeSectionCard__action}>
            {children}
        </div>
    )
}
