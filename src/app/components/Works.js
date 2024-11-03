"use client"

import { Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"
import SampleImg from '../../../public/SampleImg.svg';
import HeartIcon from '../../../public/Heart.svg';
import CommentIcon from '../../../public/Comment.svg';
import PlayIcon from '../../../public/Play.svg';
import ProfilePic from '../../../public/ProfilePic.svg';
import { useState } from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player/lazy";
import { useSwipeable } from "react-swipeable";

const worksData = [
  {
    id: 1,
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Shirpur was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
  {
    id: 2,
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Lahore was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
  {
    id: 3,
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Karachi was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
  {
    id: 4,
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Islamabad was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
];

const DotButton = styled(IconButton)(({ theme, active }) => ({
    width: active ? '14.9px' : '9.17px',
    height: '9.17px',
    padding: 0,
    background: active
      ? 'linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)'
      : 'linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)',
    opacity: active ? 1 : 0.3,
    borderRadius: '18.34px',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: active
        ? 'linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)'
        : 'linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)', 
    },
}));

export const WorksSection = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm')); 
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
    const isMdUp = useMediaQuery(theme.breakpoints.up('md')); 

    const itemsPerPage = 1;

    const [currentPage, setCurrentPage] = useState(0);

    const pageCount = Math.ceil(worksData.length / itemsPerPage);

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const displayedWorks = worksData.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handlers = useSwipeable({
      onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
      onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
      preventScrollOnSwipe: true,
      trackMouse: true 
    });

    return (
      <Box sx={{mt: '50px', px: { xs: '15px', sm: '30px', md: '75px' },}}>
        <Box
          display="flex"
          justifyContent={{ xs: 'center', sm: 'center', md: 'space-between' }}
          alignItems="center"
          mb={3}
        >
          <Box textAlign={{ xs: 'center', sm: 'center', md: 'left' }}>
            <Typography
              variant="h4"
              component="h2"
              style={{
                fontFamily: "Cal Sans",
                fontSize: "56px",
                fontWeight: 600,
                lineHeight: "68.39px",
                letterSpacing: "1.12px",
                textTransform: "capitalize",
                color: "var(--Black, #111)",
              }}
            >
              Our{" "}
              <span
                style={{
                  background:
                    "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Work
              </span>
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                color: "var(--Black, #111)",
                fontFamily: "Inter",
                fontSize: "21.11px",
                fontWeight: 400,
                lineHeight: "52.775px",
                letterSpacing: "-0.211px",
              }}
            >
              We guarantee that you will be one of our happy customers as well
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }}}>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                display: "inline-flex",
                height: "56px",
                width: "198px",
                padding: "6.365px 12.73px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4.243px",
                flexShrink: 0,
                textTransform: "capitalize",
                borderRadius: "52.335px",
                background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
                backgroundColor: "transparent",
                color: "#FDFDFD",
                fontFamily: "Inter",
                fontSize: "20.26px",
                fontWeight: 700,
                lineHeight: "24.52px",
                textAlign: "center",
                }}
            >
                See More
            </Button>
          </Box>
        </Box>

        {/* Conditional Posts Section */}
        {isMdUp ? (
          <Grid {...handlers} container spacing={3}>
            {worksData.map((work, index) => (
              <Grid id={work.id} item xs={12} sm={12} md={6} key={index} sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'right' : 'left' }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: "638.534px",
                    flexShrink: 0,
                    borderRadius: "16.103px",
                    backgroundColor: "#FFF",
                    padding: "20px",
                    boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <ReactPlayer 
                      width="100%" 
                      url="/SampleVideo.mp4" 
                      playing={true}
                      muted={true}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                      }}
                    >
                      <Image src={PlayIcon} alt="Play Icon" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      mt: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Image src={HeartIcon} alt="Like icon" />
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "23.147px",
                        fontWeight: 400,
                        lineHeight: "32.05px",
                        letterSpacing: "-0.125px",
                      }}
                    >
                      {work.likes}
                    </Typography>
                    <Image src={CommentIcon} alt="Comment Icon" />
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "23.147px",
                        fontWeight: 400,
                        lineHeight: "32.05px",
                        letterSpacing: "-0.125px",
                      }}
                    >
                      {work.comments}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      mt: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Image src={ProfilePic} alt="Profile Pic" />
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "23.147px",
                        fontWeight: 400,
                        lineHeight: "32.05px",
                        letterSpacing: "-0.125px",
                      }}
                    >
                      Liked by {work.likedBy}
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "15px" }}>
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "23.147px",
                        fontWeight: 400,
                        lineHeight: "32.05px",
                        letterSpacing: "-0.125px",
                      }}
                    >
                      {work.description}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#B1B1B1",
                      fontFamily: "Inter",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "32.05px",
                      letterSpacing: "-0.125px",
                    }}
                  >
                    {work.date}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <Grid {...handlers} container spacing={3}>
              {displayedWorks.map((work, index) => (
                <Grid item xs={12} key={index}>
                  <Box
                    sx={{
                      width: '100%',
                      borderRadius: "16.103px",
                      backgroundColor: "#FFF",
                      padding: "20px",
                      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <ReactPlayer 
                        width="100%" 
                        url="/SampleVideo.mp4" 
                        playing={true}
                        muted={true}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                        }}
                      >
                        <Image src={PlayIcon} alt="Play Icon" />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        mt: "15px",
                        alignItems: "center",
                      }}
                    >
                      <Image src={HeartIcon} alt="Like icon" />
                      <Typography
                        sx={{
                          color: "#000",
                          fontFamily: "Inter",
                          fontSize: "23.147px",
                          fontWeight: 400,
                          lineHeight: "32.05px",
                          letterSpacing: "-0.125px",
                        }}
                      >
                        {work.likes}
                      </Typography>
                      <Image src={CommentIcon} alt="Comment Icon" />
                      <Typography
                        sx={{
                          color: "#000",
                          fontFamily: "Inter",
                          fontSize: "23.147px",
                          fontWeight: 400,
                          lineHeight: "32.05px",
                          letterSpacing: "-0.125px",
                        }}
                      >
                        {work.comments}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        mt: "15px",
                        alignItems: "center",
                      }}
                    >
                      <Image src={ProfilePic} alt="Profile Pic" />
                      <Typography
                        sx={{
                          color: "#000",
                          fontFamily: "Inter",
                          fontSize: "23.147px",
                          fontWeight: 400,
                          lineHeight: "32.05px",
                          letterSpacing: "-0.125px",
                        }}
                      >
                        Liked by {work.likedBy}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: "15px" }}>
                      <Typography
                        sx={{
                          color: "#000",
                          fontFamily: "Inter",
                          fontSize: "23.147px",
                          fontWeight: 400,
                          lineHeight: "32.05px",
                          letterSpacing: "-0.125px",
                        }}
                      >
                        {work.description}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#B1B1B1",
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "32.05px",
                        letterSpacing: "-0.125px",
                      }}
                    >
                      {work.date}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px', mt: '15px' }}>
              {Array.from({ length: pageCount }, (_, index) => (
                <DotButton
                  key={index}
                  active={currentPage === index}
                  onClick={() => handlePageChange(index)}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    );
};
