import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-red-600 p-2 rounded-full mr-3">
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
            <h1 className="text-2xl font-bold text-red-800">Padaria</h1>
          </div>
          <div className="flex gap-4">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/signup">Cadastrar</Link>
            </Button>
          </div>
        </header>

        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-4">Gestão inteligente para sua padaria</h2>
              <p className="text-gray-700 mb-6">
                Controle de produção e estoque eficiente, baseado em dados históricos de vendas e consumo de
                ingredientes. Produza a quantidade certa, com o mínimo de desperdício.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-lg px-6 py-6 h-auto">
                <Link href="/signup">Começar agora</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Padaria Estrela do Mar"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Principais recursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-red-100">
                <CardHeader>
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M5 7 3 5l2-2" />
                      <path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9" />
                      <path d="M5 19 3 17l2-2" />
                      <path d="M5 7v12" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-800">Controle de Produção</CardTitle>
                  <CardDescription>Planeje sua produção diária com base em dados históricos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Calcule automaticamente os ingredientes necessários para cada lote de produção, evitando
                    desperdícios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardHeader>
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-800">Gestão de Estoque</CardTitle>
                  <CardDescription>Controle seu estoque em tempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Receba alertas automáticos quando o estoque estiver baixo e mantenha o controle preciso dos insumos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardHeader>
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M4 19h16" />
                      <path d="M4 15h16" />
                      <path d="M4 11h16" />
                      <path d="M4 7h16" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-800">Gerenciamento de Receitas</CardTitle>
                  <CardDescription>Organize suas receitas e fórmulas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Cadastre suas receitas com ingredientes e quantidades, permitindo cálculos precisos para diferentes
                    lotes de produção.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Pronto para otimizar sua padaria?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Junte-se a diversas padarias que já estão economizando tempo e dinheiro com nosso sistema de gestão.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-lg px-6 py-6 h-auto">
              <Link href="/signup">Experimente gratuitamente</Link>
            </Button>
          </section>
        </main>

        <footer className="border-t border-red-100 pt-8 text-center text-gray-600">
          <p>© 2024. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}
