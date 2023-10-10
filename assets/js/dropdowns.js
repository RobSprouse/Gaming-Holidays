const platforms = [
     { text: "PC", value: "4" },
     { text: "PlayStation 5", value: "187" },
     { text: "Xbox One", value: "1" },
     { text: "PlayStation 4", value: "18" },
     { text: "Xbox Series S/X", value: "186" },
     { text: "Nintendo Switch", value: "7" },
     { text: "iOS", value: "3" },
     { text: "Android", value: "21" },
     { text: "Nintendo 3DS", value: "8" },
     { text: "Nintendo DS", value: "9" },
     { text: "Nintendo DSi", value: "13" },
     { text: "macOS", value: "5" },
     { text: "Linux", value: "6" },
     { text: "Xbox 360", value: "14" },
     { text: "Xbox", value: "80" },
     { text: "PlayStation 3", value: "16" },
     { text: "PlayStation 2", value: "15" },
     { text: "PlayStation", value: "27" },
     { text: "PS Vita", value: "19" },
     { text: "PSP", value: "17" },
     { text: "Wii U", value: "10" },
     { text: "Wii", value: "11" },
     { text: "GameCube", value: "105" },
     { text: "Nintendo 64", value: "83" },
     { text: "Game Boy Advance", value: "24" },
     { text: "Game Boy Color", value: "43" },
     { text: "Game Boy", value: "26" },
     { text: "SNES", value: "79" },
     { text: "NES", value: "49" },
     { text: "Classic Macintosh", value: "55" },
     { text: "Apple II", value: "41" },
     { text: "Commodore / Amiga", value: "166" },
     { text: "Atari 7800", value: "28" },
     { text: "Atari 5200", value: "31" },
     { text: "Atari 2600", value: "23" },
     { text: "Atari Flashback", value: "22" },
     { text: "Atari 8-bit", value: "25" },
     { text: "Atari ST", value: "34" },
     { text: "Atari Lynx", value: "46" },
     { text: "Atari XEGS", value: "50" },
     { text: "Genesis", value: "167" },
     { text: "SEGA Saturn", value: "107" },
     { text: "SEGA CD", value: "119" },
     { text: "SEGA 32X", value: "117" },
     { text: "SEGA Master System", value: "74" },
     { text: "Dreamcast", value: "106" },
     { text: "3DO", value: "111" },
     { text: "Jaguar", value: "112" },
     { text: "Game Gear", value: "77" },
     { text: "Neo Geo", value: "12" },
], 
genres = [
     { text: "Action", value: 4 },
     { text: "Indie", value: 51 },
     { text: "Adventure", value: 3 },
     { text: "RPG", value: 5 },
     { text: "Strategy", value: 10 },
     { text: "Shooter", value: 2 },
     { text: "Casual", value: 40 },
     { text: "Simulation", value: 14 },
     { text: "Puzzle", value: 7 },
     { text: "Arcade", value: 11 },
     { text: "Platformer", value: 83 },
     { text: "Massively Multiplayer", value: 59 },
     { text: "Racing", value: 1 },
     { text: "Sports", value: 15 },
     { text: "Fighting", value: 6 },
     { text: "Family", value: 19 },
     { text: "Board Games", value: 28 },
     { text: "Educational", value: 34 },
     { text: "Card", value: 17 },
];

const genres =
[
    {
        "text": "Action",
        "value": 4
    },
    {
        "text": "Indie",
        "value": 51
    },
    {
        "text": "Adventure",
        "value": 3
    },
    {
        "text": "RPG",
        "value": 5
    },
    {
        "text": "Strategy",
        "value": 10
    },
    {
        "text": "Shooter",
        "value": 2
    },
    {
        "text": "Casual",
        "value": 40
    },
    {
        "text": "Simulation",
        "value": 14
    },
    {
        "text": "Puzzle",
        "value": 7
    },
    {
        "text": "Arcade",
        "value": 11
    },
    {
        "text": "Platformer",
        "value": 83
    },
    {
        "text": "Massively Multiplayer",
        "value": 59
    },
    {
        "text": "Racing",
        "value": 1
    },
    {
        "text": "Sports",
        "value": 15
    },
    {
        "text": "Fighting",
        "value": 6
    },
    {
        "text": "Family",
        "value": 19
    },
    {
        "text": "Board Games",
        "value": 28
    },
    {
        "text": "Educational",
        "value": 34
    },
    {
        "text": "Card",
        "value": 17
    }
]

// list of countries for the countries dropdown, retrieved from Holiday API
const countriesList =
[
{code: "AD", name: "Andorra"},
{code: "AE", name: "United Arab Emirates"},
{code: "AF", name: "Afghanistan"},
{code: "AG", name: "Antigua and Barbuda"},
{code: "AI", name: "Anguilla"},
{code: "AL", name: "Albania"},
{code: "AM", name: "Armenia"},
{code: "AO", name: "Angola"},
{code: "AQ", name: "Antartica"},
{code: "AR", name: "Argentina"},
{code: "AS", name: "American Samoa"},
{code: "AT", name: "Austria"},
{code: "AU", name: "Australia"},
{code: "AW", name: "Aruba"},
{code: "AX", name: "Åland Islands"},
{code: "AZ", name: "Azerbaijan"},
{code: "BA", name: "Bosnia and Herzegovina"},
{code: "BB", name: "Barbados"},
{code: "BD", name: "Bangladesh"},
{code: "BE", name: "Belgium"},
{code: "BF", name: "Burkina Faso"},
{code: "BG", name: "Bulgaria"},
{code: "BH", name: "Bahrain"},
{code: "BI", name: "Burundi"},
{code: "BJ", name: "Benin"},
{code: "BL", name: "Saint Barthélemy"},
{code: "BM", name: "Bermuda"},
{code: "BN", name: "Brunei Darussalam"},
{code: "BO", name: "Bolivia"},
{code: "BQ", name: "Caribbean Netherlands"},
{code: "BR", name: "Brazil"},
{code: "BS", name: "Bahamas"},
{code: "BT", name: "Bhutan"},
{code: "BV", name: "Bouvet Island"},
{code: "BW", name: "Botswana"},
{code: "BY", name: "Belarus"},
{code: "BZ", name: "Belize"},
{code: "CA", name: "Canada"},
{code: "CC", name: "Cocos (Keeling) Islands"},
{code: "CD", name: "Democratic Republic of the Congo"},
{code: "CF", name: "Central African Republic"},
{code: "CG", name: "Republic of the Congo"},
{code: "CH", name: "Switzerland"},
{code: "CI", name: "Ivory Coast"},
{code: "CK", name: "Cook Islands"},
{code: "CL", name: "Chile"},
{code: "CM", name: "Cameroon"},
{code: "CN", name: "China"},
{code: "CO", name: "Colombia"},
{code: "CR", name: "Costa Rica"},
{code: "CU", name: "Cuba"},
{code: "CV", name: "Cape Verde"},
{code: "CW", name: "Curaçao"},
{code: "CX", name: "Christmas Island"},
{code: "CY", name: "Cyprus"},
{code: "CZ", name: "Czechia"},
{code: "DE", name: "Germany"},
{code: "DJ", name: "Djibouti"},
{code: "DK", name: "Denmark"},
{code: "DM", name: "Dominica"},
{code: "DO", name: "Dominican Republic"},
{code: "DZ", name: "Algeria"},
{code: "EC", name: "Ecuador"},
{code: "EE", name: "Estonia"},
{code: "EG", name: "Egypt"},
{code: "EH", name: "Western Sahara"},
{code: "ER", name: "Eritrea"},
{code: "ES", name: "Spain"},
{code: "ET", name: "Ethiopia"},
{code: "FI", name: "Finland"},
{code: "FJ", name: "Fiji"},
{code: "FK", name: "Falkland Islands"},
{code: "FM", name: "Micronesia"},
{code: "FO", name: "Faroe Islands"},
{code: "FR", name: "France"},
{code: "GA", name: "Gabon"},
{code: "GB", name: "United Kingdom"},
{code: "GD", name: "Grenada"},
{code: "GE", name: "Georgia"},
{code: "GF", name: "French Guiana"},
{code: "GG", name: "Guernsey"},
{code: "GH", name: "Ghana"},
{code: "GI", name: "Gibraltar"},
{code: "GL", name: "Greenland"},
{code: "GM", name: "Gambia"},
{code: "GN", name: "Guinea"},
{code: "GP", name: "Guadeloupe"},
{code: "GQ", name: "Equatorial Guinea"},
{code: "GR", name: "Greece"},
{code: "GS", name: "South Georgia and the South Sandwich Islands"},
{code: "GT", name: "Guatemala"},
{code: "GU", name: "Guam"},
{code: "GW", name: "Guinea-Bissau"},
{code: "GY", name: "Guyana"},
{code: "HK", name: "Hong Kong"},
{code: "HM", name: "Heard Island and McDonald Islands"},
{code: "HN", name: "Honduras"},
{code: "HR", name: "Croatia"},
{code: "HT", name: "Haiti"},
{code: "HU", name: "Hungary"},
{code: "ID", name: "Indonesia"},
{code: "IE", name: "Ireland"},
{code: "IL", name: "Israel"},
{code: "IM", name: "Isle of Man"},
{code: "IN", name: "India"},
{code: "IO", name: "British Indian Ocean Territory"},
{code: "IQ", name: "Iraq"},
{code: "IR", name: "Iran"},
{code: "IS", name: "Iceland"},
{code: "IT", name: "Italy"},
{code: "JE", name: "Jersey"},
{code: "JM", name: "Jamaica"},
{code: "JO", name: "Jordan"},
{code: "JP", name: "Japan"},
{code: "KE", name: "Kenya"},
{code: "KG", name: "Kyrgyzstan"},
{code: "KH", name: "Cambodia"},
{code: "KI", name: "Kiribati"},
{code: "KM", name: "Comoros"},
{code: "KN", name: "Saint Kitts and Nevis"},
{code: "KP", name: "North Korea"},
{code: "KR", name: "South Korea"},
{code: "KW", name: "Kuwait"},
{code: "KY", name: "Cayman Islands"},
{code: "KZ", name: "Kazakhstan"},
{code: "LA", name: "Laos"},
{code: "LB", name: "Lebanon"},
{code: "LC", name: "Saint Lucia"},
{code: "LI", name: "Liechtenstein"},
{code: "LK", name: "Sri Lanka"},
{code: "LR", name: "Liberia"},
{code: "LS", name: "Lesotho"},
{code: "LT", name: "Lithuania"},
{code: "LU", name: "Luxembourg"},
{code: "LV", name: "Latvia"},
{code: "LY", name: "Libya"},
{code: "MA", name: "Morocco"},
{code: "MC", name: "Monaco"},
{code: "MD", name: "Moldova"},
{code: "ME", name: "Montenegro"},
{code: "MF", name: "Saint Martin"},
{code: "MG", name: "Madagascar"},
{code: "MH", name: "Marshall Islands"},
{code: "MK", name: "North Macedonia"},
{code: "ML", name: "Mali"},
{code: "MM", name: "Myanmar"},
{code: "MN", name: "Mongolia"},
{code: "MO", name: "Macao"},
{code: "MP", name: "Northern Mariana Islands"},
{code: "MQ", name: "Martinique"},
{code: "MR", name: "Mauritania"},
{code: "MS", name: "Montserrat"},
{code: "MT", name: "Malta"},
{code: "MU", name: "Mauritius"},
{code: "MV", name: "Maldives"},
{code: "MW", name: "Malawi"},
{code: "MX", name: "Mexico"},
{code: "MY", name: "Malaysia"},
{code: "MZ", name: "Mozambique"},
{code: "NA", name: "Namibia"},
{code: "NC", name: "New Caledonia"},
{code: "NE", name: "Niger"},
{code: "NF", name: "Norfolk Island"},
{code: "NG", name: "Nigeria"},
{code: "NI", name: "Nicaragua"},
{code: "NL", name: "Netherlands"},
{code: "NO", name: "Norway"},
{code: "NP", name: "Nepal"},
{code: "NR", name: "Nauru"},
{code: "NU", name: "Niue"},
{code: "NZ", name: "New Zealand"},
{code: "OM", name: "Oman"},
{code: "PA", name: "Panama"},
{code: "PE", name: "Peru"},
{code: "PF", name: "French Polynesia"},
{code: "PG", name: "Papua New Guinea"},
{code: "PH", name: "Philippines"},
{code: "PK", name: "Pakistan"},
{code: "PL", name: "Poland"},
{code: "PM", name: "Saint Pierre and Miquelon"},
{code: "PN", name: "Pitcairn Islands"},
{code: "PR", name: "Puerto Rico"},
{code: "PS", name: "Palestine"},
{code: "PT", name: "Portugal"},
{code: "PW", name: "Palau"},
{code: "PY", name: "Paraguay"},
{code: "QA", name: "Qatar"},
{code: "RE", name: "Réunion"},
{code: "RO", name: "Romania"},
{code: "RS", name: "Serbia"},
{code: "RU", name: "Russian Federation"},
{code: "RW", name: "Rwanda"},
{code: "SA", name: "Saudi Arabia"},
{code: "SB", name: "Solomon Islands"},
{code: "SC", name: "Seychelles"},
{code: "SD", name: "Sudan"},
{code: "SE", name: "Sweden"},
{code: "SG", name: "Singapore"},
{code: "SH", name: "Saint Helena"},
{code: "SI", name: "Slovenia"},
{code: "SJ", name: "Svalbard and Jan Mayen"},
{code: "SK", name: "Slovakia"},
{code: "SL", name: "Sierra Leone"},
{code: "SM", name: "San Marino"},
{code: "SN", name: "Senegal"},
{code: "SO", name: "Somalia"},
{code: "SR", name: "Suriname"},
{code: "SS", name: "South Sudan"},
{code: "ST", name: "Sao Tome and Principe"},
{code: "SV", name: "El Salvador"},
{code: "SX", name: "Sint Maarten"},
{code: "SY", name: "Syrian Arab Republic"},
{code: "SZ", name: "Eswatini"},
{code: "TC", name: "Turks and Caicos Islands"},
{code: "TD", name: "Chad"},
{code: "TF", name: "French Southern Territories"},
{code: "TG", name: "Togo"},
{code: "TH", name: "Thailand"},
{code: "TJ", name: "Tajikistan"},
{code: "TK", name: "Tokelau"},
{code: "TL", name: "Timor-Leste"},
{code: "TM", name: "Turkmenistan"},
{code: "TN", name: "Tunisia"},
{code: "TO", name: "Tonga"},
{code: "TR", name: "Turkey"},
{code: "TT", name: "Trinidad and Tobago"},
{code: "TV", name: "Tuvalu"},
{code: "TW", name: "Taiwan"},
{code: "TZ", name: "Tanzania"},
{code: "UA", name: "Ukraine"},
{code: "UG", name: "Uganda"},
{code: "UM", name: "United States Minor Outlying Islands"},
{code: "UN", name: "United Nations"},
{code: "US", name: "United States"},
{code: "UY", name: "Uruguay"},
{code: "UZ", name: "Uzbekistan"},
{code: "VA", name: "Vatican City"},
{code: "VC", name: "Saint Vincent and the Grenadines"},
{code: "VE", name: "Venezuela"},
{code: "VG", name: "British Virgin Islands"},
{code: "VI", name: "United States Virgin Islands"},
{code: "VN", name: "Vietnam"},
{code: "VU", name: "Vanuatu"},
{code: "WF", name: "Wallis and Futuna"},
{code: "WS", name: "Samoa"},
{code: "XK", name: "Kosovo"},
{code: "YE", name: "Yemen"},
{code: "YT", name: "Mayotte"},
{code: "ZA", name: "South Africa"},
{code: "ZM", name: "Zambia"},
{code: "ZW", name: "Zimbabwe"}
]
