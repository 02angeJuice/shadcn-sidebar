import { Metadata } from "next";
import NavbarComponent from "../components/Navbar";
import { SidebarMenu } from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};
function HomeRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarComponent />
      <div className="flex">
        <div className="hidden sm:block">
          <SidebarMenu />
        </div>
        <main className="w-full p-4">{children}</main>
      </div>
    </div>
  );
}

export default HomeRootLayout;
