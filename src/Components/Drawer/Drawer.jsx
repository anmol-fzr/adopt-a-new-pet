import { useState } from 'react';
import { Drawer as DrawerUI, Group } from '@mantine/core';
import Button from "../Form/Button"
export default function Drawer({ label, children, title }) {
    const [ opened, setOpened ] = useState(false);
    return (
        <>
            <DrawerUI opened={opened} position="right" onClose={() => setOpened(false)} title={title ?? label} padding="xl" size="xl" >
                {children}
            </DrawerUI>

            <Group >
                <Button onClick={() => setOpened(true)}>{label}</Button>
            </Group>
        </>
    );
}