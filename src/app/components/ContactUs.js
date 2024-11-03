"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import Address from '../../../public/Address.svg';
import Phone from '../../../public/Phone.svg';
import Mail from '../../../public/Mail.svg';
import Image from "next/image";
import emailjs from 'emailjs-com';
import { Map } from './Map';

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

export const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
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

      <Box sx={{ mt: '30px' }}>
        <Grid container spacing={3}>
          {contactDetails.map((detail, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  flexShrink: 0,
                  height: '230px',
                  width: '100%',
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
        </Grid>
      </Box>

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
