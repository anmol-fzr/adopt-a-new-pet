import { Button as ButtonUI } from '@mantine/core';

export default function Button({ onClick, disabled, label = "click", children, className }) {
    return (
        <div className='flex flex-col gap-2'>
            <button disabled={disabled} onClick={onClick} className={`p-2 px-4 text-white font-medium rounded-md text-sm  bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-500 hover:scale-105 active:scale-95  ${className} `} >
                {children ?? label}
            </button>
        </div>
    );
}