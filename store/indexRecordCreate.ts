import { GetterTree } from "vuex";
export const state = () => ({
// Cabinet Page
  elementsRecordCreate: [
    {
      id: '1',
      nameofcabinet: 'Trawmatolog',
      personal: 'Фамилия Имя Отчество',
      date: 'Дата',
      time: 'Сумма',
      survey: 'Приём врача-невропатолога',
    },
    {
      id: '2',
      nameofcabinet: 'Narkolog',
      personal: 'Фамилия Имя Отчество',
      date: 'Дата',
      time: 'Время',
      survey: 'Приём врача-офтальмолога',
    },
    {
      id: '3',
      nameofcabinet: 'Rentgen',
      personal: 'Фамилия Имя Отчество',
      date: 'Дата',
      time: 'Время',
      survey: 'Приём врача-нейрохирурга',
    }
  ],
})
export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  elementsRecordCreate(state: any) {
    return state.elementsRecordCreate
  },

}
