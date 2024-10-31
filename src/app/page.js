// pages/index.js
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  IconButton,
} from "@mui/material";
import SampleImg from '../../public/SampleImg.svg';
import HeartIcon from '../../public/Heart.svg';
import CommentIcon from '../../public/Comment.svg';
import ProfilePic from '../../public/ProfilePic.svg';
import Image from "next/image";

export default function Home() {
  const posts = [
    {
      id: 1,
      likes: 700,
      comments: 312,
      imageUrl: "/path/to/image1.jpg",
      description:
        "The game in Shinjur was amazing and I want to share some photos",
      date: "September 19",
    },
    // Add more items as needed
  ];

  return (
    <Box sx={{ padding: "50px" }}>
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
              // fontFamily: "Cal Sans",
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
                // fontFamily: "Cal Sans",
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
              fontStyle: "normal",
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
            height: "46px",
            width: "175px",
            padding: "6.365px 12.73px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4.243px",
            flexShrink: 0,
            textTransform: "capitalize",
            borderRadius: "52.335px",
            background: "linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)",
            backgroundColor: "transparent",
          }}
        >
          See More
        </Button>
      </Box>

      {/* Posts Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              // width: "638.534px",
              height: "698.945px",
              flexShrink: 0,
              borderRadius: "16.103px",
              backgroundColor: "#FFF",
              padding: "20px",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Image
              src={SampleImg}
              style={{ width: "100%" }}
              alt="Our Work Video"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                mt: "15px",
                alignItems: "center",
              }}
            >
              <Image src={HeartIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                700
              </Typography>

              <Image src={CommentIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                312
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
              <Image src={ProfilePic} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                Liked by craig_love and 44,686 others
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                The game in Shirpur was amazing and I want to share some photos
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
                September 19
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              // width: "638.534px",
              height: "698.945px",
              flexShrink: 0,
              borderRadius: "16.103px",
              backgroundColor: "#FFF",
              padding: "20px",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Image
              src={SampleImg}
              style={{ width: "100%" }}
              alt="Our Work Video"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                mt: "15px",
                alignItems: "center",
              }}
            >
              <Image src={HeartIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                700
              </Typography>

              <Image src={CommentIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                312
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
              <Image src={ProfilePic} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                Liked by craig_love and 44,686 others
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                The game in Shirpur was amazing and I want to share some photos
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
                September 19
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              // width: "638.534px",
              height: "698.945px",
              flexShrink: 0,
              borderRadius: "16.103px",
              backgroundColor: "#FFF",
              padding: "20px",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Image
              src={SampleImg}
              style={{ width: "100%" }}
              alt="Our Work Video"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                mt: "15px",
                alignItems: "center",
              }}
            >
              <Image src={HeartIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                700
              </Typography>

              <Image src={CommentIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                312
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
              <Image src={ProfilePic} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                Liked by craig_love and 44,686 others
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                The game in Shirpur was amazing and I want to share some photos
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
                September 19
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              // width: "638.534px",
              height: "698.945px",
              flexShrink: 0,
              borderRadius: "16.103px",
              backgroundColor: "#FFF",
              padding: "20px",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Image
              src={SampleImg}
              style={{ width: "100%" }}
              alt="Our Work Video"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                mt: "15px",
                alignItems: "center",
              }}
            >
              <Image src={HeartIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                700
              </Typography>

              <Image src={CommentIcon} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                312
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
              <Image src={ProfilePic} />
              <Typography
                sx={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                Liked by craig_love and 44,686 others
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontFamily: "Inter",
                  fontSize: "23.147px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "32.05px",
                  letterSpacing: "-0.125px",
                }}
              >
                The game in Shirpur was amazing and I want to share some photos
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
                September 19
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
