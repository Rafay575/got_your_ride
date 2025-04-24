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
      <motion.div
        src={image}
        alt=""
        className="mx-auto w-4/5 lg:max-w-5xl rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
  <ReactPlayer url={video} autoPlay playing  width="100%" height="100%" />
        </motion.div>

    
     
    </div>
  );
}
