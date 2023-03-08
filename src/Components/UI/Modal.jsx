import { useState } from 'react';
import { Modal as ModalUI, Group } from '@mantine/core';
import { MdOutlineClose } from "react-icons/md"
import { interact } from '../../styles/style';
import Icon from './Icon';

export default function Modal({ open, onClose, children, title }) {
    return (
        <>
            <ModalUI radius="lg" centered opened={open} onClose={onClose} withCloseButton={false}>
                <div className=' w-full flex flex-col gap-4 ' >
                    <div className='flex w-full items-center justify-center '>
                        <p className='font-amonx text-xl w-full text-center font-bold text-accent'>{title}</p>
                        {onClose && <span onClick={onClose} className='mx-auto ml-0 cursor-pointer'>
                            <Icon icon={<MdOutlineClose />} />
                        </span>}
                    </div>
                    <div className=" w-full flex flex-col gap-4">
                        {children}
                    </div>
                </div>
            </ModalUI>

            {/* <Group position="center">
                <button onClick={() => setOpened(!open)} className={`p-2 px-6 font-bold text-black bg-white rounded-full cursor-pointer ${interact.scale} ${interact.shadow} `}>
                    {button}
                </button>

            </Group> */}
        </>
    );
}