export enum BtnModifier {
    default = 'bg-transparent text-blue-500 hover:bg-gray-200 active:bg-gray-300',
    medium = 'bg-transparent text-blue-500 border border-blue-600 hover:bg-gray-200 active:bg-gray-300',
    strong = 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800',
}

const classStyle: {
    [key: string]: string
} = {
    btn: 'cursor-pointer xl:py-2 md:py-1 py-2 md:px-5 px-3 md:text-md sm:text-sm text-xs truncate rounded-full transition-colors duration-100 flex items-center',
}

export default classStyle;

