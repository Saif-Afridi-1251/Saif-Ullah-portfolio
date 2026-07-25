function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />
    </div>
  );
}

export default BackgroundEffects;