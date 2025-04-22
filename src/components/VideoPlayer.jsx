import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

export default function VideoPlayer({ image, video, css = "" }) {
  const [open, setOpen] = useState(false);

  /* lock scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div className={`relative ${css}`}>
      {/* hero image fade‑up once */}
      <motion.img
        src={image}
        alt=""
        className="mx-auto w-4/5 lg:max-w-5xl rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Play button + SVG ripples */}
      <button
        onClick={() => setOpen(true)}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* -------------- SVG RIPPLES -------------- */}
        <svg
          className="absolute h-32 w-32 overflow-visible pointer-events-none"
          viewBox="0 0 120 120"
        >
          {/* Ring 1 */}
          <circle
            cx="60"
            cy="60"
            r="25"
            stroke="#F1582B"
            strokeWidth="6"
            fill="none"
          >
            <animate
              attributeName="r"
              from="25"
              to="60"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.9"
              to="0"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Ring 2 (stagger 0.66 s) */}
          <circle
            cx="60"
            cy="60"
            r="25"
            stroke="#F1582B"
            strokeWidth="6"
            fill="none"
          >
            <animate
              attributeName="r"
              from="25"
              to="60"
              dur="2s"
              begin=".66s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.9"
              to="0"
              dur="2s"
              begin=".66s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Ring 3 (stagger 1.33 s) */}
          <circle
            cx="60"
            cy="60"
            r="25"
            stroke="#F1582B"
            strokeWidth="6"
            fill="none"
          >
            <animate
              attributeName="r"
              from="25"
              to="60"
              dur="2s"
              begin="1.33s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.9"
              to="0"
              dur="2s"
              begin="1.33s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* -------------- PLAY PILL -------------- */}
        <span className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#F1582B] shadow-lg hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        </span>
      </button>

      {/* -------------- MODAL -------------- */}
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: 2000 },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "900px",
            height: "90%",
            padding: 0,
            border: "none",
            background: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <ReactPlayer url={video} playing controls width="100%" height="100%" />
      </Modal>
    </div>
  );
}
