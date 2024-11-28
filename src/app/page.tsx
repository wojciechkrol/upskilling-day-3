export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-zinc-100">
      <div className="bg-sky-500 p-10 text-9xl font-semibold uppercase text-white transition-all hover:scale-105">
        Upskilling
      </div>
      <div className="bg-yellow-500 p-10 text-9xl font-bold uppercase text-white transition-all hover:scale-110">
        Day
      </div>
      <div className="bg-lime-500 p-10 text-9xl font-bold uppercase text-white hover:animate-spin">
        3
      </div>
    </div>
  );
}
