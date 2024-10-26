import { useCountDown } from "../../hooks/useCountDown";

export default function CountdownTime({
  time_end,
}: {
  time_start?: string | null;
  time_end?: string | null;
}) {
  const { countdown } = useCountDown({ duration: time_end });
  return (
    <div className="flex items-center justify-center mx:gap-4 xs:gap-2 text-primary">
      <p className="flex flex-col">
        <span className="text-[10px]">Days</span>
        <span className="mx:text-2xl xs:text-lg font-bold tracking-wider">{countdown?.split(":")[0]}</span>
      </p>
      <span className="text-red-400">:</span>
      <p className="flex flex-col">
        <span className="text-[10px]">Hours</span>
        <span className="mx:text-2xl xs:text-lg font-bold tracking-wider">{countdown?.split(":")[1]}</span>
      </p>
      <span className="text-red-400">:</span>
      <p className="flex flex-col">
        <span className="text-[10px]">Minutes</span>
        <span className="mx:text-2xl xs:text-lg font-bold tracking-wider">{countdown?.split(":")[2]}</span>
      </p>
      <span className="text-red-400">:</span>
      <p className="flex flex-col">
        <span className="text-[10px]">Seconds</span>
        <span className="mx:text-2xl xs:text-lg font-bold tracking-wider">{countdown?.split(":")[3]}</span>
      </p>
    </div>
  );
}
