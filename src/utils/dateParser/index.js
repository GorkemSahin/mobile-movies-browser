export default (date) => {
  return new Intl.DateTimeFormat('en-GB').format(new Date(date))
}