// import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import Label from './Label';

export default function Input({ type = "text", label, value, onChange, placeholder, error, optional, desc }) {
    const [ isFocused, setIsFocused ] = useState(false)
    let inputMode;

    // if (type === "date") return <DatePicker className='mb-3' placeholder={placeholder} label={label} defaultValue={new Date()} maxDate={new Date()} withAsterisk />

    if (type === "text") inputMode = "text";
    else if (type === "number") inputMode = "numeric"
    error = isFocused && error

    return (
        <div className='flex flex-col relative' >
            <Label label={label} optional={optional} />
            <input id={label} type={type} inputMode={inputMode} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setIsFocused(true)}
                className={`p-2  outline-none rounded border border-gray-600/50 hover:border-gray-300 ${error ? "border-red-500 focus:border-red-500 " : " focus:border-indigo-600  "}  `} />
            <p className="pl-1 text-xs text-red-500" >{error}</p>
            <p className="absolute top-0 capitalize right-0 text-xs text-gray-500" >{desc}</p>
        </div>
    )

}
