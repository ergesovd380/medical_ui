export const  state = () => ({
  items: [
    {
      icon: 'mdi-folder-multiple-image',
      title: 'Медиафайлы',
      to: '/setup'
    },
    {
      icon: 'mdi-briefcase-outline',
      title: 'Должности',
      to: '/setup/job'
    },
    {
      icon: 'mdi-account-injury-outline',
      title: 'Группы пациентов',
      to: '/setup/patientGroup'
    },
    {
      icon: 'mdi-account-details-outline',
      title: 'ГражДанский статус',
      to: '/setup/cityzenStatus'
    },
    {
      icon: 'mdi-database-eye-outline',
      title: 'База Болезней',
      to: '/setup/diseaseBase'
    },
    {
      icon: 'mdi-hospital-building',
      title: 'Поликлиники',
      to: '/setup/polyclinics'
    },
    {
      icon: 'mdi-book-open-page-variant-outline',
      title: 'Инфо.страница',
      to: '/setup/info'
    }
  ],
})

export const getters = {
  items: (i: any) => i.items
}
