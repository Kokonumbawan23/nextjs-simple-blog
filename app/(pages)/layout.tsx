import Navbar from "@/app/_ui/component/navbar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-64">{children}</div>
    </>
  );
}
