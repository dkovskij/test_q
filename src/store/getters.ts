const getters = {
  filteredList: (state: any) => {
    let str: string = state.list.query.toLowerCase()
    let filtered = state.list.list.filter((el: any) => {
      if (str === '') {
        return true
      } else {
        let matched: boolean = false;
        // здесь ошибка так как под другую структуру ответа написано
        // нужно исправить, когда будет точная стрктура
        el.items.forEach((el: any) => {
          if (el.name.toLowerCase().indexOf(str) !== -1) {
            matched = true
          }
        })
        if (!matched) {
          matched = el.name.toLowerCase().indexOf(str) > -1
        }
        return matched
      }
    })

    let count = function(name: string) {
      let pos = -1;
      let count = 0
      while ((pos = name.toLowerCase().indexOf(str, pos + 1)) !== -1) {
        count++
      }
      return count
    }

    filtered.sort((a: any, b: any) => {
      let countA: number = 0
      let countB: number = 0
      if (str !== '') {
        countA = count(a.name)
        countB = count(b.name)
        a.items.forEach((el: any) => {
          countA += count(el.name)
        })
        b.items.forEach((el: any) => {
          countB += count(el.name)
        })
      }
      if (countA > countB) {
        return -1
      } else {
        return 1
      }
    })
    return filtered
  }
}
export default getters
