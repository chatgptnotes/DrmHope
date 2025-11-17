export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo.jpg"
        alt="Dr.M Hope Logo"
        className="h-14 w-auto object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-primary-700 dark:text-primary-300">
          Dr.M Hope
        </span>
      </div>
    </div>
  );
}
