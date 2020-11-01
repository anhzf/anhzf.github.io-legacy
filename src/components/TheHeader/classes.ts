const classStyle = {
    header: 'w-full px-6 flex flex-col',
    
    navbar: 'w-full max-w-screen-lg my-0 mx-auto sm:px-8 px-1 flex items-center',
    navbar__container: 'm-0 ml-auto h-full py-2 list-none flex justify-center items-center',
    navbar__item: 'md:inline-block hidden my-3 mx-2 py-1 px-4 font-poppins font-bold text-blue-400 uppercase rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-75 ease-in',
    navbar__hamburger: 'sm:hidden inline-block p-2 h-8 font-bold text-blue-400 hover:bg-blue-300 hover:bg-opacity-25 rounded-full',

    brand: 'font-montserrat font-extrabold text-4xl text-blue-500',
    badge: 'md:inline-block hidden cursor-pointer m-1 xl:py-1 py-0 xl:px-5 px-4 bg-blue-500 text-white font-normal xl:text-md text-sm rounded-full shadow-lg hover:bg-blue-600 hover:shadow-sm active:bg-blue-700 transition-colors transition-shadow duration-75 ease-in',

    headerBanner: 'relative h-full px-6 grid md:grid-cols-12 grid-cols-3 lg:gap-x-16 gap-x-2',
    headerBanner__photo: 'w-full self-end md:col-span-3 col-span-2 lg:col-start-2 col-start-1',
    headerBanner__content: 'md:static absolute right-0 h-full md:text-left text-right flex flex-col justify-center lg:col-span-7 md:col-span-9',
    headerBanner__content__title1: 'm-0 font-epilogue font-medium xl:text-4xl lg:text-3xl md:text-2xl text-md text-gray-500',
    headerBanner__content__title2: 'm-0 md:p-0 px-2 py-1 font-montserrat font-bold xl:text-5xl lg:text-4xl md:text-3xl text-xl truncate md:bg-clip-text md:text-transparent md:bg-gradient-to-r md:from-teal-900 md:via-blue-800 md:to-blue-600 text-white bg-blue-500 bg-opacity-75 rounded-lg md:shadow-none shadow-lg',
    headerBanner__content__subtitle: 'flex flex-wrap',
} as const;

export default classStyle;
