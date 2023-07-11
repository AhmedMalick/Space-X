import monthNames from "../constant"

const formatDate = (date) => {
  const day = date.getDate()
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear().toString()

  return `${day} ${month} ${year}`
}

export default formatDate
