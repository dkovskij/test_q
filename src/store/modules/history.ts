import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ADD_EVENT, REMOVE_EVENT } from '@/store/actions'

interface IEvent {
  id: number,
  name: string,
  action: string,
  date: any
}

@Module({
  namespaced: true
})
export default class History extends VuexModule {
  history: object[] = []

  @Mutation
  addEvent(item: any) {
    const event: IEvent = {
      id: item.id,
      name: item.name,
      action: 'add',
      date: new Date()
    }
    this.history.push(event)
  }

  @Mutation
  removeEvent(item: any) {
    const event: IEvent = {
      id: item.id,
      name: item.name,
      action: 'remove',
      date: new Date()
    }
    this.history.push(event)
  }

  @Action({ commit: 'addEvent' })
  [ADD_EVENT](item: any) {
    return item
  }
  @Action({ commit: 'removeEvent' })
  [REMOVE_EVENT](item: any) {
    return item
  }
}
