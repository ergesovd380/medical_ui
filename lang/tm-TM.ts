import { LocaleMessageObject } from "vue-i18n/types";
import CabinetData from "./TM_tm/Cabinet";
import PersonalData from "./TM_tm/Personal";
import SurveyData from "./TM_tm/Survey";
import PatientData from "./TM_tm/Patient";
import BulletinData from "./TM_tm/Bulletin";
import RecordData from "./TM_tm/Records";
import StatisticData from "./TM_tm/Statistic";
import ToleranceData from "./TM_tm/Tolerance";
import SetupData from "./TM_tm/Setup";
import Nav from "./TM_tm/Nav";

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
    By_name_turkmen: 'Türkmençe ady boýunça',
    By_name_russian: 'Rusça ady boýunça',
    By_requirments: 'Talaplar boýunça',
    By_personal: 'Lukman boýunça',
    By_date: 'Sene boýunça',
    By_employees: 'Işgärleriň sany boýunça',

    // Footer
    All: 'Ählisi',
    Rows_page:'Sahypada setir',

    // Header
    Cabinet: 'Kabinet',
    Personal: 'Işgär',
    Survey: 'Barlag',

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
    Bulletin: 'Býulleten',
    Statistic: 'Statistika',
    Turkmen: 'Türkmençe',
    Russian: 'Rusça',
    Show: 'Görmek',

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
    Patients: 'Hassalar',
    Cassa: 'Kassa',
    Status: 'Status',
    Time: 'Wagt',
    Sum: 'Bahasy',
    Result: 'Netije',

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
