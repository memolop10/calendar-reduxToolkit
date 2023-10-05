
const CalendarEvent = ({ event }) => {
    const { user, title} = event 
    return (
    <>
        <strong>{title}</strong>
        <strong>- {user.name}</strong>
    </>
  )
}

export default CalendarEvent