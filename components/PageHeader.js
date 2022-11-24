export default function PageHeader({ title, icon }) {
  return (
    <>
      <header className="bg-white">
        <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex flex-row items-center">
          {icon}
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
    </>
  );
}
