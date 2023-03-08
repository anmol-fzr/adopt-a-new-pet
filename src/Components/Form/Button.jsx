import { Button as ButtonUI } from '@mantine/core';

export default function Button({ onClick, disabled, label = "click", children, className }) {
    return (
        <ButtonUI disabled={disabled} onClick={onClick} className={`bg-blue-400 ${className} `} >
            {children ?? label}
        </ButtonUI>
    );
}