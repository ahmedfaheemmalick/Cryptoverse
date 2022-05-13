const FormatDate = (date) => {
    let month = "" + (date.getMonth() + 1)
    let day = "" + date.getDate()
    let year = date.getFullYear()

    return [day, month, year].join("/")
}

export default FormatDate;