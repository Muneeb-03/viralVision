"use client";

import Tick from "../../../public/Tick.svg";
import Cross from "../../../public/Cross.svg";
import Inquire from "../../../public/Inquire.svg";
import InquireFilled from "../../../public/InquireFilled.svg";
import { Box, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-scroll";

const pricingPlans = [
  {
    title: "Starter",
    price: "$1,750",
    features: ["Access Scripting 10 days prior to Creation for Approval", "Content Management and Posting", "Audience Management: Comments, Replies, Removal", "TikTok Shop Setup and Guidance", "Go Viral Guarantee", "Advanced Analytics Dashboard", "No Full-Time Dedicated Creator", "No Strategy Consultations"],
    contentPieces: "15 videos made for TikTok or IG Reels",
    backgroundColor: "#fff",
    actionColor: "#050623",
    boxShadow: "0px 4.22px 55.5px 0px #0000000D",
    justify: "end",
    buttonVariant: "outlined",
  },
  {
    title: "Dedicated Creator",
    price: "$4,450",
    features: ["Access Scripting 10 days prior to Creation for Approval", "Content Management and Posting", "Audience Management: Comments, Replies, Removal", "TikTok Shop Setup and Guidance", "Go Viral Guarantee", "Advanced Analytics Dashboard", "Dedicated Content Creator", "Strategy Consultations"],
    contentPieces: "20 videos made for TikTok or IG Reels",
    backgroundColor: "linear-gradient(141.68deg, #FF6F91 22.07%, #8B4CFC 85.52%)",
    actionColor: "#fff",
    boxShadow: "0px 10.54px 50.35px 0px #8A3EFF66",
    justify: "center",
    buttonVariant: "contained",
  },
  {
    title: "Full Time Team",
    price: "$6,000",
    features: ["Access Scripting 10 days prior to Creation for Approval", "Content Management and Posting", "Audience Management: Comments, Replies, Removal", "TikTok Shop Setup and Guidance", "Go Viral Guarantee", "Advanced Analytics Dashboard", "Full-Time Dedicated Creator", "Strategy Consultations"],
    contentPieces: "35 videos made for TikTok or IG Reels",
    backgroundColor: "#fff",
    actionColor: "#050623",
    boxShadow: "0px 4.22px 55.5px 0px #0000000D",
    justify: "start",
    buttonVariant: "outlined",
  },
];

const FeatureIcon = ({ feature, planColor }) => {
  if (feature.startsWith("No")) {
    return (
      <Box component="span" sx={{ display: "inline-flex", alignItems: "center", mr: 1 }}>
        <Image src={Cross} alt="Not included" />
      </Box>
    );
  }
  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", mr: 1 }}>
      <Image src={Tick} alt="Included" />
    </Box>
  );
};

const DotButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  width: active ? "14.9px" : "9.17px",
  height: "9.17px",
  padding: 0,
  background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
  opacity: active ? 1 : 0.3,
  borderRadius: "18.34px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
  },
}));

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background-color: white;
    color: black;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
  }
  & .MuiTooltip-arrow {
    color: white;
  }
`;

export const PaymentSection = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  let itemsPerPage;
  if (isXs || isSm) {
    itemsPerPage = 1;
  } else if (isMd) {
    itemsPerPage = 2;
  } else if (isLgUp) {
    itemsPerPage = 3;
  }

  const [currentPage, setCurrentPage] = useState(isXs || isSm ? 1 : 0);

  const pageCount = Math.ceil(pricingPlans.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(isXs || isSm ? 1 : 0);
  }, [isXs, isSm, isMd, isLgUp]);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const displayedPlans = pricingPlans.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
    onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });


  return (
    <Box
      id="pricing"
      sx={{
        textAlign: "center",
        mt: "75px",
        px: { xs: "15px", sm: "30px", md: "75px" },
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontSize: { xs: "44px", sm: "44px", md: "56px" },
          fontWeight: 600,
          lineHeight: "68.39px",
          letterSpacing: { xs: "0.88px", sm: "0.88px", md: "1.12px" },
          textTransform: "capitalize",
          color: "#050623",
        }}
      >
        Transparent{" "}
        <span
          style={{
            background: "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pricing
        </span>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: { xs: "28px", sm: "32px", md: "37.48px" },
          color: "#050623",
          width: { xs: "90%", sm: "85%", lg: "80%" },
          mx: "auto",
          mt: { xs: "15px", sm: "18px", md: "20px" },
          mb: 4,
          opacity: 0.7,
        }}
      >
        Choose Flexible Pricing Tailored To Your Needs, With No Hidden Fees—Just Impactful, Results-Driven Videos Posted Every Month for your Brand On TikTok and IG Reels!
      </Typography>

      <Box
        {...handlers}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          mb: 4,
          flexWrap: "nowrap",
          width: '100%'
        }}
      >
        {displayedPlans.map((plan, index) => (
          <Box
            key={plan.title}
            sx={{
              background: plan.backgroundColor,
              borderRadius: "24px",
              width: { xs: "310px", sm: "370px", md: "399px" },
              height: { sm: "670px", md: "670px" },
              boxShadow: plan.boxShadow || "none",
              textAlign: "left",
              padding: "42.16px 25.3px",
              color: plan.actionColor,
              fontFamily: "Poppins",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "23.19px",
                fontWeight: 700,
                lineHeight: "34.78px",
              }}
            >
              {plan.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16.86px",
                fontWeight: 400,
                lineHeight: "25.3px",
              }}
            >
              {plan.contentPieces}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "59.03px",
                fontWeight: 600,
                lineHeight: "88.54px",
                my: 2,
              }}
            >
              {plan.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Link to="contact" smooth={true} duration={1000}> */}
              {plan.buttonVariant === "contained" ? <Image onClick={() => {window.location.hash = 'contactus';}} src={InquireFilled} alt="Inquire" style={{width: '100%', cursor: 'pointer'}} /> : <Image src={Inquire} onClick={() => {window.location.hash = 'contactus';}}  style={{width: '100%', cursor: 'pointer'}}  alt="Inquire" />}
              {/* </Link> */}
            </Box>

            <Box sx={{ mt: 3 }}>
              {plan.features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    color: plan.actionColor,
                  }}
                >
                  <FeatureIcon feature={feature} planColor={plan.actionColor} />
                  {feature === "Go Viral Guarantee" ? (
                    <StyledTooltip
                      title="We guarantee to make your brand go viral with a minimum of 1 Million Impressions within 90 days or we will work until we make this happen"
                      arrow
                      placement="top"
                    >
                      <Typography sx={{ fontFamily: "Poppins", cursor: "pointer" }}>
                        {feature}
                      </Typography>
                    </StyledTooltip>               
                  ) : (
                    <Typography sx={{ fontFamily: "Poppins" }}>
                      {feature.replace("No ", "")}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      
        {!isLgUp && <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          {Array.from({ length: pageCount }, (_, index) => (
            <DotButton key={index} active={index === currentPage} onClick={() => handlePageChange(index)} />
          ))}
        </Box>}
      
    </Box>
  );
};
