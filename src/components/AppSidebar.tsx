
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { 
  Calendar, 
  Users, 
  Activity, 
  Brain, 
  FileText, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  MessageSquare, 
  Clock,
  ChevronRight
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

const menuItems = [
  { name: "Dashboard", icon: Activity, active: true, path: "/" },
  { name: "Pacientes", icon: Users, active: false, path: "/pacientes" },
  { name: "Consultas", icon: Calendar, active: false, path: "/consultas" },
  { name: "Minha Agenda", icon: Clock, active: false, path: "/agenda" },
  { name: "Dentistas & Equipe", icon: Users, active: false, path: "/equipe" },
  { name: "Serviços", icon: Settings, active: false, path: "/servicos" },
  { name: "Estoque", icon: FileText, active: false, path: "/estoque" },
  { name: "Financeiro", icon: CreditCard, active: false, path: "/financeiro" },
  { name: "Assistente IA", icon: Brain, active: false, path: "/assistente" },
  { name: "Configurações", icon: Settings, active: false, path: "/configuracoes" }
]

export function AppSidebar() {
  const location = useLocation()
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-card">
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center space-x-2 px-4 py-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DC</span>
          </div>
          {!isCollapsed && (
            <div>
              <div className="text-foreground font-semibold">Dental Care</div>
              <div className="text-muted-foreground text-xs">clinica@dentalcare.com</div>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={isCollapsed ? item.name : undefined}
                  >
                    <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left">
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && (
                        <>
                          <span className="font-medium">{item.name}</span>
                          {item.name === "Configurações" && (
                            <ChevronRight className="w-4 h-4 ml-auto" />
                          )}
                        </>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild
              tooltip={isCollapsed ? "Suporte" : undefined}
            >
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left">
                <HelpCircle className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span>Suporte</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild
              tooltip={isCollapsed ? "Feedback" : undefined}
            >
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left">
                <MessageSquare className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span>Feedback</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {!isCollapsed && (
          <div className="bg-muted rounded-lg p-3 mt-4 mx-2">
            <div className="text-xs text-muted-foreground">Plano Premium</div>
            <div className="text-sm font-medium">Dr. Amanda Silva</div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
