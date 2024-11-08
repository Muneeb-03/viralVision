"use client";

import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import ExpertContent from "../../../public/ExpertContent.svg";
import Management from "../../../public/Management.svg";
import Strategic from "../../../public/Strategic.svg";
import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";
import { useSwipeable } from "react-swipeable";

const approachesData = [
  {
    image: ExpertContent,
    title: "Expert Content Creators",
    description: "We specialize in headhunting the ideal content creators who align perfectly with your brand's voice and style. Our meticulous selection process ensures that each creator embodies your brand values and resonates.",
  },
  {
    image: Strategic,
    title: "Strategic Scripting",
    description: "Our talented team specializes in crafting engaging scripts tailored to captivate your target audience. We understand that every brand has a unique story, and we take the time to research and analyze your audience.",
  },
  {
    image: Management,
    title: "Full Management",
    description: "We take care of everything from content creation to posting, allowing you to focus on what you do best—running your business. Our comprehensive service includes brainstorming ideas, producing high-quality videos.",
  },
];

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

export const ApproachSection = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const itemsPerPage = isXs ? 1 : isSm ? 2 : 3;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(approachesData.length / itemsPerPage);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const displayedApproaches = approachesData.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
    onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Box
      id="approach"
      sx={{
        mt: "75px",
        // width: isMdUp ? "100%" : undefined,
        px: { xs: "15px", sm: "30px", md: "75px" },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "44px" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { xs: "40px", sm: "50px", md: "68.39px" },
            letterSpacing: "0.88px",
            textTransform: "capitalize",
            color: "var(--Black, #111)",
            textAlign: "center",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Approach
          </span>
        </Typography>

        <Typography
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
            opacity: 0.7,
          }}
        >
          Our process is designed to ensure that every piece of content aligns seamlessly with your brand's identity and objectives. Here's how we do it:
        </Typography>
      </Box>

      <Box
        {...handlers}
        sx={{
          mt: "30px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 3,
          mb: 4,
        }}
      >
        {displayedApproaches.map((approach, index) => (
          <Box
            key={approach.title}
            sx={{
              flex: "100%",
              maxWidth: { xs: "100%", sm: "45%", md: "26.5%" },
              borderRadius: "16.103px",
              backgroundColor: "#FFF",
              padding: "20px",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Image src={approach.image} alt="approach" />
            <Typography
              sx={{
                fontSize: { xs: "18.844px", sm: "18.844px", md: "21.11px" },
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: { xs: "28.39px", sm: "28.39px", md: "31.806px" },
                letterSpacing: { xs: "0.377px", sm: "0.377px", md: "0.422px" },
                textAlign: "left",
                color: "#050623",
              }}
            >
              {approach.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "13.705px", sm: "13.705px", md: "15.353px" },
                fontWeight: 400,
                lineHeight: { xs: "23.983px", sm: "23.983px", md: "26.869px" },
                textAlign: "left",
                color: "#050623",
                opacity: "0.6",
              }}
            >
              {approach.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {!isMdUp && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          {Array.from({ length: pageCount }, (_, index) => (
            <DotButton key={index} active={index === currentPage} onClick={() => handlePageChange(index)} />
          ))}
        </Box>
      )}
    </Box>
  );
};
