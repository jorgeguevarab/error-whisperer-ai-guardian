
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
        <div className="py-4 px-2">
          <h1 className="text-xl font-bold text-center text-primary flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Error Whisperer
          </h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild 
                    active={activeItem === item.id}
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
