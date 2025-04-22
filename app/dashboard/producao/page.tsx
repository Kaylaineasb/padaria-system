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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"

export default function ProducaoPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const producaoAtual = [
    { id: 1, produto: "Pão Francês", quantidade: "30kg", inicio: "05:30", fim: "07:30", status: "Concluído" },
    { id: 2, produto: "Pão de Forma", quantidade: "15kg", inicio: "06:15", fim: "08:15", status: "Concluído" },
    { id: 3, produto: "Bolo de Chocolate", quantidade: "5kg", inicio: "07:00", fim: "09:00", status: "Em Produção" },
    { id: 4, produto: "Pão Doce", quantidade: "10kg", inicio: "08:00", fim: "10:00", status: "Agendado" },
  ]

  const producaoHistorico = [
    { id: 5, produto: "Pão Francês", quantidade: "30kg", data: "Ontem", status: "Concluído" },
    { id: 6, produto: "Pão de Queijo", quantidade: "8kg", data: "Ontem", status: "Concluído" },
    { id: 7, produto: "Croissant", quantidade: "5kg", data: "Ontem", status: "Concluído" },
    { id: 8, produto: "Pão Integral", quantidade: "12kg", data: "Ontem", status: "Concluído" },
    { id: 9, produto: "Pão Francês", quantidade: "30kg", data: "22/04/2024", status: "Concluído" },
    { id: 10, produto: "Bolo de Cenoura", quantidade: "6kg", data: "22/04/2024", status: "Concluído" },
  ]

  const receitas = [
    { id: 1, nome: "Pão Francês", rendimento: "30kg" },
    { id: 2, nome: "Pão de Forma", rendimento: "15kg" },
    { id: 3, nome: "Bolo de Chocolate", rendimento: "5kg" },
    { id: 4, nome: "Pão Doce", rendimento: "10kg" },
    { id: 5, nome: "Pão de Queijo", rendimento: "8kg" },
    { id: 6, nome: "Croissant", rendimento: "5kg" },
    { id: 7, nome: "Pão Integral", rendimento: "12kg" },
    { id: 8, nome: "Bolo de Cenoura", rendimento: "6kg" },
  ]

  const filteredProducaoAtual = producaoAtual.filter((item) =>
    item.produto.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredProducaoHistorico = producaoHistorico.filter((item) =>
    item.produto.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Produção</h1>
            <p className="text-gray-500">Gerencie a produção diária da padaria.</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="mr-2 h-4 w-4" />
                Nova Produção
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Nova Produção</DialogTitle>
                <DialogDescription>
                  Selecione a receita e a quantidade para iniciar uma nova produção.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="receita">Receita</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma receita" />
                    </SelectTrigger>
                    <SelectContent>
                      {receitas.map((receita) => (
                        <SelectItem key={receita.id} value={receita.id.toString()}>
                          {receita.nome} ({receita.rendimento})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quantidade">Quantidade</Label>
                  <Input id="quantidade" placeholder="Ex: 30kg" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="horario">Horário de Início</Label>
                  <Input id="horario" type="time" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => setIsDialogOpen(false)}>
                  Iniciar Produção
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Buscar produção..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="atual">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="atual">Produção Atual</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
          </TabsList>
          <TabsContent value="atual">
            <Card className="border-red-100">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 font-medium text-gray-500">Produto</th>
                      <th className="text-left p-4 font-medium text-gray-500">Quantidade</th>
                      <th className="text-left p-4 font-medium text-gray-500">Início</th>
                      <th className="text-left p-4 font-medium text-gray-500">Fim Previsto</th>
                      <th className="text-left p-4 font-medium text-gray-500">Status</th>
                      <th className="text-left p-4 font-medium text-gray-500">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducaoAtual.length > 0 ? (
                      filteredProducaoAtual.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200">
                          <td className="p-4">{item.produto}</td>
                          <td className="p-4">{item.quantidade}</td>
                          <td className="p-4">{item.inicio}</td>
                          <td className="p-4">{item.fim}</td>
                          <td className="p-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.status === "Concluído"
                                  ? "bg-green-100 text-green-800"
                                  : item.status === "Em Produção"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-800 hover:bg-red-50"
                            >
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">
                          Nenhuma produção encontrada.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="historico">
            <Card className="border-red-100">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 font-medium text-gray-500">Produto</th>
                      <th className="text-left p-4 font-medium text-gray-500">Quantidade</th>
                      <th className="text-left p-4 font-medium text-gray-500">Data</th>
                      <th className="text-left p-4 font-medium text-gray-500">Status</th>
                      <th className="text-left p-4 font-medium text-gray-500">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducaoHistorico.length > 0 ? (
                      filteredProducaoHistorico.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200">
                          <td className="p-4">{item.produto}</td>
                          <td className="p-4">{item.quantidade}</td>
                          <td className="p-4">{item.data}</td>
                          <td className="p-4">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              {item.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-800 hover:bg-red-50"
                            >
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="p-4 text-center text-gray-500">
                          Nenhum histórico encontrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
