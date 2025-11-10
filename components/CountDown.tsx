"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  // 🕓 Thời điểm kết thúc khuyến mãi
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // ⏰ Chuyển mili giây → ngày, giờ, phút, giây
  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / (1000 * 60)) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}d : {String(h).padStart(2, "0")}h : {String(m).padStart(2, "0")}m :{" "}
      {String(s).padStart(2, "0")}s
    </span>
  );
};

export default CountDown;
