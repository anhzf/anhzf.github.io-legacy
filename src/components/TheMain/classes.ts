const classStyle = {
    main: 'grid grid-cols-12',

    section: 'lg:mx-0 mx-4 lg:col-span-10 col-span-12 lg:col-start-2 col-start-1 mb-24 grid grid-cols-6 gap-x-12 last:mb-0',
    
    homeSectionCard: 'bg-white rounded-xl shadow-2xl flex flex-col',
    homeSectionCard__title: 'mx-10 mt-6 mb-1 font-montserrat font-bold text-gray-800',
    homeSectionCard__content: 'xl:px-8 px-6 pt-2',
    homeSectionCard__action: 'self-end mb-3 py-4 sm:px-8 px-2 flex items-center sm:gap-x-6 gap-x-2 gap-y-0 sm:gap-y-0 gap-y-2',
    
    cardList: 'list-none p-0 m-0 my-2 grid md:grid-cols-2 grid-cols-1 gap-4 items-stretch',
    cardList__item: 'cursor-default bg-white border rounded-lg grid grid-cols-6 hover:bg-gray-100 hover:bg-opacity-75',
    cardList__item__content: 'col-span-5 pl-3 xl:py-2 py-1 border-r flex flex-col justify-center',
    cardList__item__action: 'flex flex-col justify-center items-stretch divide-y',
    cardList__item__title: 'my-1 pr-1 font-medium text-xl text-blue-600 truncate',
    cardList__item__desc: 'mx-2 mt-1 mb-2 font-light indent-3 text-justify text-sm leading-relaxed line-clamp-2',
    cardList__item__action__btn: 'flex-grow cursor-pointer m-0 w-full p-2 text-gray-600 flex justify-center items-center first:rounded-br-lg last:rounded-br-lg hover:bg-opacity-50 hover:bg-gray-300 active:bg-gray-400',
    cardList__item__action__icon: 'h-5',
    
    techStack: 'col-span-12 md:mb-24 h-screen flex flex-col justify-evenly',
    techStack__title: 'self-center m-0 md:text-center lg:text-5xl md:text-4xl text-2xl',
    techStack__list: 'overflow-x-auto px-16 pb-32 flex items-center md:gap-x-16 gap-8',
    techStack__item: 'hover:bg-opacity-25 hover:bg-blue-300',
    techStack__item__img: 'lg:w-64 sm:w-48 w-40 lg:h-64 sm:h-48 h-40 bg-no-repeat bg-center bg-contain',
    
    socialMedia: 'group relative sm:mx-4 md:px-2 px-1 py-4 md:text-base text-sm border border-gray-300 rounded-md hover:bg-gray-300 hover:bg-opacity-75',
    socialMedia__list: 'md:pt-8 pt-4 md:pb-4 pb-2 grid lg:grid-cols-2 grid-cols-1 items-center md:gapy-y-6 sm:gap-y-4 gap-y-2',
    socialMedia__icon: 'inline-block md:mx-4 mx-2 md:h-8 h-6 text-gray-800',
    socialMedia__openInNew: 'invisible absolute right-0 top-0 h-4 text-gray-800 transform translate-y-1/2 -translate-x-1/2 group-hover:visible',
} as const;

export default classStyle;