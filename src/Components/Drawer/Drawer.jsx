import { useState } from 'react';
import { Drawer as DrawerUI, Group } from '@mantine/core';
import Button from "../Form/Button"

export default function Drawer({ label, children, title, open = false, onClose }) {
    // const [ opened, setOpened ] = useState(open);
    return (
        <>
            <DrawerUI opened={open} className="h-full" onClose={onClose} position="right" title={title ?? label} padding="xl" size="md" >
                {children} 
            </DrawerUI>

            {/* <Group >
                <Button onClick={() => setOpened(true)}>{label}</Button>
            </Group> */}
        </>
    );
}