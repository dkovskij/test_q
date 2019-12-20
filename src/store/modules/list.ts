import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators'
import { getList } from "@/api/list"
import { SET_LIST, GET_LIST, SET_LOADING, MOVE_ITEM, MOVE_BACK, SAVE_ORIGINAL_LIST, SORT_LIST, SET_QUERY } from '@/store/actions'

@Module({
  namespaced: true
})
export default class List extends VuexModule {
  isLoading: boolean = true
  list: any = [
    {
      id: 25,
      name: 'aa aa aa cc',
      items: [
        {
          id: 45,
          name: 'bba aab'
        }
      ]
    },
    {
      id: 1,
      name: 'aa aa cc',
      items: [
        {
          id: 23,
          name: 'bb bb ba'
        }
      ]
    },
    {
      id: 5,
      name: 'ss sf ff',
      items: [
        {
          id: 55,
          name: 'vv vv vz'
        }
      ]
    },
    {
      id: 35,
      name: 'ss ss sf',
      items: [
        {
          id: 15,
          name: 'ff ff fs'
        }
      ]
    },
  ]
  originalList: object[] = []
  movedList: object[] = []
  query: string = ''

  @Mutation
  setLoading(loading: boolean) {
    this.isLoading = loading
  }
  @Mutation
  setList(list: object[]) {
    this.list = list
  }
  @Mutation
  moveItem(item: any) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === item.id) {
        let moved: object[] = this.list.splice(this.list.indexOf(this.list[i]), 1)
        this.movedList.push(moved[0])
      }
    }
  }
  @Mutation
  moveBack(index: number) {
    let moved: object[] = this.movedList.splice(index, 1)
    this.list.push(moved[0])
  }
  @Mutation
  sortList(str: string) {
    if (str) {
      let sorted: object[] = this.list.filter((el: any) => el.name.toLowerCase().includes(str.toLowerCase()))
      this.list = sorted
    }
  }
  @Mutation
  setQuery(query: string) {
    this.query = query
  }

  @Action
  async [GET_LIST]() {
    this.context.commit('setLoading', true)
    let payload = {
      token: "fORM-fAa0fo_wzbUz2eMmg",
      data: {
        id: 'numberInt|1,100',
        name: 'name',
        _repeat: 100
      }
  };
    const res = await getList(payload)
    this.context.commit('setList', res)
    this.context.commit('setLoading', false)
  }
  @Action({ commit: 'setLoading' })
  [SET_LOADING](loading: boolean) {
    return loading
  }
  @Action({ commit: 'setList' })
  [SET_LIST](list: object[]) {
    return list
  }
  @Action({ commit: 'moveItem' })
  [MOVE_ITEM](item: any) {
    return item
  }
  @Action({ commit: 'moveBack' })
  [MOVE_BACK](index: number) {
    return index
  }
  @Action({ commit: 'sortList' })
  [SORT_LIST](str: string) {
    return str
  }
  @Action({ commit: 'setQuery' })
  [SET_QUERY](query: string) {
    return query
  }
}
