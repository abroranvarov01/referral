import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import { useSwipeable } from "react-swipeable";

const images = [
  "https://via.placeholder.com/600x300?text=Image+1",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const slideInterval = 3000; // 3 seconds

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        handleNext();
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, currentIndex]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        overflow: "hidden",
        margin: "auto",
        borderRadius: "10px",
        boxShadow: 3,
        backgroundColor: "black",
      }}
      {...handlers}
    >
      {/* Slides */}
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Slide ${index + 1}`}
            sx={{
              width: "100%",
              flexShrink: 0,
              height: "300px",
              objectFit: "cover",
            }}
          />
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "#EAB308",
          color: "white",
          zIndex: 2,
          "&:hover": { backgroundColor: "#D4A207" }, // Slightly darker shade
        }}
        aria-label="Previous Slide"
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "#EAB308",
          color: "white",
          zIndex: 2,
          "&:hover": { backgroundColor: "#D4A207" }, // Slightly darker shade
        }}
        aria-label="Next Slide"
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <CircleIcon
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              fontSize: "12px",
              cursor: "pointer",
              color:
                index === currentIndex ? "#EAB308" : "rgba(255, 255, 255, 0.5)",
              transition: "color 0.3s",
              "&:hover": {
                color: "#EAB308",
              },
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Box>

      {/* Auto-Slide Toggle Button */}
      <Button
        onClick={() => setAutoSlide(!autoSlide)}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#EAB308",
          color: "white",
          "&:hover": { backgroundColor: "#D4A207" }, // Slightly darker shade
        }}
      >
        {autoSlide ? "Pause" : "Play"}
      </Button>
    </Box>
  );
};

export default Slider;
