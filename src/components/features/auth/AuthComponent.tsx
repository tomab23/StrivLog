import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { EyeIcon, EyeOff, KeyRound, MailIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { useFormik } from "formik"
import { ValidAuthSchema, type AuthFormValues } from "@/schemas/AuthSchema"

type Props = {
  log: boolean
}
const AuthComponent = ({ log }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [view, setView] = useState<boolean>(false)
  const { login, register } = useAuth()
  const [error, setError] = useState<string | null>(null)


  const handleLogin = async (email: string, password: string) => {
    setError(null)
    setLoading(true)
    const { error } = await login(email, password)
    if (error) setError(error)
    if (error) console.log(error)
    if (error) setLoading(false)
    else
      setTimeout(() => {
        window.location.href = "/home"
      }, 1000)
  }

  const handleRegister = async (email: string, password: string) => {
    setError(null)
    setLoading(true)
    const { error } = await register(email, password)
    if (error) setError(error)
    if (error) console.log(error)
    if (error) setLoading(false)
    else
      setTimeout(() => {
        window.location.href = "/home"
      }, 1000)
  }

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      email: "",
      password: "",
      // confirm: "",
    },
    enableReinitialize: true,
    validationSchema: ValidAuthSchema,
    onSubmit: (values) => {
      if (log) {
        // if (values.password === values.confirm) {
          handleLogin(values.email, values.password)
   
        // }
      } else {
        handleRegister(values.email, values.password)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="email"
                name="email"
                required
                type="email"
                placeholder="mail@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="password"
                name="password"
                required
                type={view ? "text" : "password"}
                placeholder="********"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <InputGroupAddon>
                <KeyRound />
              </InputGroupAddon>
              <InputGroupAddon
                align={"inline-end"}
                className="hover:cursor-pointer"
                onClick={() => setView(!view)}
              >
                {view ? <EyeOff /> : <EyeIcon />}
              </InputGroupAddon>
            </InputGroup>
            {!login && (
              <FieldDescription className="text-sm">
                Must be at least 8 characters long.
              </FieldDescription>
            )}
          </Field>
        </FieldGroup>

        {error && log && <p className="text-sm text-destructive text-center">Erreur lors de la connexion</p>}

        {error && !log && <p className="text-sm text-destructive text-center">Erreur lors de l'inscription</p>}

        <Button type="submit" className="mt-2 font-bold">
          {loading ? <Spinner /> : log ? "Connexion" : "Inscription"}
        </Button>
      </FieldSet>
    </form>
  )
}

export default AuthComponent
