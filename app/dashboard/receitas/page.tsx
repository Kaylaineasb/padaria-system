"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search } from "lucide-react"

export default function ReceitasPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const receitas = [
    { id: 1, nome: "Pão Francês", rendimento: "30kg", ingredientes: 8, ultimaAtualizacao: "15/04/2024" },
    { id: 2, nome: "Pão de Forma", rendimento: "15kg", ingredientes: 6, ultimaAtualizacao: "16/04/2024" },
    { id: 3, nome: "Bolo de Chocolate", rendimento: "5kg", ingredientes: 10, ultimaAtualizacao: "17/04/2024" },
    { id: 4, nome: "Pão Doce", rendimento: "10kg", ingredientes: 7, ultimaAtualizacao: "18/04/2024" },
    { id: 5, nome: "Pão de Queijo", rendimento: "8kg", ingredientes: 5, ultimaAtualizacao: "19/04/2024" },
    { id: 6, nome: "Croissant", rendimento: "5kg", ingredientes: 6, ultimaAtualizacao: "20/04/2024" },
    { id: 7, nome: "Pão Integral", rendimento: "12kg", ingredientes: 9, ultimaAtualizacao: "21/04/2024" },
    { id: 8, nome: "Bolo de Cenoura", rendimento: "6kg", ingredientes: 8, ultimaAtualizacao: "22/04/2024" },
  ]

  const filteredReceitas = receitas.filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Receitas</h1>
            <p className="text-gray-500">Gerencie as receitas da padaria.</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="mr-2 h-4 w-4" />
                Nova Receita
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Receita</DialogTitle>
                <DialogDescription>
                  Cadastre uma nova receita com seus ingredientes e modo de preparo.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome da Receita</Label>
                  <Input id="nome" placeholder="Ex: Pão Francês" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="rendimento">Rendimento</Label>
                    <Input id="rendimento" placeholder="Ex: 30kg" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tempo">Tempo de Preparo</Label>
                    <Input id="tempo" placeholder="Ex: 2 horas" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Ingredientes</Label>
                  <div className="border border-gray-200 rounded-md p-4 space-y-4">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-6">
                        <Label htmlFor="ingrediente1">Ingrediente</Label>
                        <Input id="ingrediente1" placeholder="Ex: Farinha de Trigo" />
                      </div>
                      <div className="col-span-3">
                        <Label htmlFor="quantidade1">Quantidade</Label>
                        <Input id="quantidade1" placeholder="Ex: 10" />
                      </div>
                      <div className="col-span-3">
                        <Label htmlFor="unidade1">Unidade</Label>
                        <Input id="unidade1" placeholder="Ex: kg" />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-6">
                        <Input placeholder="Ex: Fermento Biológico" />
                      </div>
                      <div className="col-span-3">
                        <Input placeholder="Ex: 500" />
                      </div>
                      <div className="col-span-3">
                        <Input placeholder="Ex: g" />
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Ingrediente
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="preparo">Modo de Preparo</Label>
                  <Textarea id="preparo" placeholder="Descreva o passo a passo da receita..." rows={5} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea id="observacoes" placeholder="Observações adicionais..." rows={3} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => setIsDialogOpen(false)}>
                  Salvar Receita
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Buscar receitas..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReceitas.length > 0 ? (
            filteredReceitas.map((receita) => (
              <Card key={receita.id} className="border-red-100 hover:border-red-300 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-red-800">{receita.nome}</h3>
                      <p className="text-gray-500 text-sm">Rendimento: {receita.rendimento}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-800 hover:bg-red-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </Button>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{receita.ingredientes} ingredientes</span>
                    <span>Atualizado: {receita.ultimaAtualizacao}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">Nenhuma receita encontrada.</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
