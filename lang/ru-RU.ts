import { LocaleMessageObject } from "vue-i18n/types";
import CabinetData from "./Ru_ru/Cabinet";
import PersonalData from "./Ru_ru/Personal";
import SurveyData from "./Ru_ru/Survey";
import PatientData from "./Ru_ru/Patient";
import BulletinData from "./Ru_ru/Bulletin";
import RecordData from "./Ru_ru/Records";
import StatisticData from "./Ru_ru/Statistic";
import ToleranceData from "./Ru_ru/Tolerance";
import SetupData from "./Ru_ru/Setup";
import Nav from "./Ru_ru/Nav";

let messages: LocaleMessageObject = {
// Pages
    CabinetData,
    PersonalData,
    SurveyData,
    PatientData,
    BulletinData,
    RecordData,
    StatisticData,
    ToleranceData,
    SetupData,
    Nav,

// Table
    Default: 'По умолчанию',
    By_name_cabinet: 'По названию кабинета',
    By_phone_number: 'По номеру телефона',
    By_number_cabinet: 'По номеру кабинета',
    By_number_card: 'По номеру мед.карты',
    By_number_record: 'По номеру записи',
    By_birthday: 'По Дате рождения',
    By_floor: 'По этажам',
    By_status: 'По статусу',
    By_NSF: 'По Ф.И.О',
    By_job: 'По должности',
    By_admission: 'По допуску',
    By_blanks: 'По бланкам',
    By_survey_diagnostic: 'По названию приема, об...',
    By_name_turkmen: 'По названию на туркменском',
    By_name_russian: 'По названию на русском',
    By_requirments: 'По требованиям',
    By_personal: 'По персоналу',
    By_date: 'По дате',
    By_employees: 'По количеству сотрудников',

// Footer
    All: 'Все',
    Rows_page:'Строк в странице',

// Header
    Cabinet: 'Кабинет',
    Personal: 'Сотрудник',
    Survey: 'Обследования',

// Name of organization
    International: 'Международный',
    Hospital: 'центр травматологии',
    Administrator: 'Главный администратор',
    home: "Главная страница",
    Cancel_changes: "Вы хотите отменить внесенные изменения?",

// Btns
    Out: 'Выйти',
    Back: 'Назад',
    Add: 'Добавить',
    Save: 'Сохранить',
    Cancel: 'Отменить',
    Yes: 'Да',
    No: 'Нет',
    Records: 'Записи',
    Complaints: 'Жалобы',
    Delete: 'Удалить',
    Active: 'Активный',
    Not_active: 'Не активный',
    Else_one: 'Есть еще один?',
    No_list: 'Нет в списке',
    Bulletin: 'Бюллетень',
    Statistic: 'Статистика',
    Turkmen: 'Туркменский',
    Russian: 'Русский',
    Show: 'Посмотреть',

// Global words
    Phone_number: 'Номер телефона',
    Choose: 'Выберите',
    No_data: 'Нет Данных',
    Notes: 'Примечания',
    Adress: 'Адрес',
    Region: 'Регион',
    City: 'Город',
    Area: 'Область',
    Street: 'Улица',
    Home: 'Дом',
    Flat: 'Квартира/Офис',
    Date: 'Дата',
    Patient: 'Больной',
    Patients: 'Пациенты',
    Cassa: 'Касса',
    Status: 'Статус',
    Time: 'Время',
    Sum: 'Сумма',
    Result: 'Результат',

// Input rules
    Not_empty: 'Нельзя оставить пустым',
    Symbols_11: 'Должен быть 11 цифр',
    Symbols_6: 'Должен быть минимум 6 элементов',
    Pass_not_conf: 'Пароли не совподают',

// Input Placeholders
    Surname: 'Фамилия',
    Name: 'Имя',
    Fath_name: 'Отчество'

}

export default messages
