import { useState, useRef, useEffect } from 'react'

export function useAudio(src) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(src)
    audioRef.current.loop = true
    audioRef.current.volume = 0.3 // Low volume as requested

    const audio = audioRef.current

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      // Restart the audio to keep it looping
      setTimeout(() => {
        audio.currentTime = 0
        audio.play().catch(console.error)
      }, 100)
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [src])

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error)
      })
    }
  }

  return { play, isPlaying, audioRef }
}
