const symbolMap = {
    "🜀": "ALCHEMICAL SYMBOL FOR QUINTESSENCE",
    "🜁": "ALCHEMICAL SYMBOL FOR AIR",
    "🜂": "ALCHEMICAL SYMBOL FOR FIRE",
    "🜃": "ALCHEMICAL SYMBOL FOR EARTH",
    "🜄": "ALCHEMICAL SYMBOL FOR WATER",
    "🜅": "ALCHEMICAL SYMBOL FOR AQUAFORTIS",
    "🜆": "ALCHEMICAL SYMBOL FOR AQUA REGIA",
    "🜇": "ALCHEMICAL SYMBOL FOR AQUA REGIA-2",
    "🜈": "ALCHEMICAL SYMBOL FOR AQUA VITAE",
    "🜉": "ALCHEMICAL SYMBOL FOR AQUA VITAE-2",
    "🜊": "ALCHEMICAL SYMBOL FOR VINEGAR",
    "🜋": "ALCHEMICAL SYMBOL FOR VINEGAR-2",
    "🜌": "ALCHEMICAL SYMBOL FOR VINEGAR-3",
    "🜍": "ALCHEMICAL SYMBOL FOR SULFUR",
    "🜎": "ALCHEMICAL SYMBOL FOR PHILOSOPHERS SULFUR",
    "🜏": "ALCHEMICAL SYMBOL FOR BLACK SULFUR",
    "🜐": "ALCHEMICAL SYMBOL FOR MERCURY SUBLIMATE",
    "🜑": "ALCHEMICAL SYMBOL FOR MERCURY SUBLIMATE-2",
    "🜒": "ALCHEMICAL SYMBOL FOR MERCURY SUBLIMATE-3",
    "🜓": "ALCHEMICAL SYMBOL FOR CINNABAR",
    "🜔": "ALCHEMICAL SYMBOL FOR SALT",
    "🜕": "ALCHEMICAL SYMBOL FOR NITRE",
    "🜖": "ALCHEMICAL SYMBOL FOR VITRIOL",
    "🜗": "ALCHEMICAL SYMBOL FOR VITRIOL-2",
    "🜘": "ALCHEMICAL SYMBOL FOR ROCK SALT",
    "🜙": "ALCHEMICAL SYMBOL FOR ROCK SALT-2",
    "🜚": "ALCHEMICAL SYMBOL FOR GOLD",
    "🜛": "ALCHEMICAL SYMBOL FOR SILVER",
    "🜜": "ALCHEMICAL SYMBOL FOR IRON ORE",
    "🜝": "ALCHEMICAL SYMBOL FOR IRON ORE-2",
    "🜞": "ALCHEMICAL SYMBOL FOR CROCUS OF IRON",
    "🜟": "ALCHEMICAL SYMBOL FOR REGULUS OF IRON",
    "🜠": "ALCHEMICAL SYMBOL FOR COPPER ORE",
    "🜡": "ALCHEMICAL SYMBOL FOR IRON-COPPER ORE",
    "🜢": "ALCHEMICAL SYMBOL FOR SUBLIMATE OF COPPER",
    "🜣": "ALCHEMICAL SYMBOL FOR CROCUS OF COPPER",
    "🜤": "ALCHEMICAL SYMBOL FOR CROCUS OF COPPER-2",
    "🜥": "ALCHEMICAL SYMBOL FOR COPPER ANTIMONIATE",
    "🜦": "ALCHEMICAL SYMBOL FOR SALT OF COPPER ANTIMONIATE",
    "🜧": "ALCHEMICAL SYMBOL FOR SUBLIMATE OF SALT OF COPPER",
    "🜨": "ALCHEMICAL SYMBOL FOR VERDIGRIS",
    "🜩": "ALCHEMICAL SYMBOL FOR TIN ORE",
    "🜪": "ALCHEMICAL SYMBOL FOR LEAD ORE",
    "🜫": "ALCHEMICAL SYMBOL FOR ANTIMONY ORE",
    "🜬": "ALCHEMICAL SYMBOL FOR SUBLIMATE OF ANTIMONY",
    "🜭": "ALCHEMICAL SYMBOL FOR SALT OF ANTIMONY",
    "🜮": "ALCHEMICAL SYMBOL FOR SUBLIMATE OF SALT OF ANTIMONY",
    "🜯": "ALCHEMICAL SYMBOL FOR VINEGAR OF ANTIMONY",
    "🜰": "ALCHEMICAL SYMBOL FOR REGULUS OF ANTIMONY",
    "🜱": "ALCHEMICAL SYMBOL FOR REGULUS OF ANTIMONY-2",
    "🜲": "ALCHEMICAL SYMBOL FOR REGULUS",
    "🜳": "ALCHEMICAL SYMBOL FOR REGULUS-2",
    "🜴": "ALCHEMICAL SYMBOL FOR REGULUS-3",
    "🜵": "ALCHEMICAL SYMBOL FOR REGULUS-4",
    "🜶": "ALCHEMICAL SYMBOL FOR ALKALI",
    "🜷": "ALCHEMICAL SYMBOL FOR ALKALI-2",
    "🜸": "ALCHEMICAL SYMBOL FOR MARCASITE",
    "🜹": "ALCHEMICAL SYMBOL FOR SAL-AMMONIAC",
    "🜺": "ALCHEMICAL SYMBOL FOR ARSENIC",
    "🜻": "ALCHEMICAL SYMBOL FOR REALGAR",
    "🜼": "ALCHEMICAL SYMBOL FOR REALGAR-2",
    "🜽": "ALCHEMICAL SYMBOL FOR AURIPIGMENT",
    "🜾": "ALCHEMICAL SYMBOL FOR BISMUTH ORE",
    "🜿": "ALCHEMICAL SYMBOL FOR TARTAR",
    "🝀": "ALCHEMICAL SYMBOL FOR TARTAR-2",
    "🝁": "ALCHEMICAL SYMBOL FOR QUICK LIME",
    "🝂": "ALCHEMICAL SYMBOL FOR BORAX",
    "🝃": "ALCHEMICAL SYMBOL FOR BORAX-2",
    "🝄": "ALCHEMICAL SYMBOL FOR BORAX-3",
    "🝅": "ALCHEMICAL SYMBOL FOR ALUM",
    "🝆": "ALCHEMICAL SYMBOL FOR OIL",
    "🝇": "ALCHEMICAL SYMBOL FOR SPIRIT",
    "🝈": "ALCHEMICAL SYMBOL FOR TINCTURE",
    "🝉": "ALCHEMICAL SYMBOL FOR GUM",
    "🝊": "ALCHEMICAL SYMBOL FOR WAX",
    "🝋": "ALCHEMICAL SYMBOL FOR POWDER",
    "🝌": "ALCHEMICAL SYMBOL FOR CALX",
    "🝍": "ALCHEMICAL SYMBOL FOR TUTTY",
    "🝎": "ALCHEMICAL SYMBOL FOR CAPUT MORTUUM",
    "🝏": "ALCHEMICAL SYMBOL FOR SCEPTER OF JOVE",
    "🝐": "ALCHEMICAL SYMBOL FOR CADUCEUS",
    "🝑": "ALCHEMICAL SYMBOL FOR TRIDENT",
    "🝒": "ALCHEMICAL SYMBOL FOR STARRED TRIDENT",
    "🝓": "ALCHEMICAL SYMBOL FOR LODESTONE",
    "🝔": "ALCHEMICAL SYMBOL FOR SOAP",
    "🝕": "ALCHEMICAL SYMBOL FOR URINE",
    "🝖": "ALCHEMICAL SYMBOL FOR HORSE DUNG",
    "🝗": "ALCHEMICAL SYMBOL FOR ASHES",
    "🝘": "ALCHEMICAL SYMBOL FOR POT ASHES",
    "🝙": "ALCHEMICAL SYMBOL FOR BRICK",
    "🝚": "ALCHEMICAL SYMBOL FOR POWDERED BRICK",
    "🝛": "ALCHEMICAL SYMBOL FOR AMALGAM",
    "🝜": "ALCHEMICAL SYMBOL FOR STRATUM SUPER STRATUM",
    "🝝": "ALCHEMICAL SYMBOL FOR STRATUM SUPER STRATUM-2",
    "🝞": "ALCHEMICAL SYMBOL FOR SUBLIMATION",
    "🝟": "ALCHEMICAL SYMBOL FOR PRECIPITATE",
    "🝠": "ALCHEMICAL SYMBOL FOR DISTILL",
    "🝡": "ALCHEMICAL SYMBOL FOR DISSOLVE",
    "🝢": "ALCHEMICAL SYMBOL FOR DISSOLVE-2",
    "🝣": "ALCHEMICAL SYMBOL FOR PURIFY",
    "🝤": "ALCHEMICAL SYMBOL FOR PUTREFACTION",
    "🝥": "ALCHEMICAL SYMBOL FOR CRUCIBLE",
    "🝦": "ALCHEMICAL SYMBOL FOR CRUCIBLE-2",
    "🝧": "ALCHEMICAL SYMBOL FOR CRUCIBLE-3",
    "🝨": "ALCHEMICAL SYMBOL FOR CRUCIBLE-4",
    "🝩": "ALCHEMICAL SYMBOL FOR CRUCIBLE-5",
    "🝪": "ALCHEMICAL SYMBOL FOR ALEMBIC",
    "🝫": "ALCHEMICAL SYMBOL FOR BATH OF MARY",
    "🝬": "ALCHEMICAL SYMBOL FOR BATH OF VAPOURS",
    "🝭": "ALCHEMICAL SYMBOL FOR RETORT",
    "🝮": "ALCHEMICAL SYMBOL FOR HOUR",
    "🝯": "ALCHEMICAL SYMBOL FOR NIGHT",
    "🝰": "ALCHEMICAL SYMBOL FOR DAY-NIGHT",
    "🝱": "ALCHEMICAL SYMBOL FOR MONTH",
    "🝲": "ALCHEMICAL SYMBOL FOR HALF DRAM",
    "🝳": "ALCHEMICAL SYMBOL FOR HALF OUNCE"
}