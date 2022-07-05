const Onefilter = (data) => {
  const result = []
  data.forEach((element) => {
    if (element.children && element.children.length > 0) {
      result.push(element)
    }
  })
  return result
}

export const Twofilter = (data) => {
  const res = Onefilter(data)
  const result = []
  console.log(res)
  res.filter((item) => {
    return data.forEach((to) => {
      if (to.meta.title !== item.meta.title) {
        result.push(to)
      }
    })
  })
  console.log(result)
  // return result
}
