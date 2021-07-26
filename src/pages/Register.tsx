import Link from "next/link"
import { InputText } from "../../src/components/molecules/InputText"
import { Button } from "../components/atoms/Button"
import { Sidebar } from "../components/organism/Sidebar"
import { TemplateContainer, TemplateContent, TemplateForm, TemplateH1, TemplateMain } from "../components/templates/TemplateContainer"

export const Register = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMain>
          <TemplateH1>Crie sua Conta</TemplateH1>
          <TemplateForm>
            <InputText type='text' label="E-mail" placeholder="digite seu e-mail" />

            <InputText type='password' label="Password" placeholder="digite sua senha" />

            <Button>Criar Conta</Button>
          </TemplateForm>

          <Link href="/">Já possui uma Conta</Link>

        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  )
}
