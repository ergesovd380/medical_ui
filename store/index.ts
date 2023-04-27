import { GetterTree } from "vuex";
export const state = () => ({
// Cabinet Page

  elementsCabinet: [
    {
      id: '1',
      nameofcabinet: 'Trawmatolog',
      phonenumber: 99364665251,
      numberofcabinet: 405,
      floor: 4,
      status: 'Активный',
    },
    {
      id: '2',
      nameofcabinet: 'Narkolog',
      phonenumber: 99364656869,
      numberofcabinet: 95,
      floor: 3,
      status: 'Не активный',
    },
    {
      id: '3',
      nameofcabinet: 'Rentgen',
      phonenumber: 99365646263,
      numberofcabinet: 16,
      floor: 2,
      status: 'Активный',
    },
    {
      id: '4',
      nameofcabinet: 'Newropotolog',
      phonenumber: 99365686867,
      numberofcabinet: 304,
      floor: 6,
      status: 'Активный',
    },
    {
      id: '5',
      nameofcabinet: 'Glaz',
      phonenumber: 99363656164,
      numberofcabinet: 109,
      floor: 4,
      status: 'Активный',
    },
    {
      id: '6',
      nameofcabinet: 'Winerolog',
      phonenumber: 99365676768,
      numberofcabinet: 431,
      floor: 9,
      status: 'Активный',
    },
    {
      id: '7',
      nameofcabinet: 'Lollipop',
      phonenumber: 99364616164,
      numberofcabinet: 134,
      floor: 5,
      status: 'Активный',
    },
    {
      id: '8',
      nameofcabinet: 'Honeycomb',
      phonenumber: 99364878584,
      numberofcabinet: 215,
      floor: 5,
      status: 'Активный',
    },
    {
      id: '9',
      nameofcabinet: 'Donut',
      phonenumber: 99361525484,
      numberofcabinet: 254,
      floor: 5,
      status: 'Активный',
    },
    {
      id: '10',
      nameofcabinet: 'KitKat',
      phonenumber: 99362842513,
      numberofcabinet: 26,
      floor: 1,
      status: 'Активный',
    },
    {
      id: '11',
      nameofcabinet: 'Mars',
      phonenumber: 99362547482,
      numberofcabinet: 26,
      floor: 1,
      status: 'Активный',
    },
    {
      id: '12',
      nameofcabinet: 'Hospital',
      phonenumber: 99361528554,
      numberofcabinet: 123,
      floor: 2,
      status: 'Активный',
    },
    {
      id: '13',
      nameofcabinet: 'Windscribe',
      phonenumber: 99364851420,
      numberofcabinet: 248,
      floor: 3,
      status: 'Активный',
    },
    {
      id: '14',
      nameofcabinet: 'Open',
      phonenumber: 99365897651,
      numberofcabinet: 266,
      floor: 6,
      status: 'Активный',
    },
    {
      id: '15',
      nameofcabinet: 'Iphone',
      phonenumber: 99362521037,
      numberofcabinet: 280,
      floor: 6,
      status: 'Активный',
    },
  ],
// Personal Page
  elementsPersonal: [
    {
      id: '1',
      nameofcabinet: 'Trawmatolog',
      phonenumber: 99364665251,
      tolerance: 'Активный',
      namesurname: 'Traw Trawow',
      job: 'Должность',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
    },
    {
      id: '2',
      nameofcabinet: 'Narkolog',
      phonenumber: 99364656869,
      tolerance: 'Не активный',
      namesurname: 'Nark Narkow',
      job: 'Должность',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
    },
    {
      id: '3',
      nameofcabinet: 'Rentgen',
      phonenumber: 99365646263,
      tolerance: 'Активный',
      namesurname: 'Rent Rentow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '4',
      nameofcabinet: 'Newropotolog',
      phonenumber: 99365686867,
      tolerance: 'Активный',
      namesurname: 'Nerw Nerwow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '5',
      nameofcabinet: 'Glaz',
      phonenumber: 99363656164,
      tolerance: 'Активный',
      namesurname: 'Glaz Glazow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '6',
      nameofcabinet: 'Winerolog',
      phonenumber: 99365676768,
      tolerance: 'Активный',
      namesurname: 'Wine Winerow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '7',
      nameofcabinet: 'Lollipop',
      phonenumber: 99364616164,
      tolerance: 'Активный',
      namesurname: 'loll Lollow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '8',
      nameofcabinet: 'Honeycomb',
      phonenumber: 99364878584,
      tolerance: 'Активный',
      namesurname: 'Traw Trawow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '9',
      nameofcabinet: 'Donut',
      phonenumber: 99361525484,
      tolerance: 'Активный',
      namesurname: 'Donut Donutow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '10',
      nameofcabinet: 'KitKat',
      phonenumber: 99362842513,
      tolerance: 'Активный',
      namesurname: 'Kitkat Kitkatow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '11',
      nameofcabinet: 'Mars',
      phonenumber: 99362547482,
      tolerance: 'Активный',
      namesurname: 'Mars Marsow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '12',
      nameofcabinet: 'Hospital',
      phonenumber: 99361528554,
      tolerance: 'Активный',
      namesurname: 'Hosp Hospow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '13',
      nameofcabinet: 'Windscribe',
      phonenumber: 99364851420,
      tolerance: 'Активный',
      namesurname: 'Neal Trawow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '14',
      nameofcabinet: 'Open',
      phonenumber: 99365897651,
      tolerance: 'Активный',
      namesurname: 'Open Openow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'Должность'
    },
    {
      id: '15',
      nameofcabinet: 'Iphone',
      phonenumber: 99362521037,
      tolerance: 'Активный',
      namesurname: 'Vpn Tapyanow',
      survey: ['Приём врача-терапевта', 'Приём офтальмолога', 'Приём кардиолога'],
      job: 'VPN'
    },
  ],
// Blank Page
  elementsBlank: [
    {
      id: '1',
      nameofcabinet: 'Trawmatolog',
      blank: 'Aýaklaryň wenalarynyň dupleks skan barlagynyň beýany'
    },
    {
      id: '2',
      nameofcabinet: 'Narkolog',
      blank: 'Aýaklaryň arteriýalarynyň dupleks skan barlagynyň beýany'
    },
    {
      id: '3',
      nameofcabinet: 'Rentgen',
      blank: 'Elleriň wenalarynyň dupleks skan barlagynyň beýany'
    },
    {
      id: '4',
      nameofcabinet: 'Newropotolog',
      blank: 'Elleriň arteriýalarynyň dupleks skan barlagynyň beýany'
    },
    {
      id: '5',
      nameofcabinet: 'Glaz',
      blank: 'Kelle beýni arteriýalarynyň transkranial dupleks skan barlagynyň beýany'
    },
    {
      id: '6',
      nameofcabinet: 'Winerolog',
      blank: 'Galkan şekilli mäziň ultrases barlagynyň beýany'
    },
    {
      id: '7',
      nameofcabinet: 'Lollipop',
      blank: 'Aýal jyns agzalarynyň ultrases barlagynyň beýany'
    },
    {
      id: '8',
      nameofcabinet: 'Honeycomb',
      blank: 'Ultrases barlagynyň beýany'
    },
    {
      id: '9',
      nameofcabinet: 'Donut',
      blank: 'Içki agzalaryň ultrases barlagynyň beýany'
    },
    {
      id: '10',
      nameofcabinet: 'KitKat',
      blank: 'Şöhle bilen anyklaýyş barlagynyň beýany'
    },
    {
      id: '11',
      nameofcabinet: 'Mars',
      blank: 'Magnit-rezonans tomografiýa barlagynyň beýany '
    },
    {
      id: '12',
      nameofcabinet: 'Hospital',
      blank: 'Ehokardiografiýa barlagynyň beýany'
    },
    {
      id: '13',
      nameofcabinet: 'Windscribe',
      blank: 'Ganyň topary we rezus-faktor barlagynyň netijesi'
    },
    {
      id: '14',
      nameofcabinet: 'Open',
      blank: 'Ganyň lagtalanmak ulgamynyň görkezijileri'
    },
    {
      id: '15',
      nameofcabinet: 'Iphone',
      blank: 'Ganyň glýukozasynyň barlagynyň netijesi №'
    },
  ],
// Survey Page
  elementsSurvey: [
    {
      id: '1',
      nameofcabinet: 'Trawmatolog',
      pod: 'Приём врача-терапевта',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '2',
      nameofcabinet: 'Narkolog',
      pod: 'Приём офтальмолога',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '3',
      nameofcabinet: 'Rentgen',
      pod: 'Приём кардиолога',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '4',
      nameofcabinet: 'Newropotolog',
      pod: 'УЗИ внутренних органов',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '5',
      nameofcabinet: 'Glaz',
      pod: 'УЗИ сердца и сосудов',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '6',
      nameofcabinet: 'Winerolog',
      pod: 'ЭКГ',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '7',
      nameofcabinet: 'Lollipop',
      pod: 'ЭКГ с нагрузочными тестами',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '8',
      nameofcabinet: 'Honeycomb',
      pod: 'Суточное мониторирование ЭКГ и артериального ...',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '9',
      nameofcabinet: 'Donut',
      pod: 'магнитно-резонансная томография (МРТ)',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '10',
      nameofcabinet: 'KitKat',
      pod: 'компьютерная томография (КТ)',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '11',
      nameofcabinet: 'Mars',
      pod: 'озитронно-эмиссионная томография (ПЭТ)',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '12',
      nameofcabinet: 'Hospital',
      pod: 'ангиография',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '13',
      nameofcabinet: 'Windscribe',
      pod: 'Анализ крови',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    },
    {
      id: '14',
      nameofcabinet: 'Open',
      pod: 'Rentgen',
      withoutinsurance: 'Сумма',
      withinsurance: 'Сумма',
      foreigner: 'Сумма',
      diplomat: 'Сумма',
    }
  ],
// Patient Page
  elementsPatient: [
    {
      id: '1',
      numberofcard: 'MK000000',
      namesurnameofpatient: 'Kesel Ölýänow',
      birthday: '2022-10-15',
      phonenumberpatient: '99364656867',
      statuspatient: 'VIP'
    },
    {
      id: '2',
      numberofcard: 'MK000001',
      namesurnameofpatient: 'Baran Baranow',
      birthday: '2020-10-15',
      phonenumberpatient: '99364655867',
      statuspatient: '-'
    },
    {
      id: '3',
      numberofcard: 'MK000003',
      namesurnameofpatient: 'Bitrix 1C',
      birthday: '2012-06-09',
      phonenumberpatient: '99364666867',
      statuspatient: 'VIP'
    },
    {
      id: '4',
      numberofcard: 'MK000004',
      namesurnameofpatient: 'Netije MinSport',
      birthday: '2015-12-30',
      phonenumberpatient: '99364656527',
      statuspatient: '-'
    },
    {
      id: '5',
      numberofcard: 'MK000005',
      namesurnameofpatient: 'Kasym Tokayew',
      birthday: '2022-09-22',
      phonenumberpatient: '99364659667',
      statuspatient: 'VIP'
    },
    {
      id: '6',
      numberofcard: 'MK000006',
      namesurnameofpatient: 'Turkmen Tranzitow',
      birthday: '2015-03-02',
      phonenumberpatient: '99364612367',
      statuspatient: 'VIP'
    },
    {
      id: '7',
      numberofcard: 'MK000007',
      namesurnameofpatient: 'Tigir Suryanow',
      birthday: '2011-10-15',
      phonenumberpatient: '99364656867',
      statuspatient: '-'
    },
    {
      id: '8',
      numberofcard: 'MK000008',
      namesurnameofpatient: 'Masyn Munyanow',
      birthday: '2011-12-13',
      phonenumberpatient: '99364656867',
      statuspatient: '-'
    },
    {
      id: '9',
      numberofcard: 'MK000009',
      namesurnameofpatient: 'Yolda Duraynow',
      birthday: '2022-09-30',
      phonenumberpatient: '99364654967',
      statuspatient: '-'
    },
    {
      id: '10',
      numberofcard: 'MK000010',
      namesurnameofpatient: 'Mercedes Benz',
      birthday: '2003-06-23',
      phonenumberpatient: '99364656867',
      statuspatient: '-'
    },
    {
      id: '11',
      numberofcard: 'MK000011',
      namesurnameofpatient: 'Pro Max',
      birthday: '1976-02-13',
      phonenumberpatient: '99364656867',
      statuspatient: '-'
    },
    {
      id: '12',
      numberofcard: 'MK000012',
      namesurnameofpatient: 'BMW M5',
      birthday: '2022-03-06',
      phonenumberpatient: '99364656867',
      statuspatient: 'VIP'
    },
    {
      id: '13',
      numberofcard: 'MK000013',
      namesurnameofpatient: 'Toyota Avalon',
      birthday: '2015-01-28',
      phonenumberpatient: '99364656767',
      statuspatient: '-'
    },
    {
      id: '14',
      numberofcard: 'MK000014',
      namesurnameofpatient: 'HP Gyzyar',
      birthday: '2022-04-29',
      phonenumberpatient: '99364666867',
      statuspatient: 'VIP'
    },
    {
      id: '15',
      numberofcard: 'MK000015',
      namesurnameofpatient: 'Traktor Yoreyar',
      birthday: '2005-10-21',
      phonenumberpatient: '99364656967',
      statuspatient: '-'
    },
  ],
//Records Page
  elementsRecords: [
    {
      id: '1',
      numberofrecord: '000000',
      numberofcard: 'MK000000',
      namesurnameofpatient: 'Kesel Ölýänow',
      statuspatient: 'VIP'
    },
    {
      id: '2',
      numberofrecord: '000001',
      numberofcard: 'MK000001',
      namesurnameofpatient: 'Baran Baranow',
      statuspatient: '-'
    },
    {
      id: '3',
      numberofrecord: '000003',
      numberofcard: 'MK000003',
      namesurnameofpatient: 'Bitrix 1C',
      statuspatient: 'VIP'
    },
    {
      id: '4',
      numberofrecord: '000004',
      numberofcard: 'MK000004',
      namesurnameofpatient: 'Netije MinSport',
      statuspatient: '-'
    },
    {
      id: '5',
      numberofrecord: '000005',
      numberofcard: 'MK000005',
      namesurnameofpatient: 'Kasym Tokayew',
      statuspatient: 'VIP'
    },
    {
      id: '6',
      numberofrecord: '000006',
      numberofcard: 'MK000006',
      namesurnameofpatient: 'Turkmen Tranzitow',
      statuspatient: 'VIP'
    },
    {
      id: '7',
      numberofrecord: '000007',
      numberofcard: 'MK000007',
      namesurnameofpatient: 'Tigir Suryanow',
      statuspatient: '-'
    },
    {
      id: '8',
      numberofrecord: '000008',
      numberofcard: 'MK000008',
      namesurnameofpatient: 'Masyn Munyanow',
      statuspatient: '-'
    },
    {
      id: '9',
      numberofrecord: '000009',
      numberofcard: 'MK000009',
      namesurnameofpatient: 'Yolda Duraynow',
      statuspatient: '-'
    },
    {
      id: '10',
      numberofrecord: '000010',
      numberofcard: 'MK000010',
      namesurnameofpatient: 'Mercedes Benz',
      statuspatient: '-'
    },
    {
      id: '11',
      numberofrecord: '000011',
      numberofcard: 'MK000011',
      namesurnameofpatient: 'Pro Max',
      statuspatient: '-'
    },
    {
      id: '12',
      numberofrecord: '000012',
      numberofcard: 'MK000012',
      namesurnameofpatient: 'BMW M5',
      statuspatient: 'VIP'
    },
    {
      id: '13',
      numberofrecord: '000013',
      numberofcard: 'MK000013',
      namesurnameofpatient: 'Toyota Avalon',
      statuspatient: '-'
    },
    {
      id: '14',
      numberofrecord: '000014',
      numberofcard: 'MK000014',
      namesurnameofpatient: 'HP Gyzyar',
      statuspatient: 'VIP'
    },
    {
      id: '15',
      numberofrecord: '000015',
      numberofcard: 'MK000015',
      namesurnameofpatient: 'Traktor Yoreyar',
      statuspatient: '-'
    },
  ],
//Bulletin Page
  elementsBulletin: [
    {
      id: '1',
      nameturkmen: 'Информационный бюллетень 1',
      namerussian: 'Информационный бюллетень 1',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '2',
      nameturkmen: 'Информационный бюллетень 2',
      namerussian: 'Информационный бюллетень 2',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '3',
      nameturkmen: 'Информационный бюллетень 3',
      namerussian: 'Информационный бюллетень 3',
      requirements: '-',
      statusbulletin: 'Активный'
    },
    {
      id: '4',
      nameturkmen: 'Информационный бюллетень 4',
      namerussian: 'Информационный бюллетень 4',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '5',
      nameturkmen: 'Информационный бюллетень 5',
      namerussian: 'Информационный бюллетень 5',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '6',
      nameturkmen: 'Информационный бюллетень 6',
      namerussian: 'Информационный бюллетень 6',
      requirements: '-',
      statusbulletin: 'Активный'
    },
    {
      id: '7',
      nameturkmen: 'Информационный бюллетень 7',
      namerussian: 'Информационный бюллетень 7',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '8',
      nameturkmen: 'Информационный бюллетень 8',
      namerussian: 'Информационный бюллетень 8',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '9',
      nameturkmen: 'Информационный бюллетень 9',
      namerussian: 'Информационный бюллетень 9',
      requirements: '-',
      statusbulletin: 'Активный'
    },
    {
      id: '10',
      nameturkmen: 'Информационный бюллетень 10',
      namerussian: 'Информационный бюллетень 10',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '11',
      nameturkmen: 'Информационный бюллетень 11',
      namerussian: 'Информационный бюллетень 11',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '12',
      nameturkmen: 'Информационный бюллетень 12',
      namerussian: 'Информационный бюллетень 12',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '13',
      nameturkmen: 'Информационный бюллетень 13',
      namerussian: 'Информационный бюллетень 13',
      requirements: '-',
      statusbulletin: 'Активный'
    },
    {
      id: '14',
      nameturkmen: 'Информационный бюллетень 14',
      namerussian: 'Информационный бюллетень 14',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
    {
      id: '15',
      nameturkmen: 'Информационный бюллетень 15',
      namerussian: 'Информационный бюллетень 15',
      requirements: 'Галочка “Прочитал”',
      statusbulletin: 'Активный'
    },
  ],
  elementsBulletinRecord: [
    {
      id: '1',
      nameturkmen: 'Информационный бюллетень 1',
      namerussian: 'Информационный бюллетень 1',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '2',
      nameturkmen: 'Информационный бюллетень 2',
      namerussian: 'Информационный бюллетень 2',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '3',
      nameturkmen: 'Информационный бюллетень 3',
      namerussian: 'Информационный бюллетень 3',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '4',
      nameturkmen: 'Информационный бюллетень 4',
      namerussian: 'Информационный бюллетень 4',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },    
    {
      id: '5',
      nameturkmen: 'Информационный бюллетень 5',
      namerussian: 'Информационный бюллетень 5',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '6',
      nameturkmen: 'Информационный бюллетень 6',
      namerussian: 'Информационный бюллетень 6',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '7',
      nameturkmen: 'Информационный бюллетень 7',
      namerussian: 'Информационный бюллетень 7',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '8',
      nameturkmen: 'Информационный бюллетень 8',
      namerussian: 'Информационный бюллетень 8',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '9',
      nameturkmen: 'Информационный бюллетень 9',
      namerussian: 'Информационный бюллетень 9',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '10',
      nameturkmen: 'Информационный бюллетень 10',
      namerussian: 'Информационный бюллетень 10',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '11',
      nameturkmen: 'Информационный бюллетень 11',
      namerussian: 'Информационный бюллетень 11',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '12',
      nameturkmen: 'Информационный бюллетень 12',
      namerussian: 'Информационный бюллетень 12',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '13',
      nameturkmen: 'Информационный бюллетень 13',
      namerussian: 'Информационный бюллетень 13',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '14',
      nameturkmen: 'Информационный бюллетень 14',
      namerussian: 'Информационный бюллетень 14',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    },
    {
      id: '15',
      nameturkmen: 'Информационный бюллетень 15',
      namerussian: 'Информационный бюллетень 15',
      personal: 'Фамилия Имя Отчество',
      cabinet: 'Название кабинета',
      readed: 'дд/ммм/гггг',
    }
  ],
//Tolerance Group
  elementsTolerance: [
    {
      id: '1',
      nametolerance: 'Главный администратор',
      personalnumber: '1',
    },
    {
      id: '2',
      nametolerance: 'Доктор',
      personalnumber: '55',
    },
    {
      id: '3',
      nametolerance: 'Бухгалтер',
      personalnumber: '2',
    },
    {
      id: '4',
      nametolerance: 'Касса',
      personalnumber: '4',
    },
    {
      id: '5',
      nametolerance: 'Модератор',
      personalnumber: '1',
    },
  ]
})

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
// Cabinet Page
  elementsCabinet(state: any) {
    return state.elementsCabinet
  },
  elementByIDCabinet(state: any) {
    return (elementId: any) => {
      return state.elementsCabinet.find((element: any) => element.nameofcabinet === elementId)
    }
  },
// Personal Page
  elementsPersonal(state: any) {
    return state.elementsPersonal
  },
  elementByCabinetName(state: any, nameofcabinet: any) {
    let element = state.elementsPersonal
    nameofcabinet = 'nameofcabinet' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][nameofcabinet]);
    }
    return output
  },
  elementByNameSurname(state: any, namesurname: any) {
    let element = state.elementsPersonal
    namesurname = 'namesurname' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][namesurname]);
    }
    return output
  },
  elementByJob(state: any, job: any) {
    let element = state.elementsPersonal
    job = 'job' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][job]);
    }
    return output
  },
  elementByNamePersonal(state: any) {
    return (elementId: any) => {
      return state.elementsPersonal.find((element: any) => element.namesurname === elementId)
    }
  },
// Blank Page
  elementsBlank(state: any) {
    return state.elementsBlank
  },
  elementByBlank(state: any, blank: any) {
    let element = state.elementsBlank
    blank = 'blank' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][blank]);
    }
    return output
  },
// Survey Page
  elementsSurvey(state: any) {
    return state.elementsSurvey
  },
  elementByIDSurvey(state: any) {
    return (elementId: any) => {
      return state.elementsSurvey.find((element: any) => element.pod === elementId)
    }
  },
  elementBySurvey(state: any, pod: any) {
    let element = state.elementsSurvey
    pod = 'pod' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][pod]);
    }
    return output
  },
// Patient Page
  elementsPatient(state: any) {
    return state.elementsPatient
  },
  elementByNameSurnameOfPatient(state: any, namesurname: any) {
    let element = state.elementsPatient
    namesurname = 'namesurnameofpatient' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][namesurname]);
    }
    return output
  },
  elementByNumberOfCardPatient(state: any) {
    return (elementId: any) => {
      return state.elementsPatient.find((element: any) => element.numberofcard === elementId)
    }
  },
// Records Page
  elementsRecords(state: any) {
    return state.elementsRecords
  },
  elementByNumberOfCardRecord(state: any) {
    return (elementId: any) => {
      return state.elementsRecords.find((element: any) => element.numberofcard === elementId)
    }
  },
// Bulletin Page
  elementsBulletin(state: any) {
    return state.elementsBulletin
  },
  elementByNameOfBulletin(state: any) {
    return (elementId: any) => {
      return state.elementsBulletin.find((element: any) => element.nameturkmen === elementId)
    }
  },
  elementsBulletinRecord(state: any) {
    return (elementId: any) => {
      return state.elementsBulletinRecord.find((element: any) => element.nameturkmen === elementId)
    }
  },
// Tolerance Group
  elementsTolerance(state: any) {
    return state.elementsTolerance
  },
  elementByIDTolerance(state: any) {
    return (elementId: any) => {
      return state.elementsTolerance.find((element: any) => element.nametolerance === elementId)
    }
  },
  elementByNameTolerance (state: any, tolerance: any) {
    let element = state.elementsTolerance
    tolerance = 'nametolerance' 
    let output = []
    for(let i=0; i < element.length; ++i) {
      output.push(element[i][tolerance]);
    }
    return output
  }
}
