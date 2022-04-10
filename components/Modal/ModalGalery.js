import { Dialog } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"

export const ModalGalery = ({ isOpen, setIsOpen, img, alt }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="grid place-content-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 1 }}
              className="max-w-6xl max-h-[90vh] z-50 select-none bg-red-500"
            >
              <img src={img} alt={alt} />
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
