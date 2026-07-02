import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { itemsSport } from "@/consts/ItemsSport"
import { formatDate } from "@/helpers/FormatDate"
import type Activity from "@/models/Activity"
import {
  ArrowLeft,
  CalendarClock,
  CalendarDays,
  Eraser,
  Flame,
  LandPlot,
  Timer,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import {
  ValidActivitySchema,
  type ActivityFormValues,
} from "@/schemas/ActivitySchema"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { formatTime } from "@/helpers/FormatTime"
import { useActivity } from "@/hooks/UseActivity"

// type Props = {
//   id: string
// }

const ActivityFormPart = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [activity, setActivity] = useState<Activity | null>(null)
  const {
    addActivity,
    editActivity,
    error,
    removeActivity,
    fetchActivitys,
    fetchActivityById,
  } = useActivity()
  const { id } = useParams()

  useEffect(() => {
    const loadSession = async () => {
      if (id) setLoading(true)
      if (!id) return
      try {
        const data = await fetchActivityById(id)
        if (!data) return
        setActivity(data)
      } finally {
        setLoading(false)
      }
    }
    loadSession()
  }, [id, fetchActivityById])

  const handleDelete = (id: string) => {
    removeActivity(id)
    fetchActivitys()
    navigate(-1)
  }

  const today = formatDate(new Date())

  const formik = useFormik<ActivityFormValues>({
    initialValues: {
      date: activity?.date ?? today,
      hour: activity ? formatTime(activity.hour) : "",
      sport: activity?.sport ?? "",
      distance: activity?.distance ?? 0,
      duration: activity?.duration ?? 0,
      calories: activity?.calories ?? 0,
      note: activity?.note ?? "",
    },
    enableReinitialize: true,
    validationSchema: ValidActivitySchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values))
      // setButtonLoading(true)
      if (!id) {
        await addActivity(
          // values.date,
          // values.hour,
          // values.sport,
          // values.distance,
          // values.duration,
          // values.calories,
          // values.note ?? ""
          values
        )
        // alert(JSON.stringify(values))
      } else {
        await editActivity(id, values)
        // alert(JSON.stringify(values))
      }
      // setButtonLoading(false)
      if (!error) {
        navigate(-1)
      }
    },
  })

  return (
    <div className="flex justify-center">
      <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between">
          <Button variant={"ghost"} onClick={() => navigate(-1)}>
            <ArrowLeft />
            Retour
          </Button>
          <Button variant={"ghost"} onClick={() => formik.resetForm()}>
            <Eraser />
            Reset
          </Button>
        </div>
        <FieldSet className="max-sm:px-5">
          <FieldGroup>
            {/* DATE / HEURE */}
            <div className="flex items-center gap-5">
              <Field>
                <FieldLabel htmlFor="date">Date*</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="date"
                    type="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <InputGroupAddon>
                    <CalendarDays />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="hour">Heure de départ</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="hour"
                    type="time"
                    value={formik.values.hour}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <InputGroupAddon>
                    <CalendarClock />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>

            {formik.touched.date && formik.errors.date && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.date}
              </p>
            )}
            {formik.touched.hour && formik.errors.hour && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.hour}
              </p>
            )}

            {/* <div className="grid grid-cols-2 gap-3">
  <Button variant="outline" className="h-16 justify-start">
    <Calendar />
    <span>23 juin 2026</span>
  </Button>

  <Button variant="outline" className="h-16 justify-start">
    <CalendarClock />
    <span>18:30</span>
  </Button>
</div> */}

            {/* SELECT SPORT */}
            <Field className="w-full">
              <FieldLabel>Sport*</FieldLabel>
              <Select
                items={itemsSport}
                value={formik.values.sport}
                onValueChange={(value) => {
                  formik.setFieldValue("sport", value)
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un sport" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectGroup>
                    {itemsSport.map((sport) => (
                      <SelectItem key={sport.value} value={sport.value}>
                        {sport.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            {formik.touched.sport && formik.errors.sport && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.sport}
              </p>
            )}

            {/* DISTANCE - DURATION - CALORIES */}
            <div className="flex items-center gap-5">
              <Field>
                <FieldLabel htmlFor="distance">
                  Distance<i className="text-xs">(km)</i>
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="distance"
                    type="number"
                    step="0.01"
                    placeholder="10"
                    value={formik.values.distance ?? ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <InputGroupAddon>
                    <LandPlot />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="duration">
                  Durée<i className="text-xs">(minutes)</i>
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="duration"
                    type="number"
                    placeholder="60"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <InputGroupAddon>
                    <Timer />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="calories">
                  Calories<i className="text-xs">(kcal)</i>
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="calories"
                    type="number"
                    placeholder="0"
                    value={formik.values.calories}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <InputGroupAddon>
                    <Flame />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
            {formik.touched.distance && formik.errors.distance && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.distance}
              </p>
            )}
            {formik.touched.duration && formik.errors.duration && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.duration}
              </p>
            )}
            {formik.touched.calories && formik.errors.calories && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.calories}
              </p>
            )}

            <FieldDescription id="duration">
              Durée de votre acitivté :{" "}
              {formatDurationTime(formik.values.duration)}
            </FieldDescription>

            {/* NOTE */}
            <Field>
              <FieldLabel htmlFor="note">Note</FieldLabel>
              <Textarea
                id="note"
                placeholder="Vos notes sur l'activité..."
                rows={4}
                value={formik.values.note ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Field>
            {formik.touched.note && formik.errors.note && (
              <p className="text-sm text-destructive max-sm:text-xs">
                {formik.errors.note}
              </p>
            )}
          </FieldGroup>
          {id ? (
            <div className="mt-2 flex items-center justify-between">
              <Button
                onClick={() => handleDelete(id)}
                variant={"destructive"}
                type="button"
                className="font-bold"
              >
                Supprimer
              </Button>
              <Button type="submit" className="font-bold">
                {loading ? <Spinner /> : "Modifier l'activité"}
              </Button>
            </div>
          ) : (
            <Button type="submit" className="mt-2 font-bold">
              {loading ? <Spinner /> : "Ajouter l'activité"}
            </Button>
          )}
        </FieldSet>
        {error && (
          <p>
            {error.message} - {error.code} - {error.status}
          </p>
        )}
      </form>
    </div>
  )
}

export default ActivityFormPart
