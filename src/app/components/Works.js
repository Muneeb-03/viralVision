"use client";

import { Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import HeartIcon from "../../../public/Heart.svg";
import CommentIcon from "../../../public/Comment.svg";
import ProfilePic from "../../../public/ProfilePic.svg";
import { useState } from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Element } from "react-scroll";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useSwipeable } from "react-swipeable";

const worksData = [
  {
    id: 1,
    likes: 700,
    comments: 312,
    likedBy: "craig_love and 44,686 others",
    description: "The game in Shirpur was amazing and I want to share some photos",
    username: "@jhon_doe",
    video: "https://www.youtube.com/watch?v=VCPGMjCW0is",
  },
  {
    id: 2,
    likes: 700,
    comments: 312,
    likedBy: "craig_love and 44,686 others",
    description: "The game in Lahore was amazing and I want to share some photos",
    username: "@crazy_marketing",
    video: "https://www.youtube.com/watch?v=ZvChhHNTz1g",
  },
  {
    id: 3,
    likes: 700,
    comments: 312,
    likedBy: "craig_love and 44,686 others",
    description: "The game in Karachi was amazing and I want to share some photos",
    username: "@viral_videos",
    video: "https://www.youtube.com/watch?v=4ajmfzj9G1g&t=1s",
  },
  {
    id: 4,
    likes: 700,
    comments: 312,
    likedBy: "craig_love and 44,686 others",
    description: "The game in Islamabad was amazing and I want to share some photos",
    username: "@times_now",
    video: "https://www.youtube.com/watch?v=9TnfDecpnQQ",
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

export const WorksSection = () => {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const itemsPerPage = 1;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(worksData.length / itemsPerPage);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const displayedWorks = worksData.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
    onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Element name="works">
      <Box sx={{ mt: "50px", px: { xs: "15px", sm: "30px", md: "75px" } }}>
        <Box display="flex" justifyContent={{ xs: "center", sm: "center", md: "space-between" }} alignItems="center" mb={3}>
          <Box textAlign={{ xs: "center", sm: "center", md: "left" }}>
            <Typography
              sx={{
                fontSize: { xs: "44px", sm: "48px", md: "56px" },
                fontWeight: 600,
                lineHeight: { xs: "40px", sm: "50px", md: "68.39px" },
                letterSpacing: "1.12px",
                textTransform: "capitalize",
                color: "var(--Black, #111)",
                mb: { xs: 2, sm: 2 },
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
                Work
              </span>
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                color: "var(--Black, #111)",
                fontSize: { xs: "16px", sm: "18px", md: "21.11px" },
                fontWeight: 400,
                lineHeight: { xs: "24px", sm: "30px", md: "52.775px" },
                letterSpacing: "-0.211px",
                opacity: 0.7,
              }}
            >
              We guarantee your brand will go viral within 90 days of working with us, or your money back!
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
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
                fontSize: "20.26px",
                fontWeight: 500,
                lineHeight: "24.52px",
                textAlign: "center",
                boxShadow: "none",
              }}
            >
              See More
            </Button>
          </Box>
        </Box>

        {isMdUp ? (
          <Grid {...handlers} container spacing={3}>
            {worksData.map((work, index) => (
              <Grid
                id={work.id}
                item
                xs={12}
                sm={12}
                md={6}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "right" : "left",
                }}
              >
                <Box
                  sx={{
                    width: "95%",
                    flexShrink: 0,
                    borderRadius: "16.103px",
                    backgroundColor: "#FFF",
                    padding: "20px",
                    boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "14.871px",
                      overflow: "hidden",
                      width: "100%",
                      height: "437px",
                    }}
                  >
                    <ReactPlayer width="100%" height="100%" url={work.video} playing={true} muted={true} controls={false} />
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
                        color: "#262626",
                        fontSize: {
                          xs: "16.23px",
                          sm: "16.23px",
                          md: "23.147px",
                        },
                        fontSize: "23.147px",
                        fontWeight: 400,
                        lineHeight: {
                          xs: "22.473px",
                          sm: "22.473px",
                          md: "32.05px",
                        },
                        letterSpacing: {
                          xs: "-0.087px",
                          sm: "-0.087px",
                          md: "-0.125px",
                        },
                      }}
                    >
                      {work.likes}
                    </Typography>
                    <Image src={CommentIcon} alt="Comment Icon" />
                    <Typography
                      sx={{
                        color: "#262626",
                        fontFamily: "Inter",
                        fontSize: {
                          xs: "16.23px",
                          sm: "16.23px",
                          md: "23.147px",
                        },
                        fontSize: "23.147px",
                        fontWeight: 400,
                        lineHeight: {
                          xs: "22.473px",
                          sm: "22.473px",
                          md: "32.05px",
                        },
                        letterSpacing: {
                          xs: "-0.087px",
                          sm: "-0.087px",
                          md: "-0.125px",
                        },
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
                        fontSize: {
                          xs: "15.878px",
                          sm: "15.878px",
                          md: "23.147px",
                        },
                        fontWeight: 400,
                        lineHeight: {
                          xs: "21.985px",
                          sm: "21.985px",
                          md: "32.05px",
                        },
                        letterSpacing: "-0.125px",
                      }}
                    >
                      Liked by {work.likedBy}
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "15px" }}>
                    <Typography
                      sx={{
                        color: "#262626",
                        fontFamily: "Inter",
                        fontSize: {
                          xs: "15.87px",
                          sm: "15.87px",
                          md: "23.147px",
                        },
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: {
                          xs: "21.985px",
                          sm: "21.985px",
                          md: "32.05px",
                        },
                        letterSpacing: "-0.125px",
                        marginBottom: {
                          xs: "16.27px",
                          sm: "16.27px",
                          md: "22.16px",
                        },
                      }}
                    >
                      {work.description}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.40)",
                      fontFamily: "Inter",
                      fontSize: {
                        xs: "13.435px",
                        sm: "13.435px",
                        md: "19.58px",
                      },
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "0.089px",
                    }}
                  >
                    {work.username}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <Grid {...handlers} container spacing={2}>
              {displayedWorks.map((work, index) => (
                <Grid item xs={12} key={index}>
                  <Box
                    sx={{
                      width: "95%",
                      borderRadius: "16.103px",
                      backgroundColor: "#FFF",
                      padding: "20px",
                      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "14.871px",
                        overflow: "hidden",
                      }}
                    >
                      <ReactPlayer width="100%" height="266px" url={work.video} playing={true} muted={true} controls={true} />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                        }}
                      ></Box>
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
                      <Box
                        sx={{
                          width: { xs: 28, sm: 30, md: 40 },
                          height: "auto",
                          display: "inline-block",
                        }}
                      >
                        <Image src={HeartIcon} alt="Like icon" layout="responsive" />
                      </Box>
                      <Typography
                        sx={{
                          color: "#000",
                          fontFamily: "Inter",
                          fontSize: {
                            xs: "16.23px",
                            sm: "16.23px",
                            md: "23.147px",
                          },
                          fontWeight: 400,
                          lineHeight: {
                            xs: "22.473px",
                            sm: "22.473px",
                            md: "32.05px",
                          },
                          letterSpacing: {
                            xs: "-0.087px",
                            sm: "-0.087px",
                            md: "-0.125px",
                          },
                        }}
                      >
                        {work.likes}
                      </Typography>
                      <Box
                        sx={{
                          width: { xs: 28, sm: 30, md: 40 },
                          height: "auto",
                          display: "inline-block",
                        }}
                      >
                        <Image src={CommentIcon} alt="Comment Icon" layout="responsive" />
                      </Box>
                      <Typography
                        sx={{
                          color: "#000",
                          fontFamily: "Inter",
                          fontSize: {
                            xs: "16.23px",
                            sm: "16.23px",
                            md: "23.147px",
                          },
                          fontWeight: 400,
                          lineHeight: {
                            xs: "22.473px",
                            sm: "22.473px",
                            md: "32.05px",
                          },
                          letterSpacing: {
                            xs: "-0.087px",
                            sm: "-0.087px",
                            md: "-0.125px",
                          },
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
                          fontSize: {
                            xs: "15.878px",
                            sm: "15.878px",
                            md: "23.147px",
                          },
                          fontWeight: 400,
                          lineHeight: {
                            xs: "21.985px",
                            sm: "21.985px",
                            md: "32.05px",
                          },
                          letterSpacing: "-0.125px",
                        }}
                      >
                        Liked by {work.likedBy}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: "15px" }}>
                      <Typography
                        sx={{
                          color: "#262626",
                          fontFamily: "Inter",
                          fontSize: {
                            xs: "15.87px",
                            sm: "15.87px",
                            md: "23.147px",
                          },
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: {
                            xs: "21.985px",
                            sm: "21.985px",
                            md: "32.05px",
                          },
                          letterSpacing: "-0.125px",
                          marginBottom: {
                            xs: "16.27px",
                            sm: "16.27px",
                            md: "22.16px",
                          },
                        }}
                      >
                        {work.description}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.40)",
                        fontFamily: "Inter",
                        fontSize: {
                          xs: "13.435px",
                          sm: "13.435px",
                          md: "19.58px",
                        },
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "0.089px",
                      }}
                    >
                      {work.username}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                mt: "15px",
              }}
            >
              {Array.from({ length: pageCount }, (_, index) => (
                <DotButton key={index} active={currentPage === index} onClick={() => handlePageChange(index)} />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Element>
  );
};
