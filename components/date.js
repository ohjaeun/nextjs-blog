import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    if (dateString) {
        const date = parseISO(dateString)
        return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    } else {
        return <time dateTime={dateString}>2021-01-15</time>
    }

}