import { motion } from 'framer-motion'

export default function PhotoModal({ photo, onClose }) {
  if (!photo) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo}
          alt="Full size photo"
          className="w-full h-full object-contain rounded-lg"
        />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )
}
