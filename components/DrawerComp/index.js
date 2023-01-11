import { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Divider } from "@mui/material";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const pages = ['About', 'Work', 'Engineering', 'Technical Writing', 'Web', 'Contact'];
    const links = ['#about', '#engineering', '#engineeringportfolio', '#writingportfolio', '#portfolio', '#contact']

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                sx={{ width: 240 }}
            >
                <Link href='/' passHref>
                    <Box component='a' sx={{ paddingTop: 5, paddingBottom: 2, justifyContent: 'center', display: 'flex' }}>
                        <Image src='/static/images/ttc_photo.jpg' width={100} height={100} alt="Ramuel Portfolio" />
                    </Box>
                </Link>
                <Divider />
                <List>
                    {pages.map((page, index) => (
                        <Link key={index} href={`${links[index]}`} passHref>
                            <ListItemButton component='a' onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon >
                                    <ListItemText >
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
};

export default DrawerComp;