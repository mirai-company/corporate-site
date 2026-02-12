import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-heading text-[#0B3D91] mb-4">404</h1>
        <h2 className="text-xl font-heading text-[#1A1A1A] mb-4">
          ページが見つかりません
        </h2>
        <p className="text-gray-500 font-gothic mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#0B3D91] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#061E4A] transition-all duration-300 font-gothic cursor-pointer"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
