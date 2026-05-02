export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex flex-col items-center justify-center gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-orange-500 rounded-full animate-spin shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
      </div>

      <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">
        Loading Assets...
      </p>
    </div>
  );
}
