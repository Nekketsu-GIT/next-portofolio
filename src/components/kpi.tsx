export default function KPI({ text, value }: { text: string; value?: string }) {
  return (
    value && (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-darkgoldenrod animate-pulse">
          {value}
        </span>
        <p>{text}</p>
      </div>
    )
  );
}
