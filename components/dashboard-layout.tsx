"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {  ChevronDown, CookingPot, Home, LogOut, Menu, Package, ShoppingCart, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import logo from '../assets/logoIntegrador.png';
import Image from "next/image"
import path from "path"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: "Produção",
      path: "/dashboard/producao",
      icon: CookingPot,
    },
    {
      name: "Estoque",
      path: "/dashboard/estoque",
      icon: Package,
    },
    {
      name: "Receitas",
      path: "/dashboard/receitas",
      icon: ShoppingCart,
    },
    {
      name: "Ingredientes",
      path: "/dashboard/ingredientes",
      icon: ChefHat,
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar para desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
          <div className=" p-2 rounded-full mr-3">
              <Image src={logo} alt="Logo" width="42" height="42" />
            </div>
            <h1 className="text-lg font-bold text-red-800">Nome da Padaria</h1>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                pathname === route.path
                  ? "bg-red-50 text-red-700 font-medium"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-700",
              )}
            >
              <route.icon className="mr-3 h-5 w-5" />
              {route.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-700">
            <LogOut className="mr-3 h-5 w-5" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Menu para mobile */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="bg-red-600 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
                  <path d="M17.5 11a2 2 0 0 0 1.84-2.75L16.25 2a1 1 0 0 0-1.85 0l-1.51 3.93" />
                  <path d="M4.66 8.25 2 13h16.74" />
                  <path d="M19.38 11.8c.9 1.91 1.11 4.06.62 6.1a9.8 9.8 0 0 1-1.41 3.16" />
                  <path d="M2.34 12.65c-.22.62-.4 1.26-.54 1.92-.44 2.04-.24 4.19.66 6.1" />
                  <path d="M12.5 5.3c-.85.61-1.78.95-2.75.95A3.94 3.94 0 0 1 6.5 4.5" />
                </svg>
              </div>
              <h1 className="text-lg font-bold text-red-800">Estrela do Mar</h1>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                  pathname === route.path
                    ? "bg-red-50 text-red-700 font-medium"
                    : "text-gray-700 hover:bg-red-50 hover:text-red-700",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <route.icon className="mr-3 h-5 w-5" />
                {route.name}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-red-700 hover:text-red-800">
              <LogOut className="mr-3 h-5 w-5" />
              Sair
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild className="md:hidden mr-4">
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </Sheet>
              <h1 className="text-xl font-bold text-red-800 md:hidden">Estrela do Mar</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <span className="font-medium">Padaria Estrela do Mar</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
