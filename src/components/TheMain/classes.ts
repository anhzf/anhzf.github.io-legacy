export enum ActionBtnModifier {
    default = 'bg-transparent text-blue-500 hover:bg-gray-200',
    medium = 'bg-transparent text-blue-500 border border-blue-600 hover:bg-gray-200',
    strong = 'bg-gray-800 text-white hover:bg-gray-700',
}

const classStyle : {
    [key: string]: string
} = {
    main: 'grid grid-cols-12',

    section: 'col-start-2 col-span-10 grid grid-cols-6 gap-x-12',

    homeSectionCard: 'bg-white rounded-xl shadow-2xl flex flex-col',
    homeSectionCard__title: 'mx-10 mt-6 mb-2 font-poppins font-bold text-gray-800 text-2xl',
    homeSectionCard__content: 'px-8 pt-2',
    homeSectionCard__content__list: 'list-none p-0 m-0',
    homeSectionCard__content__list__item: 'cursor-pointer max-w-full truncate hover:bg-gray-200',
    homeSectionCard__action: 'self-end mb-3 py-4 px-8 flex items-center gap-x-6',
    homeSectionCard__action__btn: 'cursor-pointer py-2 px-5 rounded-full transition-colors duration-100 flex items-center',
}

export default classStyle;