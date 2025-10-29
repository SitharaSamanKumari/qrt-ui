import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/qtr")({
  component: QTRPage,
});

export default function QTRPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
