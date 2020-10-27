const classStyle : {
    [key: string]: string
} = {
    header: 'w-full px-6 flex flex-col',
    
    navbar: 'w-full max-w-screen-lg my-0 mx-auto px-8 flex items-center',
    navbar__container: 'm-0 ml-auto h-full py-2 list-none flex justify-center items-center',
    navbar__item: 'my-3 mx-2 py-1 px-4 font-poppins font-bold text-blue-400 uppercase rounded-full hover:bg-blue-400 hover:font-semibold hover:text-white transition-colors duration-75 ease-in',
    
    brand: 'font-montserrat font-extrabold text-4xl text-blue-500',
    badge: 'cursor-pointer m-1 py-1 px-5 bg-blue-400 text-white font-normal rounded-full shadow-xl hover:bg-blue-500 hover:shadow-sm transition-colors transition-shadow duration-100 ease-in',

    headerBanner: 'h-full px-6 grid grid-cols-12 gap-x-16',
    headerBanner__photo: 'w-full self-end col-span-3 col-start-2',

    headerBanner__content: 'flex flex-col justify-center col-span-7',
    headerBanner__content__title1: 'm-0 font-epilogue font-medium text-4xl text-gray-500',
    headerBanner__content__title2: 'm-0 font-montserrat font-bold text-5xl text-gray-800',
    headerBanner__content__subtitle: 'flex flex-wrap',
}

export default classStyle;