export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo.jpg"
        alt="Dr.M Hope Logo"
        className="h-14 w-auto object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-white tracking-wide">
          Dr.M Hope
        </span>
        <span className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">
          Software Solutions
        </span>
      </div>
    </div>
  );
}
