"use client"

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Delete from '../../public/Delete.svg';
import Image from "next/image";
import Header from "./components/Header";
import TestimonialCarousel from "./components/Testimonial";
import LandingSection from "./components/Intro";
import { PaymentSection } from "./components/Payments";
import { WorksSection } from "./components/Works";
import { ApproachSection } from "./components/Approach";


export default function Home() {
  const theme = useTheme();
  const [visible, setVisible] = useState(true);
  const isMd = useMediaQuery(theme.breakpoints.up('md')); 

  return (
    <Box sx={{ padding: "20px 0px"}}>
      {visible && isMd && <Box 
        sx={{ 
          px: '75px', 
          mb: '30px'
        }}
      >
        <Box sx={{ width: '100%', pr: '10px', height: '45px', borderRadius: '44px', background: 'linear-gradient(102.04deg, rgba(255, 111, 145, 0.1) 3.29%, rgba(139, 76, 252, 0.1) 100%)', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
          <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '18.97px', textAlign: 'center', background: 'linear-gradient(102.04deg, #FF6F91 3.29%, #8B4CFC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} >
            Ready to take your TikTok and Instagram presence to the next level? Let's create something viral together!
          </Typography>
          <Image src={Delete} alt="delete-icon" onClick={() => setVisible(false)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', }} />
        </Box>
      </Box>}

      <Header />

      <LandingSection />

      <WorksSection />

      <ApproachSection />

      <PaymentSection />

      <TestimonialCarousel />

    </Box>
  );
}
