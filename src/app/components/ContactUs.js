"use client";

import { Box, Button, Dialog, Grid, IconButton, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Address from "../../../public/Address.svg";
import Phone from "../../../public/Phone.svg";
import Mail from "../../../public/Mail.svg";
import Image from "next/image";
import emailjs from "emailjs-com";
import { Map } from "./Map";
import { useSwipeable } from "react-swipeable";
import styled from "@emotion/styled";
import { Element } from "react-scroll";

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

export const ContactSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = isMdUp ? contactDetails.length : 1;
  const pageCount = Math.ceil(contactDetails.length / itemsPerPage);
  const serviceId = "service_dzjwz0f";
  const templateId = "template_a56incj";
  const userId = "12areK4A5BRUdY_Ql";

  useEffect(() => {
    if (isMdUp) setCurrentPage(0);
  }, [isMdUp]);

  // Handle hash change to open dialog
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contactus') {
        setIsDialogOpen(true);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  const displayedDetails = contactDetails.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prevPage) => (prevPage + 1) % pageCount),
    onSwipedRight: () => setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        e.target.reset();
        setIsDialogOpen(false); // Close dialog after successful submission
      },
      (error) => {
        console.error("Email sending failed:", error.text);
      }
    );
  };
  

  const handleClose = () => {
    setIsDialogOpen(false);
    if (window.location.hash === '#contactus') {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <Box
      sx={{
        mt: "75px",
        px: { xs: "15px", sm: "30px", md: "75px" },
      }}
    >
      <Element name="contact">
        <Box sx={{ textAlign: "center", mt: { xs: 4, md: 6 }, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "32px", sm: "44px", md: "56px" },
              fontWeight: 600,
              lineHeight: { xs: "48px", sm: "60px", md: "68.39px" },
              letterSpacing: { xs: "0.5px", sm: "0.88px", md: "1.12px" },
              textTransform: "capitalize",
              color: "#050623",
              mb: { xs: 2, md: 3 },
            }}
          >
            Contact{" "}
            <span
              style={{
                background: "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Us
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "22px" },
              fontWeight: 400,
              lineHeight: { xs: "22px", sm: "26px", md: "35.089px" },
              textAlign: "center",
              color: "#637381",
              textTransform: "capitalize",
              fontStyle: "normal",
              mt: { xs: 1, md: 2 },
              width: { xs: "90%", sm: "80%", md: "70%" },
              mx: "auto",
            }}
          >
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
          </Typography>
        </Box>
        <Box
          {...handlers}
          sx={{
            display: "flex",
            flexDirection: isMdUp ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mb: 4,
          }}
        >
          {displayedDetails.map((detail, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                height: "230px",
                width: isMdUp ? "30%" : "90%",
                borderRadius: "16.103px",
                backgroundColor: "#FFF",
                padding: "20px",
                boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Image src={detail.image} alt="detail" />
              <Typography
                sx={{
                  fontFamily: "Inter",
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
          ))}
        </Box>
        {!isMdUp && (
          <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            {Array.from({ length: pageCount }, (_, index) => (
              <DotButton key={index} active={index === currentPage} onClick={() => handlePageChange(index)} />
            ))}
          </Box>
        )}

        <Dialog 
          open={isDialogOpen} 
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >
          <Box
            sx={{
              p: "25px",
              boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)",
              height: "auto",
            }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <TextField
                label="Enter your name"
                name="user_name"
                required
                fullWidth
                sx={{
                  height: "55px",
                  borderRadius: "5px",
                  border: "1px solid #E8E8E8",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#000B33",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    textAlign: "left",
                    backgroundColor: "white",
                    paddingRight: "4px",
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
                  height: "55px",
                  borderRadius: "5px",
                  border: "1px solid #E8E8E8",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#000B33",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    textAlign: "left",
                    backgroundColor: "white",
                    paddingRight: "4px",
                  },
                }}
              />
              <TextField
                label="Business Name"
                name="business"
                fullWidth
                sx={{
                  height: "55px",
                  borderRadius: "5px",
                  border: "1px solid #E8E8E8",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#000B33",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    textAlign: "left",
                    backgroundColor: "white",
                    paddingRight: "4px",
                  },
                }}
              />
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                fullWidth
                sx={{
                  height: "55px",
                  borderRadius: "5px",
                  border: "1px solid #E8E8E8",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#000B33",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    textAlign: "left",
                    backgroundColor: "white",
                    paddingRight: "4px",
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
                  height: "150px",
                  borderRadius: "5px",
                  border: "1px solid #E8E8E8",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#000B33",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    textAlign: "left",
                    backgroundColor: "white",
                    paddingRight: "4px",
                  },
                }}
              />
              <Button
                type="submit"
                sx={{
                  mt: 2,
                  width: "150px",
                  height: "50px",
                  borderRadius: "52.34px",
                  padding: "6.37px 12.73px",
                  background: "linear-gradient(90deg, #FF6F91 0%, #8B4CFC 100%)",
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Dialog>

      </Element>
    </Box>
  );
};