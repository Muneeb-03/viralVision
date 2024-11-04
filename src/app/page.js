"use client";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Delete from "../../public/Delete.svg";
import Image from "next/image";
import Header from "./components/Header";
import TestimonialCarousel from "./components/Testimonial";
import LandingSection from "./components/Intro";
import { PaymentSection } from "./components/Payments";
import { WorksSection } from "./components/Works";
import { ApproachSection } from "./components/Approach";
import { ContactSection } from "./components/ContactUs";
import Banner from "../../public/Banner.svg";
import Footer from "./components/Footer";

export default function Home() {
  const theme = useTheme();
  const [visible, setVisible] = useState(true);
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "20px 0px 0px 0px" }}
    >
      {visible && isMd && (
        <Box
          sx={{
            px: { xs: "15px", sm: "30px", md: "75px" },
            mb: "30px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              pr: "10px",
              height: "45px",
              borderRadius: "44px",
              background:
                "linear-gradient(102.04deg, rgba(255, 111, 145, 0.1) 3.29%, rgba(139, 76, 252, 0.1) 100%)",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "18.97px",
                textAlign: "center",
                background:
                  "linear-gradient(102.04deg, #FF6F91 3.29%, #8B4CFC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to take your TikTok and Instagram presence to the next
              level? Let's create something viral together!
            </Typography>
            <Image
              src={Delete}
              alt="delete-icon"
              onClick={() => setVisible(false)}
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      )}

      <Header />

      <LandingSection />

      <WorksSection />

      <ApproachSection />

      <PaymentSection />

      <TestimonialCarousel />

      <ContactSection />

      <Box
        sx={{
          mt: "50px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          px: { xs: "15px", sm: "30px", md: "75px" },
          width: "100%",
          height: "100%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Image
          src={Banner}
          alt="Banner"
          style={{ width: "100%", height: "100%" }}
        />

        <Box
          sx={{
            // display: {xs: 'none', sm: 'none', md: 'block'},
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cal Sans",
              fontSize: "37.38px",
              fontWeight: 600,
              lineHeight: "68.97px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "white",
            }}
          >
            Create Buzz & Propel Your <br /> Brand Into The Viral Spotlight?
          </Typography>

          <Button
            sx={{
              mt: 2,
              width: "191px",
              height: "51.77px",
              borderRadius: "570.45px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Cal Sans",
                fontSize: "19.19px",
                fontWeight: 600,
                lineHeight: "21.11px",
                textAlign: "center",
                textTransform: "none",
                background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get Started Now
            </Typography>
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
