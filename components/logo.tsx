import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.jpg"
        alt="Dr.M Hope Logo"
        width={56}
        height={56}
        className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
        priority
      />
      <div className="flex flex-col leading-tight">
        <span className="text-base sm:text-xl font-bold text-red-600 dark:text-white tracking-wide">
          Dr.M Hope
        </span>
        <span className="text-[10px] uppercase tracking-widest text-red-500 dark:text-gray-300 font-medium">
          Software Solutions
        </span>
      </div>
    </div>
  );
}
