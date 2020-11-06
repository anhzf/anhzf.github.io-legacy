import { joinClass } from '@/utils';
import * as React from 'react';

interface TheFooterProps extends React.HTMLAttributes<HTMLElement> {}

const classStyle = 'mx-auto py-4 px-3 w-full max-w-screen-lg bg-gray-900 font-semibold text-center text-white sm:text-base text-sm rounded-t-2xl shadow-2xl' as const;

export default function TheFooter({
    className,
    ...attrs
}: TheFooterProps) {
    return (
        <footer className={joinClass(classStyle, `${className}`)} {...attrs}>
            <span className="inline-block">Copyright &copy; 2020 All rights reserved</span>
            <span className="inline-block whitespace-pre-wrap"> | </span>
            <span className="inline-block">By Alwan Nuha</span>
        </footer>
    )
}