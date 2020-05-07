db = connect('localhost:27017/db');

var addresses = [
    {
        "houseNo": 470,
        "landmark": "Gates Avenue",
        "city": "Edmund",
        "state": "Puerto Rico",
        "pincode": 6757
    },
    {
        "houseNo": 511,
        "landmark": "Cedar Street",
        "city": "Whitestone",
        "state": "District Of Columbia",
        "pincode": 8611
    },
    {
        "houseNo": 949,
        "landmark": "Crescent Street",
        "city": "Islandia",
        "state": "New Mexico",
        "pincode": 7025
    },
    {
        "houseNo": 599,
        "landmark": "Rapelye Street",
        "city": "Nicut",
        "state": "Oregon",
        "pincode": 447
    },
    {
        "houseNo": 127,
        "landmark": "Bay Avenue",
        "city": "Omar",
        "state": "North Dakota",
        "pincode": 2564
    },
    {
        "houseNo": 221,
        "landmark": "Waldorf Court",
        "city": "Lumberton",
        "state": "Palau",
        "pincode": 8235
    },
    {
        "houseNo": 321,
        "landmark": "Evans Street",
        "city": "Avalon",
        "state": "Washington",
        "pincode": 5647
    },
    {
        "houseNo": 504,
        "landmark": "Woodhull Street",
        "city": "Herald",
        "state": "Virginia",
        "pincode": 8563
    },
    {
        "houseNo": 120,
        "landmark": "Union Street",
        "city": "Dante",
        "state": "California",
        "pincode": 7501
    },
    {
        "houseNo": 536,
        "landmark": "Estate Road",
        "city": "Unionville",
        "state": "Ohio",
        "pincode": 3992
    },
    {
        "houseNo": 677,
        "landmark": "Dahl Court",
        "city": "Coral",
        "state": "Oklahoma",
        "pincode": 268
    },
    {
        "houseNo": 962,
        "landmark": "Roder Avenue",
        "city": "Sunriver",
        "state": "Guam",
        "pincode": 4279
    },
    {
        "houseNo": 591,
        "landmark": "Lyme Avenue",
        "city": "Caberfae",
        "state": "Delaware",
        "pincode": 5946
    },
    {
        "houseNo": 825,
        "landmark": "Tilden Avenue",
        "city": "Guthrie",
        "state": "South Carolina",
        "pincode": 2399
    },
    {
        "houseNo": 925,
        "landmark": "Perry Terrace",
        "city": "Sims",
        "state": "Kentucky",
        "pincode": 9167
    },
    {
        "houseNo": 440,
        "landmark": "Hill Street",
        "city": "Roland",
        "state": "Connecticut",
        "pincode": 8365
    },
    {
        "houseNo": 649,
        "landmark": "Ferris Street",
        "city": "Valmy",
        "state": "Kansas",
        "pincode": 7727
    },
    {
        "houseNo": 664,
        "landmark": "Dorchester Road",
        "city": "Berwind",
        "state": "West Virginia",
        "pincode": 5306
    },
    {
        "houseNo": 917,
        "landmark": "Cooke Court",
        "city": "Riner",
        "state": "Louisiana",
        "pincode": 7820
    },
    {
        "houseNo": 691,
        "landmark": "Ashford Street",
        "city": "Harviell",
        "state": "Arizona",
        "pincode": 4996
    },
    {
        "houseNo": 567,
        "landmark": "Beaumont Street",
        "city": "Driftwood",
        "state": "American Samoa",
        "pincode": 5264
    },
    {
        "houseNo": 275,
        "landmark": "Fanchon Place",
        "city": "Jacksonwald",
        "state": "Mississippi",
        "pincode": 8305
    },
    {
        "houseNo": 449,
        "landmark": "Lynch Street",
        "city": "Ivanhoe",
        "state": "Michigan",
        "pincode": 6837
    },
    {
        "houseNo": 964,
        "landmark": "Sumner Place",
        "city": "Mammoth",
        "state": "Hawaii",
        "pincode": 3116
    },
    {
        "houseNo": 150,
        "landmark": "Noble Street",
        "city": "Gadsden",
        "state": "New Jersey",
        "pincode": 1505
    },
    {
        "houseNo": 818,
        "landmark": "Prospect Place",
        "city": "Lund",
        "state": "Missouri",
        "pincode": 7569
    },
    {
        "houseNo": 754,
        "landmark": "Hendrix Street",
        "city": "Blairstown",
        "state": "Texas",
        "pincode": 1044
    },
    {
        "houseNo": 406,
        "landmark": "Colonial Court",
        "city": "Hasty",
        "state": "Maine",
        "pincode": 6036
    },
    {
        "houseNo": 254,
        "landmark": "Lenox Road",
        "city": "Oasis",
        "state": "Virgin Islands",
        "pincode": 6337
    },
    {
        "houseNo": 445,
        "landmark": "Strickland Avenue",
        "city": "Grill",
        "state": "New York",
        "pincode": 5140
    },
    {
        "houseNo": 597,
        "landmark": "Duryea Place",
        "city": "Fulford",
        "state": "North Carolina",
        "pincode": 5292
    },
    {
        "houseNo": 896,
        "landmark": "Cropsey Avenue",
        "city": "Magnolia",
        "state": "Alabama",
        "pincode": 8561
    },
    {
        "houseNo": 942,
        "landmark": "Luquer Street",
        "city": "Emerald",
        "state": "Massachusetts",
        "pincode": 6229
    },
    {
        "houseNo": 489,
        "landmark": "Broome Street",
        "city": "Frierson",
        "state": "Florida",
        "pincode": 303
    },
    {
        "houseNo": 956,
        "landmark": "Wythe Place",
        "city": "Southmont",
        "state": "Federated States Of Micronesia",
        "pincode": 1135
    },
    {
        "houseNo": 328,
        "landmark": "Kings Place",
        "city": "Volta",
        "state": "Maryland",
        "pincode": 3736
    },
    {
        "houseNo": 848,
        "landmark": "Livonia Avenue",
        "city": "Roulette",
        "state": "Idaho",
        "pincode": 7420
    },
    {
        "houseNo": 847,
        "landmark": "Kenmore Terrace",
        "city": "Richford",
        "state": "Vermont",
        "pincode": 3234
    },
    {
        "houseNo": 223,
        "landmark": "Schroeders Avenue",
        "city": "Herlong",
        "state": "Montana",
        "pincode": 3366
    },
    {
        "houseNo": 253,
        "landmark": "Harway Avenue",
        "city": "Enoree",
        "state": "Rhode Island",
        "pincode": 3869
    },
    {
        "houseNo": 147,
        "landmark": "Sackman Street",
        "city": "Escondida",
        "state": "New Hampshire",
        "pincode": 2011
    },
    {
        "houseNo": 380,
        "landmark": "Cypress Court",
        "city": "Shepardsville",
        "state": "Pennsylvania",
        "pincode": 2119
    },
    {
        "houseNo": 653,
        "landmark": "Jerome Street",
        "city": "Martinsville",
        "state": "Iowa",
        "pincode": 7470
    },
    {
        "houseNo": 986,
        "landmark": "Schermerhorn Street",
        "city": "Wells",
        "state": "Colorado",
        "pincode": 2015
    },
    {
        "houseNo": 703,
        "landmark": "Wyckoff Avenue",
        "city": "Kraemer",
        "state": "Nebraska",
        "pincode": 7346
    },
    {
        "houseNo": 266,
        "landmark": "Montauk Avenue",
        "city": "Condon",
        "state": "South Dakota",
        "pincode": 6108
    },
    {
        "houseNo": 707,
        "landmark": "Leonora Court",
        "city": "Oneida",
        "state": "Utah",
        "pincode": 5618
    },
    {
        "houseNo": 235,
        "landmark": "Christopher Avenue",
        "city": "Boling",
        "state": "Wisconsin",
        "pincode": 1480
    },
    {
        "houseNo": 924,
        "landmark": "Raleigh Place",
        "city": "Iola",
        "state": "Illinois",
        "pincode": 9970
    },
    {
        "houseNo": 649,
        "landmark": "Emmons Avenue",
        "city": "Collins",
        "state": "Georgia",
        "pincode": 2817
    },
    {
        "houseNo": 374,
        "landmark": "Grant Avenue",
        "city": "Rew",
        "state": "Minnesota",
        "pincode": 3758
    },
    {
        "houseNo": 895,
        "landmark": "Gotham Avenue",
        "city": "Vale",
        "state": "Northern Mariana Islands",
        "pincode": 5568
    },
    {
        "houseNo": 417,
        "landmark": "Oriental Court",
        "city": "Dennard",
        "state": "Tennessee",
        "pincode": 6619
    },
    {
        "houseNo": 744,
        "landmark": "Bergen Avenue",
        "city": "Campo",
        "state": "Marshall Islands",
        "pincode": 6373
    },
    {
        "houseNo": 106,
        "landmark": "Lafayette Walk",
        "city": "Wheaton",
        "state": "Alaska",
        "pincode": 9826
    },
    {
        "houseNo": 483,
        "landmark": "Berkeley Place",
        "city": "Sattley",
        "state": "Wyoming",
        "pincode": 9227
    },
    {
        "houseNo": 471,
        "landmark": "Willow Place",
        "city": "Kanauga",
        "state": "Nevada",
        "pincode": 9089
    },
    {
        "houseNo": 775,
        "landmark": "Ridge Boulevard",
        "city": "Calverton",
        "state": "Arkansas",
        "pincode": 5209
    },
    {
        "houseNo": 409,
        "landmark": "Moffat Street",
        "city": "Yettem",
        "state": "Puerto Rico",
        "pincode": 5055
    },
    {
        "houseNo": 633,
        "landmark": "Visitation Place",
        "city": "Ironton",
        "state": "District Of Columbia",
        "pincode": 6068
    },
    {
        "houseNo": 417,
        "landmark": "Grimes Road",
        "city": "Austinburg",
        "state": "New Mexico",
        "pincode": 500
    },
    {
        "houseNo": 508,
        "landmark": "Eldert Street",
        "city": "Fruitdale",
        "state": "Oregon",
        "pincode": 721
    },
    {
        "houseNo": 771,
        "landmark": "Kansas Place",
        "city": "Chapin",
        "state": "North Dakota",
        "pincode": 1140
    },
    {
        "houseNo": 692,
        "landmark": "Quentin Road",
        "city": "Kieler",
        "state": "Palau",
        "pincode": 797
    },
    {
        "houseNo": 869,
        "landmark": "Noel Avenue",
        "city": "Springville",
        "state": "Washington",
        "pincode": 9535
    },
    {
        "houseNo": 292,
        "landmark": "Ocean Avenue",
        "city": "Downsville",
        "state": "Virginia",
        "pincode": 1856
    },
    {
        "houseNo": 862,
        "landmark": "Croton Loop",
        "city": "Adamstown",
        "state": "California",
        "pincode": 5398
    },
    {
        "houseNo": 324,
        "landmark": "Moore Street",
        "city": "Lutsen",
        "state": "Ohio",
        "pincode": 1533
    },
    {
        "houseNo": 937,
        "landmark": "Greene Avenue",
        "city": "Temperanceville",
        "state": "Oklahoma",
        "pincode": 2096
    },
    {
        "houseNo": 834,
        "landmark": "Stryker Street",
        "city": "Cotopaxi",
        "state": "Guam",
        "pincode": 331
    },
    {
        "houseNo": 810,
        "landmark": "Stryker Court",
        "city": "Mathews",
        "state": "Delaware",
        "pincode": 9002
    },
    {
        "houseNo": 882,
        "landmark": "Matthews Place",
        "city": "Charco",
        "state": "South Carolina",
        "pincode": 9145
    },
    {
        "houseNo": 265,
        "landmark": "Keen Court",
        "city": "Yorklyn",
        "state": "Kentucky",
        "pincode": 8917
    },
    {
        "houseNo": 647,
        "landmark": "Harbor Lane",
        "city": "Convent",
        "state": "Connecticut",
        "pincode": 9026
    },
    {
        "houseNo": 647,
        "landmark": "Regent Place",
        "city": "Allamuchy",
        "state": "Kansas",
        "pincode": 8829
    },
    {
        "houseNo": 377,
        "landmark": "Village Road",
        "city": "Eden",
        "state": "West Virginia",
        "pincode": 9528
    },
    {
        "houseNo": 269,
        "landmark": "Independence Avenue",
        "city": "Cannondale",
        "state": "Louisiana",
        "pincode": 3600
    },
    {
        "houseNo": 672,
        "landmark": "Dearborn Court",
        "city": "Elfrida",
        "state": "Arizona",
        "pincode": 5129
    },
    {
        "houseNo": 949,
        "landmark": "Hunterfly Place",
        "city": "Loretto",
        "state": "American Samoa",
        "pincode": 2036
    },
    {
        "houseNo": 781,
        "landmark": "Hendrickson Place",
        "city": "Fairforest",
        "state": "Mississippi",
        "pincode": 1852
    },
    {
        "houseNo": 776,
        "landmark": "Elm Avenue",
        "city": "Townsend",
        "state": "Michigan",
        "pincode": 6448
    },
    {
        "houseNo": 259,
        "landmark": "Schenck Street",
        "city": "Conway",
        "state": "Hawaii",
        "pincode": 4487
    },
    {
        "houseNo": 666,
        "landmark": "Hampton Avenue",
        "city": "Deltaville",
        "state": "New Jersey",
        "pincode": 8489
    },
    {
        "houseNo": 576,
        "landmark": "Bennet Court",
        "city": "Cavalero",
        "state": "Missouri",
        "pincode": 7885
    },
    {
        "houseNo": 117,
        "landmark": "Varanda Place",
        "city": "Maury",
        "state": "Texas",
        "pincode": 9802
    },
    {
        "houseNo": 886,
        "landmark": "Madison Street",
        "city": "Greer",
        "state": "Maine",
        "pincode": 4700
    },
    {
        "houseNo": 221,
        "landmark": "Beard Street",
        "city": "Groton",
        "state": "Virgin Islands",
        "pincode": 3432
    },
    {
        "houseNo": 712,
        "landmark": "Glen Street",
        "city": "Knowlton",
        "state": "New York",
        "pincode": 7743
    },
    {
        "houseNo": 587,
        "landmark": "Roosevelt Place",
        "city": "Biddle",
        "state": "North Carolina",
        "pincode": 3239
    },
    {
        "houseNo": 129,
        "landmark": "Narrows Avenue",
        "city": "Westmoreland",
        "state": "Alabama",
        "pincode": 9535
    },
    {
        "houseNo": 732,
        "landmark": "Willoughby Street",
        "city": "Trona",
        "state": "Massachusetts",
        "pincode": 5200
    },
    {
        "houseNo": 624,
        "landmark": "High Street",
        "city": "Heil",
        "state": "Florida",
        "pincode": 2299
    },
    {
        "houseNo": 542,
        "landmark": "Lott Place",
        "city": "Draper",
        "state": "Federated States Of Micronesia",
        "pincode": 5795
    },
    {
        "houseNo": 974,
        "landmark": "Debevoise Street",
        "city": "Levant",
        "state": "Maryland",
        "pincode": 8704
    },
    {
        "houseNo": 462,
        "landmark": "Stuart Street",
        "city": "Worton",
        "state": "Idaho",
        "pincode": 2401
    },
    {
        "houseNo": 696,
        "landmark": "Abbey Court",
        "city": "Choctaw",
        "state": "Vermont",
        "pincode": 6467
    },
    {
        "houseNo": 834,
        "landmark": "Newkirk Placez",
        "city": "Glendale",
        "state": "Montana",
        "pincode": 5708
    },
    {
        "houseNo": 865,
        "landmark": "Lee Avenue",
        "city": "Greenfields",
        "state": "Rhode Island",
        "pincode": 7231
    },
    {
        "houseNo": 367,
        "landmark": "Micieli Place",
        "city": "Newcastle",
        "state": "New Hampshire",
        "pincode": 7745
    },
    {
        "houseNo": 989,
        "landmark": "Wolf Place",
        "city": "Leming",
        "state": "Pennsylvania",
        "pincode": 3881
    }
]

var insert = db.addresses.insertMany(addresses);

print(JSON.stringify(insert))