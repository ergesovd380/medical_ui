import { LocaleMessageObject } from "vue-i18n/types";
import CabinetData from "./Ru_ru/Cabinet";
import PersonalData from "./Ru_ru/Personal";
import SurveyData from "./Ru_ru/Survey";

let messages: LocaleMessageObject = {
// Pages
    CabinetData,
    PersonalData,
    SurveyData,

// Table
    Default: 'По умолчанию',
    By_name_cabinet: 'По названию кабинета',
    By_phone_number: 'По номеру телефона',
    By_number_cabinet: 'По номеру кабинета',
    By_floor: 'По этажам',
    By_status: 'По статусу',
    By_NSF: 'По Ф.И.О',
    By_job: 'По должности',
    By_admission: 'По допуску',
    By_blanks: 'По бланкам',
    By_survey_diagnostic: 'По названию приема, об...',

    All: 'Все',
    Rows_page:'Строк в странице',

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

// Global words
    Phone_number: 'Номер телефона',
    Choose: 'Выберите',
    No_data: 'Нет Данных',

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