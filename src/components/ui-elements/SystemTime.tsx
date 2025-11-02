"use client";

import { useEffect, useState } from "react";

export function SystemTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", { hour12: false }); // 2025-11-02 23:45:12
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right text-sm text-gray-500 mb-4">
      🕒 System Time: <span className="font-medium text-gray-700">{time}</span>
    </div>
  );
}
