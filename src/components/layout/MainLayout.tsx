
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <SidebarTrigger />
            <div className="text-sm text-muted-foreground">
              Simetrik Error Whisperer • {new Date().toLocaleDateString()}
            </div>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
