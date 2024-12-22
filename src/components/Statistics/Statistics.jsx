import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Statistics = ({
  completed = 10,
  declined = 5,
  pending = 3,
  success = 8,
  removed = 2,
}) => {
  const data = [
    { value: completed, label: "Завершено", color: "#4caf50" },
    { value: declined, label: "Отклонено", color: "#f44336" },
    { value: pending, label: "Ожидание", color: "#ff9800" },
    { value: success, label: "Успех", color: "#2196f3" },
    { value: removed, label: "Удалено", color: "#9c27b0" },
  ];

  return (
    <div
      style={{
        minHeight: "400px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <PieChart
        series={[
          {
            data,
            innerRadius: 60,
            outerRadius: 140,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
            cx: 180,
            cy: 180,
            label: false,
            showLegend: false,
          },
        ]}
        width={450}
        height={450}
        style={{
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          paddingBottom: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "8px",
          color: "#ffffff",
          fontSize: "14px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",

              gap: "4px", // Уменьшенное расстояние между цветным блоком и текстом
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: item.color,
                borderRadius: "4px",
              }}
            ></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
