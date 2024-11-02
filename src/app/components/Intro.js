"use client"

import { Box, Typography, Button, Container } from '@mui/material';
import IntroPoster from '../../../public/IntroPoster.svg';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import GetStarted from '../../../public/GetStarted.svg';
import GetWorks from '../../../public/GetWorks.svg';

const Badge = styled(Box)({
    display: 'inline-flex',
    height: '38px',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(138, 0, 255, 0.06) 0%, rgba(255, 0, 122, 0.06) 100%)',
    padding: '4px 8px',
    borderRadius: '19px',
    marginBottom: '16px',
    fontFamily: 'Inter',
    fontSize: '15.35px',
    fontWeight: 600,
    lineHeight: '18.58px',
    letterSpacing: '0.01em',
    textAlign: 'left',
    color: '#050623',
    '& span': {
      background: 'linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: '28.06px',
      marginLeft: '8px',
      padding: '7.5px',
      fontSize: '12.28px',
        lineHeight: '14.87px',
    }
  });
  

const LandingSection = () => {
  return (
    <Box sx={{px: '150px', mt: '75px'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Box sx={{ flex: 1, width: '50%'}}>
          <Box sx={{width: '90%'}}>
            <Badge>
                Get Videos Viral
                <span>ViralVision</span>
            </Badge>
            
            <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                    mb: 2,
                    fontSize: '41.46px',
                    fontWeight: 600,
                    lineHeight: '62.48px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                    color: '#000',
                    '& .highlight': {
                    background: 'linear-gradient(90deg, #8A00FF 0%, #FF007A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                    },
                }}
                >
                <span className="highlight">Supercharge</span>
                Your Brand With Viral TikTok & Instagram Reels
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '35px',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#000', 
                opacity: '70%'
            }}
            >
                We craft Instagram Reels and TikTok that grab attention, boost your brand, 
                and connect with your audience through creative trends and authentic storytelling
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Image src={GetStarted} alt="Get started" />
            <Image src={GetWorks} alt="Get Works" />
          </Box>
        </Box>

        <Box sx={{width: '50%'}}>
            <Image src={IntroPoster} alt="Intro Poster" style={{width: '100%'}}/>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingSection;