import MainMenu from "@/components/Menu";

export default function Layout({ children }) {
  return (
    <div className="h-screen min-h-screen max-h-screen flex flex-col xl:flex-row overflow-hidden">
      <MainMenu />
      <main className="w-full h-screen min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
