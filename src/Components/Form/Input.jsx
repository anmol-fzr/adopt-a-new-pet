import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import Label from './Label';

export default function Input({ type = "text", label, value, onChange, placeholder, disabled, error, optional, desc, min }) {
    const [ isFocused, setIsFocused ] = useState(false)
    let inputMode;

    if (type === "date") return <DatePicker className='mb-3' placeholder={placeholder} label={label} defaultValue={new Date()} maxDate={new Date()} withAsterisk />

    if (type === "text") inputMode = "text";
    else if (type === "number") inputMode = "numeric"
    error = isFocused && error

    return (
        <div className='flex flex-col mb-3' >
            <Label label={label} optional={optional} />
            <input id={label} type={type} inputMode={inputMode} value={value} onChange={onChange} onFocus={() => setIsFocused(true)}
                className={`p-1 px-2 outline-none rounded border bg-[#25262B] border-gray-600/50 hover:border-gray-300 ${error ? "border-red-500 focus:border-red-500 " : " focus:border-blue-500  "}  `} />
            <p className="pl-1 text-xs text-red-500" >{error}</p>
        </div>
    )

}
