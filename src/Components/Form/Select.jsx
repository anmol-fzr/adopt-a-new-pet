import { default as ReactSelect } from "react-select";
import Label from "./Label";

export default function Select({ label, options, optional = false, isMulti = false, isDisabled = false, onChange, styles, defaultValue }) {
    const getValue = value => options?.filter(option => option?.value?.toString() == value?.toString())

    return (
        <div className={`flex flex-col ${styles} mb-3 `} >
            <Label label={label} optional={optional} />
            <ReactSelect
                className={`text-black font-medium capitalize `}
                defaultValue={getValue(defaultValue)}
                options={options ?? [ {} ]}
                isMulti={isMulti}
                isDisabled={isDisabled}
                onChange={onChange}


                styles={{
                    control: (style, state) => ({
                        ...style,
                        cursor: "pointer",
                        backgroundColor: "#25262B",
                        fontWeight: "600",
                        borderWidth: 1,
                        outline: "none",
                        borderColor: state.isFocused ? '' : '#4b556380',
                    }),
                    singleValue: base => ({
                        ...base,
                        color: "white",
                    }),
                }}

                theme={theme => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: "#bfdbfe",
                        primary: "#60a5fa",
                    },
                })}
            />
        </div>
    );
}

