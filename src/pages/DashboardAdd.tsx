import Link from "next/link"
import { InputText } from "../../src/components/molecules/InputText"
import { Button } from "../components/atoms/Button"
import { Imagem } from "../components/atoms/Imagem"
import { TemplateAside, TemplateContainer, TemplateContent, TemplateForm, TemplateH1, TemplateMain } from "../components/templates/TemplateContainer"

export const DashboardAdd = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <TemplateAside>
          <Imagem imagem="/add.svg" width='600' height='600' />          
        </TemplateAside>
        <TemplateMain>
          <TemplateH1>Cadastre nova despesa</TemplateH1>
          <TemplateForm>
            <InputText type='text' label="Despesa" placeholder="digite qual a despesa" />

            <InputText type='text' label="Categoria" placeholder="digite a categoria" />

            <InputText type='number' label="Valor" placeholder="digite o valor" />

            <Button>Cadastrar</Button>
          </TemplateForm>

          <Link href="/dashboard">Voltar</Link>

        </TemplateMain>
      </TemplateContent>
    </TemplateContainer>
  )
}
