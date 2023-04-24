import { LocaleMessageObject } from "vue-i18n/types";
import CabinetData from "./TM_tm/Cabinet";
import PersonalData from "./TM_tm/Personal";

let messages: LocaleMessageObject = {
// Pages
    CabinetData,
    PersonalData,

// Table
    // Filter
    Default: 'Yzygiderlikde',
    By_name_cabinet: 'Kabinetleriň ady boýunça',
    By_phone_number: 'Telefon belgi boýunça',
    By_number_cabinet: 'Kabinet belgi boýunça',
    By_floor: 'Gatlar boýunça',
    By_status: 'Status boýunça',
    By_NSF: 'A.F.A boýunça',
    By_job: 'Wezipesi boýunça',
    By_admission: 'Rugsady boýunça',
    By_blanks: 'Blankalar boýunça',

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
    Records: 'Bellikler',
    Complaints: 'Şikaýatlar',
    Delete: 'Aýyrmak',
    Active: 'Işjeň',
    Not_active: 'Işjeň däl',

// Global words
    Phone_number: 'Telefon belgisi',
    Choose: 'Saýlaň',
    No_data: 'Maglumat ýok',

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
