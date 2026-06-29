import * as Yup from "yup"

export const ValidActivitySchema = Yup.object({
  date: Yup.string().required("La date est obligatoire"),

  hour: Yup.string().required("L'heure de départ est obligatoire"),

  sport: Yup.string()
  .required("Un sport dois être choisi"),

  distance: Yup.number()
    .typeError("Les kilomètres doivent être un nombre")
    .positive("Les kilomètres doivent être positive")
    // .integer("La durée doit être en minutes")
    .min(0.1, "Minimum 0.1 kilomètre")
    .transform((value, originalValue) => {
      if (typeof originalValue === "string") {
        return Number(originalValue.replace(",", "."))
      }
      return value
    })
    .nullable()
    .required("Les kilomètres sont obligatoire"),

  duration: Yup.number()
    .typeError("La durée doit être un nombre")
    .positive("La durée doit être positive")
    .integer("La durée doit être en minutes")
    .min(1, "Minimum 1 minute")
    // .max(600, "Maximum 10h")
    .required("La durée est obligatoire"),

  calories: Yup.number()
    .typeError("Les calories doivent être un nombre")
    .positive("Les calories doit être positive")
    // .integer("Les calories doit être en minutes")
    .min(1, "Minimum 1 calories")
    // .max(600, "Maximum 10h")
    .required("Les calories sont obligatoire"),

  note: Yup.string()
    .max(500, "Maximum 500 caractères")
    .nullable() // accepte null (venant de la BDD)
    .default(""),
})

export type ActivityFormValues = Yup.InferType<typeof ValidActivitySchema>
