export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo.jpg"
        alt="DRM Logo"
        className="h-14 w-auto object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-primary-700 dark:text-primary-300">
          DRM HOPE
        </span>
        <span className="text-sm text-secondary-600 dark:text-secondary-400">
          Software Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}
