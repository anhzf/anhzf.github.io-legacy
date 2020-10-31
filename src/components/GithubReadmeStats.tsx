import * as React from 'react';
import { joinPath, buildQuery } from '@/utils';

interface commonOptions extends React.ImgHTMLAttributes<HTMLImageElement> {
    username: string;
    title_color?: string;
    text_color?: string;
    icon_color?: string;
    bg_color?: string;
    hide_border?: boolean;
    theme?: string;
    cache_seconds?: number;
    locale?: string;
}

interface statsCardProps extends commonOptions {
    // hide: 
    hide_title?: boolean;
    hide_rank?: boolean;
    show_icons?: boolean;
    include_all_commits?: boolean;
    count_private?: boolean;
    line_height?: number;
    custom_title?: string;
}

interface topLangsCardProps extends commonOptions {
    // hide: 
    hide_title?: boolean;
    hide_border?: boolean;
    layout?: 'default' | 'compact';
    card_width?: number;
    langs_count?: number;
    // exclude_repo?: Exclude specified repositories (Comma-separated values)
    custom_title?: string;
}

interface wakaTimeCardProps extends commonOptions {
    hide_title?: boolean;
    line_height?: number;
    hide_progress?: boolean;
    custom_title?: string;
}

export function StatsCard(args: statsCardProps): JSX.Element {
    return baseComponent<statsCardProps>('', args);
}

export function TopLangsCard(args: topLangsCardProps): JSX.Element {
    return baseComponent<topLangsCardProps>('top-langs', args);
}

export function WakaTimeCard(args: wakaTimeCardProps): JSX.Element {
    return baseComponent<wakaTimeCardProps>('wakatime', args);
}

function baseComponent<T extends commonOptions>(endpoint: string, {
    username, ...ops
}: T) {
    const baseApi = 'https://github-readme-stats.vercel.app/api';
    const api = joinPath(baseApi, endpoint);
    const options = {
        username,
        ...ops
    };

    return (
        <img src={buildQuery(api, options)} alt="" loading="lazy" />
    );
}
