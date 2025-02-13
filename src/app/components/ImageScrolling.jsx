import React from "react";

const images = [
  "machine/image1.jpg",
  "machine/image2.jpg",
  "machine/image3.jpg",
  "machine/image4.jpg",
  "machine/image5.jpg",
  "machine/image6.jpg",
  "machine/image7.jpg",
  "machine/image8.jpg",
  "machine/image9.jpg",
  "machine/image10.jpg",
];

export default function ImageScroller() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "1rem 0",
        marginBottom: '4rem'
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.25rem", // gap-5
            animation: "scroll 20s linear infinite",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Scrolling"
              style={{
                width: "10rem", // w-40
                height: "10rem", // h-40
                objectFit: "cover",
                borderRadius: "0.5rem", // rounded-lg
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
              }}
            />
          ))}
        </div>
      </div>

      {/* Inline styles for the animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}