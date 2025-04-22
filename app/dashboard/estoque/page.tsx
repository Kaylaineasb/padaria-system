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
import { AlertCircle, Plus, Search } from "lucide-react"

export default function EstoquePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const ingredientes = [
    { id: 1, nome: "Farinha de Trigo", quantidade: "2kg", unidade: "kg", minimo: "10kg", status: "crítico" },
    { id: 2, nome: "Fermento Biológico", quantidade: "100g", unidade: "g", minimo: "500g", status: "crítico" },
    { id: 3, nome: "Açúcar", quantidade: "15kg", unidade: "kg", minimo: "5kg", status: "normal" },
    { id: 4, nome: "Sal", quantidade: "8kg", unidade: "kg", minimo: "2kg", status: "normal" },
    { id: 5, nome: "Ovos", quantidade: "120", unidade: "un", minimo: "30", status: "normal" },
    { id: 6, nome: "Leite", quantidade: "25L", unidade: "L", minimo: "10L", status: "normal" },
    { id: 7, nome: "Manteiga", quantidade: "12kg", unidade: "kg", minimo: "5kg", status: "normal" },
    { id: 8, nome: "Chocolate em Pó", quantidade: "3kg", unidade: "kg", minimo: "2kg", status: "baixo" },
  ]

  const movimentacoes = [
    { id: 1, ingrediente: "Farinha de Trigo", quantidade: "50kg", tipo: "entrada", data: "20/04/2024" },
    { id: 2, ingrediente: "Fermento Biológico", quantidade: "2kg", tipo: "entrada", data: "20/04/2024" },
    { id: 3, ingrediente: "Farinha de Trigo", quantidade: "30kg", tipo: "saída", data: "21/04/2024" },
    { id: 4, ingrediente: "Fermento Biológico", quantidade: "1kg", tipo: "saída", data: "21/04/2024" },
    { id: 5, ingrediente: "Açúcar", quantidade: "10kg", tipo: "saída", data: "21/04/2024" },
    { id: 6, ingrediente: "Ovos", quantidade: "60", tipo: "saída", data: "21/04/2024" },
  ]

  const filteredIngredientes = ingredientes.filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredMovimentacoes = movimentacoes.filter((item) =>
    item.ingrediente.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Estoque</h1>
            <p className="text-gray-500">Gerencie o estoque de ingredientes da padaria.</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar ao Estoque
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar ao Estoque</DialogTitle>
                <DialogDescription>Adicione ingredientes ao estoque da padaria.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="ingrediente">Ingrediente</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um ingrediente" />
                    </SelectTrigger>
                    <SelectContent>
                      {ingredientes.map((ingrediente) => (
                        <SelectItem key={ingrediente.id} value={ingrediente.id.toString()}>
                          {ingrediente.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quantidade">Quantidade</Label>
                  <Input id="quantidade" placeholder={`Ex: 10${ingredientes[0]?.unidade || "kg"}`} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="data">Data</Label>
                  <Input id="data" type="date" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => setIsDialogOpen(false)}>
                  Adicionar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Buscar ingredientes..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="ingredientes">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
            <TabsTrigger value="movimentacoes">Movimentações</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredientes">
            <Card className="border-red-100">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 font-medium text-gray-500">Ingrediente</th>
                      <th className="text-left p-4 font-medium text-gray-500">Quantidade</th>
                      <th className="text-left p-4 font-medium text-gray-500">Mínimo</th>
                      <th className="text-left p-4 font-medium text-gray-500">Status</th>
                      <th className="text-left p-4 font-medium text-gray-500">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredIngredientes.length > 0 ? (
                      filteredIngredientes.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200">
                          <td className="p-4">{item.nome}</td>
                          <td className="p-4">{item.quantidade}</td>
                          <td className="p-4">{item.minimo}</td>
                          <td className="p-4">
                            {item.status === "crítico" && (
                              <div className="flex items-center">
                                <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Crítico</span>
                              </div>
                            )}
                            {item.status === "baixo" && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                Baixo
                              </span>
                            )}
                            {item.status === "normal" && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Normal</span>
                            )}
                          </td>
                          <td className="p-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-800 hover:bg-red-50"
                            >
                              Ajustar
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="p-4 text-center text-gray-500">
                          Nenhum ingrediente encontrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="movimentacoes">
            <Card className="border-red-100">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 font-medium text-gray-500">Ingrediente</th>
                      <th className="text-left p-4 font-medium text-gray-500">Quantidade</th>
                      <th className="text-left p-4 font-medium text-gray-500">Tipo</th>
                      <th className="text-left p-4 font-medium text-gray-500">Data</th>
                      <th className="text-left p-4 font-medium text-gray-500">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMovimentacoes.length > 0 ? (
                      filteredMovimentacoes.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200">
                          <td className="p-4">{item.ingrediente}</td>
                          <td className="p-4">{item.quantidade}</td>
                          <td className="p-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.tipo === "entrada" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {item.tipo === "entrada" ? "Entrada" : "Saída"}
                            </span>
                          </td>
                          <td className="p-4">{item.data}</td>
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
                          Nenhuma movimentação encontrada.
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
