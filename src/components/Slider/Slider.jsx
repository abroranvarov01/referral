import React, { useState, useEffect } from "react";
import { Box, IconButton, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import { useSwipeable } from "react-swipeable";
import img from "../../../public/sliderBg.jpg";

const images = [
  { src: img, text: "Это первое изображение слайдера" },
  { src: img, text: "Второе изображение с описанием" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const slideInterval = 3000; // 3 секунды

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        handleNext();
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, currentIndex]);

  // Свайп для мобильных устройств
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        height: "400px",
        overflow: "hidden",
        margin: "auto",
        borderRadius: "10px",
        boxShadow: 3,
      }}
      {...handlers}
    >
      {/* Слайды */}
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              flexShrink: 0,
              height: "400px",
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={`Слайд ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Текст поверх изображения */}
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                top: "30px",
                left: "20px",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {image.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Кнопки навигации */}
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
          "&:hover": { backgroundColor: "#D4A207" },
        }}
        aria-label="Предыдущий слайд"
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
          "&:hover": { backgroundColor: "#D4A207" },
        }}
        aria-label="Следующий слайд"
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Точки навигации */}
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
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </Box>

      {/* Кнопка автоматической смены слайдов */}
      <Button
        onClick={() => setAutoSlide(!autoSlide)}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#EAB308",
          color: "white",
          "&:hover": { backgroundColor: "#D4A207" },
        }}
      >
        {autoSlide ? "Пауза" : "Запуск"}
      </Button>
    </Box>
  );
};

export default Slider;
