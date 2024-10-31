"use client"

import {
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import SampleImg from '../../public/SampleImg.svg';
import HeartIcon from '../../public/Heart.svg';
import CommentIcon from '../../public/Comment.svg';
import PlayIcon from '../../public/Play.svg';
import ProfilePic from '../../public/ProfilePic.svg';
import Image from "next/image";

import ExpertContent from '../../public/ExpertContent.svg';
import Management from '../../public/Management.svg';
import Strategic from '../../public/Strategic.svg';
import ClientOne from "./components/clientOne";

export default function Home() {
  return (
    <Box sx={{ padding: "50px" }}>
      <Box>
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
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                // width: "638.534px",
                // height: "698.945px",
                flexShrink: 0,
                borderRadius: "16.103px",
                backgroundColor: "#FFF",
                padding: "20px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Box sx={{position: 'relative'}}>
                <Image
                  src={SampleImg}
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
                  <Image src={PlayIcon} alt="PLay-Icon" />
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

                <Image src={CommentIcon} alt="Comment Icon" />
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
                <Image src={ProfilePic} alt="Profile Pic" />
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
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                flexShrink: 0,
                borderRadius: "16.103px",
                backgroundColor: "#FFF",
                padding: "20px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Box sx={{position: 'relative'}}>
                <Image
                  src={SampleImg}
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
                  <Image src={PlayIcon} alt="PLay-Icon" />
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

                <Image src={CommentIcon} alt="Comment Icon" />
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
                <Image src={ProfilePic} alt="Profile Pic" />
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
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                // width: "638.534px",
                // height: "698.945px",
                flexShrink: 0,
                borderRadius: "16.103px",
                backgroundColor: "#FFF",
                padding: "20px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Box sx={{position: 'relative'}}>
                <Image
                  src={SampleImg}
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
                  <Image src={PlayIcon} alt="PLay-Icon" />
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

                <Image src={CommentIcon} alt="Comment Icon" />
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
                <Image src={ProfilePic} alt="Profile Pic" />
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
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                // width: "638.534px",
                // height: "698.945px",
                flexShrink: 0,
                borderRadius: "16.103px",
                backgroundColor: "#FFF",
                padding: "20px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Box sx={{position: 'relative'}}>
                <Image
                  src={SampleImg}
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
                  <Image src={PlayIcon} alt="PLay-Icon" />
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

                <Image src={CommentIcon} alt="Comment Icon" />
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
                <Image src={ProfilePic} alt="Profile Pic" />
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

      <Box sx={{mt: '75px', width: '100%'}}>
        <Box sx={{textAlign: 'center'}}>
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
              Approach
            </span>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "37.48px",
              textAlign: "center",
              color: "#050623",
              width: { xs: "100%", lg: "40%" },
              mx: "auto",
              mt: '20px'
            }}
          >
            Our process is designed to ensure that every piece of content aligns seamlessly with your brand's identity and objectives. Here's how we do it:
          </Typography>
        </Box>

        <Box sx={{mt: '30px', pl: { xs: "0", lg: "60px" }, pr: { xs: "0", lg: "60px" },}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  // width: "638.534px",
                  // height: "698.945px",
                  flexShrink: 0,
                  borderRadius: "16.103px",
                  backgroundColor: "#FFF",
                  padding: "20px",
                  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px'
                }}
              >
                <Image src={ExpertContent} />
                <Typography
                  sx={{
                    // fontFamily: "Cal Sans",
                    fontSize: "21.11px",
                    fontWeight: 600,
                    lineHeight: "31.81px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                    color: "#050623",
                  }}
                >
                  Expert Content Creators
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15.35px",
                    fontWeight: 400,
                    lineHeight: "26.87px",
                    textAlign: "left",
                    color: "#050623",
                    opacity: '0.6'
                  }}
                >
                  We specialize in headhunting the ideal content creators who align perfectly with your brand's voice and style. Our meticulous selection process ensures that each creator embodies your brand values and resonates.
                </Typography>

              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  // width: "638.534px",
                  // height: "698.945px",
                  flexShrink: 0,
                  borderRadius: "16.103px",
                  backgroundColor: "#FFF",
                  padding: "20px",
                  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px'
                }}
              >
                <Image src={Strategic} />
                <Typography
                  sx={{
                    // fontFamily: "Cal Sans",
                    fontSize: "21.11px",
                    fontWeight: 600,
                    lineHeight: "31.81px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                    color: "#050623",
                  }}
                >
                  EStrategic Scripting
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15.35px",
                    fontWeight: 400,
                    lineHeight: "26.87px",
                    textAlign: "left",
                    color: "#050623",
                    opacity: '0.6'
                  }}
                >
                  Our talented team specializes in crafting engaging scripts tailored to captivate your target audience. We understand that every brand has a unique story, and we take the time to research and analyze your audience.                
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  // width: "638.534px",
                  // height: "698.945px",
                  flexShrink: 0,
                  borderRadius: "16.103px",
                  backgroundColor: "#FFF",
                  padding: "20px",
                  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px'
                }}
              >
                <Image src={Management} />
                <Typography
                  sx={{
                    // fontFamily: "Cal Sans",
                    fontSize: "21.11px",
                    fontWeight: 600,
                    lineHeight: "31.81px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                    color: "#050623",
                  }}
                >
                  Full Management
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15.35px",
                    fontWeight: 400,
                    lineHeight: "26.87px",
                    textAlign: "left",
                    color: "#050623",
                    opacity: '0.6'
                  }}
                >
                  We take care of everything from content creation to posting, allowing you to focus on what you do best—running your business. Our comprehensive service includes brainstorming ideas, producing high-quality videos.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="text-primary">Testimonial</span>
                            <h4 className="title mb-3 mt-2">Dont believe us, <br/> Check what our partners say</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
                <ClientOne bgWhite={true}/>
            </div>
        </section>

    </Box>
  );
}
