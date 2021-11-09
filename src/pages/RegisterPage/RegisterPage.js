import React from "react"
import { BotaoEnviar, DivForm, Input, RegisterContainer } from "./styled"
import { Header } from "../../components/Header/Header"
import useForm from "../../hooks/useForm"

const RegisterPage = () => {

    const [form, onChange, clear] = useForm({ name: "", description: "", price: "", category: "", image:"" })

    const submitForm = (event) => {
        localStorage.setItem('name', form.name)
        localStorage.setItem('description', form.description)
        localStorage.setItem('price', form.price)
        localStorage.setItem('category', form.category)
        localStorage.setItem('image', form.image)
        event.preventDefault()
        clear()
        alert('Produto cadastrado com sucesso!')
    }

        return (
            <div>
            <Header/>
            <RegisterContainer>
                <form onSubmit={submitForm}>
                <DivForm>
                <Input
                    autoFocus
                    label="Nome do Produto" 
                    type="search" 
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    />
                <Input
                    label="Preço" 
                    type="number" 
                    name="price"
                    value={form.price}
                    onChange={onChange}
                    />
                <Input
                    label="Categoria" 
                    type="search" 
                    name="category"
                    value={form.category}
                    onChange={onChange}
                    />
                <Input 
                    label="Descrição" 
                    type="search" 
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    />
                <Input 
                    label="Url da Imagem" 
                    type="search" 
                    name="image"
                    value={form.image}
                    onChange={onChange}
                    />
                <BotaoEnviar
                    variant="outlined" 
                    size="small" 
                    type="submit" >
                        Enviar
                </BotaoEnviar>
                </DivForm>
                        </form>
            </RegisterContainer>
            </div>
        )
    }

export default RegisterPage