"use client"

import Tick from '../../../public/Tick.svg';
import Cross from '../../../public/Cross.svg';
import Inquire from '../../../public/Inquire.svg';
import InquireFilled from '../../../public/InquireFilled.svg';
import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

const pricingPlans = [
  {
    title: 'Starter',
    price: '$2,500',
    features: [
      'Professional Scripting',
      'Content Management',
      'No Performance Analytics',
      'No Full-Time Dedicated Creator',
      'No Strategy Consultations'
    ],
    contentPieces: '15 pieces of faceless content',
    backgroundColor: '#fff',
    actionColor: '#050623',
    boxShadow: '0px 4.22px 55.5px 0px #0000000D',
    justify: 'end',
    buttonVariant: 'outlined'
  },
  {
    title: 'Growth',
    price: '$4,500',
    features: [
      'Professional Scripting',
      'Content Management',
      'Performance Analytics',
      'Dedicated Content Creator',
      'No Strategy Consultations'
    ],
    contentPieces: '30 Pieces Of Content',
    backgroundColor: 'linear-gradient(141.68deg, #FF6F91 22.07%, #8B4CFC 85.52%)',
    actionColor: '#fff',
    boxShadow: '0px 10.54px 50.35px 0px #8A3EFF66',
    justify: 'center',
    buttonVariant: 'contained'
  },
  {
    title: 'Pro',
    price: '$10,000',
    features: [
      'Professional Scripting',
      'Content Management',
      'Advance Analytics',
      'Full-Time Dedicated Creator',
      'Strategy Consultations'
    ],
    contentPieces: '30 Pieces With Full-Time Creator',
    backgroundColor: '#fff',
    actionColor: '#050623',
    boxShadow: '0px 4.22px 55.5px 0px #0000000D',
    justify: 'start',
    buttonVariant: 'outlined'
  }
];

const FeatureIcon = ({ feature, planColor }) => {
  if (feature.startsWith('No')) {
    return (
      <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', mr: 1 }}>
        <Image src={Cross} alt="Not included" />
      </Box>
    );
  }
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', mr: 1 }}>
      <Image src={Tick} alt="Included" />
    </Box>
  );
};

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

export const PaymentSection = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm')); 
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
    const isMdUp = useMediaQuery(theme.breakpoints.up('md')); 

    const itemsPerPage = isXs || isSm ? 1 : 3;

    const [currentPage, setCurrentPage] = useState(isXs || isSm ? 1 : 0);

    const pageCount = Math.ceil(pricingPlans.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(isXs || isSm ? 1 : 0);
    }, [isXs, isSm]);

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const displayedPlans = pricingPlans.slice(
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
      <Box
        id="pricing"
        sx={{
          textAlign: "center",
          mt: "75px",
          px: { xs: "15px", sm: "30px", md: "75px" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "Cal Sans",
            fontSize: { xs: "44px", sm: "44px", md: "56px" },
            fontWeight: 600,
            lineHeight: "68.39px",
            letterSpacing: { xs: "0.88px", sm: "0.88px", md: "1.12px" },
            textTransform: "capitalize",
            color: "#050623",
          }}
        >
          Transparent{" "}
          <span
            style={{
              background:
                "linear-gradient(102deg, #FF6F91 3.29%, #8B4CFC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Cal Sans",
            }}
          >
            Pricing
          </span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: "18.05px", sm: "18.05px", md: "22px" },
            fontWeight: { xs: 500, sm: 500, md: 400 },
            lineHeight: { xs: "34.897px", sm: "34.897px", md: "35.09px" },
            opacity:{ xs: 0.7, sm: 0.7, md: 1 },
            letterSpacing: "1.12px",
            textTransform: "capitalize",
            color: "#637381",
            mt: "25px",
            mb: "50px",
          }}
        >
          Choose Flexible Pricing Tailored To Your Needs, With No Hidden
          Fees—Just Impactful, Results-Driven Videos!
        </Typography>

        <Box
          {...handlers}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
            gap: 3,
            mb: 4,
          }}
        >
          {displayedPlans.map((plan, index) => (
            <Box
              key={plan.title}
              sx={{
                background: plan.backgroundColor,
                borderRadius: "24px",
                width: "100%",
                maxWidth: "399.14px",
                height: "670.38px",
                boxShadow: plan.boxShadow || "none",
                textAlign: "left",
                padding: "42.16px 25.3px",
                color: plan.actionColor,
                fontFamily: "Poppins",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "23.19px",
                  fontWeight: 700,
                  lineHeight: "34.78px",
                }}
              >
                {plan.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16.86px",
                  fontWeight: 400,
                  lineHeight: "25.3px",
                }}
              >
                {plan.contentPieces}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "59.03px",
                  fontWeight: 600,
                  lineHeight: "88.54px",
                  my: 2,
                }}
              >
                {plan.price}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href="#contactus">
                  {plan.buttonVariant === "contained" ? (
                    <Image src={InquireFilled} alt="Inquire" />
                  ) : (
                    <Image src={Inquire} alt="Inquire" />
                  )}
                </Link>
              </Box>

              <Box sx={{ mt: 3 }}>
                {plan.features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      color: plan.actionColor,
                    }}
                  >
                    <FeatureIcon
                      feature={feature}
                      planColor={plan.actionColor}
                    />
                    <Typography sx={{ fontFamily: "Poppins" }}>
                      {feature.replace("No ", "")}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {!isMdUp && (
          <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            {Array.from({ length: pageCount }, (_, index) => (
              <DotButton
                key={index}
                active={index === currentPage}
                onClick={() => handlePageChange(index)}
              />
            ))}
          </Box>
        )}
      </Box>
    );
}