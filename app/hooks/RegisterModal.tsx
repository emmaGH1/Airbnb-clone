'use client'

import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from "./useRegisterModal"
import Modal from "../components/modals/Modal"
import Heading from "../components/Heading"
import Input from "../components/inputs/Input"

const RegisterModal = () => {
  const { onOpen, onClose, isOpen } = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        onClose()
      })
       .catch((error) => {
          console.log(error)
       })
       .finally(() => {
        setIsLoading(false)
       })
  }
  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
        title="Welcome to Airbnb"
        subtitle="Create an account"
      />
      <Input 
        id="email"
        label="label"
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  return (
    <Modal 
       isOpen={isOpen}
       onClose={onClose}
       title="Register"
       actionLabel="Continue"
       onSubmit={handleSubmit(onSubmit)}
       body={bodyContent}
    />
  )
}

export default RegisterModal