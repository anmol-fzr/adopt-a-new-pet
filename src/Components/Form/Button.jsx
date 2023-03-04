import { Button as ButtonUI } from '@mantine/core';

export default function Button({ onClick, disabled, label = "click", children }) {
    return (
        <ButtonUI disabled={disabled} onClick={onClick} className="bg-blue-400" >
            {children ?? label}
        </ButtonUI>
    );
}