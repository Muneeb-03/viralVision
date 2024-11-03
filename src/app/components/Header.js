"use client";

import { AppBar, Box, Toolbar, Menu, Button, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/Logo.svg';
import TryButton from '../../../public/TryButton.svg';
import ToggleHeader from '../../../public/ToggleHeader.svg';

const pages = [
  { name: 'Home', link: '#home' },
  { name: 'Works', link: '#works' },
  { name: 'Approach', link: '#approach' },
  { name: 'Pricing', link: '#pricing' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact Us', link: '#contactus' },
];

const settings = [
  { name: "Home", link: "#" },
  { name: "Works", link: "#works" },
  { name: "Approach", link: "#approach" },
  { name: "Pricing", link: "#pricing" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact Us", link: "#contactus" },
];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        border: "none",
        boxShadow: "none",
        px: { xs: "15px", sm: "30px", md: "75px" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{ justifyContent: "space-between", width: "100%" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={Logo} alt="Logo" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "right",
            mr: "50px",
          }}
        >
          {pages.map(({ name, link }) => (
            <Button
              key={name}
              onClick={handleCloseUserMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textAlign: "left",
                textTransform: "capitalize",
              }}
              href={link}
            >
              {name}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              sx={{
                width: "187px",
                height: "49px",
                borderRadius: "900px",
                background:
                  "var(--Gradient-fix, linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%))",
                color: "var(--White, #FFF)",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textEdge: "cap",
                leadingTrim: "both",
                textTransform: "none",
              }}
            >
              Try for Free
            </Button>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
            <Image
              onClick={handleOpenUserMenu}
              src={ToggleHeader}
              alt="Toggle Header"
            />
          </Box>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(({ name, link }) => (
              <MenuItem key={name} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  <a
                    href={link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {name}
                  </a>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
