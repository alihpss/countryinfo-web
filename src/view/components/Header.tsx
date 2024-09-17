export default function Header() {
  return (
    <header className="mt-8 flex flex-col items-center justify-center gap-5">
      <div className="flex gap-1">
        <p className="text-4xl text-gray-900">Country </p>
        <p className="text-4xl text-purple-600">Info</p>
      </div>

      <p className="text-center">
        A place for you to find some information about many countries
      </p>
    </header>
  );
}
