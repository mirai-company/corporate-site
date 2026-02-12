export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Simple spinner */}
        <div className="w-8 h-8 border-2 border-[#0B3D91]/20 border-t-[#0B3D91] rounded-full animate-spin" />
        <p className="text-sm text-gray-400 font-gothic">読み込み中...</p>
      </div>
    </div>
  );
}
