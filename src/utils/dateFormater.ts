const currentDay = (time: Date): string => {

    const day: number = time.getDate()
    let weekDay: string = 'Saturday'

    switch (time.getDay()) {
        case 1:
            weekDay = 'Monday'
            break;
        case 2:
            weekDay = 'Tuesday'
            break;
        case 3:
            weekDay = 'Wednesday'
            break;
        case 4:
            weekDay = 'Thursday'
            break;
        case 5:
            weekDay = 'Friday'
            break;
        case 6:
            weekDay = 'Saturday'
            break;
        case 0:
            weekDay = 'Sunday'
            break;
    }

    return (`${weekDay} ${day}`)
}

const time = (dateObject: Date): string => {

    dateObject = new Date(dateObject)

    let hour: number | string = dateObject.getHours()
    let minutes: number | string = dateObject.getMinutes()

    if (hour < 10) hour = '0' + hour
    if (minutes < 10) minutes = '0' + minutes

    return (`${hour}:${minutes}`)

}

export { currentDay, time }