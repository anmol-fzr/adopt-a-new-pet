import { Drawer as DrawerUI } from '@mantine/core';
export default function Drawer({ label, children, title, open = false, onClose }) { 
    return ( 
        <DrawerUI
            overlayProps={{ opacity: 0.75, blur: 2 }}
            opened={open}
            className="h-full overflow-y-visible "
            onClose={onClose}
            position="right"
            title={title ?? label}
            padding="xl" size="md" >
            {children}
        </DrawerUI>
    );
}