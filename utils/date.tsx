import { parseISO, format } from 'date-fns'

interface IDate {
    [p: string]: any,
    dateString: string,
}
export default function Date({ dateString }: IDate) {
    const date = parseISO(dateString);

    return (
        <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    )
}