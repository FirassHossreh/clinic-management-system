"use client";
import { AppSidebar } from "../../features/dashboard/components/app-sidebar";
import { SiteHeader } from "@/features/dashboard/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Provider } from "react-redux";
import { store } from "@/store/store";
export const iframeHeight = "800px";
export const description = "A sidebar with a header and a search form.";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div>
        <div className="[--header-height:calc(--spacing(14))]">
          <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar side="right" />
              <SidebarInset>
                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </Provider>
  );
}
