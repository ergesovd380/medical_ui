export const  state = () => ({
  items: [
    {
      icon: 'mdi-alpha-k-box',
      title: 'Кабинеты',
      to: '/cabinet'
    },
    {
      icon: 'mdi-doctor',
      title: 'Сотрудники',
      to: '/personal'
    },
    {
      icon: 'mdi-note-text',
      title: 'Бланки',
      to: '/blank'
    },
    {
      icon: 'mdi-heart-flash',
      title: 'Обследования',
      to: '/survey'
    },
    // {
    //   icon: 'mdi-folder-open',
    //   title: 'Обзор Доктор',
    //   to: '/review'
    // },
    // {
    //   icon: 'mdi-calendar',
    //   title: 'Календарь доктор',
    //   to: '/calendar'
    // },
    // {
    //   icon: 'mdi-table-edit',
    //   title: 'Записи Доктор',
    //   to: '/recordsDoctor'
    // },
    {
      icon: 'mdi-card-account-details',
      title: 'Пациенты',
      to: '/patient'
    },
    {
      icon: 'mdi-bulletin-board',
      title: 'Бюллетень',
      to: '/bulletin'
    },
    {
      icon: 'mdi-table-edit',
      title: 'Записи',
      to: '/records'
    },
    {
      icon: 'mdi-chart-bar',
      title: 'Статистика',
      to: '/statistic'
    },
    {
      icon: 'mdi-shield-account',
      title: 'Группы допуска',
      to: '/tolerance'
    },
    {
      icon: 'mdi-wrench',
      title: 'Инфо.страница',
      to: '/setup'
    },
    {
      icon: 'mdi-information-outline',
      title: 'Инфо.страница',
      to: '/'
    },
        // {
    //   icon: 'mdi-web',
    //   title: 'Язык',
    //   to: '/'
    // }
  ],
})

export const getters = {
  items: (i: any) => i.items
}
