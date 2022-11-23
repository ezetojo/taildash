import MainMenu from "@/components/Menu";

export default function Layout({ children }) {
  return (
    <div className="h-screen min-h-screen max-h-screen flex flex-col xl:flex-row">
      <MainMenu />
      <main className="w-full h-screen min-h-screen">{children}</main>
    </div>
  );
}
