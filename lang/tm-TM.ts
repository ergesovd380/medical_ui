import { LocaleMessageObject } from "vue-i18n/types";
import CabinetData from "./TM_tm/Cabinet";
import PersonalData from "./TM_tm/Personal";
import SurveyData from "./TM_tm/Survey";
import PatientData from "./TM_tm/Patient";

let messages: LocaleMessageObject = {
// Pages
    CabinetData,
    PersonalData,
    SurveyData,
    PatientData,

// Table
    // Filter
    Default: 'Yzygiderlikde',
    By_name_cabinet: 'Kabinetleriň ady boýunça',
    By_phone_number: 'Telefon belgi boýunça',
    By_number_cabinet: 'Kabinet belgi boýunça',
    By_number_card: 'Kart belgisi boýunça',
    By_number_record: 'Ýazgysy boýunça',
    By_birthday: 'Doglan senesi boýunça',
    By_floor: 'Gatlar boýunça',
    By_status: 'Status boýunça',
    By_NSF: 'A.F.A boýunça',
    By_job: 'Wezipesi boýunça',
    By_admission: 'Rugsady boýunça',
    By_blanks: 'Blankalar boýunça',
    By_survey_diagnostic: 'Diagnostika we barlag boýunça',

    All: 'Ählisi',
    Rows_page:'Sahypada setir',

// Name of organization
    International: 'Halkara',
    Hospital: 'trawmatologiýa merkezi',
    Administrator: 'Esasy administrator',
    home: "Esasy sahypa",
    Cancel_changes: "Siz hakykatdanam ähli üýtgeşmeleri ýatyrmak isleýäňizmi?",

// Btns
    Out: 'Cykmak',
    Back: 'Yza',
    Add: 'Goşmak',
    Save: 'Ýatda saklamak',
    Cancel: 'Ýatyr',
    Yes: 'Hawa',
    No: 'Ýok',
    Records: 'Ýazgylar',
    Complaints: 'Şikaýatlar',
    Delete: 'Aýyrmak',
    Active: 'Işjeň',
    Not_active: 'Işjeň däl',
    Else_one: 'Ýene biri barmy?',
    No_list: 'Sanawda ýok',

// Global words
    Phone_number: 'Telefon belgisi',
    Choose: 'Saýlaň',
    No_data: 'Maglumat ýok',
    Notes: 'Bellik',
    Adress: 'Salgy',
    Region: 'Welaýat',
    City: 'Şäher',
    Area: 'Etrap',
    Street: 'Köçe',
    Home: 'Jaý',
    Flat: 'Öý/Ofis',
    Date: 'Sene',
    Patient: 'Hassa',
    Status: 'Status',

// Input rules
    Not_empty: 'Boş goýmak gadagan',
    Symbols_11: '11 belgi bolmaly',
    Symbols_6: 'Azyndan 6 belgi bolmaly',
    Pass_not_conf: 'Açar sozleri gabat gelenok',

// Input Placeholders
    Surname: 'Familiýa',
    Name: 'Ady',
    Fath_name: 'Atasynyň ady'
}

export default messages