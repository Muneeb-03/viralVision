"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Avatar, Paper, Stack, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfileOne from "../../../public/ProfileOne.svg";
import ProfileTwo from "../../../public/ProfileTwo.svg";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    id: 1,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Duha Mahmud",
    image: ProfileOne,
  },
  {
    id: 2,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Duha Mahmud",
    image: ProfileTwo,
  },
  {
    id: 3,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Duha Mahmud",
    image: ProfileOne,
  },
  {
    id: 4,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "John Doe",
    image: ProfileOne,
  },
  {
    id: 5,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Jane Smith",
    image: ProfileOne,
  },
  {
    id: 6,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Alice Johnson",
    image: ProfileTwo,
  },
  {
    id: 7,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Bob Wilson",
    image: ProfileTwo,
  },
  {
    id: 8,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Carol Brown",
    image: ProfileTwo,
  },
  {
    id: 9,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "David Miller",
    image: ProfileOne,
  },
  {
    id:  10,
    text: "The team truly understands how to capture the essence of our brand and translate it into captivating videos. I can't recommend them enough!",
    author: "Muneeb",
    image: ProfileOne,
  },
];

const DotButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "active", // Prevent 'active' from reaching the DOM
})(({ theme, active }) => ({
  width: active ? "14.9px" : "9.17px",
  height: "9.17px",
  padding: 0,
  background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)", // Single background gradient
  opacity: active ? 1 : 0.3,
  borderRadius: "18.34px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)", // Same hover background
  },
}));

const TestimonialCarousel = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const itemsPerPage = isXs ? 1 : isSm ? 2 : 3;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const displayedTestimonials = testimonials.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
    onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Box
      id="testimonials"
      sx={{
        mt: "75px",
        minHeight: "650px",
        pb: "25px",
        background: "linear-gradient(90deg, rgba(138, 0, 255, 0.06) 0%, rgba(255, 0, 122, 0.06) 100%)",
        px: { xs: "15px", sm: "30px", md: "75px" },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 4, sm: 5, md: 6 },
          pt: { xs: "30px", sm: "40px", md: "50px" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "44px" },
            fontWeight: 600,
            lineHeight: { xs: "40px", sm: "50px", md: "68.39px" },
            letterSpacing: { xs: "0.5px", md: "0.88px" },
            textTransform: "capitalize",
            color: "#050623",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Testimonial
          </span>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: "16px", sm: "17px", md: "18.05px" },
            fontWeight: 500,
            lineHeight: { xs: "28px", sm: "32px", md: "34.897px" },
            letterSpacing: { xs: "0.8px", md: "1.12px" },
            textTransform: "capitalize",
            color: "#111111",
            opacity: "70%",
            mt: { xs: 2, md: 3 },
          }}
        >
          Don't just take our word for it - see what actual users of our service have to say about their experience.
        </Typography>
      </Box>

      <Box
        {...handlers}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: `repeat(${itemsPerPage}, 1fr)`,
          },
          gap: 3,
          mb: 4,
          pl: { xs: "0", lg: "60px" },
          pr: { xs: "0", lg: "60px" },
        }}
      >
        {displayedTestimonials.map((testimonial, index) => (
          <Paper
            key={testimonial.id}
            elevation={2}
            sx={{
              p: 4,
              width: "auto",
              maxWidth: "391px",
              minHeight: "346px",
              display: "flex",
              borderRadius: "24px",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.3s ease",
              border: "none",
              boxShadow: "none",
              "&:hover": {
                transform: "translateY(-4px)",
              },
              justifySelf: itemsPerPage === 3 ? (index === 0 ? "end" : index === 1 ? "center" : "start") : "center",
            }}
          >
            <Image src={testimonial.image} alt={`${testimonial.author}'s profile`} />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Inter",
                fontSize: "18.54px",
                fontWeight: 500,
                lineHeight: "31.61px",
                textAlign: "center",
                color: "#111111",
                opacity: "50%",
                mb: 2,
                flex: 1,
              }}
            >
              "{testimonial.text}"
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Inter",
                fontSize: "19.02px",
                fontWeight: 600,
                lineHeight: "23.02px",
                letterSpacing: "-0.01em",
                textAlign: "left",
                background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {testimonial.author}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        {Array.from({ length: pageCount }, (_, index) => (
          <DotButton key={index} active={index === currentPage} onClick={() => handlePageChange(index)} />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
