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

type Props = {
  login: boolean
}
const AuthComponent = ({ login }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [view, setView] = useState<boolean>(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.href = "/home"
    }, 1000)
  }

  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            {/* <Input id="username" type="text" placeholder="Max Leiter" /> */}
            <InputGroup>
              <InputGroupInput
                id="username"
                type="text"
                placeholder="mail@gmail.com"
              />
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="password"
                type={view ? "text" : "password"}
                placeholder="********"
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
        <Button onClick={handleLogin} className="font-bold mt-2">
          {loading ? <Spinner /> : login ? "Login" : "Register"}
        </Button>
      </FieldSet>
    </div>
  )
}

export default AuthComponent
