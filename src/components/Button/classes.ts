export enum BtnModifier {
    default = 'bg-transparent text-blue-500 hover:bg-gray-200 active:bg-gray-300',
    medium = 'bg-transparent text-blue-500 border border-blue-600 hover:bg-gray-200 active:bg-gray-300',
    strong = 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800',
}

const classStyle: {
    [key: string]: string
} = {
    btn: 'cursor-pointer xl:py-2 lg:py-1 px-5 rounded-full transition-colors duration-100 flex items-center',
}

export default classStyle;

