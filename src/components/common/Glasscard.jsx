function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        shadow-xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-blue-500/20
        w-full
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;