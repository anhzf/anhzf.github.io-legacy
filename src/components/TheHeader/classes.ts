const classStyle = {
    header: 'w-full px-6 flex flex-col',
    
    navbar: 'w-full max-w-screen-lg my-0 mx-auto px-8 flex items-center',
    navbar__container: 'm-0 ml-auto h-full py-2 list-none flex justify-center items-center',
    navbar__item: 'my-3 mx-2 py-1 px-4 font-poppins font-bold text-blue-400 uppercase rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-75 ease-in',
    
    brand: 'font-montserrat font-extrabold text-4xl text-blue-500',
    badge: 'cursor-pointer m-1 xl:py-1 py-0 xl:px-5 px-4 bg-blue-500 text-white font-normal xl:text-md text-sm rounded-full shadow-lg hover:bg-blue-600 hover:shadow-sm active:bg-blue-700 transition-colors transition-shadow duration-75 ease-in',

    headerBanner: 'h-full px-6 grid grid-cols-12 lg:gap-x-16 gap-x-2',
    headerBanner__photo: 'w-full self-end col-span-3 lg:col-start-2 col-start-1',
    headerBanner__content: 'flex flex-col justify-center lg:col-span-7 col-span-9',
    headerBanner__content__title1: 'm-0 font-epilogue font-medium xl:text-4xl lg:text-3xl text-2xl text-gray-500',
    headerBanner__content__title2: 'm-0 font-montserrat font-bold xl:text-5xl lg:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-900 to-blue-500 via-blue-800 to-blue-600',
    headerBanner__content__subtitle: 'flex flex-wrap',
} as const;

export default classStyle;
