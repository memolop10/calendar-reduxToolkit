import { Calendar } from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { localizer, getMessages } from "../../helpers"
import CalendarEvent from "../components/CalendarEvent"
import { CalendarModal } from "../components/CalendarModal"
import { Navbar } from "../components/Navbar"
import { useState } from "react"
import { useCalendarStore, useUiStore } from "../../hooks"
import { FabAddNew } from "../components/FabAddNew"
import { FabDelete } from "../components/FabDelete"


export const CalendarPage = () => {

    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'agenda')

    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log({ event, start, end, isSelected })
    }

    const onDoubleClick = (event) => {
        console.log({onDoubleClick: event})
        openDateModal()
    }

    const onSelect = (event) => {
        setActiveEvent(event)
    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event)
        setLastView(event)
    }

  return (
    <>
        <Navbar/>   

        <Calendar
            culture="es"
            defaultView={lastView}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: `calc( 100vh - 80px  )` }}
            messages={getMessages()}
            eventPropGetter={ eventStyleGetter }
            components={{
                event : CalendarEvent
            }}
            onDoubleClickEvent={ onDoubleClick }
            onSelectEvent={ onSelect }
            onView={onViewChanged}
        />

        <CalendarModal /> 
        <FabAddNew />
        <FabDelete />
    </>
  )
}
