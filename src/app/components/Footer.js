"use client";

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, styled } from '@mui/material';
import FacebookIcon from '../../../public/Facebook.svg';
import InstagramIcon from '../../../public/Instagram.svg';
import YouTubeIcon from '../../../public/Youtube.svg';
import TikTokIcon from '../../../public/Tiktok.svg';
import Logo from '../../../public/Logo.svg';
import Image from 'next/image';

const StyledLink = styled(Link)(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '31.13px',
    textAlign: { xs: 'center', sm: 'center', md: 'left' },
    color: '#111',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{ width: "100%", mt: { xs: "15px", sm: "25px", md: "35px" } }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            px: { xs: "15px", sm: "30px", md: "75px" },
            py: "50px",
            textAlign: { xs: "center", sm: "center", sm: "left" },
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Stack
              spacing={2}
              alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
            >
              <Image src={Logo} alt="Logo" />
              <Box sx={{ width: { xs: "100%", sm: "100%", md: "55%" } }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "31.13px",
                    color: "#111",
                  }}
                >
                  Founded in 2024. Step into a new era of video creation with
                  Viralvision where innovative tools meet effortless
                  storytelling for viral success!
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Image src={FacebookIcon} alt="facebook-icon" />
                <Image src={InstagramIcon} alt="instagram-icon" />
                <Image src={TikTokIcon} alt="tiktok-icon" />
                <Image src={YouTubeIcon} alt="youtube-icon" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={4}>
              {/* Quick Links */}
              <Grid item xs={6} sm={4} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "26.4px",
                    letterSpacing: "0.02em",
                    color: "#111",
                  }}
                  gutterBottom
                >
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  <StyledLink href="#home">Home</StyledLink>
                  <StyledLink href="#pricing">Pricing</StyledLink>
                  <StyledLink href="/contactus">Get Started</StyledLink>
                  <StyledLink href="#testimonials">Testimonials</StyledLink>
                </Stack>
              </Grid>

              {/* Services */}
              <Grid item xs={6} sm={4} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "26.4px",
                    letterSpacing: "0.02em",
                    color: "#111",
                  }}
                  gutterBottom
                >
                  Services
                </Typography>
                <Stack spacing={1}>
                  <StyledLink href="/videos">Videos Creations</StyledLink>
                  <StyledLink href="/viral">Video Viral</StyledLink>
                  <StyledLink href="/edits">Video Edits</StyledLink>
                  <StyledLink href="/more">Much more...</StyledLink>
                </Stack>
              </Grid>

              {/* Policies */}
              <Grid
                item
                xs={0}
                sm={4}
                md={4}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "26.4px",
                    letterSpacing: "0.02em",
                    color: "#111",
                  }}
                  gutterBottom
                >
                  Policies
                </Typography>
                <Stack spacing={1}>
                  <StyledLink href="/terms">Terms & conditions</StyledLink>
                  <StyledLink href="/privacy">Privacy Policies</StyledLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Copyright Bar */}
        <Box sx={{ bgcolor: "#1F1A5F", color: "white", py: 2 }}>
          <Typography variant="body2" align="center">
            2024 ©Viralvision. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    );
};

export default Footer;
