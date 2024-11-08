"use client";

import { Box, Typography, Button } from "@mui/material";
import IntroPoster from "../../../public/IntroPoster.svg";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import DiamondIcon from "../../../public/WorksIcon.svg";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Badge = styled(Box)({
  display: "inline-flex",
  height: "38px",
  alignItems: "center",
  background: "linear-gradient(90deg, rgba(138, 0, 255, 0.06) 0%, rgba(255, 0, 122, 0.06) 100%)",
  padding: "4px 6px 5px 14px",
  borderRadius: "19px",
  marginBottom: "16px",
  fontFamily: "Inter",
  fontSize: "15.35px",
  fontWeight: 600,
  lineHeight: "18.58px",
  letterSpacing: "0.01em",
  color: "#050623",
  "& span": {
    background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
    color: "#fff",
    borderRadius: "28.06px",
    marginLeft: "13px",
    padding: "10px 14px",
    fontSize: "12.28px",
    lineHeight: "14.87px",
  },
});

const LandingSection = () => {
  return (
    <Element name="home">
      <Box sx={{ mt: "65px", px: { xs: "15px", sm: "30px", md: "75px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
            <Box sx={{ width: { xs: "100%", md: "90%" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "center", md: "left" },
                }}
              >
                <Badge>
                  Get Videos Viral
                  <span>ViralVision</span>
                </Badge>
              </Box>

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontSize: { xs: "28px", md: "41.46px" },
                  fontWeight: 600,
                  lineHeight: { xs: "40px", md: "62.48px" },
                  letterSpacing: "0.01em",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  color: "#000",
                  "& .highlight": {
                    background: "linear-gradient(70deg, #8A00FF 0%, #FF007A 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "block",
                  },
                }}
              >
                <span className="highlight">Supercharge</span>
                Your Brand With Viral TikTok & Instagram Reels
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  mb: 4,
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "35px",
                  letterSpacing: "0.01em",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  color: "#000",
                  opacity: "70%",
                }}
              >
                We Craft and Fully Manage Instagram Reels and TikToks that grab attention, boost your brand, and connect with your audience through creative trends and authentic storytelling
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
                gap: "15px",
                justifyContent: { xs: "center", sm: "center", md: "flex-start" },
              }}
            >
              <Box sx={{ width: { xs: "150px", sm: "246px", md: "246px" } }}>
                  <Button
                    onClick={() => {
                      window.location.hash = 'contactus';
                    }}
                    sx={{
                      width: { xs: "150px", sm: "246px", md: "246px" },
                      height: { xs: "50px", sm: "50px", md: "60.006px" },
                      borderRadius: "32.28px",
                      background: "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
                      color: "var(--White, #FFF)",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px", md: "23.604px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      textEdge: "cap",
                      textTransform: "none",
                      leadingTrim: "both",
                      "&:hover": {
                        opacity: 0.9,
                      },
                    }}
                  >
                    Get Started Now
                  </Button>
              </Box>
              <Box sx={{ width: { xs: "150px", sm: "246px", md: "246px" } }}>
                <Link to="works" smooth={true} duration={1000}>
                  <Button
                    sx={{
                      width: { xs: "150px", sm: "246px", md: "246px" },
                      height: { xs: "50px", sm: "50px", md: "60.006px" },
                      borderRadius: "32.28px",
                      border: "1.967px solid var(--Gradient-fix, #FF6F91)",
                      background: "var(--White, #FFF)",
                      textAlign: "center",
                      display: "flex",
                      gap: "13px",
                      textTransform: "none",
                      leadingTrim: "both",
                      "&:hover": {
                        opacity: 0.9,
                      },
                    }}
                  >
                    <Image src={DiamondIcon} alt="diamond-icon" />
                    <Typography
                      sx={{
                        background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "Inter",
                        fontSize: { xs: "14px", sm: "18px", md: "21.05px" },
                        fontWeight: 600,
                        textDecoration: "none",
                        textTransform: "none",
                      }}
                    >
                      See our Works
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Image src={IntroPoster} alt="Intro Poster" style={{ width: "100%", height: "100%" }} />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              alignItems: "center",
              gap: "5px",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ width: { xs: "150px", sm: "246px", md: "246px" } }}>
              <Button
                sx={{
                  width: { xs: "150px", sm: "246px", md: "246px" },
                  height: { xs: "50px", sm: "50px", md: "60.006px" },
                  borderRadius: "32.28px",
                  background: "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
                  color: "var(--White, #FFF)",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textEdge: "cap",
                  textTransform: "none",
                  leadingTrim: "both",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                Get Started Now
              </Button>
            </Box>
            <Box sx={{ width: { xs: "150px", sm: "246px", md: "246px" } }}>
              <Button
                sx={{
                  width: { xs: "150px", sm: "246px", md: "246px" },
                  height: { xs: "50px", sm: "50px", md: "60.006px" },
                  borderRadius: "32.28px",
                  border: "1.967px solid var(--Gradient-fix, #FF6F91)",
                  background: "var(--White, #FFF)",
                  textAlign: "center",
                  display: "flex",
                  gap: "10px",
                  textTransform: "none",
                  leadingTrim: "both",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                <Image src={DiamondIcon} alt="diamond-icon" />
                <Typography
                  sx={{
                    background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Inter",
                    fontSize: { xs: "14px", sm: "18px", md: "21.05px" },
                    fontWeight: 600,
                  }}
                >
                  See our Work
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default LandingSection;
