/* Was used to parse release dates of movies when I first thought I'd display
dates on cards, but later I replaced them with ratings. */

export default (date) => {
  return new Intl.DateTimeFormat('en-GB').format(new Date(date))
}