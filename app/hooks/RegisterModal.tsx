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
import toast from "react-hot-toast"
import Button from "../components/Button"

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
          const { message } = error
          toast.error(message)
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
        label="Email"
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="name"
        label="Name"
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        label="Password"
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
     <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        <div>
          Already have an account?
        </div>
        <div onClick={onClose} className="cursor-pointer text-neutral-800 hover:underline">
          Log in
        </div>
      </div>
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
       footer={footerContent}
    />
  )
}

export default RegisterModal