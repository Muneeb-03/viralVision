"use client";

import { Box, Button, Grid, IconButton, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Address from '../../../public/Address.svg';
import Phone from '../../../public/Phone.svg';
import Mail from '../../../public/Mail.svg';
import Image from "next/image";
import emailjs from 'emailjs-com';
import { Map } from './Map';
import { useSwipeable } from "react-swipeable";
import styled from "@emotion/styled";

const contactDetails = [
  {
    image: Address,
    data: "2118 Thornridge Cir. Syracuse, California 208434",
  },
  {
    image: Phone,
    data: "+088 (246) 642-27-10",
  },
  {
    image: Mail,
    data: "Appmax@gmail.com",
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

export const ContactSection = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm')); 
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
    const isMdUp = useMediaQuery(theme.breakpoints.up('md')); 

    const itemsPerPage = isXs || isSm ? 1 : 3;

    const [currentPage, setCurrentPage] = useState(isXs || isSm ? 1 : 0);

    const pageCount = Math.ceil(contactDetails.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(isXs || isSm ? 1 : 0);
    }, [isXs, isSm]);

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const displayedDetails = contactDetails.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handlers = useSwipeable({
      onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
      onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
      preventScrollOnSwipe: true,
      trackMouse: true 
    });

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          e.target.reset();
        }, (error) => {
          console.error('Email sending failed:', error.text);
        });
    };

  return (
    <Box id="contactus" sx={{ mt: '75px', width: '100%', px: { xs: '10px', sm: '30px', md: '75px' },}}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: 'Cal Sans',
            fontSize: "56px",
            fontWeight: 600,
            lineHeight: "68.39px",
            letterSpacing: "1.12px",
            textTransform: "capitalize",
            color: "#050623",
          }}
        >
          Contact{" "}
          <span
            style={{
              background:
                "linear-gradient(102.04deg, #FF6F91 3.29%, #8B4CFC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Us
          </span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "35.09px",
            textAlign: "center",
            color: "#637381",
          }}
        >
          We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </Typography>
      </Box>

      <Box
        {...handlers}
        sx={{
            display: 'flex', 
            flexDirection: {
              xs: 'column',
              sm: 'row',   
            },
            justifyContent: {
              xs: 'center',
              sm: 'center',
              md: 'flex-start', 
            },
            gap: 3,
            mb: 4,
            width: '100%',
        }}
        >
          {displayedDetails.map((detail, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ flex: '1' }}>
              <Box
                sx={{
                  flexShrink: 0,
                  height: '230px',
                  // minWidth: '350px',
                  width: '100%',
                  // maxWidth: '415px',
                  maxWidth: '416px',
                  borderRadius: "16.103px",
                  backgroundColor: "#FFF",
                  padding: "20px",
                  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}
              >
                <Box>
                  <Image src={detail.image} alt="detail" />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "26px",
                    letterSpacing: "0.02em",
                    color: "#000B33",
                  }}
                >
                  {detail.data}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Box>

      {!isMdUp && <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        {Array.from({ length: pageCount }, (_, index) => (
        <DotButton
            key={index}
            active={index === currentPage}
            onClick={() => handlePageChange(index)}
        />
        ))}
      </Box>}

      <Box sx={{mt: '75px'}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Map />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{p: '25px', boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)", height: '470px'}}>
                <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <TextField
                  label="Enter your name"
                  name="user_name"
                  required
                  fullWidth
                  sx={{
                    height: '55px',
                    borderRadius: '5px',
                    border: '1px solid #E8E8E8',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: '#000B33', 
                      fontFamily: 'Inter', 
                      fontSize: '14px', 
                      fontWeight: 400, 
                      lineHeight: '21px',
                      textAlign: 'left',
                      backgroundColor: 'white',
                      paddingRight: '4px', 
                    },
                  }}
                />
                    <TextField
                    label="Enter your email address"
                    name="user_email"
                    type="email"
                    required
                    fullWidth
                    sx={{
                        height: '55px',
                        borderRadius: '5px',
                        border: '1px solid #E8E8E8',
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                        '&:hover fieldset': {
                            border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                        },
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                        color: '#000B33', 
                        fontFamily: 'Inter',
                        fontSize: '14px', 
                        fontWeight: 400, 
                        lineHeight: '21px', 
                        textAlign: 'left',
                        backgroundColor: 'white',
                        paddingRight: '4px', 
                        },
                    }}
                    />
                    <TextField
                    label="Write your message"
                    name="message"
                    multiline
                    rows={4}
                    required
                    fullWidth
                    sx={{
                        height: '150px',
                        borderRadius: '5px',
                        border: '1px solid #E8E8E8',
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                        '&:hover fieldset': {
                            border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                        },
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                        color: '#000B33',
                        fontFamily: 'Inter', 
                        fontSize: '14px',
                        fontWeight: 400, 
                        lineHeight: '21px', 
                        textAlign: 'left',
                        backgroundColor: 'white',
                        paddingRight: '4px', 
                        },
                    }}
                    />
                    <Button type="submit" sx={{ mt: 2, width: '150px', height: '50px', borderRadius: '52.34px', padding: '6.37px 12.73px', background: "linear-gradient(90deg, #FF6F91 0%, #8B4CFC 100%)", color: "#FFF", fontFamily: 'Inter', fontWeight: 400, fontSize: "16px", textTransform: "none" }}>
                    Send Message
                    </Button>
                </form>
              </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
