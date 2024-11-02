"use client"

import { Box, Grid, Typography } from "@mui/material"
import ExpertContent from '../../../public/ExpertContent.svg';
import Management from '../../../public/Management.svg';
import Strategic from '../../../public/Strategic.svg';
import Image from "next/image";

const approachesData = [
  {
    image: ExpertContent,
    title: "Expert Content Creators",
    description: "We specialize in headhunting the ideal content creators who align perfectly with your brand's voice and style. Our meticulous selection process ensures that each creator embodies your brand values and resonates."
  },
  {
    image: Strategic,
    title: "Strategic Scripting",
    description: "Our talented team specializes in crafting engaging scripts tailored to captivate your target audience. We understand that every brand has a unique story, and we take the time to research and analyze your audience."
  },
  {
    image: Management,
    title: "Full Management",
    description: "We take care of everything from content creation to posting, allowing you to focus on what you do best—running your business. Our comprehensive service includes brainstorming ideas, producing high-quality videos."
  },
];

export const ApproachSection = () => {
  return (
    <Box sx={{mt: '75px', width: '100%', px: '75px'}}>
      <Box sx={{textAlign: 'center'}}>
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
          {approachesData.map((approach, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
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
                <Image src={approach.image} />
                <Typography
                  sx={{
                    fontSize: "21.11px",
                    fontWeight: 600,
                    lineHeight: "31.81px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                    color: "#050623",
                  }}
                >
                  {approach.title}
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
                  {approach.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}