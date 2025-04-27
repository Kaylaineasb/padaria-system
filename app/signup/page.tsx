"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import logo from "../../assets/logoIntegrador.png"
import Image from "next/image"

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
  .string()
  .required("Senha é obrigatória")
  .min(8, "Mínimo 8 caracteres")
  .matches(/[A-Z]/, "Deve conter pelo menos uma letra maiúscula")
  .matches(/[!@#$%^&*(),.?":{}|<>]/, "Deve conter pelo menos um símbolo"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirme a senha"),
})

export default function SignupPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    // Simula cadastro
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white p-4">
      <Card className="w-full max-w-md border-red-100">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="Logo" width={200} height={200} />
          </div>
          <CardTitle className="text-2xl text-center text-red-800">Criar uma conta</CardTitle>
          <CardDescription className="text-center">
            Preencha os dados abaixo para começar a usar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Padaria</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Digite o nome da padaria"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
              </div>

              <Button type="submit" className="w-full bg-red-800 hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? "Criando conta..." : "Criar conta"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-red-800 hover:text-red-700 font-medium">
              Entrar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
