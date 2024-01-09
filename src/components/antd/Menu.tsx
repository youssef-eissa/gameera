import React, { useState } from 'react';
import { Drawer, Space } from 'antd';
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';


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
            <div className='col-12 d-flex flex-column align-items-center'>
                    <Link className=' menuLink' onClick={() => { onClose(); window.scrollTo(0, 0)}} to='/'>Home</Link>
                <Link className=' menuLink' onClick={() => { onClose(); window.scrollTo(0, 0)}} to='/games'>Games</Link>
            </div>
        </Drawer>
    </>
);
};

export default Menu;
