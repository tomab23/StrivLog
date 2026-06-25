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
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
  id: number
}

const ActivityFormPart = ({ id } : Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [activity, setActivity] = useState<Activity | null>(null)

  //   useEffect(() => {
  //   const loadSession = async () => {
  //     if (id) setLoading(true)
  //     if (!id) return
  //     try {
  //       const data = await fetchSessionById(id)
  //       if (!data) return
  //       setSession(data)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   loadSession()
  // }, [id, fetchSessionById])

  const today = formatDate(new Date())

  // const formik = useFormik<SessionFormValues>({
  //   initialValues: {
  //     date: session?.date ?? today,
  //     time: session ? formatTime(session.time) : "",
  //     duration: session?.duration ?? 0,
  //     location: session?.location ?? "",
  //     type: (session?.type ?? "training") as "training" | "match",
  //     note: session?.note ?? "",
  //     shoes: session?.shoes ?? "",
  //   },
  //   enableReinitialize: true,
  //   validationSchema: ValidSessionSchema,
  //   onSubmit: async (values) => {
  //     // alert(JSON.stringify(values))
  //     setButtonLoading(true)
  //     if (!id) {
  //       await addSession(
  //         values.date,
  //         values.time,
  //         values.duration,
  //         values.location,
  //         values.type,
  //         values.note ?? "",
  //         values.shoes ?? ""
  //       )
  //     } else {
  //       await editSession(
  //         id,
  //         values.date,
  //         values.time,
  //         values.duration,
  //         values.location,
  //         values.type,
  //         values.note ?? "",
  //         values.shoes ?? ""
  //       )
  //     }
  //     setButtonLoading(false)
  //     if (!error) {
  //       navigate(-1)
  //     }
  //   },
  // })

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between">
          <Button variant={"ghost"} onClick={() => navigate(-1)}><ArrowLeft/>Retour</Button>
          <Button variant={"ghost"} onClick={() => navigate(-1)}><Eraser/>Reset</Button>
        </div>
        <FieldSet className="max-sm:px-5">
          <FieldGroup>
            {/* DATE / HEURE */}
            <div className="flex items-center gap-5">
              <Field>
                <FieldLabel htmlFor="date">Date*</FieldLabel>
                <InputGroup>
                  <InputGroupInput id="date" type="date" value={today}  />
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
                  />
                  <InputGroupAddon>
                    <CalendarClock />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>

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
              <Select items={itemsSport}>
                <SelectTrigger>
                  <SelectValue />
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

            {/* DISTANCE - DURATION - CALORIES */}
            <div className="flex items-center gap-5">
              <Field>
                <FieldLabel htmlFor="distance">
                  Distance<i className="text-xs">(km)</i>
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput id="distance" type="number" placeholder="10" />
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
                  />
                  <InputGroupAddon>
                    <Flame />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>

            <FieldDescription id="duration">
              Durée de votre acitivté :
              {/* {formatDurationTime(formik.values.duration)} */}
            </FieldDescription>

            {/* NOTE */}
            <Field>
              <FieldLabel htmlFor="note">Note</FieldLabel>
              <Textarea
                id="note"
                placeholder="Your feedback helps us improve..."
                rows={4}
              />
            </Field>
          </FieldGroup>
          {id ? (
            <div className="flex items-center justify-between mt-2">
              {/* onClick={() => handleDelete(id)}  */}
              <Button variant={"destructive"} type="button" className="font-bold">
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
      </form>
    </div>
  )
}

export default ActivityFormPart
