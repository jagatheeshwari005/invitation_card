export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/wedding-bg.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #F9E4B7 0%, #F5D898 50%, #FDF4D0 100%)',
          }}
        />
      </video>
      
      {/* Overlay gradient to ensure text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(249,228,183,0.4) 0%, rgba(249,228,183,0.7) 100%)',
        }}
      />
    </div>
  )
}
