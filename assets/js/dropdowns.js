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
countriesList = [
{code: "AD", name: "andorra"},
{code: "AE", name: "united arab emirates"},
{code: "AF", name: "afghanistan"},
{code: "AG", name: "antigua and barbuda"},
{code: "AI", name: "anguilla"},
{code: "AL", name: "albania"},
{code: "AM", name: "armenia"},
{code: "AO", name: "angola"},
{code: "AQ", name: "antartica"},
{code: "AR", name: "argentina"},
{code: "AS", name: "american samoa"},
{code: "AT", name: "austria"},
{code: "AU", name: "australia"},
{code: "AW", name: "aruba"},
{code: "AX", name: "åland islands"},
{code: "AZ", name: "azerbaijan"},
{code: "BA", name: "bosnia and herzegovina"},
{code: "BB", name: "barbados"},
{code: "BD", name: "bangladesh"},
{code: "BE", name: "belgium"},
{code: "BF", name: "burkina faso"},
{code: "BG", name: "bulgaria"},
{code: "BH", name: "bahrain"},
{code: "BI", name: "burundi"},
{code: "BJ", name: "benin"},
{code: "BL", name: "saint barthélemy"},
{code: "BM", name: "bermuda"},
{code: "BN", name: "brunei darussalam"},
{code: "BO", name: "bolivia"},
{code: "BQ", name: "caribbean netherlands"},
{code: "BR", name: "brazil"},
{code: "BS", name: "bahamas"},
{code: "BT", name: "bhutan"},
{code: "BV", name: "bouvet island"},
{code: "BW", name: "botswana"},
{code: "BY", name: "belarus"},
{code: "BZ", name: "belize"},
{code: "CA", name: "canada"},
{code: "CC", name: "cocos (keeling) islands"},
{code: "CD", name: "democratic republic of the congo"},
{code: "CF", name: "central african republic"},
{code: "CG", name: "republic of the congo"},
{code: "CH", name: "switzerland"},
{code: "CI", name: "ivory coast"},
{code: "CK", name: "cook islands"},
{code: "CL", name: "chile"},
{code: "CM", name: "cameroon"},
{code: "CN", name: "china"},
{code: "CO", name: "colombia"},
{code: "CR", name: "costa rica"},
{code: "CU", name: "cuba"},
{code: "CV", name: "cape verde"},
{code: "CW", name: "curaçao"},
{code: "CX", name: "christmas island"},
{code: "CY", name: "cyprus"},
{code: "CZ", name: "czechia"},
{code: "DE", name: "germany"},
{code: "DJ", name: "djibouti"},
{code: "DK", name: "denmark"},
{code: "DM", name: "dominica"},
{code: "DO", name: "dominican republic"},
{code: "DZ", name: "algeria"},
{code: "EC", name: "ecuador"},
{code: "EE", name: "estonia"},
{code: "EG", name: "egypt"},
{code: "EH", name: "western sahara"},
{code: "ER", name: "eritrea"},
{code: "ES", name: "spain"},
{code: "ET", name: "ethiopia"},
{code: "FI", name: "finland"},
{code: "FJ", name: "fiji"},
{code: "FK", name: "falkland islands"},
{code: "FM", name: "micronesia"},
{code: "FO", name: "faroe islands"},
{code: "FR", name: "france"},
{code: "GA", name: "gabon"},
{code: "GB", name: "united kingdom"},
{code: "GD", name: "grenada"},
{code: "GE", name: "georgia"},
{code: "GF", name: "french guiana"},
{code: "GG", name: "guernsey"},
{code: "GH", name: "ghana"},
{code: "GI", name: "gibraltar"},
{code: "GL", name: "greenland"},
{code: "GM", name: "gambia"},
{code: "GN", name: "guinea"},
{code: "GP", name: "guadeloupe"},
{code: "GQ", name: "equatorial guinea"},
{code: "GR", name: "greece"},
{code: "GS", name: "south georgia and the south sandwich islands"},
{code: "GT", name: "guatemala"},
{code: "GU", name: "guam"},
{code: "GW", name: "guinea-bissau"},
{code: "GY", name: "guyana"},
{code: "HK", name: "hong kong"},
{code: "HM", name: "heard island and mcdonald islands"},
{code: "HN", name: "honduras"},
{code: "HR", name: "croatia"},
{code: "HT", name: "haiti"},
{code: "HU", name: "hungary"},
{code: "ID", name: "indonesia"},
{code: "IE", name: "ireland"},
{code: "IL", name: "israel"},
{code: "IM", name: "isle of man"},
{code: "IN", name: "india"},
{code: "IO", name: "british indian ocean territory"},
{code: "IQ", name: "iraq"},
{code: "IR", name: "iran"},
{code: "IS", name: "iceland"},
{code: "IT", name: "italy"},
{code: "JE", name: "jersey"},
{code: "JM", name: "jamaica"},
{code: "JO", name: "jordan"},
{code: "JP", name: "japan"},
{code: "KE", name: "kenya"},
{code: "KG", name: "kyrgyzstan"},
{code: "KH", name: "cambodia"},
{code: "KI", name: "kiribati"},
{code: "KM", name: "comoros"},
{code: "KN", name: "saint kitts and nevis"},
{code: "KP", name: "north korea"},
{code: "KR", name: "south korea"},
{code: "KW", name: "kuwait"},
{code: "KY", name: "cayman islands"},
{code: "KZ", name: "kazakhstan"},
{code: "LA", name: "laos"},
{code: "LB", name: "lebanon"},
{code: "LC", name: "saint lucia"},
{code: "LI", name: "liechtenstein"},
{code: "LK", name: "sri lanka"},
{code: "LR", name: "liberia"},
{code: "LS", name: "lesotho"},
{code: "LT", name: "lithuania"},
{code: "LU", name: "luxembourg"},
{code: "LV", name: "latvia"},
{code: "LY", name: "libya"},
{code: "MA", name: "morocco"},
{code: "MC", name: "monaco"},
{code: "MD", name: "moldova"},
{code: "ME", name: "montenegro"},
{code: "MF", name: "saint martin"},
{code: "MG", name: "madagascar"},
{code: "MH", name: "marshall islands"},
{code: "MK", name: "north macedonia"},
{code: "ML", name: "mali"},
{code: "MM", name: "myanmar"},
{code: "MN", name: "mongolia"},
{code: "MO", name: "macao"},
{code: "MP", name: "northern mariana islands"},
{code: "MQ", name: "martinique"},
{code: "MR", name: "mauritania"},
{code: "MS", name: "montserrat"},
{code: "MT", name: "malta"},
{code: "MU", name: "mauritius"},
{code: "MV", name: "maldives"},
{code: "MW", name: "malawi"},
{code: "MX", name: "mexico"},
{code: "MY", name: "malaysia"},
{code: "MZ", name: "mozambique"},
{code: "NA", name: "namibia"},
{code: "NC", name: "new caledonia"},
{code: "NE", name: "niger"},
{code: "NF", name: "norfolk island"},
{code: "NG", name: "nigeria"},
{code: "NI", name: "nicaragua"},
{code: "NL", name: "netherlands"},
{code: "NO", name: "norway"},
{code: "NP", name: "nepal"},
{code: "NR", name: "nauru"},
{code: "NU", name: "niue"},
{code: "NZ", name: "new zealand"},
{code: "OM", name: "oman"},
{code: "PA", name: "panama"},
{code: "PE", name: "peru"},
{code: "PF", name: "french polynesia"},
{code: "PG", name: "papua new guinea"},
{code: "PH", name: "philippines"},
{code: "PK", name: "pakistan"},
{code: "PL", name: "poland"},
{code: "PM", name: "saint pierre and miquelon"},
{code: "PN", name: "pitcairn islands"},
{code: "PR", name: "puerto rico"},
{code: "PS", name: "palestine"},
{code: "PT", name: "portugal"},
{code: "PW", name: "palau"},
{code: "PY", name: "paraguay"},
{code: "QA", name: "qatar"},
{code: "RE", name: "réunion"},
{code: "RO", name: "romania"},
{code: "RS", name: "serbia"},
{code: "RU", name: "russian federation"},
{code: "RW", name: "rwanda"},
{code: "SA", name: "saudi arabia"},
{code: "SB", name: "solomon islands"},
{code: "SC", name: "seychelles"},
{code: "SD", name: "sudan"},
{code: "SE", name: "sweden"},
{code: "SG", name: "singapore"},
{code: "SH", name: "saint helena"},
{code: "SI", name: "slovenia"},
{code: "SJ", name: "svalbard and jan mayen"},
{code: "SK", name: "slovakia"},
{code: "SL", name: "sierra leone"},
{code: "SM", name: "san marino"},
{code: "SN", name: "senegal"},
{code: "SO", name: "somalia"},
{code: "SR", name: "suriname"},
{code: "SS", name: "south sudan"},
{code: "ST", name: "sao tome and principe"},
{code: "SV", name: "el salvador"},
{code: "SX", name: "sint maarten"},
{code: "SY", name: "syrian arab republic"},
{code: "SZ", name: "eswatini"},
{code: "TC", name: "turks and caicos islands"},
{code: "TD", name: "chad"},
{code: "TF", name: "french southern territories"},
{code: "TG", name: "togo"},
{code: "TH", name: "thailand"},
{code: "TJ", name: "tajikistan"},
{code: "TK", name: "tokelau"},
{code: "TL", name: "timor-leste"},
{code: "TM", name: "turkmenistan"},
{code: "TN", name: "tunisia"},
{code: "TO", name: "tonga"},
{code: "TR", name: "turkey"},
{code: "TT", name: "trinidad and tobago"},
{code: "TV", name: "tuvalu"},
{code: "TW", name: "taiwan"},
{code: "TZ", name: "tanzania"},
{code: "UA", name: "ukraine"},
{code: "UG", name: "uganda"},
{code: "UM", name: "united states minor outlying islands"},
{code: "UN", name: "united nations"},
{code: "US", name: "united states"},
{code: "UY", name: "uruguay"},
{code: "UZ", name: "uzbekistan"},
{code: "VA", name: "vatican city"},
{code: "VC", name: "saint vincent and the grenadines"},
{code: "VE", name: "venezuela"},
{code: "VG", name: "british virgin islands"},
{code: "VI", name: "united states virgin islands"},
{code: "VN", name: "vietnam"},
{code: "VU", name: "vanuatu"},
{code: "WF", name: "wallis and futuna"},
{code: "WS", name: "samoa"},
{code: "XK", name: "kosovo"},
{code: "YE", name: "yemen"},
{code: "YT", name: "mayotte"},
{code: "ZA", name: "south africa"},
{code: "ZM", name: "zambia"},
{code: "ZW", name: "zimbabwe"}
]





