"use client"

import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import SampleImg from '../../../public/SampleImg.svg';
import HeartIcon from '../../../public/Heart.svg';
import CommentIcon from '../../../public/Comment.svg';
import PlayIcon from '../../../public/Play.svg';
import ProfilePic from '../../../public/ProfilePic.svg';

const worksData = [
  {
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Shirpur was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
  {
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Shirpur was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
  {
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Shirpur was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
  {
    likes: 700,
    comments: 312,
    likedBy: 'craig_love and 44,686 others',
    description: 'The game in Shirpur was amazing and I want to share some photos',
    date: 'September 19',
    image: SampleImg
  },
];

export const WorksSection = () => {
    return (
      <Box sx={{mt: '50px', px: '75px'}}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box>
            <Typography
              variant="h4"
              component="h2"
              style={{
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

        {/* Posts Section */}
        <Grid container spacing={3}>
          {worksData.map((work, index) => (
            <Grid item xs={12} sm={12} md={6} key={index} sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'right' : 'left' }}>
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
                  <Image
                    src={work.image}
                    style={{ width: "100%" }}
                    alt="Our Work Video"
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
                      color: "#262626",
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
                <Box sx={{ marginTop: "15px" }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.40)",
                      fontFamily: "Inter",
                      fontSize: "19.586px",
                      fontWeight: 400,
                      letterSpacing: "0.089px",
                    }}
                  >
                    {work.date}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};