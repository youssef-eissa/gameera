import React, { useState } from 'react';
import { Drawer, Space } from 'antd';
import { Divide as Hamburger } from 'hamburger-react'


const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
    setOpen(true);
};


    const onClose = () => {
    setOpen(false);
};

    return (
    <>
        <Space>
        <Hamburger size={23} distance='sm' color='#003366' toggled={open} onToggle={showDrawer}/>
        </Space>
        <Drawer
        placement={'bottom'}
        width={500}
        onClose={onClose}
        open={open}

    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Drawer>
    </>
);
};

export default Menu;
