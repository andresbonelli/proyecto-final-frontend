export const colors = {
  red: "#F83758",
  softRed: "#FE735C",
  blue: "#3163E2",
  softBlue: "#4392F9",
  pink: "#FD6E86",
  softPink: "#FA7189",
  rose: "#FFCCD5",
  grey: "#A4A9B3",
  softGrey: "F7F7F7",
  background: "var(--background)",
  foreground: "var(--foreground)",
};

export const navLinks = [
  {
    label: "Inicio",
    link: "/",
  },
  {
    label: "Ropa",
    link: "/products/category/indumentaria",
  },
  {
    label: "Accesorios",
    link: "/products/category/accesorios",
  },
  {
    label: "Calzado",
    link: "/products/category/calzado",
  },
  {
    label: "Contacto",
    link: "/contact",
  },
];

export const adminNavLinks = [
  {
    label: "Resumen",
    link: "/dashboard/overview",
  },
  {
    label: "Productos",
    link: "/dashboard/products",
  },
  {
    label: "Usuarios",
    link: "/dashboard/users",
  },
];

export enum Categories {
  INDUMENTARIA = "indumentaria",
  ACCESORIOS = "accesorios",
  CALZADO = "calzado",
  PERFUMERIA = "perfumeria",
}

export enum Sizes {
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",
  XL = "xl",
  XXL = "xxl",
  XXXL = "3xl",
}

export const countryCodes = {
  AFGHANISTAN: ["AFG", "004"],
  ALBANIA: ["ALB", "008"],
  ALGERIA: ["DZA", "012"],
  ANDORRA: ["AND", "020"],
  ARGENTINA: ["ARG", "032"],
  ARMENIA: ["ARM", "051"],
  ARUBA: ["ABW", "533"],
  AUSTRALIA: ["AUS", "036"],
  AUSTRIA: ["AUT", "040"],
  AZERBAIJAN: ["AZE", "031"],
  BAHAMAS: ["BHS", "044"],
  BAHRAIN: ["BHR", "048"],
  BANGLADESH: ["BGD", "050"],
  BARBADOS: ["BRB", "052"],
  BELARUS: ["BLR", "112"],
  BELGIUM: ["BEL", "056"],
  BELIZE: ["BLZ", "084"],
  BOLIVIA: ["BOL", "068"],
  BOTSWANA: ["BWA", "072"],
  BRAZIL: ["BRA", "076"],
  BRUNEI: ["BRN", "096"],
  BULGARIA: ["BGR", "100"],
  BURKINA_FASO: ["BFA", "854"],
  BURUNDI: ["BDI", "108"],
  CAMBODIA: ["KHM", "116"],
  CAMEROON: ["CMR", "120"],
  CANADA: ["CAN", "124"],
  CAPE_VERDE: ["CPV", "132"],
  CAYMAN_ISLANDS: ["CYM", "136"],
  CENTRAL_AFRICAN_REPUBLIC: ["CAF", "140"],
  CHAD: ["TCD", "148"],
  CHILE: ["CHL", "152"],
  CHINA: ["CHN", "156"],
  COLOMBIA: ["COL", "170"],
  COSTA_RICA: ["CRI", "188"],
  CROATIA: ["HRV", "191"],
  CUBA: ["CUB", "192"],
  CYPRUS: ["CYP", "196"],
  CZECH_REPUBLIC: ["CZE", "203"],
  DENMARK: ["DNK", "208"],
  DOMINICAN_REPUBLIC: ["DOM", "214"],
  ECUADOR: ["ECU", "218"],
  EGYPT: ["EGY", "818"],
  EL_SALVADOR: ["SLV", "222"],
  EQUATORIAL_GUINEA: ["GNQ", "226"],
  ERITREA: ["ERI", "232"],
  ESTONIA: ["EST", "233"],
  FIJI: ["FJI", "242"],
  FINLAND: ["FIN", "246"],
  FRANCE: ["FRA", "250"],
  GEORGIA: ["GEO", "268"],
  GERMANY: ["DEU", "276"],
  GHANA: ["GHA", "288"],
  GREECE: ["GRC", "300"],
  GREENLAND: ["GRL", "304"],
  GUATEMALA: ["GTM", "320"],
  GUYANA: ["GUY", "328"],
  HAITI: ["HTI", "332"],
  HONDURAS: ["HND", "340"],
  HONG_KONG_CHINA: ["HKG", "344"],
  HUNGARY: ["HUN", "348"],
  ICELAND: ["ISL", "352"],
  INDIA: ["IND", "356"],
  INDONESIA: ["IDN", "360"],
  IRAN_ISLAMIC_REP: ["IRN", "364"],
  IRAQ: ["IRQ", "368"],
  IRELAND: ["IRL", "372"],
  ISRAEL: ["ISR", "376"],
  ITALY: ["ITA", "380"],
  JAMAICA: ["JAM", "388"],
  JAPAN: ["JPN", "392"],
  JORDAN: ["JOR", "400"],
  KAZAKHSTAN: ["KAZ", "398"],
  KENYA: ["KEN", "404"],
  KIRIBATI: ["KIR", "296"],
  KOREA_DEM_REP: ["PRK", "408"],
  KUWAIT: ["KWT", "414"],
  KYRGYZ_REPUBLIC: ["KGZ", "417"],
  LAO_PDR: ["LAO", "418"],
  LATVIA: ["LVA", "428"],
  LEBANON: ["LBN", "422"],
  LESOTHO: ["LSO", "426"],
  LIBERIA: ["LBR", "430"],
  LIBYA: ["LBY", "434"],
  LIECHTENSTEIN: ["LIE", "438"],
  LITHUANIA: ["LTU", "440"],
  LUXEMBOURG: ["LUX", "442"],
  MACAO: ["MAC", "446"],
  MACEDONIA_FYRO: ["MKD", "807"],
  MADAGASCAR: ["MDG", "450"],
  MALAWI: ["MWI", "454"],
  MALAYSIA: ["MYS", "458"],
  MALDIVES: ["MDV", "462"],
  MALI: ["MLI", "466"],
  MALTA: ["MLT", "470"],
  MAURITANIA: ["MRT", "478"],
  MAURITIUS: ["MUS", "480"],
  MEXICO: ["MEX", "484"],
  MOLDOVA: ["MDA", "498"],
  MONACO: ["MCO", "492"],
  MONGOLIA: ["MNG", "496"],
  MOROCCO: ["MAR", "504"],
  MOZAMBIQUE: ["MOZ", "508"],
  MYANMAR: ["MMR", "104"],
  NAMIBIA: ["NAM", "516"],
  NEPAL: ["NPL", "524"],
  NETHERLANDS: ["NLD", "528"],
  NEW_ZEALAND: ["NZL", "554"],
  NICARAGUA: ["NIC", "558"],
  NIGER: ["NER", "562"],
  NIGERIA: ["NGA", "566"],
  NORWAY: ["NOR", "578"],
  OMAN: ["OMN", "512"],
  PAKISTAN: ["PAK", "586"],
  PALAU: ["PLW", "585"],
  PANAMA: ["PAN", "591"],
  PAPUA_NEW_GUINEA: ["PNG", "598"],
  PARAGUAY: ["PRY", "600"],
  PERU: ["PER", "604"],
  PHILIPPINES: ["PHL", "608"],
  POLAND: ["POL", "616"],
  PORTUGAL: ["PRT", "620"],
  PUERTO_RICO: ["PRI", "630"],
  QATAR: ["QAT", "634"],
  ROMANIA: ["ROU", "642"],
  RUSSIAN_FEDERATION: ["RUS", "643"],
  RWANDA: ["RWA", "646"],
  SAINT_KITTS_AND_NEVIS: ["KNA", "659"],
  SAINT_LUCIA: ["LCA", "670"],
  SAMOA: ["WSM", "882"],
  SAN_MARINO: ["SMR", "674"],
  SAO_TOME_AND_PRINCIPYE: ["STP", "678"],
  SAUDI_ARABIA: ["SAU", "682"],
  SENEGAL: ["SEN", "686"],
  SERBIA: ["SRB", "688"],
  SEYCHELLES: ["SYC", "690"],
  SIERRA_LEONE: ["SLE", "694"],
  SINGAPORE: ["SGP", "702"],
  SLOVENIA: ["SVN", "705"],
  SOMALIA: ["SOM", "706"],
  SOUTH_AFRICA: ["ZAF", "710"],
  SOUTH_KOREA: ["KOR", "410"],
  SOUTH_SUDAN: ["SSD", "728"],
  SPAIN: ["ESP", "724"],
  SRI_LANKA: ["LKA", "144"],
  SUDAN: ["SDN", "736"],
  SURINAME: ["SUR", "740"],
  SWEDEN: ["SWE", "752"],
  SWITZERLAND: ["CHE", "756"],
  SYRIA: ["SYR", "760"],
  TAIWAN: ["TWN", "158"],
  TAJIKISTAN: ["TJK", "762"],
  TANZANIA_UNITED_REPUBLIC: ["TZA", "834"],
  THAILAND: ["THA", "764"],
  TOGO: ["TGO", "768"],
  TOKELAU: ["TKL", "772"],
  TONGA: ["TON", "776"],
  TRINIDAD_AND_TOBAGO: ["TTO", "780"],
  TUNISIA: ["TUN", "788"],
  TURKEY: ["TUR", "796"],
  TURKMENISTAN: ["TKM", "795"],
  TUVALU: ["TUV", "798"],
  UGANDA: ["UGA", "800"],
  UKRAINE: ["UKR", "804"],
  UNITED_ARAB_EMIRATES: ["ARE", "784"],
  UNITED_KINGDOM: ["GBR", "826"],
  UNITED_STATES: ["USA", "840"],
  URUGUAY: ["URY", "858"],
  UZBEKISTAN: ["UZB", "860"],
  VANUATU: ["VUT", "548"],
  VATICAN_CITY_STATE: ["VAT", "336"],
  VENEZUELA: ["VEN", "862"],
  VIETNAM: ["VNM", "704"],
  YEMEN: ["YEM", "887"],
  ZAMBIA: ["ZMB", "894"],
  ZIMBABWE: ["ZWE", "716"],
};
