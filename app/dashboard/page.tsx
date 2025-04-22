import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AlertCircle, ArrowUpRight, CookingPot, Package, ShoppingCart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-500">Bem-vindo ao sistema de gestão da Padaria.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Produção Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">12</div>
                <div className="p-2 bg-red-100 rounded-full">
                  <CookingPot className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="text-xs text-green-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+8% em relação a ontem</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Itens em Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">48</div>
                <div className="p-2 bg-red-100 rounded-full">
                  <Package className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="text-xs text-red-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>3 itens com estoque baixo</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Receitas Cadastradas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">24</div>
                <div className="p-2 bg-red-100 rounded-full">
                  <ShoppingCart className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="text-xs text-gray-500 flex items-center mt-2">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>Última adição: Pão Italiano</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Produção Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">342</div>
                <div className="p-2 bg-red-100 rounded-full">
                  <CookingPot className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="text-xs text-green-600 flex items-center mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12% em relação ao mês anterior</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Alertas</h2>

          <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Estoque Crítico</AlertTitle>
            <AlertDescription>
              Farinha de Trigo está com estoque abaixo do mínimo (2kg restantes).{" "}
              <Link href="/dashboard/estoque" className="font-medium underline">
                Verificar estoque
              </Link>
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Estoque Crítico</AlertTitle>
            <AlertDescription>
              Fermento Biológico está com estoque abaixo do mínimo (100g restantes).{" "}
              <Link href="/dashboard/estoque" className="font-medium underline">
                Verificar estoque
              </Link>
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Produção Recente</h2>
          <Card className="border-red-100">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-medium text-gray-500">Produto</th>
                    <th className="text-left p-4 font-medium text-gray-500">Quantidade</th>
                    <th className="text-left p-4 font-medium text-gray-500">Data</th>
                    <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Pão Francês</td>
                    <td className="p-4">30kg</td>
                    <td className="p-4">Hoje, 05:30</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Concluído</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Pão de Forma</td>
                    <td className="p-4">15kg</td>
                    <td className="p-4">Hoje, 06:15</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Concluído</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Bolo de Chocolate</td>
                    <td className="p-4">5kg</td>
                    <td className="p-4">Hoje, 07:00</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Em Produção</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">Pão Doce</td>
                    <td className="p-4">10kg</td>
                    <td className="p-4">Hoje, 08:00</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Agendado</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
