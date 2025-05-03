
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { 
  AlertTriangle, 
  FileText, 
  Settings, 
  Search, 
  Bell 
} from "lucide-react";

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  
  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      url: "/",
      icon: FileText,
    },
    {
      id: "analysis",
      title: "Análisis",
      url: "/analysis",
      icon: Search,
    },
    {
      id: "alerts",
      title: "Alertas",
      url: "/alerts",
      icon: Bell,
    },
    {
      id: "errors",
      title: "Errores",
      url: "/errors",
      icon: AlertTriangle,
    },
    {
      id: "settings",
      title: "Configuración",
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <div className="py-6 px-2">
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              <div className="h-4 w-4 bg-white rounded-sm mr-1"></div>
              <div className="h-4 w-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-center text-white">
              Simetrik
            </h1>
          </div>
          <p className="text-xs text-white/70 text-center mt-2">Error Whisperer</p>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={activeItem === item.id}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
