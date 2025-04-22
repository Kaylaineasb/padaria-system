"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando cadastro
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white p-4">
      <Card className="w-full max-w-md border-red-100">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
          </div>
          <CardTitle className="text-2xl text-center text-red-800">Criar uma conta</CardTitle>
          <CardDescription className="text-center">
            Preencha os dados abaixo para começar a usar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Padaria</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Padaria Estrela do Mar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? "Criando conta..." : "Criar conta"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-red-600 hover:text-red-800 font-medium">
              Entrar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
