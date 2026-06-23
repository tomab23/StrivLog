import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { EyeOff, KeyRound, MailIcon } from "lucide-react"
import { useState } from "react"


const ActivityFormPart = () => {
      const [loading, setLoading] = useState<boolean>(false)


  return (
      <div className="flex justify-center">
        <FieldSet className="w-full max-w-md">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="email"
                  type="email"
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
                  type={"password"}
                  placeholder="********"
                />
                <InputGroupAddon>
                  <KeyRound />
                </InputGroupAddon>
                <InputGroupAddon
                  align={"inline-end"}
                  className="hover:cursor-pointer"
                >
                  <EyeOff />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
          <Button className="mt-2 font-bold">
            {loading ? <Spinner /> : "Register"}
          </Button>
        </FieldSet>
      </div>
  )
}

export default ActivityFormPart