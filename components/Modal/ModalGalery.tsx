import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "types/AnimatePresence";

export const ModalGalery = ({ isOpen, setIsOpen, img, alt }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-[9999] inset-0 grid place-content-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1 }}
            className="w-screen h-screen sm:w-[80vw] sm:h-[80vh] z-50 select-none relative"
          >
            <Image layout="fill" objectFit="contain" src={img} alt={alt} />
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
