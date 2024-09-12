export default function CountdownTime() {
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="flex flex-col">
        <span className="text-[10px]">Days</span>
        <span className="text-2xl font-bold tracking-wider">03</span>
      </p>
      <span className="text-red-400">:</span>
      <p className="flex flex-col">
        <span className="text-[10px]">Hours</span>
        <span className="text-2xl font-bold tracking-wider">23</span>
      </p>
      <span className="text-red-400">:</span>
      <p className="flex flex-col">
        <span className="text-[10px]">Minutes</span>
        <span className="text-2xl font-bold tracking-wider">19</span>
      </p>
      <span className="text-red-400">:</span>
      <p className="flex flex-col">
        <span className="text-[10px]">Seconds</span>
        <span className="text-2xl font-bold tracking-wider">56</span>
      </p>
    </div>
  );
}
