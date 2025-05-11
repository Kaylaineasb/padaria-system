"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ActionButtons } from "@/components/ui/action-buttons"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Search } from "lucide-react"
import { NumericFormat } from "react-number-format"

interface Ingrediente {
  id: number;
  nome: string;
  unidade: string;
  valorComprado: string;
}

export default function IngredientesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [editIngredient, setEditIngredient] = useState<Ingrediente | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false) // Novo estado para controlar o dialog de confirmação de exclusão
  const [ingredientToDelete, setIngredientToDelete] = useState<Ingrediente | null>(null) // Estado para armazenar o ingrediente a ser deletado

  const ingredientes = [
    { id: 1, nome: "Pão Francês", unidade: "kg", valorComprado: "R$9,00" },
    { id: 2, nome: "Pão de Forma", unidade: "kg", valorComprado: "R$9,00" },
    { id: 3, nome: "Bolo de Chocolate", unidade: "kg", valorComprado: "R$9,00" },
    { id: 4, nome: "Pão Doce", unidade: "kg", valorComprado: "R$9,00" },
    { id: 5, nome: "Pão de Queijo", unidade: "kg", valorComprado: "R$9,00" },
    { id: 6, nome: "Croissant", unidade: "kg", valorComprado: "R$9,00" },
    { id: 7, nome: "Pão Integral", unidade: "kg", valorComprado: "R$9,00" },
    { id: 8, nome: "Bolo de Cenoura", unidade: "kg", valorComprado: "R$9,00" },
  ]

  const filteredIngredientes = ingredientes.filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))

  // Função para editar ingrediente
  const handleEdit = (id: number) => {
    const ingredient = ingredientes.find((item) => item.id === id)
    if (ingredient) {
      setEditIngredient(ingredient) // Preenche o estado com o ingrediente selecionado
      setIsDialogOpen(true) // Abre o Dialog para edição
    }
  }

  // Função para excluir ingrediente
  const handleDelete = (id: number) => {
    const ingredient = ingredientes.find((item) => item.id === id)
    if (ingredient) {
      setIngredientToDelete(ingredient) // Armazena o ingrediente a ser deletado
      setIsDeleteDialogOpen(true) // Abre o Dialog de confirmação
    }
  }

  // Função para confirmar a exclusão do ingrediente
  const confirmDelete = () => {
    if (ingredientToDelete) {
      // Lógica para remover o ingrediente do estado ou banco de dados
      const updatedIngredientes = ingredientes.filter((item) => item.id !== ingredientToDelete.id)
      console.log("Ingrediente excluído:", updatedIngredientes)
      setIsDeleteDialogOpen(false) // Fecha o dialog de confirmação
    }
  }

  // Função para salvar a edição (simulação de atualização)
  const handleSaveEdit = () => {
    if (editIngredient) {
      // Lógica para atualizar o ingrediente no banco de dados ou no estado
      console.log("Ingrediente editado:", editIngredient)
      setIsDialogOpen(false) // Fecha o Dialog
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Ingredientes</h1>
            <p className="text-gray-500">Gerencie os ingredientes da padaria.</p>
          </div>

          {/* Dialog para adicionar/editar ingrediente */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                Novo Ingrediente
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editIngredient ? "Editar Ingrediente" : "Adicionar Novo Ingrediente"}</DialogTitle>
                <DialogDescription>
                  {editIngredient ? "Edite os dados do ingrediente." : "Cadastre um novo ingrediente."}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome do Ingrediente</Label>
                  <Input
                    id="nome"
                    value={editIngredient ? editIngredient.nome : ""}
                    onChange={(e) => setEditIngredient({ ...editIngredient!, nome: e.target.value })}
                    placeholder="Ex: Farinha de trigo"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="unidade">Unidade</Label>
                    <Input
                      id="unidade"
                      value={editIngredient ? editIngredient.unidade : ""}
                      onChange={(e) => setEditIngredient({ ...editIngredient!, unidade: e.target.value })}
                      placeholder="Ex: kg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="valor-compra">Valor de Compra</Label>
                    <NumericFormat
                      id="valor-compra"
                      className="w-full border rounded-md px-3 py-2"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="R$ "
                      value={editIngredient ? editIngredient.valorComprado : ""}
                      onValueChange={(values) => setEditIngredient({ ...editIngredient!, valorComprado: values.value })}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={handleSaveEdit}
                >
                  {editIngredient ? "Salvar Edição" : "Salvar Ingrediente"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dialog de confirmação de exclusão */}
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent className="max-w-xs">
              <DialogHeader>
                <DialogTitle>Tem certeza?</DialogTitle>
                <DialogDescription>
                  Você realmente deseja excluir este ingrediente?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={confirmDelete}
                >
                  Apagar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIngredientes.length > 0 ? (
            filteredIngredientes.map((ingredientes) => (
              <Card key={ingredientes.id} className="border-red-100 hover:border-red-300 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-red-800">{ingredientes.nome}</h3>
                      <p className="text-gray-500 text-sm">unidade: {ingredientes.unidade}</p>
                      <p className="text-gray-500 text-sm">Valor Comprado: {ingredientes.valorComprado}</p>
                    </div>
                    <ActionButtons
                      onEdit={() => handleEdit(ingredientes.id)} // Chama a função de edição
                      onDelete={() => handleDelete(ingredientes.id)} // Chama a função de exclusão
                    />
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
