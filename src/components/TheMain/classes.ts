const classStyle : {
    [key: string]: string
} = {
    main: 'grid grid-cols-12',

    section: 'col-start-2 col-span-10 mb-24 grid grid-cols-6 gap-x-12 last:mb-0',

    homeSectionCard: 'bg-white rounded-xl shadow-2xl flex flex-col',
    homeSectionCard__title: 'mx-10 mt-6 mb-1 font-poppins font-bold text-gray-800 text-2xl',
    homeSectionCard__content: 'px-8 pt-2',
    homeSectionCard__action: 'self-end mb-3 py-4 px-8 flex items-center gap-x-6',

    cardList: 'list-none p-0 m-0 my-2 grid grid-cols-2 gap-4',
    cardList__item: 'cursor-default bg-white border rounded-lg grid grid-cols-6 hover:bg-gray-100 hover:bg-opacity-75',
    cardList__item__content: 'col-span-5 pl-3 py-2 border-r',
    cardList__item__action: 'flex flex-col justify-center items-stretch divide-y',
    cardList__item__title: 'my-1 pr-1 font-medium text-xl text-blue-600 truncate',
    cardList__item__desc: 'mx-2 mt-1 mb-2 font-roboto font-light indent-3 text-justify text-sm leading-relaxed line-clamp-2',
    cardList__item__action__btn: 'flex-grow cursor-pointer m-0 w-full p-2 text-gray-600 flex justify-center items-center first:rounded-br-lg last:rounded-br-lg hover:bg-opacity-50 hover:bg-gray-300 active:bg-gray-400',
    cardList__item__action__icon: 'h-5',
}

export default classStyle;