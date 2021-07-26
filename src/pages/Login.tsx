import Link from "next/link"
import { InputText } from "../../src/components/molecules/InputText"
import { Button } from "../components/atoms/Button"
import { Sidebar } from "../components/organism/Sidebar"
import { TemplateContainer, TemplateContent, TemplateForm, TemplateH1, TemplateMain } from "../components/templates/TemplateContainer"

export const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMain>
          <TemplateH1>Acesse sua conta</TemplateH1>
          <TemplateForm>
            <InputText type='text' label="E-mail" placeholder="digite seu e-mail" />

            <InputText type='password' label="Password" placeholder="digite sua senha" />

            <Button>Entrar</Button>
          </TemplateForm>

          <Link href="/register">Criar Conta</Link>

        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  )
}
