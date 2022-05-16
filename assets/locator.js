/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yext/rtf-converter/lib/rtf-converter.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@yext/rtf-converter/lib/rtf-converter.min.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, r) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (r),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self && self;
  var e,
      r,
      t = (function (e, r) {
    e.exports = function () {
      var e = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        andand: "⩕",
        And: "⩓",
        and: "∧",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angmsd: "∡",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        apacir: "⩯",
        ap: "≈",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxHd: "╤",
        boxhD: "╥",
        boxHD: "╦",
        boxhu: "┴",
        boxHu: "╧",
        boxhU: "╨",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsolb: "⧅",
        bsol: "\\",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        cap: "∩",
        Cap: "⋒",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cir: "○",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cup: "∪",
        Cup: "⋓",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        Darr: "↡",
        dArr: "⇓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        ddagger: "‡",
        ddarr: "⇊",
        DD: "ⅅ",
        dd: "ⅆ",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrowBar: "⤓",
        downarrow: "↓",
        DownArrow: "↓",
        Downarrow: "⇓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVectorBar: "⥖",
        DownLeftVector: "↽",
        DownRightTeeVector: "⥟",
        DownRightVectorBar: "⥗",
        DownRightVector: "⇁",
        DownTeeArrow: "↧",
        DownTee: "⊤",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        Ecirc: "Ê",
        ecirc: "ê",
        ecir: "≖",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        edot: "ė",
        eDot: "≑",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        ge: "≥",
        gE: "≧",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        gescc: "⪩",
        ges: "⩾",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gla: "⪥",
        gl: "≷",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gtcc: "⪧",
        gtcir: "⩺",
        gt: ">",
        GT: ">",
        Gt: "≫",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        harrcir: "⥈",
        harr: "↔",
        hArr: "⇔",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        Im: "ℑ",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        incare: "℅",
        "in": "∈",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        intcal: "⊺",
        "int": "∫",
        Int: "∬",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larrb: "⇤",
        larrbfs: "⤟",
        larr: "←",
        Larr: "↞",
        lArr: "⇐",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        latail: "⤙",
        lAtail: "⤛",
        lat: "⪫",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        LeftArrowBar: "⇤",
        leftarrow: "←",
        LeftArrow: "←",
        Leftarrow: "⇐",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVectorBar: "⥙",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTeeArrow: "↤",
        LeftTee: "⊣",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangleBar: "⧏",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVectorBar: "⥘",
        LeftUpVector: "↿",
        LeftVectorBar: "⥒",
        LeftVector: "↼",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        lescc: "⪨",
        les: "⩽",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        llarr: "⇇",
        ll: "≪",
        Ll: "⋘",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoustache: "⎰",
        lmoust: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftrightarrow: "⟷",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        ltcc: "⪦",
        ltcir: "⩹",
        lt: "<",
        LT: "<",
        Lt: "≪",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        midast: "*",
        midcir: "⫰",
        mid: "∣",
        middot: "·",
        minusb: "⊟",
        minus: "−",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natural: "♮",
        naturals: "ℕ",
        natur: "♮",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        ne: "≠",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        nparallel: "∦",
        npar: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        nprec: "⊀",
        npreceq: "⪯̸",
        npre: "⪯̸",
        nrarrc: "⤳̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        Ocirc: "Ô",
        ocirc: "ô",
        ocir: "⊚",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        orarr: "↻",
        Or: "⩔",
        or: "∨",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        otimesas: "⨶",
        Otimes: "⨷",
        otimes: "⊗",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        para: "¶",
        parallel: "∥",
        par: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plus: "+",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        prap: "⪷",
        Pr: "⪻",
        pr: "≺",
        prcue: "≼",
        precapprox: "⪷",
        prec: "≺",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        pre: "⪯",
        prE: "⪳",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportional: "∝",
        Proportion: "∷",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarr: "→",
        Rarr: "↠",
        rArr: "⇒",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        Re: "ℜ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrowBar: "⇥",
        rightarrow: "→",
        RightArrow: "→",
        Rightarrow: "⇒",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVectorBar: "⥕",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTeeArrow: "↦",
        RightTee: "⊢",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangleBar: "⧐",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVectorBar: "⥔",
        RightUpVector: "↾",
        RightVectorBar: "⥓",
        RightVector: "⇀",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoustache: "⎱",
        rmoust: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        Sc: "⪼",
        sc: "≻",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdotb: "⊡",
        sdot: "⋅",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        solbar: "⌿",
        solb: "⧄",
        sol: "/",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squ: "□",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succapprox: "⪸",
        succ: "≻",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        Sup: "⋑",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "\t",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        ThinSpace: " ",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        timesbar: "⨱",
        timesb: "⊠",
        times: "×",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        topbot: "⌶",
        topcir: "⫱",
        top: "⊤",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        uarr: "↑",
        Uarr: "↟",
        uArr: "⇑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrowBar: "⤒",
        uparrow: "↑",
        UpArrow: "↑",
        Uparrow: "⇑",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTeeArrow: "↥",
        UpTee: "⊥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        veebar: "⊻",
        vee: "∨",
        Vee: "⋁",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xharr: "⟷",
        xhArr: "⟺",
        Xi: "Ξ",
        xi: "ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
      },
          r = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
          t = {};

      function n(e, r, s) {
        var o,
            i,
            a,
            c,
            l,
            u = "";

        for ("string" != typeof r && (s = r, r = n.defaultChars), void 0 === s && (s = !0), l = function (e) {
          var r,
              n,
              s = t[e];
          if (s) return s;

          for (s = t[e] = [], r = 0; r < 128; r++) {
            n = String.fromCharCode(r), /^[0-9a-z]$/i.test(n) ? s.push(n) : s.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
          }

          for (r = 0; r < e.length; r++) {
            s[e.charCodeAt(r)] = e[r];
          }

          return s;
        }(r), o = 0, i = e.length; o < i; o++) {
          if (a = e.charCodeAt(o), s && 37 === a && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) u += e.slice(o, o + 3), o += 2;else if (a < 128) u += l[a];else if (a >= 55296 && a <= 57343) {
            if (a >= 55296 && a <= 56319 && o + 1 < i && (c = e.charCodeAt(o + 1)) >= 56320 && c <= 57343) {
              u += encodeURIComponent(e[o] + e[o + 1]), o++;
              continue;
            }

            u += "%EF%BF%BD";
          } else u += encodeURIComponent(e[o]);
        }

        return u;
      }

      n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()";
      var s = n,
          o = {};

      function i(e, r) {
        var t;
        return "string" != typeof r && (r = i.defaultChars), t = function (e) {
          var r,
              t,
              n = o[e];
          if (n) return n;

          for (n = o[e] = [], r = 0; r < 128; r++) {
            t = String.fromCharCode(r), n.push(t);
          }

          for (r = 0; r < e.length; r++) {
            t = e.charCodeAt(r), n[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(-2);
          }

          return n;
        }(r), e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
          var r,
              n,
              s,
              o,
              i,
              a,
              c,
              l = "";

          for (r = 0, n = e.length; r < n; r += 3) {
            (s = parseInt(e.slice(r + 1, r + 3), 16)) < 128 ? l += t[s] : 192 == (224 & s) && r + 3 < n && 128 == (192 & (o = parseInt(e.slice(r + 4, r + 6), 16))) ? (l += (c = s << 6 & 1984 | 63 & o) < 128 ? "��" : String.fromCharCode(c), r += 3) : 224 == (240 & s) && r + 6 < n && (o = parseInt(e.slice(r + 4, r + 6), 16), i = parseInt(e.slice(r + 7, r + 9), 16), 128 == (192 & o) && 128 == (192 & i)) ? (l += (c = s << 12 & 61440 | o << 6 & 4032 | 63 & i) < 2048 || c >= 55296 && c <= 57343 ? "���" : String.fromCharCode(c), r += 6) : 240 == (248 & s) && r + 9 < n && (o = parseInt(e.slice(r + 4, r + 6), 16), i = parseInt(e.slice(r + 7, r + 9), 16), a = parseInt(e.slice(r + 10, r + 12), 16), 128 == (192 & o) && 128 == (192 & i) && 128 == (192 & a)) ? ((c = s << 18 & 1835008 | o << 12 & 258048 | i << 6 & 4032 | 63 & a) < 65536 || c > 1114111 ? l += "����" : (c -= 65536, l += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))), r += 9) : l += "�";
          }

          return l;
        });
      }

      i.defaultChars = ";/?:@&=+$,#", i.componentChars = "";
      var a = i;

      function c() {
        this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
      }

      var l = /^([a-z0-9.+-]+:)/i,
          u = /:[0-9]*$/,
          p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          h = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          f = ["'"].concat(h),
          d = ["%", "/", "?", ";", "#"].concat(f),
          m = ["/", "?", "#"],
          g = /^[+a-z0-9A-Z_-]{0,63}$/,
          _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          k = {
        javascript: !0,
        "javascript:": !0
      },
          b = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
      };
      c.prototype.parse = function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a = e;

        if (a = a.trim(), !r && 1 === e.split("#").length) {
          var c = p.exec(a);
          if (c) return this.pathname = c[1], c[2] && (this.search = c[2]), this;
        }

        var u = l.exec(a);

        if (u && (u = u[0], s = u.toLowerCase(), this.protocol = u, a = a.substr(u.length)), (r || u || a.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(i = "//" === a.substr(0, 2)) || u && k[u] || (a = a.substr(2), this.slashes = !0)), !k[u] && (i || u && !b[u])) {
          var h,
              f,
              v = -1;

          for (t = 0; t < m.length; t++) {
            -1 !== (o = a.indexOf(m[t])) && (-1 === v || o < v) && (v = o);
          }

          for (-1 !== (f = -1 === v ? a.lastIndexOf("@") : a.lastIndexOf("@", v)) && (h = a.slice(0, f), a = a.slice(f + 1), this.auth = h), v = -1, t = 0; t < d.length; t++) {
            -1 !== (o = a.indexOf(d[t])) && (-1 === v || o < v) && (v = o);
          }

          -1 === v && (v = a.length), ":" === a[v - 1] && v--;
          var C = a.slice(0, v);
          a = a.slice(v), this.parseHost(C), this.hostname = this.hostname || "";
          var y = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];

          if (!y) {
            var A = this.hostname.split(/\./);

            for (t = 0, n = A.length; t < n; t++) {
              var x = A[t];

              if (x && !x.match(g)) {
                for (var w = "", D = 0, E = x.length; D < E; D++) {
                  x.charCodeAt(D) > 127 ? w += "x" : w += x[D];
                }

                if (!w.match(g)) {
                  var q = A.slice(0, t),
                      S = A.slice(t + 1),
                      F = x.match(_);
                  F && (q.push(F[1]), S.unshift(F[2])), S.length && (a = S.join(".") + a), this.hostname = q.join(".");
                  break;
                }
              }
            }
          }

          this.hostname.length > 255 && (this.hostname = ""), y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
        }

        var L = a.indexOf("#");
        -1 !== L && (this.hash = a.substr(L), a = a.slice(0, L));
        var z = a.indexOf("?");
        return -1 !== z && (this.search = a.substr(z), a = a.slice(0, z)), a && (this.pathname = a), b[s] && this.hostname && !this.pathname && (this.pathname = ""), this;
      }, c.prototype.parseHost = function (e) {
        var r = u.exec(e);
        r && (":" !== (r = r[0]) && (this.port = r.substr(1)), e = e.substr(0, e.length - r.length)), e && (this.hostname = e);
      };
      var v,
          C,
          y = {
        encode: s,
        decode: a,
        format: function format(e) {
          var r = "";
          return r += e.protocol || "", r += e.slashes ? "//" : "", r += e.auth ? e.auth + "@" : "", e.hostname && -1 !== e.hostname.indexOf(":") ? r += "[" + e.hostname + "]" : r += e.hostname || "", r += e.port ? ":" + e.port : "", r += e.pathname || "", r += e.search || "", r += e.hash || "";
        },
        parse: function parse(e, r) {
          if (e && e instanceof c) return e;
          var t = new c();
          return t.parse(e, r), t;
        }
      },
          A = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
          x = /[\0-\x1F\x7F-\x9F]/,
          w = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
          D = {
        Any: A,
        Cc: x,
        Cf: /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
        P: r,
        Z: w
      },
          E = (function (t, n) {
        var s = Object.prototype.hasOwnProperty;

        function o(e, r) {
          return s.call(e, r);
        }

        function i(e) {
          return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || 65535 == (65535 & e) || 65534 == (65535 & e) || e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
        }

        function a(e) {
          if (e > 65535) {
            var r = 55296 + ((e -= 65536) >> 10),
                t = 56320 + (1023 & e);
            return String.fromCharCode(r, t);
          }

          return String.fromCharCode(e);
        }

        var c = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
            l = new RegExp(c.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
            u = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
            p = /[&<>"]/,
            h = /[&<>"]/g,
            f = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;"
        };

        function d(e) {
          return f[e];
        }

        var m = /[.?*+^$[\]\\(){}|-]/g;
        n.lib = {}, n.lib.mdurl = y, n.lib.ucmicro = D, n.assign = function (e) {
          return Array.prototype.slice.call(arguments, 1).forEach(function (r) {
            if (r) {
              if ("object" != _typeof(r)) throw new TypeError(r + "must be object");
              Object.keys(r).forEach(function (t) {
                e[t] = r[t];
              });
            }
          }), e;
        }, n.isString = function (e) {
          return "[object String]" === function (e) {
            return Object.prototype.toString.call(e);
          }(e);
        }, n.has = o, n.unescapeMd = function (e) {
          return e.indexOf("\\") < 0 ? e : e.replace(c, "$1");
        }, n.unescapeAll = function (r) {
          return r.indexOf("\\") < 0 && r.indexOf("&") < 0 ? r : r.replace(l, function (r, t, n) {
            return t || function (r, t) {
              var n = 0;
              return o(e, t) ? e[t] : 35 === t.charCodeAt(0) && u.test(t) && i(n = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10)) ? a(n) : r;
            }(r, n);
          });
        }, n.isValidEntityCode = i, n.fromCodePoint = a, n.escapeHtml = function (e) {
          return p.test(e) ? e.replace(h, d) : e;
        }, n.arrayReplaceAt = function (e, r, t) {
          return [].concat(e.slice(0, r), t, e.slice(r + 1));
        }, n.isSpace = function (e) {
          switch (e) {
            case 9:
            case 32:
              return !0;
          }

          return !1;
        }, n.isWhiteSpace = function (e) {
          if (e >= 8192 && e <= 8202) return !0;

          switch (e) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
              return !0;
          }

          return !1;
        }, n.isMdAsciiPunct = function (e) {
          switch (e) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
              return !0;

            default:
              return !1;
          }
        }, n.isPunctChar = function (e) {
          return r.test(e);
        }, n.escapeRE = function (e) {
          return e.replace(m, "\\$&");
        }, n.normalizeReference = function (e) {
          return e = e.trim().replace(/\s+/g, " "), "Ṿ" === "ẞ".toLowerCase() && (e = e.replace(/\u1e9e/g, "ß")), e.toLowerCase().toUpperCase();
        };
      }(C = {
        path: v,
        exports: {},
        require: function require(e, r) {
          return function () {
            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
          }(null == r && C.path);
        }
      }, C.exports), C.exports),
          q = E.unescapeAll,
          S = E.unescapeAll,
          F = {
        parseLinkLabel: function parseLinkLabel(e, r, t) {
          var n,
              s,
              o,
              i,
              a = -1,
              c = e.posMax,
              l = e.pos;

          for (e.pos = r + 1, n = 1; e.pos < c;) {
            if (93 === (o = e.src.charCodeAt(e.pos)) && 0 == --n) {
              s = !0;
              break;
            }

            if (i = e.pos, e.md.inline.skipToken(e), 91 === o) if (i === e.pos - 1) n++;else if (t) return e.pos = l, -1;
          }

          return s && (a = e.pos), e.pos = l, a;
        },
        parseLinkDestination: function parseLinkDestination(e, r, t) {
          var n,
              s,
              o = r,
              i = {
            ok: !1,
            pos: 0,
            lines: 0,
            str: ""
          };

          if (60 === e.charCodeAt(r)) {
            for (r++; r < t;) {
              if (10 === (n = e.charCodeAt(r))) return i;
              if (60 === n) return i;
              if (62 === n) return i.pos = r + 1, i.str = q(e.slice(o + 1, r)), i.ok = !0, i;
              92 === n && r + 1 < t ? r += 2 : r++;
            }

            return i;
          }

          for (s = 0; r < t && 32 !== (n = e.charCodeAt(r)) && !(n < 32 || 127 === n);) {
            if (92 === n && r + 1 < t) {
              if (32 === e.charCodeAt(r + 1)) break;
              r += 2;
            } else {
              if (40 === n && ++s > 32) return i;

              if (41 === n) {
                if (0 === s) break;
                s--;
              }

              r++;
            }
          }

          return o === r ? i : 0 !== s ? i : (i.str = q(e.slice(o, r)), i.lines = 0, i.pos = r, i.ok = !0, i);
        },
        parseLinkTitle: function parseLinkTitle(e, r, t) {
          var n,
              s,
              o = 0,
              i = r,
              a = {
            ok: !1,
            pos: 0,
            lines: 0,
            str: ""
          };
          if (r >= t) return a;
          if (34 !== (s = e.charCodeAt(r)) && 39 !== s && 40 !== s) return a;

          for (r++, 40 === s && (s = 41); r < t;) {
            if ((n = e.charCodeAt(r)) === s) return a.pos = r + 1, a.lines = o, a.str = S(e.slice(i + 1, r)), a.ok = !0, a;
            if (40 === n && 41 === s) return a;
            10 === n ? o++ : 92 === n && r + 1 < t && (r++, 10 === e.charCodeAt(r) && o++), r++;
          }

          return a;
        }
      },
          L = E.assign,
          z = E.unescapeAll,
          T = E.escapeHtml,
          I = {};

      function M() {
        this.rules = L({}, I);
      }

      I.code_inline = function (e, r, t, n, s) {
        var o = e[r];
        return "<code" + s.renderAttrs(o) + ">" + T(e[r].content) + "</code>";
      }, I.code_block = function (e, r, t, n, s) {
        var o = e[r];
        return "<pre" + s.renderAttrs(o) + "><code>" + T(e[r].content) + "</code></pre>\n";
      }, I.fence = function (e, r, t, n, s) {
        var o,
            i,
            a,
            c,
            l,
            u = e[r],
            p = u.info ? z(u.info).trim() : "",
            h = "",
            f = "";
        return p && (a = p.split(/(\s+)/g), h = a[0], f = a.slice(2).join("")), 0 === (o = t.highlight && t.highlight(u.content, h, f) || T(u.content)).indexOf("<pre") ? o + "\n" : p ? (i = u.attrIndex("class"), c = u.attrs ? u.attrs.slice() : [], i < 0 ? c.push(["class", t.langPrefix + h]) : (c[i] = c[i].slice(), c[i][1] += " " + t.langPrefix + h), l = {
          attrs: c
        }, "<pre><code" + s.renderAttrs(l) + ">" + o + "</code></pre>\n") : "<pre><code" + s.renderAttrs(u) + ">" + o + "</code></pre>\n";
      }, I.image = function (e, r, t, n, s) {
        var o = e[r];
        return o.attrs[o.attrIndex("alt")][1] = s.renderInlineAsText(o.children, t, n), s.renderToken(e, r, t);
      }, I.hardbreak = function (e, r, t) {
        return t.xhtmlOut ? "<br />\n" : "<br>\n";
      }, I.softbreak = function (e, r, t) {
        return t.breaks ? t.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
      }, I.text = function (e, r) {
        return T(e[r].content);
      }, I.html_block = function (e, r) {
        return e[r].content;
      }, I.html_inline = function (e, r) {
        return e[r].content;
      }, M.prototype.renderAttrs = function (e) {
        var r, t, n;
        if (!e.attrs) return "";

        for (n = "", r = 0, t = e.attrs.length; r < t; r++) {
          n += " " + T(e.attrs[r][0]) + '="' + T(e.attrs[r][1]) + '"';
        }

        return n;
      }, M.prototype.renderToken = function (e, r, t) {
        var n,
            s = "",
            o = !1,
            i = e[r];
        return i.hidden ? "" : (i.block && -1 !== i.nesting && r && e[r - 1].hidden && (s += "\n"), s += (-1 === i.nesting ? "</" : "<") + i.tag, s += this.renderAttrs(i), 0 === i.nesting && t.xhtmlOut && (s += " /"), i.block && (o = !0, 1 === i.nesting && r + 1 < e.length && ("inline" === (n = e[r + 1]).type || n.hidden ? o = !1 : -1 === n.nesting && n.tag === i.tag && (o = !1))), s += o ? ">\n" : ">");
      }, M.prototype.renderInline = function (e, r, t) {
        for (var n, s = "", o = this.rules, i = 0, a = e.length; i < a; i++) {
          n = e[i].type, void 0 !== o[n] ? s += o[n](e, i, r, t, this) : s += this.renderToken(e, i, r);
        }

        return s;
      }, M.prototype.renderInlineAsText = function (e, r, t) {
        for (var n = "", s = 0, o = e.length; s < o; s++) {
          "text" === e[s].type ? n += e[s].content : "image" === e[s].type && (n += this.renderInlineAsText(e[s].children, r, t));
        }

        return n;
      }, M.prototype.render = function (e, r, t) {
        var n,
            s,
            o,
            i = "",
            a = this.rules;

        for (n = 0, s = e.length; n < s; n++) {
          "inline" === (o = e[n].type) ? i += this.renderInline(e[n].children, r, t) : void 0 !== a[o] ? i += a[e[n].type](e, n, r, t, this) : i += this.renderToken(e, n, r, t);
        }

        return i;
      };
      var R = M;

      function B() {
        this.__rules__ = [], this.__cache__ = null;
      }

      B.prototype.__find__ = function (e) {
        for (var r = 0; r < this.__rules__.length; r++) {
          if (this.__rules__[r].name === e) return r;
        }

        return -1;
      }, B.prototype.__compile__ = function () {
        var e = this,
            r = [""];
        e.__rules__.forEach(function (e) {
          e.enabled && e.alt.forEach(function (e) {
            r.indexOf(e) < 0 && r.push(e);
          });
        }), e.__cache__ = {}, r.forEach(function (r) {
          e.__cache__[r] = [], e.__rules__.forEach(function (t) {
            t.enabled && (r && t.alt.indexOf(r) < 0 || e.__cache__[r].push(t.fn));
          });
        });
      }, B.prototype.at = function (e, r, t) {
        var n = this.__find__(e),
            s = t || {};

        if (-1 === n) throw new Error("Parser rule not found: " + e);
        this.__rules__[n].fn = r, this.__rules__[n].alt = s.alt || [], this.__cache__ = null;
      }, B.prototype.before = function (e, r, t, n) {
        var s = this.__find__(e),
            o = n || {};

        if (-1 === s) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(s, 0, {
          name: r,
          enabled: !0,
          fn: t,
          alt: o.alt || []
        }), this.__cache__ = null;
      }, B.prototype.after = function (e, r, t, n) {
        var s = this.__find__(e),
            o = n || {};

        if (-1 === s) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(s + 1, 0, {
          name: r,
          enabled: !0,
          fn: t,
          alt: o.alt || []
        }), this.__cache__ = null;
      }, B.prototype.push = function (e, r, t) {
        var n = t || {};
        this.__rules__.push({
          name: e,
          enabled: !0,
          fn: r,
          alt: n.alt || []
        }), this.__cache__ = null;
      }, B.prototype.enable = function (e, r) {
        Array.isArray(e) || (e = [e]);
        var t = [];
        return e.forEach(function (e) {
          var n = this.__find__(e);

          if (n < 0) {
            if (r) return;
            throw new Error("Rules manager: invalid rule name " + e);
          }

          this.__rules__[n].enabled = !0, t.push(e);
        }, this), this.__cache__ = null, t;
      }, B.prototype.enableOnly = function (e, r) {
        Array.isArray(e) || (e = [e]), this.__rules__.forEach(function (e) {
          e.enabled = !1;
        }), this.enable(e, r);
      }, B.prototype.disable = function (e, r) {
        Array.isArray(e) || (e = [e]);
        var t = [];
        return e.forEach(function (e) {
          var n = this.__find__(e);

          if (n < 0) {
            if (r) return;
            throw new Error("Rules manager: invalid rule name " + e);
          }

          this.__rules__[n].enabled = !1, t.push(e);
        }, this), this.__cache__ = null, t;
      }, B.prototype.getRules = function (e) {
        return null === this.__cache__ && this.__compile__(), this.__cache__[e] || [];
      };
      var N = B,
          O = /\r\n?|\n/g,
          P = /\0/g,
          j = E.arrayReplaceAt;

      function U(e) {
        return /^<\/a\s*>/i.test(e);
      }

      var V = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
          Z = /\((c|tm|r|p)\)/i,
          $ = /\((c|tm|r|p)\)/gi,
          G = {
        c: "©",
        r: "®",
        p: "§",
        tm: "™"
      };

      function H(e, r) {
        return G[r.toLowerCase()];
      }

      function J(e) {
        var r,
            t,
            n = 0;

        for (r = e.length - 1; r >= 0; r--) {
          "text" !== (t = e[r]).type || n || (t.content = t.content.replace($, H)), "link_open" === t.type && "auto" === t.info && n--, "link_close" === t.type && "auto" === t.info && n++;
        }
      }

      function W(e) {
        var r,
            t,
            n = 0;

        for (r = e.length - 1; r >= 0; r--) {
          "text" !== (t = e[r]).type || n || V.test(t.content) && (t.content = t.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), "link_open" === t.type && "auto" === t.info && n--, "link_close" === t.type && "auto" === t.info && n++;
        }
      }

      var Y = E.isWhiteSpace,
          K = E.isPunctChar,
          Q = E.isMdAsciiPunct,
          X = /['"]/,
          ee = /['"]/g,
          re = "’";

      function te(e, r, t) {
        return e.substr(0, r) + t + e.substr(r + 1);
      }

      function ne(e, r) {
        var t, n, s, o, i, a, c, l, u, p, h, f, d, m, g, _, k, b, v, C, y;

        for (v = [], t = 0; t < e.length; t++) {
          for (n = e[t], c = e[t].level, k = v.length - 1; k >= 0 && !(v[k].level <= c); k--) {
            ;
          }

          if (v.length = k + 1, "text" === n.type) {
            s = n.content, i = 0, a = s.length;

            e: for (; i < a && (ee.lastIndex = i, o = ee.exec(s));) {
              if (g = _ = !0, i = o.index + 1, b = "'" === o[0], u = 32, o.index - 1 >= 0) u = s.charCodeAt(o.index - 1);else for (k = t - 1; k >= 0 && "softbreak" !== e[k].type && "hardbreak" !== e[k].type; k--) {
                if (e[k].content) {
                  u = e[k].content.charCodeAt(e[k].content.length - 1);
                  break;
                }
              }
              if (p = 32, i < a) p = s.charCodeAt(i);else for (k = t + 1; k < e.length && "softbreak" !== e[k].type && "hardbreak" !== e[k].type; k++) {
                if (e[k].content) {
                  p = e[k].content.charCodeAt(0);
                  break;
                }
              }

              if (h = Q(u) || K(String.fromCharCode(u)), f = Q(p) || K(String.fromCharCode(p)), d = Y(u), (m = Y(p)) ? g = !1 : f && (d || h || (g = !1)), d ? _ = !1 : h && (m || f || (_ = !1)), 34 === p && '"' === o[0] && u >= 48 && u <= 57 && (_ = g = !1), g && _ && (g = h, _ = f), g || _) {
                if (_) for (k = v.length - 1; k >= 0 && (l = v[k], !(v[k].level < c)); k--) {
                  if (l.single === b && v[k].level === c) {
                    l = v[k], b ? (C = r.md.options.quotes[2], y = r.md.options.quotes[3]) : (C = r.md.options.quotes[0], y = r.md.options.quotes[1]), n.content = te(n.content, o.index, y), e[l.token].content = te(e[l.token].content, l.pos, C), i += y.length - 1, l.token === t && (i += C.length - 1), s = n.content, a = s.length, v.length = k;
                    continue e;
                  }
                }
                g ? v.push({
                  token: t,
                  pos: o.index,
                  single: b,
                  level: c
                }) : _ && b && (n.content = te(n.content, o.index, re));
              } else b && (n.content = te(n.content, o.index, re));
            }
          }
        }
      }

      function se(e, r, t) {
        this.type = e, this.tag = r, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
      }

      se.prototype.attrIndex = function (e) {
        var r, t, n;
        if (!this.attrs) return -1;

        for (r = this.attrs, t = 0, n = r.length; t < n; t++) {
          if (r[t][0] === e) return t;
        }

        return -1;
      }, se.prototype.attrPush = function (e) {
        this.attrs ? this.attrs.push(e) : this.attrs = [e];
      }, se.prototype.attrSet = function (e, r) {
        var t = this.attrIndex(e),
            n = [e, r];
        t < 0 ? this.attrPush(n) : this.attrs[t] = n;
      }, se.prototype.attrGet = function (e) {
        var r = this.attrIndex(e),
            t = null;
        return r >= 0 && (t = this.attrs[r][1]), t;
      }, se.prototype.attrJoin = function (e, r) {
        var t = this.attrIndex(e);
        t < 0 ? this.attrPush([e, r]) : this.attrs[t][1] = this.attrs[t][1] + " " + r;
      };
      var oe = se;

      function ie(e, r, t) {
        this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = r;
      }

      ie.prototype.Token = oe;
      var ae = ie,
          ce = [["normalize", function (e) {
        var r;
        r = (r = e.src.replace(O, "\n")).replace(P, "�"), e.src = r;
      }], ["block", function (e) {
        var r;
        e.inlineMode ? ((r = new e.Token("inline", "", 0)).content = e.src, r.map = [0, 1], r.children = [], e.tokens.push(r)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
      }], ["inline", function (e) {
        var r,
            t,
            n,
            s = e.tokens;

        for (t = 0, n = s.length; t < n; t++) {
          "inline" === (r = s[t]).type && e.md.inline.parse(r.content, e.md, e.env, r.children);
        }
      }], ["linkify", function (e) {
        var r,
            t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f,
            d,
            m,
            g,
            _,
            k,
            b = e.tokens;

        if (e.md.options.linkify) for (t = 0, n = b.length; t < n; t++) {
          if ("inline" === b[t].type && e.md.linkify.pretest(b[t].content)) for (s = b[t].children, f = 0, r = s.length - 1; r >= 0; r--) {
            if ("link_close" !== (i = s[r]).type) {
              if ("html_inline" === i.type && (k = i.content, /^<a[>\s]/i.test(k) && f > 0 && f--, U(i.content) && f++), !(f > 0) && "text" === i.type && e.md.linkify.test(i.content)) {
                for (l = i.content, _ = e.md.linkify.match(l), a = [], h = i.level, p = 0, c = 0; c < _.length; c++) {
                  d = _[c].url, m = e.md.normalizeLink(d), e.md.validateLink(m) && (g = _[c].text, g = _[c].schema ? "mailto:" !== _[c].schema || /^mailto:/i.test(g) ? e.md.normalizeLinkText(g) : e.md.normalizeLinkText("mailto:" + g).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + g).replace(/^http:\/\//, ""), (u = _[c].index) > p && ((o = new e.Token("text", "", 0)).content = l.slice(p, u), o.level = h, a.push(o)), (o = new e.Token("link_open", "a", 1)).attrs = [["href", m]], o.level = h++, o.markup = "linkify", o.info = "auto", a.push(o), (o = new e.Token("text", "", 0)).content = g, o.level = h, a.push(o), (o = new e.Token("link_close", "a", -1)).level = --h, o.markup = "linkify", o.info = "auto", a.push(o), p = _[c].lastIndex);
                }

                p < l.length && ((o = new e.Token("text", "", 0)).content = l.slice(p), o.level = h, a.push(o)), b[t].children = s = j(s, r, a);
              }
            } else for (r--; s[r].level !== i.level && "link_open" !== s[r].type;) {
              r--;
            }
          }
        }
      }], ["replacements", function (e) {
        var r;
        if (e.md.options.typographer) for (r = e.tokens.length - 1; r >= 0; r--) {
          "inline" === e.tokens[r].type && (Z.test(e.tokens[r].content) && J(e.tokens[r].children), V.test(e.tokens[r].content) && W(e.tokens[r].children));
        }
      }], ["smartquotes", function (e) {
        var r;
        if (e.md.options.typographer) for (r = e.tokens.length - 1; r >= 0; r--) {
          "inline" === e.tokens[r].type && X.test(e.tokens[r].content) && ne(e.tokens[r].children, e);
        }
      }]];

      function le() {
        this.ruler = new N();

        for (var e = 0; e < ce.length; e++) {
          this.ruler.push(ce[e][0], ce[e][1]);
        }
      }

      le.prototype.process = function (e) {
        var r, t, n;

        for (n = this.ruler.getRules(""), r = 0, t = n.length; r < t; r++) {
          n[r](e);
        }
      }, le.prototype.State = ae;
      var ue = le,
          pe = E.isSpace;

      function he(e, r) {
        var t = e.bMarks[r] + e.tShift[r],
            n = e.eMarks[r];
        return e.src.substr(t, n - t);
      }

      function fe(e) {
        var r,
            t = [],
            n = 0,
            s = e.length,
            o = !1,
            i = 0,
            a = "";

        for (r = e.charCodeAt(n); n < s;) {
          124 === r && (o ? (a += e.substring(i, n - 1), i = n) : (t.push(a + e.substring(i, n)), a = "", i = n + 1)), o = 92 === r, n++, r = e.charCodeAt(n);
        }

        return t.push(a + e.substring(i)), t;
      }

      var de = E.isSpace,
          me = E.isSpace,
          ge = E.isSpace;

      function _e(e, r) {
        var t, n, s, o;
        return n = e.bMarks[r] + e.tShift[r], s = e.eMarks[r], 42 !== (t = e.src.charCodeAt(n++)) && 45 !== t && 43 !== t ? -1 : n < s && (o = e.src.charCodeAt(n), !ge(o)) ? -1 : n;
      }

      function ke(e, r) {
        var t,
            n = e.bMarks[r] + e.tShift[r],
            s = n,
            o = e.eMarks[r];
        if (s + 1 >= o) return -1;
        if ((t = e.src.charCodeAt(s++)) < 48 || t > 57) return -1;

        for (;;) {
          if (s >= o) return -1;

          if (!((t = e.src.charCodeAt(s++)) >= 48 && t <= 57)) {
            if (41 === t || 46 === t) break;
            return -1;
          }

          if (s - n >= 10) return -1;
        }

        return s < o && (t = e.src.charCodeAt(s), !ge(t)) ? -1 : s;
      }

      var be = E.normalizeReference,
          ve = E.isSpace,
          Ce = E.isSpace,
          ye = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
          Ae = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
          xe = new RegExp("^(?:" + ye + "|" + Ae + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
          we = new RegExp("^(?:" + ye + "|" + Ae + ")"),
          De = {
        HTML_TAG_RE: xe,
        HTML_OPEN_CLOSE_TAG_RE: we
      },
          Ee = De.HTML_OPEN_CLOSE_TAG_RE,
          qe = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"].join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0], [new RegExp(Ee.source + "\\s*$"), /^$/, !1]],
          Se = E.isSpace;

      function Fe(e, r, t, n) {
        var s, o, i, a, c, l, u, p;

        for (this.src = e, this.md = r, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", o = this.src, p = !1, i = a = l = u = 0, c = o.length; a < c; a++) {
          if (s = o.charCodeAt(a), !p) {
            if (Se(s)) {
              l++, 9 === s ? u += 4 - u % 4 : u++;
              continue;
            }

            p = !0;
          }

          10 !== s && a !== c - 1 || (10 !== s && a++, this.bMarks.push(i), this.eMarks.push(a), this.tShift.push(l), this.sCount.push(u), this.bsCount.push(0), p = !1, l = 0, u = 0, i = a + 1);
        }

        this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
      }

      Fe.prototype.push = function (e, r, t) {
        var n = new oe(e, r, t);
        return n.block = !0, t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.tokens.push(n), n;
      }, Fe.prototype.isEmpty = function (e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
      }, Fe.prototype.skipEmptyLines = function (e) {
        for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++) {
          ;
        }

        return e;
      }, Fe.prototype.skipSpaces = function (e) {
        for (var r, t = this.src.length; e < t && (r = this.src.charCodeAt(e), Se(r)); e++) {
          ;
        }

        return e;
      }, Fe.prototype.skipSpacesBack = function (e, r) {
        if (e <= r) return e;

        for (; e > r;) {
          if (!Se(this.src.charCodeAt(--e))) return e + 1;
        }

        return e;
      }, Fe.prototype.skipChars = function (e, r) {
        for (var t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++) {
          ;
        }

        return e;
      }, Fe.prototype.skipCharsBack = function (e, r, t) {
        if (e <= t) return e;

        for (; e > t;) {
          if (r !== this.src.charCodeAt(--e)) return e + 1;
        }

        return e;
      }, Fe.prototype.getLines = function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c,
            l,
            u,
            p = e;
        if (e >= r) return "";

        for (l = new Array(r - e), s = 0; p < r; p++, s++) {
          for (o = 0, u = a = this.bMarks[p], c = p + 1 < r || n ? this.eMarks[p] + 1 : this.eMarks[p]; a < c && o < t;) {
            if (i = this.src.charCodeAt(a), Se(i)) 9 === i ? o += 4 - (o + this.bsCount[p]) % 4 : o++;else {
              if (!(a - u < this.tShift[p])) break;
              o++;
            }
            a++;
          }

          l[s] = o > t ? new Array(o - t + 1).join(" ") + this.src.slice(a, c) : this.src.slice(a, c);
        }

        return l.join("");
      }, Fe.prototype.Token = oe;
      var Le = Fe,
          ze = [["table", function (e, r, t, n) {
        var s, o, i, a, c, l, u, p, h, f, d, m, g, _, k, b;

        if (r + 2 > t) return !1;
        if (l = r + 1, e.sCount[l] < e.blkIndent) return !1;
        if (e.sCount[l] - e.blkIndent >= 4) return !1;
        if ((i = e.bMarks[l] + e.tShift[l]) >= e.eMarks[l]) return !1;
        if (124 !== (s = e.src.charCodeAt(i++)) && 45 !== s && 58 !== s) return !1;

        for (; i < e.eMarks[l];) {
          if (124 !== (s = e.src.charCodeAt(i)) && 45 !== s && 58 !== s && !pe(s)) return !1;
          i++;
        }

        for (o = he(e, r + 1), u = o.split("|"), f = [], a = 0; a < u.length; a++) {
          if (!(d = u[a].trim())) {
            if (0 === a || a === u.length - 1) continue;
            return !1;
          }

          if (!/^:?-+:?$/.test(d)) return !1;
          58 === d.charCodeAt(d.length - 1) ? f.push(58 === d.charCodeAt(0) ? "center" : "right") : 58 === d.charCodeAt(0) ? f.push("left") : f.push("");
        }

        if (-1 === (o = he(e, r).trim()).indexOf("|")) return !1;
        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if ((u = fe(o)).length && "" === u[0] && u.shift(), u.length && "" === u[u.length - 1] && u.pop(), 0 === (p = u.length) || p !== f.length) return !1;
        if (n) return !0;

        for (_ = e.parentType, e.parentType = "table", b = e.md.block.ruler.getRules("blockquote"), (h = e.push("table_open", "table", 1)).map = m = [r, 0], (h = e.push("thead_open", "thead", 1)).map = [r, r + 1], (h = e.push("tr_open", "tr", 1)).map = [r, r + 1], a = 0; a < u.length; a++) {
          h = e.push("th_open", "th", 1), f[a] && (h.attrs = [["style", "text-align:" + f[a]]]), (h = e.push("inline", "", 0)).content = u[a].trim(), h.children = [], h = e.push("th_close", "th", -1);
        }

        for (h = e.push("tr_close", "tr", -1), h = e.push("thead_close", "thead", -1), l = r + 2; l < t && !(e.sCount[l] < e.blkIndent); l++) {
          for (k = !1, a = 0, c = b.length; a < c; a++) {
            if (b[a](e, l, t, !0)) {
              k = !0;
              break;
            }
          }

          if (k) break;
          if (!(o = he(e, l).trim())) break;
          if (e.sCount[l] - e.blkIndent >= 4) break;

          for ((u = fe(o)).length && "" === u[0] && u.shift(), u.length && "" === u[u.length - 1] && u.pop(), l === r + 2 && ((h = e.push("tbody_open", "tbody", 1)).map = g = [r + 2, 0]), (h = e.push("tr_open", "tr", 1)).map = [l, l + 1], a = 0; a < p; a++) {
            h = e.push("td_open", "td", 1), f[a] && (h.attrs = [["style", "text-align:" + f[a]]]), (h = e.push("inline", "", 0)).content = u[a] ? u[a].trim() : "", h.children = [], h = e.push("td_close", "td", -1);
          }

          h = e.push("tr_close", "tr", -1);
        }

        return g && (h = e.push("tbody_close", "tbody", -1), g[1] = l), h = e.push("table_close", "table", -1), m[1] = l, e.parentType = _, e.line = l, !0;
      }, ["paragraph", "reference"]], ["code", function (e, r, t) {
        var n, s, o;
        if (e.sCount[r] - e.blkIndent < 4) return !1;

        for (s = n = r + 1; n < t;) {
          if (e.isEmpty(n)) n++;else {
            if (!(e.sCount[n] - e.blkIndent >= 4)) break;
            s = ++n;
          }
        }

        return e.line = s, (o = e.push("code_block", "code", 0)).content = e.getLines(r, s, 4 + e.blkIndent, !0), o.map = [r, e.line], !0;
      }], ["fence", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c,
            l,
            u,
            p = !1,
            h = e.bMarks[r] + e.tShift[r],
            f = e.eMarks[r];
        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (h + 3 > f) return !1;
        if (126 !== (s = e.src.charCodeAt(h)) && 96 !== s) return !1;
        if (c = h, h = e.skipChars(h, s), (o = h - c) < 3) return !1;
        if (u = e.src.slice(c, h), i = e.src.slice(h, f), 96 === s && i.indexOf(String.fromCharCode(s)) >= 0) return !1;
        if (n) return !0;

        for (a = r; !(++a >= t || (h = c = e.bMarks[a] + e.tShift[a], f = e.eMarks[a], h < f && e.sCount[a] < e.blkIndent));) {
          if (e.src.charCodeAt(h) === s && !(e.sCount[a] - e.blkIndent >= 4 || (h = e.skipChars(h, s)) - c < o || (h = e.skipSpaces(h)) < f)) {
            p = !0;
            break;
          }
        }

        return o = e.sCount[r], e.line = a + (p ? 1 : 0), (l = e.push("fence", "code", 0)).info = i, l.content = e.getLines(r + 1, a, o, !0), l.markup = u, l.map = [r, e.line], !0;
      }, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f,
            d,
            m,
            g,
            _,
            k,
            b,
            v,
            C,
            y,
            A,
            x = e.lineMax,
            w = e.bMarks[r] + e.tShift[r],
            D = e.eMarks[r];

        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (62 !== e.src.charCodeAt(w++)) return !1;
        if (n) return !0;

        for (a = h = e.sCount[r] + 1, 32 === e.src.charCodeAt(w) ? (w++, a++, h++, s = !1, b = !0) : 9 === e.src.charCodeAt(w) ? (b = !0, (e.bsCount[r] + h) % 4 == 3 ? (w++, a++, h++, s = !1) : s = !0) : b = !1, f = [e.bMarks[r]], e.bMarks[r] = w; w < D && (o = e.src.charCodeAt(w), de(o));) {
          9 === o ? h += 4 - (h + e.bsCount[r] + (s ? 1 : 0)) % 4 : h++, w++;
        }

        for (d = [e.bsCount[r]], e.bsCount[r] = e.sCount[r] + 1 + (b ? 1 : 0), l = w >= D, _ = [e.sCount[r]], e.sCount[r] = h - a, k = [e.tShift[r]], e.tShift[r] = w - e.bMarks[r], C = e.md.block.ruler.getRules("blockquote"), g = e.parentType, e.parentType = "blockquote", p = r + 1; p < t && (A = e.sCount[p] < e.blkIndent, w = e.bMarks[p] + e.tShift[p], D = e.eMarks[p], !(w >= D)); p++) {
          if (62 !== e.src.charCodeAt(w++) || A) {
            if (l) break;

            for (v = !1, i = 0, c = C.length; i < c; i++) {
              if (C[i](e, p, t, !0)) {
                v = !0;
                break;
              }
            }

            if (v) {
              e.lineMax = p, 0 !== e.blkIndent && (f.push(e.bMarks[p]), d.push(e.bsCount[p]), k.push(e.tShift[p]), _.push(e.sCount[p]), e.sCount[p] -= e.blkIndent);
              break;
            }

            f.push(e.bMarks[p]), d.push(e.bsCount[p]), k.push(e.tShift[p]), _.push(e.sCount[p]), e.sCount[p] = -1;
          } else {
            for (a = h = e.sCount[p] + 1, 32 === e.src.charCodeAt(w) ? (w++, a++, h++, s = !1, b = !0) : 9 === e.src.charCodeAt(w) ? (b = !0, (e.bsCount[p] + h) % 4 == 3 ? (w++, a++, h++, s = !1) : s = !0) : b = !1, f.push(e.bMarks[p]), e.bMarks[p] = w; w < D && (o = e.src.charCodeAt(w), de(o));) {
              9 === o ? h += 4 - (h + e.bsCount[p] + (s ? 1 : 0)) % 4 : h++, w++;
            }

            l = w >= D, d.push(e.bsCount[p]), e.bsCount[p] = e.sCount[p] + 1 + (b ? 1 : 0), _.push(e.sCount[p]), e.sCount[p] = h - a, k.push(e.tShift[p]), e.tShift[p] = w - e.bMarks[p];
          }
        }

        for (m = e.blkIndent, e.blkIndent = 0, (y = e.push("blockquote_open", "blockquote", 1)).markup = ">", y.map = u = [r, 0], e.md.block.tokenize(e, r, p), (y = e.push("blockquote_close", "blockquote", -1)).markup = ">", e.lineMax = x, e.parentType = g, u[1] = e.line, i = 0; i < k.length; i++) {
          e.bMarks[i + r] = f[i], e.tShift[i + r] = k[i], e.sCount[i + r] = _[i], e.bsCount[i + r] = d[i];
        }

        return e.blkIndent = m, !0;
      }, ["paragraph", "reference", "blockquote", "list"]], ["hr", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c = e.bMarks[r] + e.tShift[r],
            l = e.eMarks[r];
        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (42 !== (s = e.src.charCodeAt(c++)) && 45 !== s && 95 !== s) return !1;

        for (o = 1; c < l;) {
          if ((i = e.src.charCodeAt(c++)) !== s && !me(i)) return !1;
          i === s && o++;
        }

        return !(o < 3) && (!!n || (e.line = r + 1, (a = e.push("hr", "hr", 0)).map = [r, e.line], a.markup = Array(o + 1).join(String.fromCharCode(s)), !0));
      }, ["paragraph", "reference", "blockquote", "list"]], ["list", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f,
            d,
            m,
            g,
            _,
            k,
            b,
            v,
            C,
            y,
            A,
            x,
            w,
            D,
            E,
            q,
            S,
            F,
            L,
            z = !1,
            T = !0;

        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (e.listIndent >= 0 && e.sCount[r] - e.listIndent >= 4 && e.sCount[r] < e.blkIndent) return !1;

        if (n && "paragraph" === e.parentType && e.tShift[r] >= e.blkIndent && (z = !0), (D = ke(e, r)) >= 0) {
          if (u = !0, q = e.bMarks[r] + e.tShift[r], g = Number(e.src.substr(q, D - q - 1)), z && 1 !== g) return !1;
        } else {
          if (!((D = _e(e, r)) >= 0)) return !1;
          u = !1;
        }

        if (z && e.skipSpaces(D) >= e.eMarks[r]) return !1;
        if (m = e.src.charCodeAt(D - 1), n) return !0;

        for (d = e.tokens.length, u ? (L = e.push("ordered_list_open", "ol", 1), 1 !== g && (L.attrs = [["start", g]])) : L = e.push("bullet_list_open", "ul", 1), L.map = f = [r, 0], L.markup = String.fromCharCode(m), k = r, E = !1, F = e.md.block.ruler.getRules("list"), C = e.parentType, e.parentType = "list"; k < t;) {
          for (w = D, _ = e.eMarks[k], l = b = e.sCount[k] + D - (e.bMarks[r] + e.tShift[r]); w < _;) {
            if (9 === (s = e.src.charCodeAt(w))) b += 4 - (b + e.bsCount[k]) % 4;else {
              if (32 !== s) break;
              b++;
            }
            w++;
          }

          if ((c = (o = w) >= _ ? 1 : b - l) > 4 && (c = 1), a = l + c, (L = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(m), L.map = p = [r, 0], x = e.tight, A = e.tShift[r], y = e.sCount[r], v = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = a, e.tight = !0, e.tShift[r] = o - e.bMarks[r], e.sCount[r] = b, o >= _ && e.isEmpty(r + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, r, t, !0), e.tight && !E || (T = !1), E = e.line - r > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = v, e.tShift[r] = A, e.sCount[r] = y, e.tight = x, (L = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(m), k = r = e.line, p[1] = k, o = e.bMarks[r], k >= t) break;
          if (e.sCount[k] < e.blkIndent) break;
          if (e.sCount[r] - e.blkIndent >= 4) break;

          for (S = !1, i = 0, h = F.length; i < h; i++) {
            if (F[i](e, k, t, !0)) {
              S = !0;
              break;
            }
          }

          if (S) break;

          if (u) {
            if ((D = ke(e, k)) < 0) break;
          } else if ((D = _e(e, k)) < 0) break;

          if (m !== e.src.charCodeAt(D - 1)) break;
        }

        return (L = u ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(m), f[1] = k, e.line = k, e.parentType = C, T && function (e, r) {
          var t,
              n,
              s = e.level + 2;

          for (t = r + 2, n = e.tokens.length - 2; t < n; t++) {
            e.tokens[t].level === s && "paragraph_open" === e.tokens[t].type && (e.tokens[t + 2].hidden = !0, e.tokens[t].hidden = !0, t += 2);
          }
        }(e, d), !0;
      }, ["paragraph", "reference", "blockquote"]], ["reference", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f,
            d,
            m,
            g,
            _,
            k,
            b,
            v = 0,
            C = e.bMarks[r] + e.tShift[r],
            y = e.eMarks[r],
            A = r + 1;

        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (91 !== e.src.charCodeAt(C)) return !1;

        for (; ++C < y;) {
          if (93 === e.src.charCodeAt(C) && 92 !== e.src.charCodeAt(C - 1)) {
            if (C + 1 === y) return !1;
            if (58 !== e.src.charCodeAt(C + 1)) return !1;
            break;
          }
        }

        for (a = e.lineMax, k = e.md.block.ruler.getRules("reference"), f = e.parentType, e.parentType = "reference"; A < a && !e.isEmpty(A); A++) {
          if (!(e.sCount[A] - e.blkIndent > 3 || e.sCount[A] < 0)) {
            for (_ = !1, l = 0, u = k.length; l < u; l++) {
              if (k[l](e, A, a, !0)) {
                _ = !0;
                break;
              }
            }

            if (_) break;
          }
        }

        for (g = e.getLines(r, A, e.blkIndent, !1).trim(), y = g.length, C = 1; C < y; C++) {
          if (91 === (s = g.charCodeAt(C))) return !1;

          if (93 === s) {
            h = C;
            break;
          }

          10 === s ? v++ : 92 === s && ++C < y && 10 === g.charCodeAt(C) && v++;
        }

        if (h < 0 || 58 !== g.charCodeAt(h + 1)) return !1;

        for (C = h + 2; C < y; C++) {
          if (10 === (s = g.charCodeAt(C))) v++;else if (!ve(s)) break;
        }

        if (!(d = e.md.helpers.parseLinkDestination(g, C, y)).ok) return !1;
        if (c = e.md.normalizeLink(d.str), !e.md.validateLink(c)) return !1;

        for (C = d.pos, v += d.lines, o = C, i = v, m = C; C < y; C++) {
          if (10 === (s = g.charCodeAt(C))) v++;else if (!ve(s)) break;
        }

        for (d = e.md.helpers.parseLinkTitle(g, C, y), C < y && m !== C && d.ok ? (b = d.str, C = d.pos, v += d.lines) : (b = "", C = o, v = i); C < y && (s = g.charCodeAt(C), ve(s));) {
          C++;
        }

        if (C < y && 10 !== g.charCodeAt(C) && b) for (b = "", C = o, v = i; C < y && (s = g.charCodeAt(C), ve(s));) {
          C++;
        }
        return !(C < y && 10 !== g.charCodeAt(C)) && !!(p = be(g.slice(1, h))) && (!!n || (void 0 === e.env.references && (e.env.references = {}), void 0 === e.env.references[p] && (e.env.references[p] = {
          title: b,
          href: c
        }), e.parentType = f, e.line = r + v + 1, !0));
      }], ["heading", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c = e.bMarks[r] + e.tShift[r],
            l = e.eMarks[r];
        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (35 !== (s = e.src.charCodeAt(c)) || c >= l) return !1;

        for (o = 1, s = e.src.charCodeAt(++c); 35 === s && c < l && o <= 6;) {
          o++, s = e.src.charCodeAt(++c);
        }

        return !(o > 6 || c < l && !Ce(s)) && (!!n || (l = e.skipSpacesBack(l, c), (i = e.skipCharsBack(l, 35, c)) > c && Ce(e.src.charCodeAt(i - 1)) && (l = i), e.line = r + 1, (a = e.push("heading_open", "h" + String(o), 1)).markup = "########".slice(0, o), a.map = [r, e.line], (a = e.push("inline", "", 0)).content = e.src.slice(c, l).trim(), a.map = [r, e.line], a.children = [], (a = e.push("heading_close", "h" + String(o), -1)).markup = "########".slice(0, o), !0));
      }, ["paragraph", "reference", "blockquote"]], ["lheading", function (e, r, t) {
        var n,
            s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f = r + 1,
            d = e.md.block.ruler.getRules("paragraph");
        if (e.sCount[r] - e.blkIndent >= 4) return !1;

        for (h = e.parentType, e.parentType = "paragraph"; f < t && !e.isEmpty(f); f++) {
          if (!(e.sCount[f] - e.blkIndent > 3)) {
            if (e.sCount[f] >= e.blkIndent && (c = e.bMarks[f] + e.tShift[f], l = e.eMarks[f], c < l && (45 === (p = e.src.charCodeAt(c)) || 61 === p) && (c = e.skipChars(c, p), (c = e.skipSpaces(c)) >= l))) {
              u = 61 === p ? 1 : 2;
              break;
            }

            if (!(e.sCount[f] < 0)) {
              for (s = !1, o = 0, i = d.length; o < i; o++) {
                if (d[o](e, f, t, !0)) {
                  s = !0;
                  break;
                }
              }

              if (s) break;
            }
          }
        }

        return !!u && (n = e.getLines(r, f, e.blkIndent, !1).trim(), e.line = f + 1, (a = e.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(p), a.map = [r, e.line], (a = e.push("inline", "", 0)).content = n, a.map = [r, e.line - 1], a.children = [], (a = e.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(p), e.parentType = h, !0);
      }], ["html_block", function (e, r, t, n) {
        var s,
            o,
            i,
            a,
            c = e.bMarks[r] + e.tShift[r],
            l = e.eMarks[r];
        if (e.sCount[r] - e.blkIndent >= 4) return !1;
        if (!e.md.options.html) return !1;
        if (60 !== e.src.charCodeAt(c)) return !1;

        for (a = e.src.slice(c, l), s = 0; s < qe.length && !qe[s][0].test(a); s++) {
          ;
        }

        if (s === qe.length) return !1;
        if (n) return qe[s][2];
        if (o = r + 1, !qe[s][1].test(a)) for (; o < t && !(e.sCount[o] < e.blkIndent); o++) {
          if (c = e.bMarks[o] + e.tShift[o], l = e.eMarks[o], a = e.src.slice(c, l), qe[s][1].test(a)) {
            0 !== a.length && o++;
            break;
          }
        }
        return e.line = o, (i = e.push("html_block", "", 0)).map = [r, o], i.content = e.getLines(r, o, e.blkIndent, !0), !0;
      }, ["paragraph", "reference", "blockquote"]], ["paragraph", function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c = r + 1,
            l = e.md.block.ruler.getRules("paragraph"),
            u = e.lineMax;

        for (a = e.parentType, e.parentType = "paragraph"; c < u && !e.isEmpty(c); c++) {
          if (!(e.sCount[c] - e.blkIndent > 3 || e.sCount[c] < 0)) {
            for (n = !1, s = 0, o = l.length; s < o; s++) {
              if (l[s](e, c, u, !0)) {
                n = !0;
                break;
              }
            }

            if (n) break;
          }
        }

        return t = e.getLines(r, c, e.blkIndent, !1).trim(), e.line = c, (i = e.push("paragraph_open", "p", 1)).map = [r, e.line], (i = e.push("inline", "", 0)).content = t, i.map = [r, e.line], i.children = [], i = e.push("paragraph_close", "p", -1), e.parentType = a, !0;
      }]];

      function Te() {
        this.ruler = new N();

        for (var e = 0; e < ze.length; e++) {
          this.ruler.push(ze[e][0], ze[e][1], {
            alt: (ze[e][2] || []).slice()
          });
        }
      }

      Te.prototype.tokenize = function (e, r, t) {
        for (var n, s = this.ruler.getRules(""), o = s.length, i = r, a = !1, c = e.md.options.maxNesting; i < t && (e.line = i = e.skipEmptyLines(i), !(i >= t)) && !(e.sCount[i] < e.blkIndent);) {
          if (e.level >= c) {
            e.line = t;
            break;
          }

          for (n = 0; n < o && !s[n](e, i, t, !1); n++) {
            ;
          }

          e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), (i = e.line) < t && e.isEmpty(i) && (a = !0, i++, e.line = i);
        }
      }, Te.prototype.parse = function (e, r, t, n) {
        var s;
        e && (s = new this.State(e, r, t, n), this.tokenize(s, s.line, s.lineMax));
      }, Te.prototype.State = Le;
      var Ie = Te;

      function Me(e) {
        switch (e) {
          case 10:
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 42:
          case 43:
          case 45:
          case 58:
          case 60:
          case 61:
          case 62:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 125:
          case 126:
            return !0;

          default:
            return !1;
        }
      }

      for (var Re = E.isSpace, Be = E.isSpace, Ne = [], Oe = 0; Oe < 256; Oe++) {
        Ne.push(0);
      }

      function Pe(e, r) {
        var t,
            n,
            s,
            o,
            i,
            a = [],
            c = r.length;

        for (t = 0; t < c; t++) {
          126 === (s = r[t]).marker && -1 !== s.end && (o = r[s.end], (i = e.tokens[s.token]).type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", (i = e.tokens[o.token]).type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", "text" === e.tokens[o.token - 1].type && "~" === e.tokens[o.token - 1].content && a.push(o.token - 1));
        }

        for (; a.length;) {
          for (t = a.pop(), n = t + 1; n < e.tokens.length && "s_close" === e.tokens[n].type;) {
            n++;
          }

          t !== --n && (i = e.tokens[n], e.tokens[n] = e.tokens[t], e.tokens[t] = i);
        }
      }

      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
        Ne[e.charCodeAt(0)] = 1;
      });
      var je = {
        tokenize: function tokenize(e, r) {
          var t,
              n,
              s,
              o,
              i = e.pos,
              a = e.src.charCodeAt(i);
          if (r) return !1;
          if (126 !== a) return !1;
          if (n = e.scanDelims(e.pos, !0), s = n.length, o = String.fromCharCode(a), s < 2) return !1;

          for (s % 2 && (e.push("text", "", 0).content = o, s--), t = 0; t < s; t += 2) {
            e.push("text", "", 0).content = o + o, e.delimiters.push({
              marker: a,
              length: 0,
              jump: t / 2,
              token: e.tokens.length - 1,
              end: -1,
              open: n.can_open,
              close: n.can_close
            });
          }

          return e.pos += n.length, !0;
        },
        postProcess: function postProcess(e) {
          var r,
              t = e.tokens_meta,
              n = e.tokens_meta.length;

          for (Pe(e, e.delimiters), r = 0; r < n; r++) {
            t[r] && t[r].delimiters && Pe(e, t[r].delimiters);
          }
        }
      };

      function Ue(e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c = r.length;

        for (t = c - 1; t >= 0; t--) {
          95 !== (n = r[t]).marker && 42 !== n.marker || -1 !== n.end && (s = r[n.end], a = t > 0 && r[t - 1].end === n.end + 1 && r[t - 1].token === n.token - 1 && r[n.end + 1].token === s.token + 1 && r[t - 1].marker === n.marker, i = String.fromCharCode(n.marker), (o = e.tokens[n.token]).type = a ? "strong_open" : "em_open", o.tag = a ? "strong" : "em", o.nesting = 1, o.markup = a ? i + i : i, o.content = "", (o = e.tokens[s.token]).type = a ? "strong_close" : "em_close", o.tag = a ? "strong" : "em", o.nesting = -1, o.markup = a ? i + i : i, o.content = "", a && (e.tokens[r[t - 1].token].content = "", e.tokens[r[n.end + 1].token].content = "", t--));
        }
      }

      var Ve = {
        tokenize: function tokenize(e, r) {
          var t,
              n,
              s = e.pos,
              o = e.src.charCodeAt(s);
          if (r) return !1;
          if (95 !== o && 42 !== o) return !1;

          for (n = e.scanDelims(e.pos, 42 === o), t = 0; t < n.length; t++) {
            e.push("text", "", 0).content = String.fromCharCode(o), e.delimiters.push({
              marker: o,
              length: n.length,
              jump: t,
              token: e.tokens.length - 1,
              end: -1,
              open: n.can_open,
              close: n.can_close
            });
          }

          return e.pos += n.length, !0;
        },
        postProcess: function postProcess(e) {
          var r,
              t = e.tokens_meta,
              n = e.tokens_meta.length;

          for (Ue(e, e.delimiters), r = 0; r < n; r++) {
            t[r] && t[r].delimiters && Ue(e, t[r].delimiters);
          }
        }
      },
          Ze = E.normalizeReference,
          $e = E.isSpace,
          Ge = E.normalizeReference,
          He = E.isSpace,
          Je = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
          We = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,
          Ye = De.HTML_TAG_RE,
          Ke = E.has,
          Qe = E.isValidEntityCode,
          Xe = E.fromCodePoint,
          er = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
          rr = /^&([a-z][a-z0-9]{1,31});/i;

      function tr(e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u = {},
            p = r.length;

        for (t = 0; t < p; t++) {
          if ((s = r[t]).length = s.length || 0, s.close) {
            for (u.hasOwnProperty(s.marker) || (u[s.marker] = [-1, -1, -1]), i = u[s.marker][s.length % 3], (n = t - s.jump - 1) < -1 && (n = -1), a = n; n > i; n -= o.jump + 1) {
              if ((o = r[n]).marker === s.marker && o.open && o.end < 0 && (c = !1, (o.close || s.open) && (o.length + s.length) % 3 == 0 && (o.length % 3 == 0 && s.length % 3 == 0 || (c = !0)), !c)) {
                l = n > 0 && !r[n - 1].open ? r[n - 1].jump + 1 : 0, s.jump = t - n + l, s.open = !1, o.end = t, o.jump = l, o.close = !1, a = -1;
                break;
              }
            }

            -1 !== a && (u[s.marker][(s.length || 0) % 3] = a);
          }
        }
      }

      var nr = E.isWhiteSpace,
          sr = E.isPunctChar,
          or = E.isMdAsciiPunct;

      function ir(e, r, t, n) {
        this.src = e, this.env = t, this.md = r, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1;
      }

      ir.prototype.pushPending = function () {
        var e = new oe("text", "", 0);
        return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
      }, ir.prototype.push = function (e, r, t) {
        this.pending && this.pushPending();
        var n = new oe(e, r, t),
            s = null;
        return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s = {
          delimiters: this.delimiters
        }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(s), n;
      }, ir.prototype.scanDelims = function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u,
            p = e,
            h = !0,
            f = !0,
            d = this.posMax,
            m = this.src.charCodeAt(e);

        for (t = e > 0 ? this.src.charCodeAt(e - 1) : 32; p < d && this.src.charCodeAt(p) === m;) {
          p++;
        }

        return s = p - e, n = p < d ? this.src.charCodeAt(p) : 32, c = or(t) || sr(String.fromCharCode(t)), u = or(n) || sr(String.fromCharCode(n)), a = nr(t), (l = nr(n)) ? h = !1 : u && (a || c || (h = !1)), a ? f = !1 : c && (l || u || (f = !1)), r ? (o = h, i = f) : (o = h && (!f || c), i = f && (!h || u)), {
          can_open: o,
          can_close: i,
          length: s
        };
      }, ir.prototype.Token = oe;
      var ar = ir,
          cr = [["text", function (e, r) {
        for (var t = e.pos; t < e.posMax && !Me(e.src.charCodeAt(t));) {
          t++;
        }

        return t !== e.pos && (r || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0);
      }], ["newline", function (e, r) {
        var t,
            n,
            s = e.pos;
        if (10 !== e.src.charCodeAt(s)) return !1;

        for (t = e.pending.length - 1, n = e.posMax, r || (t >= 0 && 32 === e.pending.charCodeAt(t) ? t >= 1 && 32 === e.pending.charCodeAt(t - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), s++; s < n && Re(e.src.charCodeAt(s));) {
          s++;
        }

        return e.pos = s, !0;
      }], ["escape", function (e, r) {
        var t,
            n = e.pos,
            s = e.posMax;
        if (92 !== e.src.charCodeAt(n)) return !1;

        if (++n < s) {
          if ((t = e.src.charCodeAt(n)) < 256 && 0 !== Ne[t]) return r || (e.pending += e.src[n]), e.pos += 2, !0;

          if (10 === t) {
            for (r || e.push("hardbreak", "br", 0), n++; n < s && (t = e.src.charCodeAt(n), Be(t));) {
              n++;
            }

            return e.pos = n, !0;
          }
        }

        return r || (e.pending += "\\"), e.pos++, !0;
      }], ["backticks", function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u = e.pos;
        if (96 !== e.src.charCodeAt(u)) return !1;

        for (t = u, u++, n = e.posMax; u < n && 96 === e.src.charCodeAt(u);) {
          u++;
        }

        if (s = e.src.slice(t, u), c = s.length, e.backticksScanned && (e.backticks[c] || 0) <= t) return r || (e.pending += s), e.pos += c, !0;

        for (i = a = u; -1 !== (i = e.src.indexOf("`", a));) {
          for (a = i + 1; a < n && 96 === e.src.charCodeAt(a);) {
            a++;
          }

          if ((l = a - i) === c) return r || ((o = e.push("code_inline", "code", 0)).markup = s, o.content = e.src.slice(u, i).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = a, !0;
          e.backticks[l] = i;
        }

        return e.backticksScanned = !0, r || (e.pending += s), e.pos += c, !0;
      }], ["strikethrough", je.tokenize], ["emphasis", Ve.tokenize], ["link", function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u = "",
            p = "",
            h = e.pos,
            f = e.posMax,
            d = e.pos,
            m = !0;
        if (91 !== e.src.charCodeAt(e.pos)) return !1;
        if (i = e.pos + 1, (o = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0) return !1;

        if ((a = o + 1) < f && 40 === e.src.charCodeAt(a)) {
          for (m = !1, a++; a < f && (n = e.src.charCodeAt(a), $e(n) || 10 === n); a++) {
            ;
          }

          if (a >= f) return !1;

          if (d = a, (c = e.md.helpers.parseLinkDestination(e.src, a, e.posMax)).ok) {
            for (u = e.md.normalizeLink(c.str), e.md.validateLink(u) ? a = c.pos : u = "", d = a; a < f && (n = e.src.charCodeAt(a), $e(n) || 10 === n); a++) {
              ;
            }

            if (c = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < f && d !== a && c.ok) for (p = c.str, a = c.pos; a < f && (n = e.src.charCodeAt(a), $e(n) || 10 === n); a++) {
              ;
            }
          }

          (a >= f || 41 !== e.src.charCodeAt(a)) && (m = !0), a++;
        }

        if (m) {
          if (void 0 === e.env.references) return !1;
          if (a < f && 91 === e.src.charCodeAt(a) ? (d = a + 1, (a = e.md.helpers.parseLinkLabel(e, a)) >= 0 ? s = e.src.slice(d, a++) : a = o + 1) : a = o + 1, s || (s = e.src.slice(i, o)), !(l = e.env.references[Ze(s)])) return e.pos = h, !1;
          u = l.href, p = l.title;
        }

        return r || (e.pos = i, e.posMax = o, e.push("link_open", "a", 1).attrs = t = [["href", u]], p && t.push(["title", p]), e.md.inline.tokenize(e), e.push("link_close", "a", -1)), e.pos = a, e.posMax = f, !0;
      }], ["image", function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f,
            d,
            m = "",
            g = e.pos,
            _ = e.posMax;
        if (33 !== e.src.charCodeAt(e.pos)) return !1;
        if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
        if (a = e.pos + 2, (i = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0) return !1;

        if ((c = i + 1) < _ && 40 === e.src.charCodeAt(c)) {
          for (c++; c < _ && (n = e.src.charCodeAt(c), He(n) || 10 === n); c++) {
            ;
          }

          if (c >= _) return !1;

          for (d = c, (u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok && (m = e.md.normalizeLink(u.str), e.md.validateLink(m) ? c = u.pos : m = ""), d = c; c < _ && (n = e.src.charCodeAt(c), He(n) || 10 === n); c++) {
            ;
          }

          if (u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < _ && d !== c && u.ok) for (p = u.str, c = u.pos; c < _ && (n = e.src.charCodeAt(c), He(n) || 10 === n); c++) {
            ;
          } else p = "";
          if (c >= _ || 41 !== e.src.charCodeAt(c)) return e.pos = g, !1;
          c++;
        } else {
          if (void 0 === e.env.references) return !1;
          if (c < _ && 91 === e.src.charCodeAt(c) ? (d = c + 1, (c = e.md.helpers.parseLinkLabel(e, c)) >= 0 ? o = e.src.slice(d, c++) : c = i + 1) : c = i + 1, o || (o = e.src.slice(a, i)), !(l = e.env.references[Ge(o)])) return e.pos = g, !1;
          m = l.href, p = l.title;
        }

        return r || (s = e.src.slice(a, i), e.md.inline.parse(s, e.md, e.env, f = []), (h = e.push("image", "img", 0)).attrs = t = [["src", m], ["alt", ""]], h.children = f, h.content = s, p && t.push(["title", p])), e.pos = c, e.posMax = _, !0;
      }], ["autolink", function (e, r) {
        var t,
            n,
            s,
            o,
            i,
            a,
            c = e.pos;
        if (60 !== e.src.charCodeAt(c)) return !1;

        for (i = e.pos, a = e.posMax;;) {
          if (++c >= a) return !1;
          if (60 === (o = e.src.charCodeAt(c))) return !1;
          if (62 === o) break;
        }

        return t = e.src.slice(i + 1, c), We.test(t) ? (n = e.md.normalizeLink(t), !!e.md.validateLink(n) && (r || ((s = e.push("link_open", "a", 1)).attrs = [["href", n]], s.markup = "autolink", s.info = "auto", (s = e.push("text", "", 0)).content = e.md.normalizeLinkText(t), (s = e.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), e.pos += t.length + 2, !0)) : !!Je.test(t) && (n = e.md.normalizeLink("mailto:" + t), !!e.md.validateLink(n) && (r || ((s = e.push("link_open", "a", 1)).attrs = [["href", n]], s.markup = "autolink", s.info = "auto", (s = e.push("text", "", 0)).content = e.md.normalizeLinkText(t), (s = e.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), e.pos += t.length + 2, !0));
      }], ["html_inline", function (e, r) {
        var t,
            n,
            s,
            o = e.pos;
        return !!e.md.options.html && (s = e.posMax, !(60 !== e.src.charCodeAt(o) || o + 2 >= s) && !(33 !== (t = e.src.charCodeAt(o + 1)) && 63 !== t && 47 !== t && !function (e) {
          var r = 32 | e;
          return r >= 97 && r <= 122;
        }(t)) && !!(n = e.src.slice(o).match(Ye)) && (r || (e.push("html_inline", "", 0).content = e.src.slice(o, o + n[0].length)), e.pos += n[0].length, !0));
      }], ["entity", function (r, t) {
        var n,
            s,
            o = r.pos,
            i = r.posMax;
        if (38 !== r.src.charCodeAt(o)) return !1;
        if (o + 1 < i) if (35 === r.src.charCodeAt(o + 1)) {
          if (s = r.src.slice(o).match(er)) return t || (n = "x" === s[1][0].toLowerCase() ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), r.pending += Qe(n) ? Xe(n) : Xe(65533)), r.pos += s[0].length, !0;
        } else if ((s = r.src.slice(o).match(rr)) && Ke(e, s[1])) return t || (r.pending += e[s[1]]), r.pos += s[0].length, !0;
        return t || (r.pending += "&"), r.pos++, !0;
      }]],
          lr = [["balance_pairs", function (e) {
        var r,
            t = e.tokens_meta,
            n = e.tokens_meta.length;

        for (tr(0, e.delimiters), r = 0; r < n; r++) {
          t[r] && t[r].delimiters && tr(0, t[r].delimiters);
        }
      }], ["strikethrough", je.postProcess], ["emphasis", Ve.postProcess], ["text_collapse", function (e) {
        var r,
            t,
            n = 0,
            s = e.tokens,
            o = e.tokens.length;

        for (r = t = 0; r < o; r++) {
          s[r].nesting < 0 && n--, s[r].level = n, s[r].nesting > 0 && n++, "text" === s[r].type && r + 1 < o && "text" === s[r + 1].type ? s[r + 1].content = s[r].content + s[r + 1].content : (r !== t && (s[t] = s[r]), t++);
        }

        r !== t && (s.length = t);
      }]];

      function ur() {
        var e;

        for (this.ruler = new N(), e = 0; e < cr.length; e++) {
          this.ruler.push(cr[e][0], cr[e][1]);
        }

        for (this.ruler2 = new N(), e = 0; e < lr.length; e++) {
          this.ruler2.push(lr[e][0], lr[e][1]);
        }
      }

      ur.prototype.skipToken = function (e) {
        var r,
            t,
            n = e.pos,
            s = this.ruler.getRules(""),
            o = s.length,
            i = e.md.options.maxNesting,
            a = e.cache;

        if (void 0 === a[n]) {
          if (e.level < i) for (t = 0; t < o && (e.level++, r = s[t](e, !0), e.level--, !r); t++) {
            ;
          } else e.pos = e.posMax;
          r || e.pos++, a[n] = e.pos;
        } else e.pos = a[n];
      }, ur.prototype.tokenize = function (e) {
        for (var r, t, n = this.ruler.getRules(""), s = n.length, o = e.posMax, i = e.md.options.maxNesting; e.pos < o;) {
          if (e.level < i) for (t = 0; t < s && !(r = n[t](e, !1)); t++) {
            ;
          }

          if (r) {
            if (e.pos >= o) break;
          } else e.pending += e.src[e.pos++];
        }

        e.pending && e.pushPending();
      }, ur.prototype.parse = function (e, r, t, n) {
        var s,
            o,
            i,
            a = new this.State(e, r, t, n);

        for (this.tokenize(a), o = this.ruler2.getRules(""), i = o.length, s = 0; s < i; s++) {
          o[s](a);
        }
      }, ur.prototype.State = ar;

      var pr = ur,
          hr = function hr(e) {
        var t = {};
        return t.src_Any = A.source, t.src_Cc = x.source, t.src_Z = w.source, t.src_P = r.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|"), t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!+(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
      };

      function fr(e) {
        var r = Array.prototype.slice.call(arguments, 1);
        return r.forEach(function (r) {
          r && Object.keys(r).forEach(function (t) {
            e[t] = r[t];
          });
        }), e;
      }

      function dr(e) {
        return Object.prototype.toString.call(e);
      }

      function mr(e) {
        return "[object Function]" === dr(e);
      }

      function gr(e) {
        return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }

      var _r = {
        fuzzyLink: !0,
        fuzzyEmail: !0,
        fuzzyIP: !1
      },
          kr = {
        "http:": {
          validate: function validate(e, r, t) {
            var n = e.slice(r);
            return t.re.http || (t.re.http = new RegExp("^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path, "i")), t.re.http.test(n) ? n.match(t.re.http)[0].length : 0;
          }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
          validate: function validate(e, r, t) {
            var n = e.slice(r);
            return t.re.no_http || (t.re.no_http = new RegExp("^" + t.re.src_auth + "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path, "i")), t.re.no_http.test(n) ? r >= 3 && ":" === e[r - 3] ? 0 : r >= 3 && "/" === e[r - 3] ? 0 : n.match(t.re.no_http)[0].length : 0;
          }
        },
        "mailto:": {
          validate: function validate(e, r, t) {
            var n = e.slice(r);
            return t.re.mailto || (t.re.mailto = new RegExp("^" + t.re.src_email_name + "@" + t.re.src_host_strict, "i")), t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0;
          }
        }
      },
          br = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
          vr = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

      function Cr(e) {
        var r = e.re = hr(e.__opts__),
            t = e.__tlds__.slice();

        function n(e) {
          return e.replace("%TLDS%", r.src_tlds);
        }

        e.onCompile(), e.__tlds_replaced__ || t.push(br), t.push(r.src_xn), r.src_tlds = t.join("|"), r.email_fuzzy = RegExp(n(r.tpl_email_fuzzy), "i"), r.link_fuzzy = RegExp(n(r.tpl_link_fuzzy), "i"), r.link_no_ip_fuzzy = RegExp(n(r.tpl_link_no_ip_fuzzy), "i"), r.host_fuzzy_test = RegExp(n(r.tpl_host_fuzzy_test), "i");
        var s = [];

        function o(e, r) {
          throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + r);
        }

        e.__compiled__ = {}, Object.keys(e.__schemas__).forEach(function (r) {
          var t = e.__schemas__[r];

          if (null !== t) {
            var n,
                i = {
              validate: null,
              link: null
            };
            if (e.__compiled__[r] = i, "[object Object]" === dr(t)) return function (e) {
              return "[object RegExp]" === dr(e);
            }(t.validate) ? i.validate = (n = t.validate, function (e, r) {
              var t = e.slice(r);
              return n.test(t) ? t.match(n)[0].length : 0;
            }) : mr(t.validate) ? i.validate = t.validate : o(r, t), void (mr(t.normalize) ? i.normalize = t.normalize : t.normalize ? o(r, t) : i.normalize = function (e, r) {
              r.normalize(e);
            });
            !function (e) {
              return "[object String]" === dr(e);
            }(t) ? o(r, t) : s.push(r);
          }
        }), s.forEach(function (r) {
          e.__compiled__[e.__schemas__[r]] && (e.__compiled__[r].validate = e.__compiled__[e.__schemas__[r]].validate, e.__compiled__[r].normalize = e.__compiled__[e.__schemas__[r]].normalize);
        }), e.__compiled__[""] = {
          validate: null,
          normalize: function normalize(e, r) {
            r.normalize(e);
          }
        };
        var i = Object.keys(e.__compiled__).filter(function (r) {
          return r.length > 0 && e.__compiled__[r];
        }).map(gr).join("|");
        e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + r.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + r.src_ZPCc + "))(" + i + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), function (e) {
          e.__index__ = -1, e.__text_cache__ = "";
        }(e);
      }

      function yr(e, r) {
        var t = e.__index__,
            n = e.__last_index__,
            s = e.__text_cache__.slice(t, n);

        this.schema = e.__schema__.toLowerCase(), this.index = t + r, this.lastIndex = n + r, this.raw = s, this.text = s, this.url = s;
      }

      function Ar(e, r) {
        var t = new yr(e, r);
        return e.__compiled__[t.schema].normalize(t, e), t;
      }

      function xr(e, r) {
        if (!(this instanceof xr)) return new xr(e, r);
        var t;
        r || (t = e, Object.keys(t || {}).reduce(function (e, r) {
          return e || _r.hasOwnProperty(r);
        }, !1) && (r = e, e = {})), this.__opts__ = fr({}, _r, r), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = fr({}, kr, e), this.__compiled__ = {}, this.__tlds__ = vr, this.__tlds_replaced__ = !1, this.re = {}, Cr(this);
      }

      xr.prototype.add = function (e, r) {
        return this.__schemas__[e] = r, Cr(this), this;
      }, xr.prototype.set = function (e) {
        return this.__opts__ = fr(this.__opts__, e), this;
      }, xr.prototype.test = function (e) {
        if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
        var r, t, n, s, o, i, a, c;
        if (this.re.schema_test.test(e)) for ((a = this.re.schema_search).lastIndex = 0; null !== (r = a.exec(e));) {
          if (s = this.testSchemaAt(e, r[2], a.lastIndex)) {
            this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + s;
            break;
          }
        }
        return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (t = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = t.index + t[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = t.index + t[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i)), this.__index__ >= 0;
      }, xr.prototype.pretest = function (e) {
        return this.re.pretest.test(e);
      }, xr.prototype.testSchemaAt = function (e, r, t) {
        return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(e, t, this) : 0;
      }, xr.prototype.match = function (e) {
        var r = 0,
            t = [];
        this.__index__ >= 0 && this.__text_cache__ === e && (t.push(Ar(this, r)), r = this.__last_index__);

        for (var n = r ? e.slice(r) : e; this.test(n);) {
          t.push(Ar(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
        }

        return t.length ? t : null;
      }, xr.prototype.tlds = function (e, r) {
        return e = Array.isArray(e) ? e : [e], r ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function (e, r, t) {
          return e !== t[r - 1];
        }).reverse(), Cr(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, Cr(this), this);
      }, xr.prototype.normalize = function (e) {
        e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url);
      }, xr.prototype.onCompile = function () {};
      var wr = xr,
          Dr = 2147483647,
          Er = 36,
          qr = 1,
          Sr = 26,
          Fr = 38,
          Lr = 700,
          zr = 72,
          Tr = 128,
          Ir = "-",
          Mr = /^xn--/,
          Rr = /[^\x20-\x7E]/,
          Br = /[\x2E\u3002\uFF0E\uFF61]/g,
          Nr = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      },
          Or = Er - qr,
          Pr = Math.floor,
          jr = String.fromCharCode;

      function Ur(e) {
        throw new RangeError(Nr[e]);
      }

      function Vr(e, r) {
        for (var t = e.length, n = []; t--;) {
          n[t] = r(e[t]);
        }

        return n;
      }

      function Zr(e, r) {
        var t = e.split("@"),
            n = "";
        t.length > 1 && (n = t[0] + "@", e = t[1]);
        var s = (e = e.replace(Br, ".")).split("."),
            o = Vr(s, r).join(".");
        return n + o;
      }

      function $r(e) {
        for (var r, t, n = [], s = 0, o = e.length; s < o;) {
          (r = e.charCodeAt(s++)) >= 55296 && r <= 56319 && s < o ? 56320 == (64512 & (t = e.charCodeAt(s++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), s--) : n.push(r);
        }

        return n;
      }

      function Gr(e) {
        return Vr(e, function (e) {
          var r = "";
          return e > 65535 && (r += jr((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), r += jr(e);
        }).join("");
      }

      function Hr(e, r) {
        return e + 22 + 75 * (e < 26) - ((0 != r) << 5);
      }

      function Jr(e, r, t) {
        var n = 0;

        for (e = t ? Pr(e / Lr) : e >> 1, e += Pr(e / r); e > Or * Sr >> 1; n += Er) {
          e = Pr(e / Or);
        }

        return Pr(n + (Or + 1) * e / (e + Fr));
      }

      function Wr(e) {
        var r,
            t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h = [],
            f = e.length,
            d = 0,
            m = Tr,
            g = zr;

        for ((t = e.lastIndexOf(Ir)) < 0 && (t = 0), n = 0; n < t; ++n) {
          e.charCodeAt(n) >= 128 && Ur("not-basic"), h.push(e.charCodeAt(n));
        }

        for (s = t > 0 ? t + 1 : 0; s < f;) {
          for (o = d, i = 1, a = Er; s >= f && Ur("invalid-input"), p = e.charCodeAt(s++), ((c = p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : Er) >= Er || c > Pr((Dr - d) / i)) && Ur("overflow"), d += c * i, !(c < (l = a <= g ? qr : a >= g + Sr ? Sr : a - g)); a += Er) {
            i > Pr(Dr / (u = Er - l)) && Ur("overflow"), i *= u;
          }

          r = h.length + 1, g = Jr(d - o, r, 0 == o), Pr(d / r) > Dr - m && Ur("overflow"), m += Pr(d / r), d %= r, h.splice(d++, 0, m);
        }

        return Gr(h);
      }

      function Yr(e) {
        var r,
            t,
            n,
            s,
            o,
            i,
            a,
            c,
            l,
            u,
            p,
            h,
            f,
            d,
            m,
            g = [];

        for (e = $r(e), h = e.length, r = Tr, t = 0, o = zr, i = 0; i < h; ++i) {
          (p = e[i]) < 128 && g.push(jr(p));
        }

        for (n = s = g.length, s && g.push(Ir); n < h;) {
          for (a = Dr, i = 0; i < h; ++i) {
            (p = e[i]) >= r && p < a && (a = p);
          }

          for (a - r > Pr((Dr - t) / (f = n + 1)) && Ur("overflow"), t += (a - r) * f, r = a, i = 0; i < h; ++i) {
            if ((p = e[i]) < r && ++t > Dr && Ur("overflow"), p == r) {
              for (c = t, l = Er; !(c < (u = l <= o ? qr : l >= o + Sr ? Sr : l - o)); l += Er) {
                m = c - u, d = Er - u, g.push(jr(Hr(u + m % d, 0))), c = Pr(m / d);
              }

              g.push(jr(Hr(c, 0))), o = Jr(t, f, n == s), t = 0, ++n;
            }
          }

          ++t, ++r;
        }

        return g.join("");
      }

      function Kr(e) {
        return Zr(e, function (e) {
          return Mr.test(e) ? Wr(e.slice(4).toLowerCase()) : e;
        });
      }

      function Qr(e) {
        return Zr(e, function (e) {
          return Rr.test(e) ? "xn--" + Yr(e) : e;
        });
      }

      var Xr = {
        decode: $r,
        encode: Gr
      },
          et = {
        version: "1.4.1",
        ucs2: Xr,
        toASCII: Qr,
        toUnicode: Kr,
        encode: Yr,
        decode: Wr
      },
          rt = Object.freeze({
        __proto__: null,
        decode: Wr,
        encode: Yr,
        toUnicode: Kr,
        toASCII: Qr,
        version: "1.4.1",
        ucs2: Xr,
        "default": et
      }),
          tt = function (e) {
        if (e.__esModule) return e;
        var r = Object.defineProperty({}, "__esModule", {
          value: !0
        });
        return Object.keys(e).forEach(function (t) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(r, t, n.get ? n : {
            enumerable: !0,
            get: function get() {
              return e[t];
            }
          });
        }), r;
      }(rt),
          nt = {
        "default": {
          options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 100
          },
          components: {
            core: {},
            block: {},
            inline: {}
          }
        },
        zero: {
          options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 20
          },
          components: {
            core: {
              rules: ["normalize", "block", "inline"]
            },
            block: {
              rules: ["paragraph"]
            },
            inline: {
              rules: ["text"],
              rules2: ["balance_pairs", "text_collapse"]
            }
          }
        },
        commonmark: {
          options: {
            html: !0,
            xhtmlOut: !0,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 20
          },
          components: {
            core: {
              rules: ["normalize", "block", "inline"]
            },
            block: {
              rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
            },
            inline: {
              rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
              rules2: ["balance_pairs", "emphasis", "text_collapse"]
            }
          }
        }
      },
          st = /^(vbscript|javascript|file|data):/,
          ot = /^data:image\/(gif|png|jpeg|webp);/;

      function it(e) {
        var r = e.trim().toLowerCase();
        return !st.test(r) || !!ot.test(r);
      }

      var at = ["http:", "https:", "mailto:"];

      function ct(e) {
        var r = y.parse(e, !0);
        if (r.hostname && (!r.protocol || at.indexOf(r.protocol) >= 0)) try {
          r.hostname = tt.toASCII(r.hostname);
        } catch (e) {}
        return y.encode(y.format(r));
      }

      function lt(e) {
        var r = y.parse(e, !0);
        if (r.hostname && (!r.protocol || at.indexOf(r.protocol) >= 0)) try {
          r.hostname = tt.toUnicode(r.hostname);
        } catch (e) {}
        return y.decode(y.format(r), y.decode.defaultChars + "%");
      }

      function ut(e, r) {
        if (!(this instanceof ut)) return new ut(e, r);
        r || E.isString(e) || (r = e || {}, e = "default"), this.inline = new pr(), this.block = new Ie(), this.core = new ue(), this.renderer = new R(), this.linkify = new wr(), this.validateLink = it, this.normalizeLink = ct, this.normalizeLinkText = lt, this.utils = E, this.helpers = E.assign({}, F), this.options = {}, this.configure(e), r && this.set(r);
      }

      return ut.prototype.set = function (e) {
        return E.assign(this.options, e), this;
      }, ut.prototype.configure = function (e) {
        var r,
            t = this;
        if (E.isString(e) && !(e = nt[r = e])) throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
        if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
        return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function (r) {
          e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules), e.components[r].rules2 && t[r].ruler2.enableOnly(e.components[r].rules2);
        }), this;
      }, ut.prototype.enable = function (e, r) {
        var t = [];
        Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function (r) {
          t = t.concat(this[r].ruler.enable(e, !0));
        }, this), t = t.concat(this.inline.ruler2.enable(e, !0));
        var n = e.filter(function (e) {
          return t.indexOf(e) < 0;
        });
        if (n.length && !r) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
        return this;
      }, ut.prototype.disable = function (e, r) {
        var t = [];
        Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function (r) {
          t = t.concat(this[r].ruler.disable(e, !0));
        }, this), t = t.concat(this.inline.ruler2.disable(e, !0));
        var n = e.filter(function (e) {
          return t.indexOf(e) < 0;
        });
        if (n.length && !r) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
        return this;
      }, ut.prototype.use = function (e) {
        var r = [this].concat(Array.prototype.slice.call(arguments, 1));
        return e.apply(e, r), this;
      }, ut.prototype.parse = function (e, r) {
        if ("string" != typeof e) throw new Error("Input data should be a String");
        var t = new this.core.State(e, this, r);
        return this.core.process(t), t.tokens;
      }, ut.prototype.render = function (e, r) {
        return r = r || {}, this.renderer.render(this.parse(e, r), this.options, r);
      }, ut.prototype.parseInline = function (e, r) {
        var t = new this.core.State(e, this, r);
        return t.inlineMode = !0, this.core.process(t), t.tokens;
      }, ut.prototype.renderInline = function (e, r) {
        return r = r || {}, this.renderer.render(this.parseInline(e, r), this.options, r);
      }, ut;
    }();
  }(e = {
    exports: {}
  }, e.exports), e.exports),
      n = (r = t) && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r["default"] : r;

  function s(e, r) {
    var t,
        n,
        s,
        o,
        i = e.pos,
        a = e.src.charCodeAt(i);
    if (r) return !1;
    if (43 !== a) return !1;
    if (s = (n = e.scanDelims(e.pos, !0)).length, o = String.fromCharCode(a), s < 2) return !1;

    for (s % 2 && (e.push("text", "", 0).content = o, s--), t = 0; t < s; t += 2) {
      e.push("text", "", 0).content = o + o, e.delimiters.push({
        marker: a,
        jump: t,
        token: e.tokens.length - 1,
        level: e.level,
        end: -1,
        open: n.can_open,
        close: n.can_close
      });
    }

    return e.pos += n.length, !0;
  }

  function o(e) {
    var r,
        t,
        n,
        s,
        o,
        i = [],
        a = e.delimiters,
        c = e.delimiters.length;

    for (r = 0; r < c; r++) {
      43 === (n = a[r]).marker && -1 !== n.end && (s = a[n.end], (o = e.tokens[n.token]).type = "u_open", o.tag = "u", o.nesting = 1, o.markup = "++", o.content = "", (o = e.tokens[s.token]).type = "u_close", o.tag = "u", o.nesting = -1, o.markup = "++", o.content = "", "text" === e.tokens[s.token - 1].type && "+" === e.tokens[s.token - 1].content && i.push(s.token - 1));
    }

    for (; i.length;) {
      for (t = (r = i.pop()) + 1; t < e.tokens.length && "u_close" === e.tokens[t].type;) {
        t++;
      }

      r !== --t && (o = e.tokens[t], e.tokens[t] = e.tokens[r], e.tokens[r] = o);
    }
  }

  var i = function i(e) {
    e.inline.ruler.after("emphasis", "underline", s), e.inline.ruler2.after("emphasis", "underline", o);
  },
      a = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

  function c(e, r) {
    var t,
        n,
        s = e.posMax,
        o = e.pos;
    if (126 !== e.src.charCodeAt(o)) return !1;
    if (r) return !1;
    if (o + 2 >= s) return !1;

    for (e.pos = o + 1; e.pos < s;) {
      if (126 === e.src.charCodeAt(e.pos)) {
        t = !0;
        break;
      }

      e.md.inline.skipToken(e);
    }

    return t && o + 1 !== e.pos ? (n = e.src.slice(o + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = o, !1) : (e.posMax = e.pos, e.pos = o + 1, e.push("sub_open", "sub", 1).markup = "~", e.push("text", "", 0).content = n.replace(a, "$1"), e.push("sub_close", "sub", -1).markup = "~", e.pos = e.posMax + 1, e.posMax = s, !0) : (e.pos = o, !1);
  }

  var l = function l(e) {
    e.inline.ruler.after("emphasis", "sub", c);
  },
      u = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

  function p(e, r) {
    var t,
        n,
        s = e.posMax,
        o = e.pos;
    if (94 !== e.src.charCodeAt(o)) return !1;
    if (r) return !1;
    if (o + 2 >= s) return !1;

    for (e.pos = o + 1; e.pos < s;) {
      if (94 === e.src.charCodeAt(e.pos)) {
        t = !0;
        break;
      }

      e.md.inline.skipToken(e);
    }

    return t && o + 1 !== e.pos ? (n = e.src.slice(o + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = o, !1) : (e.posMax = e.pos, e.pos = o + 1, e.push("sup_open", "sup", 1).markup = "^", e.push("text", "", 0).content = n.replace(u, "$1"), e.push("sup_close", "sup", -1).markup = "^", e.pos = e.posMax + 1, e.posMax = s, !0) : (e.pos = o, !1);
  }

  var h = function h(e) {
    e.inline.ruler.after("emphasis", "sup", p);
  },
      f = function () {
    function e() {
      this._md = new n(), this.addPlugin(i), this.addPlugin(l), this.addPlugin(h);
    }

    var r = e.prototype;
    return r.addPlugin = function (e) {
      for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
        t[n - 1] = arguments[n];
      }

      t.unshift(e), this._md.use.apply(this._md, t);
    }, r.disablePlugin = function (e) {
      this._md.disable(e, !0);
    }, r.toHTML = function (e) {
      return this._md.render(e);
    }, e;
  }(),
      d = new f();

  return d["class"] = f, d;
});

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/ParseError.js":
/*!**********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/ParseError.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParseError)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // https://stackoverflow.com/a/46971044/970769


var ParseError = function ParseError(code) {
  _classCallCheck(this, ParseError);

  this.name = this.constructor.name;
  this.message = code;
  this.stack = new Error(code).stack;
};


ParseError.prototype = Object.create(Error.prototype);
ParseError.prototype.constructor = ParseError;

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/PhoneNumber.js":
/*!***********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/PhoneNumber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhoneNumber)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _isPossibleNumber___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPossibleNumber_ */ "./node_modules/libphonenumber-js/es6/isPossibleNumber_.js");
/* harmony import */ var _validate___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate_ */ "./node_modules/libphonenumber-js/es6/validate_.js");
/* harmony import */ var _helpers_getNumberType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/getNumberType */ "./node_modules/libphonenumber-js/es6/helpers/getNumberType.js");
/* harmony import */ var _format___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format_ */ "./node_modules/libphonenumber-js/es6/format_.js");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}







var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var PhoneNumber = /*#__PURE__*/function () {
  function PhoneNumber(countryCallingCode, nationalNumber, metadata) {
    _classCallCheck(this, PhoneNumber);

    if (!countryCallingCode) {
      throw new TypeError('`country` or `countryCallingCode` not passed');
    }

    if (!nationalNumber) {
      throw new TypeError('`nationalNumber` not passed');
    }

    if (!metadata) {
      throw new TypeError('`metadata` not passed');
    }

    var _metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata); // If country code is passed then derive `countryCallingCode` from it.
    // Also store the country code as `.country`.


    if (isCountryCode(countryCallingCode)) {
      this.country = countryCallingCode;

      _metadata.country(countryCallingCode);

      countryCallingCode = _metadata.countryCallingCode();
    } else {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (_metadata.isNonGeographicCallingCode(countryCallingCode)) {
          this.country = '001';
        }
      }
    }

    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = '+' + this.countryCallingCode + this.nationalNumber;
    this.metadata = metadata;
  }

  _createClass(PhoneNumber, [{
    key: "isPossible",
    value: function isPossible() {
      return (0,_isPossibleNumber___WEBPACK_IMPORTED_MODULE_1__.default)(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return (0,_validate___WEBPACK_IMPORTED_MODULE_2__.default)(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(this.metadata);
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    } // // Is just an alias for `this.isValid() && this.country === country`.
    // // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
    // isValidForRegion(country) {
    // 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
    // }

  }, {
    key: "getType",
    value: function getType() {
      return (0,_helpers_getNumberType__WEBPACK_IMPORTED_MODULE_3__.default)(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return (0,_format___WEBPACK_IMPORTED_MODULE_4__.default)(this, _format, options ? _objectSpread({}, options, {
        v2: true
      }) : {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format('NATIONAL', options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format('INTERNATIONAL', options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format('RFC3966', options);
    }
  }]);

  return PhoneNumber;
}();



var isCountryCode = function isCountryCode(value) {
  return /^[A-Z]{2}$/.test(value);
};

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIN_LENGTH_FOR_NSN": () => (/* binding */ MIN_LENGTH_FOR_NSN),
/* harmony export */   "MAX_LENGTH_FOR_NSN": () => (/* binding */ MAX_LENGTH_FOR_NSN),
/* harmony export */   "MAX_LENGTH_COUNTRY_CODE": () => (/* binding */ MAX_LENGTH_COUNTRY_CODE),
/* harmony export */   "VALID_DIGITS": () => (/* binding */ VALID_DIGITS),
/* harmony export */   "WHITESPACE": () => (/* binding */ WHITESPACE),
/* harmony export */   "VALID_PUNCTUATION": () => (/* binding */ VALID_PUNCTUATION),
/* harmony export */   "PLUS_CHARS": () => (/* binding */ PLUS_CHARS)
/* harmony export */ });
// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2; // The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.

var MAX_LENGTH_FOR_NSN = 17; // The maximum length of the country calling code.

var MAX_LENGTH_COUNTRY_CODE = 3; // Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).

var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9"; // `DASHES` will be right after the opening square bracket of the "character class"

var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]"; // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['

var TILDES = "~\u2053\u223C\uFF5E"; // Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.

var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B"; // const LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+')

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/format_.js":
/*!*******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/format_.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatNumber)
/* harmony export */ });
/* harmony import */ var _helpers_matchesEntirely__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/matchesEntirely */ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js");
/* harmony import */ var _helpers_formatNationalNumberUsingFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/formatNationalNumberUsingFormat */ "./node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _helpers_getIddPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/getIddPrefix */ "./node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js");
/* harmony import */ var _helpers_RFC3966__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/RFC3966 */ "./node_modules/libphonenumber-js/es6/helpers/RFC3966.js");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js







var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  } // Formats a phone number
  //
  // Example use cases:
  //
  // ```js
  // formatNumber('8005553535', 'RU', 'INTERNATIONAL')
  // formatNumber('8005553535', 'RU', 'INTERNATIONAL', metadata)
  // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL')
  // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL', metadata)
  // formatNumber('+78005553535', 'NATIONAL')
  // formatNumber('+78005553535', 'NATIONAL', metadata)
  // ```
  //

};
function formatNumber(input, format, options, metadata) {
  // Apply default options.
  if (options) {
    options = _objectSpread({}, DEFAULT_OPTIONS, options);
  } else {
    options = DEFAULT_OPTIONS;
  }

  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata);

  if (input.country && input.country !== '001') {
    // Validate `input.country`.
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }

    metadata.country(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || '';

  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // This variable should have been declared inside `case`s
  // but Babel has a bug and it says "duplicate variable declaration".

  var number;

  switch (format) {
    case 'NATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return '';
      }

      number = formatNationalNumber(nationalNumber, input.carrierCode, 'NATIONAL', metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'INTERNATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }

      number = formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'E.164':
      // `E.164` doesn't define "phone number extensions".
      return "+".concat(countryCallingCode).concat(nationalNumber);

    case 'RFC3966':
      return (0,_helpers_RFC3966__WEBPACK_IMPORTED_MODULE_1__.formatRFC3966)({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?

    case 'IDD':
      if (!options.fromCountry) {
        return; // throw new Error('`fromCountry` option not passed for IDD-prefixed formatting.')
      }

      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);

    default:
      throw new Error("Unknown \"format\" argument passed to \"formatNumber()\": \"".concat(format, "\""));
  }
}

function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);

  if (!format) {
    return number;
  }

  return (0,_helpers_formatNationalNumberUsingFormat__WEBPACK_IMPORTED_MODULE_2__.default)(number, format, {
    useInternationalFormat: formatAs === 'INTERNATIONAL',
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode: carrierCode,
    metadata: metadata
  });
}

function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = availableFormats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var format = _ref; // Validate leading digits

    if (format.leadingDigitsPatterns().length > 0) {
      // The last leading_digits_pattern is used here, as it is the most detailed
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1]; // If leading digits don't match then move on to the next phone number format

      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    } // Check that the national number matches the phone number format regular expression


    if ((0,_helpers_matchesEntirely__WEBPACK_IMPORTED_MODULE_3__.default)(nationalNnumber, format.pattern())) {
      return format;
    }
  }
}

function addExtension(formattedNumber, ext, metadata, formatExtension) {
  return ext ? formatExtension(formattedNumber, ext, metadata) : formattedNumber;
}

function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = (0,_metadata__WEBPACK_IMPORTED_MODULE_0__.getCountryCallingCode)(fromCountry, metadata.metadata); // When calling within the same country calling code.

  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, 'NATIONAL', metadata); // For NANPA regions, return the national format for these regions
    // but prefix it with the country calling code.

    if (countryCallingCode === '1') {
      return countryCallingCode + ' ' + formattedNumber;
    } // If regions share a country calling code, the country calling code need
    // not be dialled. This also applies when dialling within a region, so this
    // if clause covers both these cases. Technically this is the case for
    // dialling from La Reunion to other overseas departments of France (French
    // Guiana, Martinique, Guadeloupe), but not vice versa - so we don't cover
    // this edge case for now and for those cases return the version including
    // country calling code. Details here:
    // http://www.petitfute.com/voyage/225-info-pratiques-reunion
    //


    return formattedNumber;
  }

  var iddPrefix = (0,_helpers_getIddPrefix__WEBPACK_IMPORTED_MODULE_4__.default)(fromCountry, undefined, metadata.metadata);

  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata));
  }
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/RFC3966.js":
/*!***************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/RFC3966.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseRFC3966": () => (/* binding */ parseRFC3966),
/* harmony export */   "formatRFC3966": () => (/* binding */ formatRFC3966)
/* harmony export */ });
/* harmony import */ var _isViablePhoneNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isViablePhoneNumber */ "./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

 // https://www.ietf.org/rfc/rfc3966.txt

/**
 * @param  {string} text - Phone URI (RFC 3966).
 * @return {object} `{ ?number, ?ext }`.
 */

function parseRFC3966(text) {
  var number;
  var ext; // Replace "tel:" with "tel=" for parsing convenience.

  text = text.replace(/^tel:/, 'tel=');

  for (var _iterator = text.split(';'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var part = _ref;

    var _part$split = part.split('='),
        _part$split2 = _slicedToArray(_part$split, 2),
        name = _part$split2[0],
        value = _part$split2[1];

    switch (name) {
      case 'tel':
        number = value;
        break;

      case 'ext':
        ext = value;
        break;

      case 'phone-context':
        // Only "country contexts" are supported.
        // "Domain contexts" are ignored.
        if (value[0] === '+') {
          number = value + number;
        }

        break;
    }
  } // If the phone number is not viable, then abort.


  if (!(0,_isViablePhoneNumber__WEBPACK_IMPORTED_MODULE_0__.default)(number)) {
    return {};
  }

  var result = {
    number: number
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * @param  {object} - `{ ?number, ?extension }`.
 * @return {string} Phone URI (RFC 3966).
 */

function formatRFC3966(_ref2) {
  var number = _ref2.number,
      ext = _ref2.ext;

  if (!number) {
    return '';
  }

  if (number[0] !== '+') {
    throw new Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
  }

  return "tel:".concat(number).concat(ext ? ';ext=' + ext : '');
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ applyInternationalSeparatorStyle)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/libphonenumber-js/es6/constants.js");
 // Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
// For some reason Google's metadata contains `<intlFormat/>`s with brackets and dashes.
// Meanwhile, there's no single opinion about using punctuation in international phone numbers.
//
// For example, Google's `<intlFormat/>` for USA is `+1 213-373-4253`.
// And here's a quote from WikiPedia's "North American Numbering Plan" page:
// https://en.wikipedia.org/wiki/North_American_Numbering_Plan
//
// "The country calling code for all countries participating in the NANP is 1.
// In international format, an NANP number should be listed as +1 301 555 01 00,
// where 301 is an area code (Maryland)."
//
// I personally prefer the international format without any punctuation.
// For example, brackets are remnants of the old age, meaning that the
// phone number part in brackets (so called "area code") can be omitted
// if dialing within the same "area".
// And hyphens were clearly introduced for splitting local numbers into memorizable groups.
// For example, remembering "5553535" is difficult but "555-35-35" is much simpler.
// Imagine a man taking a bus from home to work and seeing an ad with a phone number.
// He has a couple of seconds to memorize that number until it passes by.
// If it were spaces instead of hyphens the man wouldn't necessarily get it,
// but with hyphens instead of spaces the grouping is more explicit.
// I personally think that hyphens introduce visual clutter,
// so I prefer replacing them with spaces in international numbers.
// In the modern age all output is done on displays where spaces are clearly distinguishable
// so hyphens can be safely replaced with spaces without losing any legibility.
//

function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION, "]+"), 'g'), ' ').trim();
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js":
/*!*************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkNumberLength),
/* harmony export */   "checkNumberLengthForType": () => (/* binding */ checkNumberLengthForType)
/* harmony export */ });
/* harmony import */ var _mergeArrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeArrays */ "./node_modules/libphonenumber-js/es6/helpers/mergeArrays.js");

function checkNumberLength(nationalNumber, metadata) {
  return checkNumberLengthForType(nationalNumber, undefined, metadata);
} // Checks whether a number is possible for the country based on its length.
// Should only be called for the "new" metadata which has "possible lengths".

function checkNumberLengthForType(nationalNumber, type, metadata) {
  var type_info = metadata.type(type); // There should always be "<possiblePengths/>" set for every type element.
  // This is declared in the XML schema.
  // For size efficiency, where a sub-description (e.g. fixed-line)
  // has the same "<possiblePengths/>" as the "general description", this is missing,
  // so we fall back to the "general description". Where no numbers of the type
  // exist at all, there is one possible length (-1) which is guaranteed
  // not to match the length of any real phone number.

  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths(); // let local_lengths    = type_info && type.possibleLengthsLocal() || metadata.possibleLengthsLocal()
  // Metadata before version `1.0.18` didn't contain `possible_lengths`.

  if (!possible_lengths) {
    return 'IS_POSSIBLE';
  }

  if (type === 'FIXED_LINE_OR_MOBILE') {
    // No such country in metadata.

    /* istanbul ignore next */
    if (!metadata.type('FIXED_LINE')) {
      // The rare case has been encountered where no fixedLine data is available
      // (true for some non-geographic entities), so we just check mobile.
      return checkNumberLengthForType(nationalNumber, 'MOBILE', metadata);
    }

    var mobile_type = metadata.type('MOBILE');

    if (mobile_type) {
      // Merge the mobile data in if there was any. "Concat" creates a new
      // array, it doesn't edit possible_lengths in place, so we don't need a copy.
      // Note that when adding the possible lengths from mobile, we have
      // to again check they aren't empty since if they are this indicates
      // they are the same as the general desc and should be obtained from there.
      possible_lengths = (0,_mergeArrays__WEBPACK_IMPORTED_MODULE_0__.default)(possible_lengths, mobile_type.possibleLengths()); // The current list is sorted; we need to merge in the new list and
      // re-sort (duplicates are okay). Sorting isn't so expensive because
      // the lists are very small.
      // if (local_lengths) {
      // 	local_lengths = mergeArrays(local_lengths, mobile_type.possibleLengthsLocal())
      // } else {
      // 	local_lengths = mobile_type.possibleLengthsLocal()
      // }
    }
  } // If the type doesn't exist then return 'INVALID_LENGTH'.
  else if (type && !type_info) {
      return 'INVALID_LENGTH';
    }

  var actual_length = nationalNumber.length; // In `libphonenumber-js` all "local-only" formats are dropped for simplicity.
  // // This is safe because there is never an overlap beween the possible lengths
  // // and the local-only lengths; this is checked at build time.
  // if (local_lengths && local_lengths.indexOf(nationalNumber.length) >= 0)
  // {
  // 	return 'IS_POSSIBLE_LOCAL_ONLY'
  // }

  var minimum_length = possible_lengths[0];

  if (minimum_length === actual_length) {
    return 'IS_POSSIBLE';
  }

  if (minimum_length > actual_length) {
    return 'TOO_SHORT';
  }

  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return 'TOO_LONG';
  } // We skip the first element since we've already checked it.


  return possible_lengths.indexOf(actual_length, 1) >= 0 ? 'IS_POSSIBLE' : 'INVALID_LENGTH';
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createExtensionPattern)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./node_modules/libphonenumber-js/es6/constants.js");
 // The RFC 3966 format for extensions.

var RFC3966_EXTN_PREFIX = ';ext=';
/**
 * Helper method for constructing regular expressions for parsing. Creates
 * an expression that captures up to max_length digits.
 * @return {string} RegEx pattern to capture extension digits.
 */

var getExtensionDigitsPattern = function getExtensionDigitsPattern(maxLength) {
  return "([".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
/**
 * Helper initialiser method to create the regular-expression pattern to match
 * extensions.
 * Copy-pasted from Google's `libphonenumber`:
 * https://github.com/google/libphonenumber/blob/55b2646ec9393f4d3d6661b9c82ef9e258e8b829/javascript/i18n/phonenumbers/phonenumberutil.js#L759-L766
 * @return {string} RegEx pattern to capture extensions.
 */


function createExtensionPattern(purpose) {
  // We cap the maximum length of an extension based on the ambiguity of the way
  // the extension is prefixed. As per ITU, the officially allowed length for
  // extensions is actually 40, but we don't support this since we haven't seen real
  // examples and this introduces many false interpretations as the extension labels
  // are not standardized.

  /** @type {string} */
  var extLimitAfterExplicitLabel = '20';
  /** @type {string} */

  var extLimitAfterLikelyLabel = '15';
  /** @type {string} */

  var extLimitAfterAmbiguousChar = '9';
  /** @type {string} */

  var extLimitWhenNotSure = '6';
  /** @type {string} */

  var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*"; // Optional full stop (.) or colon, followed by zero or more spaces/tabs/commas.

  /** @type {string} */

  var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
  /** @type {string} */

  var optionalExtnSuffix = "#?"; // Here the extension is called out in more explicit way, i.e mentioning it obvious
  // patterns like "ext.".

  /** @type {string} */

  var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)"; // One-character symbols that can be used to indicate an extension, and less
  // commonly used or more ambiguous extension labels.

  /** @type {string} */

  var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)"; // When extension is not separated clearly.

  /** @type {string} */

  var ambiguousSeparator = "[- ]+"; // This is the same as possibleSeparatorsBetweenNumberAndExtLabel, but not matching
  // comma as extension label may have it.

  /** @type {string} */

  var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*"; // ",," is commonly used for auto dialling the extension when connected. First
  // comma is matched through possibleSeparatorsBetweenNumberAndExtLabel, so we do
  // not repeat it here. Semi-colon works in Iphone and Android also to pop up a
  // button with the extension number following.

  /** @type {string} */

  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  /** @type {string} */

  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  /** @type {string} */

  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  /** @type {string} */

  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  /** @type {string} */

  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  /** @type {string} */

  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  /** @type {string} */

  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix; // The first regular expression covers RFC 3966 format, where the extension is added
  // using ";ext=". The second more generic where extension is mentioned with explicit
  // labels like "ext:". In both the above cases we allow more numbers in extension than
  // any other extension labels. The third one captures when single character extension
  // labels or less commonly used labels are used. In such cases we capture fewer
  // extension digits in order to reduce the chance of falsely interpreting two
  // numbers beside each other as a number + extension. The fourth one covers the
  // special case of American numbers where the extension is written with a hash
  // at the end, such as "- 503#". The fifth one is exclusively for extension
  // autodialling formats which are used when dialling and in this case we accept longer
  // extensions. The last one is more liberal on the number of commas that acts as
  // extension labels, so we have a strict cap on the number of digits in such extensions.

  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractExtension)
/* harmony export */ });
/* harmony import */ var _createExtensionPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createExtensionPattern */ "./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js");
 // Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.

var EXTN_PATTERN = new RegExp('(?:' + (0,_createExtensionPattern__WEBPACK_IMPORTED_MODULE_0__.default)() + ')$', 'i'); // Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.

function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);

  if (start < 0) {
    return {};
  } // If we find a potential extension, and the number preceding this is a viable
  // number, we assume it is an extension.


  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;

  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i]
      };
    }

    i++;
  }
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractCountryCallingCode)
/* harmony export */ });
/* harmony import */ var _stripIddPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripIddPrefix */ "./node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js");
/* harmony import */ var _extractCountryCallingCodeFromInternationalNumberWithoutPlusSign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractCountryCallingCodeFromInternationalNumberWithoutPlusSign */ "./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/libphonenumber-js/es6/constants.js");




/**
 * Converts a phone number digits (possibly with a `+`)
 * into a calling code and the rest phone number digits.
 * The "rest phone number digits" could include
 * a national prefix, carrier code, and national
 * (significant) number.
 * @param  {string} number — Phone number digits (possibly with a `+`).
 * @param  {string} [country] — Default country.
 * @param  {string} [callingCode] — Default calling code (some phone numbering plans are non-geographic).
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`
 * @example
 * // Returns `{ countryCallingCode: "1", number: "2133734253" }`.
 * extractCountryCallingCode('2133734253', 'US', null, metadata)
 * extractCountryCallingCode('2133734253', null, '1', metadata)
 * extractCountryCallingCode('+12133734253', null, null, metadata)
 * extractCountryCallingCode('+12133734253', 'RU', null, metadata)
 */

function extractCountryCallingCode(number, country, callingCode, metadata) {
  if (!number) {
    return {};
  } // If this is not an international phone number,
  // then either extract an "IDD" prefix, or extract a
  // country calling code from a number by autocorrecting it
  // by prepending a leading `+` in cases when it starts
  // with the country calling code.
  // https://wikitravel.org/en/International_dialling_prefix
  // https://github.com/catamphetamine/libphonenumber-js/issues/376


  if (number[0] !== '+') {
    // Convert an "out-of-country" dialing phone number
    // to a proper international phone number.
    var numberWithoutIDD = (0,_stripIddPrefix__WEBPACK_IMPORTED_MODULE_0__.default)(number, country, callingCode, metadata); // If an IDD prefix was stripped then
    // convert the number to international one
    // for subsequent parsing.

    if (numberWithoutIDD && numberWithoutIDD !== number) {
      number = '+' + numberWithoutIDD;
    } else {
      // Check to see if the number starts with the country calling code
      // for the default country. If so, we remove the country calling code,
      // and do some checks on the validity of the number before and after.
      // https://github.com/catamphetamine/libphonenumber-js/issues/376
      if (country || callingCode) {
        var _extractCountryCallin = (0,_extractCountryCallingCodeFromInternationalNumberWithoutPlusSign__WEBPACK_IMPORTED_MODULE_1__.default)(number, country, callingCode, metadata),
            countryCallingCode = _extractCountryCallin.countryCallingCode,
            shorterNumber = _extractCountryCallin.number;

        if (countryCallingCode) {
          return {
            countryCallingCode: countryCallingCode,
            number: shorterNumber
          };
        }
      }

      return {
        number: number
      };
    }
  } // Fast abortion: country codes do not begin with a '0'


  if (number[1] === '0') {
    return {};
  }

  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_2__.default(metadata); // The thing with country phone codes
  // is that they are orthogonal to each other
  // i.e. there's no such country phone code A
  // for which country phone code B exists
  // where B starts with A.
  // Therefore, while scanning digits,
  // if a valid country code is found,
  // that means that it is the country code.
  //

  var i = 2;

  while (i - 1 <= _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);

    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }

    i++;
  }

  return {};
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractCountryCallingCodeFromInternationalNumberWithoutPlusSign)
/* harmony export */ });
/* harmony import */ var _getCountryCallingCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getCountryCallingCode */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _matchesEntirely__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matchesEntirely */ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js");
/* harmony import */ var _extractNationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractNationalNumber */ "./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js");
/* harmony import */ var _checkNumberLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkNumberLength */ "./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js");





/**
 * Sometimes some people incorrectly input international phone numbers
 * without the leading `+`. This function corrects such input.
 * @param  {string} number — Phone number digits.
 * @param  {string?} country
 * @param  {string?} callingCode
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`.
 */

function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
  var countryCallingCode = country ? (0,_getCountryCallingCode__WEBPACK_IMPORTED_MODULE_0__.getCountryCallingCode)(country, metadata) : callingCode;

  if (number.indexOf(countryCallingCode) === 0) {
    metadata = new _getCountryCallingCode__WEBPACK_IMPORTED_MODULE_0__.default(metadata);
    metadata.selectNumberingPlan(country, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);

    var _extractNationalNumbe = (0,_extractNationalNumber__WEBPACK_IMPORTED_MODULE_1__.default)(possibleShorterNumber, metadata),
        possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;

    var _extractNationalNumbe2 = (0,_extractNationalNumber__WEBPACK_IMPORTED_MODULE_1__.default)(number, metadata),
        nationalNumber = _extractNationalNumbe2.nationalNumber; // If the number was not valid before but is valid now,
    // or if it was too long before, we consider the number
    // with the country calling code stripped to be a better result
    // and keep that instead.
    // For example, in Germany (+49), `49` is a valid area code,
    // so if a number starts with `49`, it could be both a valid
    // national German number or an international number without
    // a leading `+`.


    if (!(0,_matchesEntirely__WEBPACK_IMPORTED_MODULE_2__.default)(nationalNumber, metadata.nationalNumberPattern()) && (0,_matchesEntirely__WEBPACK_IMPORTED_MODULE_2__.default)(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || (0,_checkNumberLength__WEBPACK_IMPORTED_MODULE_3__.default)(nationalNumber, metadata) === 'TOO_LONG') {
      return {
        countryCallingCode: countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }

  return {
    number: number
  };
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractNationalNumber)
/* harmony export */ });
/* harmony import */ var _extractNationalNumberFromPossiblyIncompleteNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractNationalNumberFromPossiblyIncompleteNumber */ "./node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js");
/* harmony import */ var _matchesEntirely__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matchesEntirely */ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js");
/* harmony import */ var _checkNumberLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkNumberLength */ "./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js");



/**
 * Strips national prefix and carrier code from a complete phone number.
 * The difference from the non-"FromCompleteNumber" function is that
 * it won't extract national prefix if the resultant number is too short
 * to be a complete number for the selected phone numbering plan.
 * @param  {string} number — Complete phone number digits.
 * @param  {Metadata} metadata — Metadata with a phone numbering plan selected.
 * @return {object} `{ nationalNumber: string, carrierCode: string? }`.
 */

function extractNationalNumber(number, metadata) {
  // Parsing national prefixes and carrier codes
  // is only required for local phone numbers
  // but some people don't understand that
  // and sometimes write international phone numbers
  // with national prefixes (or maybe even carrier codes).
  // http://ucken.blogspot.ru/2016/03/trunk-prefixes-in-skype4b.html
  // Google's original library forgives such mistakes
  // and so does this library, because it has been requested:
  // https://github.com/catamphetamine/libphonenumber-js/issues/127
  var _extractNationalNumbe = (0,_extractNationalNumberFromPossiblyIncompleteNumber__WEBPACK_IMPORTED_MODULE_0__.default)(number, metadata),
      nationalNumber = _extractNationalNumbe.nationalNumber,
      carrierCode = _extractNationalNumbe.carrierCode;

  if (!shouldExtractNationalPrefix(number, nationalNumber, metadata)) {
    // Don't strip the national prefix.
    return {
      nationalNumber: number
    };
  } // If a national prefix has been extracted, check to see
  // if the resultant number isn't too short.
  // Same code in Google's `libphonenumber`:
  // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3291-L3302
  // For some reason, they do this check right after the `national_number_pattern` check
  // this library does in `shouldExtractNationalPrefix()` function.
  // Why is there a second "resultant" number validity check?
  // They don't provide an explanation.
  // This library just copies the behavior.


  if (number.length !== nationalNumber.length + (carrierCode ? carrierCode.length : 0)) {
    // If not using legacy generated metadata (before version `1.0.18`)
    // then it has "possible lengths", so use those to validate the number length.
    if (metadata.possibleLengths()) {
      // "We require that the NSN remaining after stripping the national prefix and
      // carrier code be long enough to be a possible length for the region.
      // Otherwise, we don't do the stripping, since the original number could be
      // a valid short number."
      // https://github.com/google/libphonenumber/blob/876268eb1ad6cdc1b7b5bef17fc5e43052702d57/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3236-L3250
      switch ((0,_checkNumberLength__WEBPACK_IMPORTED_MODULE_1__.default)(nationalNumber, metadata)) {
        case 'TOO_SHORT':
        case 'INVALID_LENGTH':
          // case 'IS_POSSIBLE_LOCAL_ONLY':
          // Don't strip the national prefix.
          return {
            nationalNumber: number
          };
      }
    }
  }

  return {
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
} // In some countries, the same digit could be a national prefix
// or a leading digit of a valid phone number.
// For example, in Russia, national prefix is `8`,
// and also `800 555 35 35` is a valid number
// in which `8` is not a national prefix, but the first digit
// of a national (significant) number.
// Same's with Belarus:
// `82004910060` is a valid national (significant) number,
// but `2004910060` is not.
// To support such cases (to prevent the code from always stripping
// national prefix), a condition is imposed: a national prefix
// is not extracted when the original number is "viable" and the
// resultant number is not, a "viable" national number being the one
// that matches `national_number_pattern`.

function shouldExtractNationalPrefix(number, nationalSignificantNumber, metadata) {
  // The equivalent in Google's code is:
  // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L2969-L3004
  if ((0,_matchesEntirely__WEBPACK_IMPORTED_MODULE_2__.default)(number, metadata.nationalNumberPattern()) && !(0,_matchesEntirely__WEBPACK_IMPORTED_MODULE_2__.default)(nationalSignificantNumber, metadata.nationalNumberPattern())) {
    return false;
  } // Just "possible" number check would be more relaxed, so it's not used.
  // if (isPossibleNumber(number, metadata) &&
  // 	!isPossibleNumber(numberWithNationalPrefixExtracted, metadata)) {
  // 	return false
  // }


  return true;
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractNationalNumberFromPossiblyIncompleteNumber)
/* harmony export */ });
/**
 * Strips any national prefix (such as 0, 1) present in a
 * (possibly incomplete) number provided.
 * "Carrier codes" are only used  in Colombia and Brazil,
 * and only when dialing within those countries from a mobile phone to a fixed line number.
 * Sometimes it won't actually strip national prefix
 * and will instead prepend some digits to the `number`:
 * for example, when number `2345678` is passed with `VI` country selected,
 * it will return `{ number: "3402345678" }`, because `340` area code is prepended.
 * @param {string} number — National number digits.
 * @param {object} metadata — Metadata with country selected.
 * @return {object} `{ nationalNumber: string, nationalPrefix: string? carrierCode: string? }`.
 */
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    // See METADATA.md for the description of
    // `national_prefix_for_parsing` and `national_prefix_transform_rule`.
    // Attempt to parse the first digits as a national prefix.
    var prefixPattern = new RegExp('^(?:' + metadata.numberingPlan.nationalPrefixForParsing() + ')');
    var prefixMatch = prefixPattern.exec(number);

    if (prefixMatch) {
      var nationalNumber;
      var carrierCode; // https://gitlab.com/catamphetamine/libphonenumber-js/-/blob/master/METADATA.md#national_prefix_for_parsing--national_prefix_transform_rule
      // If a `national_prefix_for_parsing` has any "capturing groups"
      // then it means that the national (significant) number is equal to
      // those "capturing groups" transformed via `national_prefix_transform_rule`,
      // and nothing could be said about the actual national prefix:
      // what is it and was it even there.
      // If a `national_prefix_for_parsing` doesn't have any "capturing groups",
      // then everything it matches is a national prefix.
      // To determine whether `national_prefix_for_parsing` matched any
      // "capturing groups", the value of the result of calling `.exec()`
      // is looked at, and if it has non-undefined values where there're
      // "capturing groups" in the regular expression, then it means
      // that "capturing groups" have been matched.
      // It's not possible to tell whether there'll be any "capturing gropus"
      // before the matching process, because a `national_prefix_for_parsing`
      // could exhibit both behaviors.

      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];

      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule()); // If there's more than one captured group,
        // then carrier code is the second one.

        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } // If there're no "capturing groups",
      // or if there're "capturing groups" but no
      // `national_prefix_transform_rule`,
      // then just strip the national prefix from the number,
      // and possibly a carrier code.
      // Seems like there could be more.
      else {
          // `prefixBeforeNationalNumber` is the whole substring matched by
          // the `national_prefix_for_parsing` regular expression.
          // There seem to be no guarantees that it's just a national prefix.
          // For example, if there's a carrier code, it's gonna be a
          // part of `prefixBeforeNationalNumber` too.
          var prefixBeforeNationalNumber = prefixMatch[0];
          nationalNumber = number.slice(prefixBeforeNationalNumber.length); // If there's at least one captured group,
          // then carrier code is the first one.

          if (hasCapturedGroups) {
            carrierCode = prefixMatch[1];
          }
        } // Tries to guess whether a national prefix was present in the input.
      // This is not something copy-pasted from Google's library:
      // they don't seem to have an equivalent for that.
      // So this isn't an "officially approved" way of doing something like that.
      // But since there seems no other existing method, this library uses it.


      var nationalPrefix;

      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup); // Example: an Argentinian (AR) phone number `0111523456789`.
        // `prefixMatch[0]` is `01115`, and `$1` is `11`,
        // and the rest of the phone number is `23456789`.
        // The national number is transformed via `9$1` to `91123456789`.
        // National prefix `0` is detected being present at the start.
        // if (possibleNationalPrefix.indexOf(metadata.numberingPlan.nationalPrefix()) === 0) {

        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }

      return {
        nationalNumber: nationalNumber,
        nationalPrefix: nationalPrefix,
        carrierCode: carrierCode
      };
    }
  }

  return {
    nationalNumber: number
  };
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIRST_GROUP_PATTERN": () => (/* binding */ FIRST_GROUP_PATTERN),
/* harmony export */   "default": () => (/* binding */ formatNationalNumberUsingFormat)
/* harmony export */ });
/* harmony import */ var _applyInternationalSeparatorStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyInternationalSeparatorStyle */ "./node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js");
 // This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly. Therefore, we use `\d`, so that the first
// group actually used in the pattern will be matched.

var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat,
      withNationalPrefix = _ref.withNationalPrefix,
      carrierCode = _ref.carrierCode,
      metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : // This library doesn't use `domestic_carrier_code_formatting_rule`,
  // because that one is only used when formatting phone numbers
  // for dialing from a mobile phone, and this is not a dialing library.
  // carrierCode && format.domesticCarrierCodeFormattingRule()
  // 	// First, replace the $CC in the formatting rule with the desired carrier code.
  // 	// Then, replace the $FG in the formatting rule with the first group
  // 	// and the carrier code combined in the appropriate way.
  // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
  // 	: (
  // 		withNationalPrefix && format.nationalPrefixFormattingRule()
  // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
  // 			: format.format()
  // 	)
  withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format());

  if (useInternationalFormat) {
    return (0,_applyInternationalSeparatorStyle__WEBPACK_IMPORTED_MODULE_0__.default)(formattedNumber);
  }

  return formattedNumber;
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCountryByCallingCode)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _getNumberType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumberType */ "./node_modules/libphonenumber-js/es6/helpers/getNumberType.js");


var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
function getCountryByCallingCode(callingCode, nationalPhoneNumber, metadata) {
  /* istanbul ignore if */
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return '001';
    }
  } // Is always non-empty, because `callingCode` is always valid


  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);

  if (!possibleCountries) {
    return;
  } // If there's just one country corresponding to the country code,
  // then just return it, without further phone number digits validation.


  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }

  return selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata.metadata);
}

function selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata) {
  // Re-create `metadata` because it will be selecting a `country`.
  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata);

  for (var _iterator = possibleCountries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var country = _ref;
    metadata.country(country); // Leading digits check would be the simplest one

    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } // Else perform full validation with all of those
    // fixed-line/mobile/etc regular expressions.
    else if ((0,_getNumberType__WEBPACK_IMPORTED_MODULE_1__.default)({
        phone: nationalPhoneNumber,
        country: country
      }, undefined, metadata.metadata)) {
        return country;
      }
  }
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js":
/*!********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getIddPrefix)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");

/**
 * Pattern that makes it easy to distinguish whether a region has a single
 * international dialing prefix or not. If a region has a single international
 * prefix (e.g. 011 in USA), it will be represented as a string that contains
 * a sequence of ASCII digits, and possibly a tilde, which signals waiting for
 * the tone. If there are multiple available international prefixes in a
 * region, they will be represented as a regex string that always contains one
 * or more characters that are not ASCII digits or a tilde.
 */

var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/; // For regions that have multiple IDD prefixes
// a preferred IDD prefix is returned.

function getIddPrefix(country, callingCode, metadata) {
  var countryMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);

  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }

  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/getNumberType.js":
/*!*********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/getNumberType.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNumberType),
/* harmony export */   "isNumberTypeEqualTo": () => (/* binding */ isNumberTypeEqualTo)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _matchesEntirely__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesEntirely */ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js");


var NON_FIXED_LINE_PHONE_TYPES = ['MOBILE', 'PREMIUM_RATE', 'TOLL_FREE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL']; // Finds out national phone number type (fixed line, mobile, etc)

function getNumberType(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {}; // When `parse()` returned `{}`
  // meaning that the phone number is not a valid one.

  if (!input.country) {
    return;
  }

  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // The following is copy-pasted from the original function:
  // https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835
  // Is this national number even valid for this country

  if (!(0,_matchesEntirely__WEBPACK_IMPORTED_MODULE_1__.default)(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  } // Is it fixed line number


  if (isNumberTypeEqualTo(nationalNumber, 'FIXED_LINE', metadata)) {
    // Because duplicate regular expressions are removed
    // to reduce metadata size, if "mobile" pattern is ""
    // then it means it was removed due to being a duplicate of the fixed-line pattern.
    //
    if (metadata.type('MOBILE') && metadata.type('MOBILE').pattern() === '') {
      return 'FIXED_LINE_OR_MOBILE';
    } // v1 metadata.
    // Legacy.
    // Deprecated.


    if (!metadata.type('MOBILE')) {
      return 'FIXED_LINE_OR_MOBILE';
    } // Check if the number happens to qualify as both fixed line and mobile.
    // (no such country in the minimal metadata set)

    /* istanbul ignore if */


    if (isNumberTypeEqualTo(nationalNumber, 'MOBILE', metadata)) {
      return 'FIXED_LINE_OR_MOBILE';
    }

    return 'FIXED_LINE';
  }

  for (var _i = 0, _NON_FIXED_LINE_PHONE = NON_FIXED_LINE_PHONE_TYPES; _i < _NON_FIXED_LINE_PHONE.length; _i++) {
    var type = _NON_FIXED_LINE_PHONE[_i];

    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  type = metadata.type(type);

  if (!type || !type.pattern()) {
    return false;
  } // Check if any possible number lengths are present;
  // if so, we use them to avoid checking
  // the validation pattern if they don't match.
  // If they are absent, this means they match
  // the general description, which we have
  // already checked before a specific number type.


  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }

  return (0,_matchesEntirely__WEBPACK_IMPORTED_MODULE_1__.default)(nationalNumber, type.pattern());
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js":
/*!***************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VALID_PHONE_NUMBER": () => (/* binding */ VALID_PHONE_NUMBER),
/* harmony export */   "VALID_PHONE_NUMBER_WITH_EXTENSION": () => (/* binding */ VALID_PHONE_NUMBER_WITH_EXTENSION),
/* harmony export */   "default": () => (/* binding */ isViablePhoneNumber)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/libphonenumber-js/es6/constants.js");
/* harmony import */ var _extension_createExtensionPattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension/createExtensionPattern */ "./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js");

 //  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  "Note VALID_PUNCTUATION starts with a -,
//   so must be the first in the range" (c) Google devs.
//  (wtf did they mean by saying that; probably nothing)
//

var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']{' + _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH_FOR_NSN + '}'; //
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//

var VALID_PHONE_NUMBER = '[' + _constants__WEBPACK_IMPORTED_MODULE_0__.PLUS_CHARS + ']{0,1}' + '(?:' + '[' + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + ']*' + '[' + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']' + '){3,}' + '[' + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']*';
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
'(?:' + (0,_extension_createExtensionPattern__WEBPACK_IMPORTED_MODULE_1__.default)() + ')?'; // The combined regular expression for valid phone numbers:
//

var VALID_PHONE_NUMBER_PATTERN = new RegExp( // Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' + // Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER_WITH_EXTENSION + '$', 'i'); // Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//

function isViablePhoneNumber(number) {
  return number.length >= _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js":
/*!***********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matchesEntirely)
/* harmony export */ });
/**
 * Checks whether the entire input sequence can be matched
 * against the regular expression.
 * @return {boolean}
 */
function matchesEntirely(text, regular_expression) {
  // If assigning the `''` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  text = text || '';
  return new RegExp('^(?:' + regular_expression + ')$').test(text);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/mergeArrays.js":
/*!*******************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/mergeArrays.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeArrays)
/* harmony export */ });
/**
 * Merges two arrays.
 * @param  {*} a
 * @param  {*} b
 * @return {*}
 */
function mergeArrays(a, b) {
  var merged = a.slice();

  for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var element = _ref;

    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }

  return merged.sort(function (a, b) {
    return a - b;
  }); // ES6 version, requires Set polyfill.
  // let merged = new Set(a)
  // for (const element of b) {
  // 	merged.add(i)
  // }
  // return Array.from(merged).sort((a, b) => a - b)
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/parseDigits.js":
/*!*******************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/parseDigits.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGITS": () => (/* binding */ DIGITS),
/* harmony export */   "parseDigit": () => (/* binding */ parseDigit),
/* harmony export */   "default": () => (/* binding */ parseDigits)
/* harmony export */ });
// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
var DIGITS = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  "\uFF10": '0',
  // Fullwidth digit 0
  "\uFF11": '1',
  // Fullwidth digit 1
  "\uFF12": '2',
  // Fullwidth digit 2
  "\uFF13": '3',
  // Fullwidth digit 3
  "\uFF14": '4',
  // Fullwidth digit 4
  "\uFF15": '5',
  // Fullwidth digit 5
  "\uFF16": '6',
  // Fullwidth digit 6
  "\uFF17": '7',
  // Fullwidth digit 7
  "\uFF18": '8',
  // Fullwidth digit 8
  "\uFF19": '9',
  // Fullwidth digit 9
  "\u0660": '0',
  // Arabic-indic digit 0
  "\u0661": '1',
  // Arabic-indic digit 1
  "\u0662": '2',
  // Arabic-indic digit 2
  "\u0663": '3',
  // Arabic-indic digit 3
  "\u0664": '4',
  // Arabic-indic digit 4
  "\u0665": '5',
  // Arabic-indic digit 5
  "\u0666": '6',
  // Arabic-indic digit 6
  "\u0667": '7',
  // Arabic-indic digit 7
  "\u0668": '8',
  // Arabic-indic digit 8
  "\u0669": '9',
  // Arabic-indic digit 9
  "\u06F0": '0',
  // Eastern-Arabic digit 0
  "\u06F1": '1',
  // Eastern-Arabic digit 1
  "\u06F2": '2',
  // Eastern-Arabic digit 2
  "\u06F3": '3',
  // Eastern-Arabic digit 3
  "\u06F4": '4',
  // Eastern-Arabic digit 4
  "\u06F5": '5',
  // Eastern-Arabic digit 5
  "\u06F6": '6',
  // Eastern-Arabic digit 6
  "\u06F7": '7',
  // Eastern-Arabic digit 7
  "\u06F8": '8',
  // Eastern-Arabic digit 8
  "\u06F9": '9' // Eastern-Arabic digit 9

};
function parseDigit(character) {
  return DIGITS[character];
}
/**
 * Parses phone number digits from a string.
 * Drops all punctuation leaving only digits.
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * parseDigits('8 (800) 555')
 * // Outputs '8800555'.
 * ```
 */

function parseDigits(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;
    var digit = parseDigit(character);

    if (digit) {
      result += digit;
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js":
/*!**********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripIddPrefix)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/libphonenumber-js/es6/constants.js");


var CAPTURING_DIGIT_PATTERN = new RegExp('([' + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + '])');
function stripIddPrefix(number, country, callingCode, metadata) {
  if (!country) {
    return;
  } // Check if the number is IDD-prefixed.


  var countryMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_1__.default(metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());

  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  } // Strip IDD prefix.


  number = number.slice(number.match(IDDPrefixPattern)[0].length); // If there're any digits after an IDD prefix,
  // then those digits are a country calling code.
  // Since no country code starts with a `0`,
  // the code below validates that the next digit (if present) is not `0`.

  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);

  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === '0') {
      return;
    }
  }

  return number;
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/isPossibleNumber_.js":
/*!*****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/isPossibleNumber_.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPossiblePhoneNumber),
/* harmony export */   "isPossibleNumber": () => (/* binding */ isPossibleNumber)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _helpers_checkNumberLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/checkNumberLength */ "./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js");


function isPossiblePhoneNumber(input, options, metadata) {
  /* istanbul ignore if */
  if (options === undefined) {
    options = {};
  }

  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata);

  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error('Invalid phone number object passed');
    }

    metadata.selectNumberingPlan(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }

    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }

      metadata.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error('Invalid phone number object passed');
      }

      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  }

  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  } else {
    // There was a bug between `1.7.35` and `1.7.37` where "possible_lengths"
    // were missing for "non-geographical" numbering plans.
    // Just assume the number is possible in such cases:
    // it's unlikely that anyone generated their custom metadata
    // in that short period of time (one day).
    // This code can be removed in some future major version update.
    if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
      // "Non-geographic entities" did't have `possibleLengths`
      // due to a bug in metadata generation process.
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, metadata) {
  //, isInternational) {
  switch ((0,_helpers_checkNumberLength__WEBPACK_IMPORTED_MODULE_1__.default)(nationalNumber, metadata)) {
    case 'IS_POSSIBLE':
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational

    default:
      return false;
  }
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/metadata.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Metadata),
/* harmony export */   "validateMetadata": () => (/* binding */ validateMetadata),
/* harmony export */   "getExtPrefix": () => (/* binding */ getExtPrefix),
/* harmony export */   "getCountryCallingCode": () => (/* binding */ getCountryCallingCode),
/* harmony export */   "isSupportedCountry": () => (/* binding */ isSupportedCountry)
/* harmony export */ });
/* harmony import */ var _tools_semver_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/semver-compare */ "./node_modules/libphonenumber-js/es6/tools/semver-compare.js");
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

 // Added "possibleLengths" and renamed
// "country_phone_code_to_countries" to "country_calling_codes".

var V2 = '1.0.18'; // Added "idd_prefix" and "default_idd_prefix".

var V3 = '1.2.0'; // Moved `001` country code to "nonGeographic" section of metadata.

var V4 = '1.7.35';
var DEFAULT_EXT_PREFIX = ' ext. ';
var CALLING_CODE_REG_EXP = /^\d+$/;
/**
 * See: https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md
 */

var Metadata = /*#__PURE__*/function () {
  function Metadata(metadata) {
    _classCallCheck(this, Metadata);

    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }

  _createClass(Metadata, [{
    key: "getCountries",
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter(function (_) {
        return _ !== '001';
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return; // `nonGeographical` was a typo.
      // It's present in metadata generated from `1.7.35` to `1.7.37`.

      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== undefined;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }

      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    } // Deprecated.

  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      // Supports just passing `callingCode` as the first argument.
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }

      if (countryCode && countryCode !== '001') {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }

        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }

        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = undefined;
      }

      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];

      if (countryCodes) {
        // Metadata before V4 included "non-geographic entity" calling codes
        // inside `country_calling_codes` (for example, `"881":["001"]`).
        // Now the semantics of `country_calling_codes` has changed:
        // it's specifically for "countries" now.
        // Older versions of custom metadata will simply skip parsing
        // "non-geographic entity" phone numbers with new versions
        // of this library: it's not considered a bug,
        // because such numbers are extremely rare,
        // and developers extremely rarely use custom metadata.
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }

        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);

      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);

      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }

      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];

        if (metadata) {
          return metadata;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return this.metadata.countries['001'];
        }
      }
    } // Deprecated.

  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    } // Deprecated.

  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    } // Deprecated.

  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    } // Deprecated.

  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    } // Deprecated.

  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    } // Deprecated.

  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    } // Deprecated.

  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    } // Deprecated.

  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    } // Deprecated.

  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    } // Deprecated.

  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    } // Deprecated.

  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    } // Deprecated.

  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    } // Deprecated.

  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== undefined;
    }
  }]);

  return Metadata;
}();



var NumberingPlan = /*#__PURE__*/function () {
  function NumberingPlan(metadata, globalMetadataObject) {
    _classCallCheck(this, NumberingPlan);

    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }

  _createClass(NumberingPlan, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    } // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.

  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    } // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "formats",
    value: function formats() {
      var _this = this;

      var formats = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats.map(function (_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    } // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      // If `national_prefix_for_parsing` is not set explicitly,
      // then infer it from `national_prefix` (if any)
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    } // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      // Versions 1.2.0 - 1.2.4: can be `[]`.

      /* istanbul ignore next */
      if (this.types() && this.types().length === 0) {
        return false;
      } // Versions <= 1.2.4: can be `undefined`.
      // Version >= 1.2.5: can be `0`.


      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);

  return NumberingPlan;
}();

var Format = /*#__PURE__*/function () {
  function Format(format, metadata) {
    _classCallCheck(this, Format);

    this._format = format;
    this.metadata = metadata;
  }

  _createClass(Format, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      // National prefix is omitted if there's no national prefix formatting rule
      // set for this country, or when the national prefix formatting rule
      // contains no national prefix itself, or when this rule is set but
      // national prefix is optional for this phone number format
      // (and it is not enforced explicitly)
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    } // Checks whether national prefix formatting rule contains national prefix.

  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) // In compressed metadata, `this.nationalPrefixFormattingRule()` is `0`
      // when `national_prefix_formatting_rule` is not present.
      // So, `true` or `false` are returned explicitly here, so that
      // `0` number isn't returned.
      ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);

  return Format;
}();
/**
 * A pattern that is used to determine if the national prefix formatting rule
 * has the first group only, i.e., does not start with the national prefix.
 * Note that the pattern explicitly allows for unbalanced parentheses.
 */


var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;

var Type = /*#__PURE__*/function () {
  function Type(type, metadata) {
    _classCallCheck(this, Type);

    this.type = type;
    this.metadata = metadata;
  }

  _createClass(Type, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);

  return Type;
}();

function getType(types, type) {
  switch (type) {
    case 'FIXED_LINE':
      return types[0];

    case 'MOBILE':
      return types[1];

    case 'TOLL_FREE':
      return types[2];

    case 'PREMIUM_RATE':
      return types[3];

    case 'PERSONAL_NUMBER':
      return types[4];

    case 'VOICEMAIL':
      return types[5];

    case 'UAN':
      return types[6];

    case 'PAGER':
      return types[7];

    case 'VOIP':
      return types[8];

    case 'SHARED_COST':
      return types[9];
  }
}

function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  } // `country_phone_code_to_countries` was renamed to
  // `country_calling_codes` in `1.0.18`.


  if (!is_object(metadata) || !is_object(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(is_object(metadata) ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }' : 'a ' + type_of(metadata) + ': ' + metadata, "."));
  }
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var is_object = function is_object(_) {
  return _typeof(_) === 'object';
}; // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var type_of = function type_of(_) {
  return _typeof(_);
};
/**
 * Returns extension prefix for a country.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string?}
 * @example
 * // Returns " ext. "
 * getExtPrefix("US")
 */


function getExtPrefix(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).ext();
  }

  return DEFAULT_EXT_PREFIX;
}
/**
 * Returns "country calling code" for a country.
 * Throws an error if the country doesn't exist or isn't supported by this library.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string}
 * @example
 * // Returns "44"
 * getCountryCallingCode("GB")
 */

function getCountryCallingCode(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).countryCallingCode();
  }

  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadata) {
  // metadata = new Metadata(metadata)
  // return metadata.hasCountry(country)
  return metadata.countries[country] !== undefined;
}

function setVersion(metadata) {
  var version = metadata.version;

  if (typeof version === 'number') {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if ((0,_tools_semver_compare__WEBPACK_IMPORTED_MODULE_0__.default)(version, V3) === -1) {
      this.v2 = true;
    } else if ((0,_tools_semver_compare__WEBPACK_IMPORTED_MODULE_0__.default)(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
} // const ISO_COUNTRY_CODE = /^[A-Z]{2}$/
// function isCountryCode(countryCode) {
// 	return ISO_COUNTRY_CODE.test(countryCodeOrCountryCallingCode)
// }

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js":
/*!**************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseIncompletePhoneNumber),
/* harmony export */   "parsePhoneNumberCharacter": () => (/* binding */ parsePhoneNumberCharacter)
/* harmony export */ });
/* harmony import */ var _helpers_parseDigits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/parseDigits */ "./node_modules/libphonenumber-js/es6/helpers/parseDigits.js");

/**
 * Parses phone number characters from a string.
 * Drops all punctuation leaving only digits and the leading `+` sign (if any).
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * // Outputs '8800555'.
 * parseIncompletePhoneNumber('8 (800) 555')
 * // Outputs '+7800555'.
 * parseIncompletePhoneNumber('+7 800 555')
 * ```
 */

function parseIncompletePhoneNumber(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;
    result += parsePhoneNumberCharacter(character, result) || '';
  }

  return result;
}
/**
 * Parses next character while parsing phone number digits (including a `+`)
 * from text: discards everything except `+` and digits, and `+` is only allowed
 * at the start of a phone number.
 * For example, is used in `react-phone-number-input` where it uses
 * [`input-format`](https://gitlab.com/catamphetamine/input-format).
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string?} prevParsedCharacters - Previous parsed characters.
 * @param  {object} meta - Optional custom use-case-specific metadata.
 * @return {string?} The parsed character.
 */

function parsePhoneNumberCharacter(character, prevParsedCharacters) {
  // Only allow a leading `+`.
  if (character === '+') {
    // If this `+` is not the first parsed character
    // then discard it.
    if (prevParsedCharacters) {
      return;
    }

    return '+';
  } // Allow digits.


  return (0,_helpers_parseDigits__WEBPACK_IMPORTED_MODULE_0__.parseDigit)(character);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parsePhoneNumber.js":
/*!****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumber.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumber),
/* harmony export */   "normalizeArguments": () => (/* binding */ normalizeArguments)
/* harmony export */ });
/* harmony import */ var _parsePhoneNumber___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsePhoneNumber_ */ "./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js");
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


function parsePhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return (0,_parsePhoneNumber___WEBPACK_IMPORTED_MODULE_0__.default)(text, options, metadata);
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
      _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4),
      arg_1 = _Array$prototype$slic2[0],
      arg_2 = _Array$prototype$slic2[1],
      arg_3 = _Array$prototype$slic2[2],
      arg_4 = _Array$prototype$slic2[3];

  var text;
  var options;
  var metadata; // If the phone number is passed as a string.
  // `parsePhoneNumber('88005553535', ...)`.

  if (typeof arg_1 === 'string') {
    text = arg_1;
  } else throw new TypeError('A text for parsing must be a string.'); // If "default country" argument is being passed then move it to `options`.
  // `parsePhoneNumber('88005553535', 'RU', [options], metadata)`.


  if (!arg_2 || typeof arg_2 === 'string') {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = undefined;
      metadata = arg_3;
    }

    if (arg_2) {
      options = _objectSpread({
        defaultCountry: arg_2
      }, options);
    }
  } // `defaultCountry` is not passed.
  // Example: `parsePhoneNumber('+78005553535', [options], metadata)`.
  else if (isObject(arg_2)) {
      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }
    } else throw new Error("Invalid second argument: ".concat(arg_2));

  return {
    text: text,
    options: options,
    metadata: metadata
  };
} // Otherwise istanbul would show this as "branch not covered".

/* istanbul ignore next */

var isObject = function isObject(_) {
  return _typeof(_) === 'object';
};

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumberFromString)
/* harmony export */ });
/* harmony import */ var _parsePhoneNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsePhoneNumber */ "./node_modules/libphonenumber-js/es6/parsePhoneNumber.js");
/* harmony import */ var _parsePhoneNumberFromString___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsePhoneNumberFromString_ */ "./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js");


function parsePhoneNumberFromString() {
  var _normalizeArguments = (0,_parsePhoneNumber__WEBPACK_IMPORTED_MODULE_0__.normalizeArguments)(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return (0,_parsePhoneNumberFromString___WEBPACK_IMPORTED_MODULE_1__.default)(text, options, metadata);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js":
/*!***************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumberFromString)
/* harmony export */ });
/* harmony import */ var _parsePhoneNumber___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsePhoneNumber_ */ "./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js");
/* harmony import */ var _ParseError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParseError */ "./node_modules/libphonenumber-js/es6/ParseError.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




function parsePhoneNumberFromString(text, options, metadata) {
  // Validate `defaultCountry`.
  if (options && options.defaultCountry && !(0,_metadata__WEBPACK_IMPORTED_MODULE_0__.isSupportedCountry)(options.defaultCountry, metadata)) {
    options = _objectSpread({}, options, {
      defaultCountry: undefined
    });
  } // Parse phone number.


  try {
    return (0,_parsePhoneNumber___WEBPACK_IMPORTED_MODULE_1__.default)(text, options, metadata);
  } catch (error) {
    /* istanbul ignore else */
    if (error instanceof _ParseError__WEBPACK_IMPORTED_MODULE_2__.default) {//
    } else {
      throw error;
    }
  }
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js":
/*!*****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumber)
/* harmony export */ });
/* harmony import */ var _parse___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse_ */ "./node_modules/libphonenumber-js/es6/parse_.js");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


function parsePhoneNumber(text, options, metadata) {
  return (0,_parse___WEBPACK_IMPORTED_MODULE_0__.default)(text, _objectSpread({}, options, {
    v2: true
  }), metadata);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parse_.js":
/*!******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parse_.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/libphonenumber-js/es6/constants.js");
/* harmony import */ var _ParseError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParseError */ "./node_modules/libphonenumber-js/es6/ParseError.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCountryCallingCode */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _helpers_isViablePhoneNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/isViablePhoneNumber */ "./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js");
/* harmony import */ var _helpers_extension_extractExtension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/extension/extractExtension */ "./node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js");
/* harmony import */ var _parseIncompletePhoneNumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parseIncompletePhoneNumber */ "./node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js");
/* harmony import */ var _isPossibleNumber___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPossibleNumber_ */ "./node_modules/libphonenumber-js/es6/isPossibleNumber_.js");
/* harmony import */ var _helpers_RFC3966__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/RFC3966 */ "./node_modules/libphonenumber-js/es6/helpers/RFC3966.js");
/* harmony import */ var _PhoneNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhoneNumber */ "./node_modules/libphonenumber-js/es6/PhoneNumber.js");
/* harmony import */ var _helpers_matchesEntirely__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/matchesEntirely */ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js");
/* harmony import */ var _helpers_extractCountryCallingCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/extractCountryCallingCode */ "./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js");
/* harmony import */ var _helpers_extractNationalNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/extractNationalNumber */ "./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js");
/* harmony import */ var _helpers_getCountryByCallingCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCountryByCallingCode */ "./node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js");
// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js















 // We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.

var MAX_INPUT_STRING_LENGTH = 250; // This consists of the plus symbol, digits, and arabic-indic digits.

var PHONE_NUMBER_START_PATTERN = new RegExp('[' + _constants__WEBPACK_IMPORTED_MODULE_0__.PLUS_CHARS + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']'); // Regular expression of trailing characters that we want to remove.
// A trailing `#` is sometimes used when writing phone numbers with extensions in US.
// Example: "+1 (645) 123 1234-910#" number has extension "910".

var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + _constants__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + '#' + ']+$');
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false; // Examples:
//
// ```js
// parse('8 (800) 555-35-35', 'RU')
// parse('8 (800) 555-35-35', 'RU', metadata)
// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
// parse('+7 800 555 35 35')
// parse('+7 800 555 35 35', metadata)
// ```
//

function parse(text, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_1__.default(metadata); // Validate `defaultCountry`.

  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new _ParseError__WEBPACK_IMPORTED_MODULE_2__.default('INVALID_COUNTRY');
    }

    throw new Error("Unknown country: ".concat(options.defaultCountry));
  } // Parse the phone number.


  var _parseInput = parseInput(text, options.v2, options.extract),
      formattedPhoneNumber = _parseInput.number,
      ext = _parseInput.ext; // If the phone number is not viable then return nothing.


  if (!formattedPhoneNumber) {
    if (options.v2) {
      throw new _ParseError__WEBPACK_IMPORTED_MODULE_2__.default('NOT_A_NUMBER');
    }

    return {};
  }

  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata),
      country = _parsePhoneNumber.country,
      nationalNumber = _parsePhoneNumber.nationalNumber,
      countryCallingCode = _parsePhoneNumber.countryCallingCode,
      carrierCode = _parsePhoneNumber.carrierCode;

  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new _ParseError__WEBPACK_IMPORTED_MODULE_2__.default('INVALID_COUNTRY');
    }

    return {};
  } // Validate national (significant) number length.


  if (!nationalNumber || nationalNumber.length < _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH_FOR_NSN) {
    // Won't throw here because the regexp already demands length > 1.

    /* istanbul ignore if */
    if (options.v2) {
      throw new _ParseError__WEBPACK_IMPORTED_MODULE_2__.default('TOO_SHORT');
    } // Google's demo just throws an error in this case.


    return {};
  } // Validate national (significant) number length.
  //
  // A sidenote:
  //
  // They say that sometimes national (significant) numbers
  // can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
  // https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
  // Such numbers will just be discarded.
  //


  if (nationalNumber.length > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new _ParseError__WEBPACK_IMPORTED_MODULE_2__.default('TOO_LONG');
    } // Google's demo just throws an error in this case.


    return {};
  }

  if (options.v2) {
    var phoneNumber = new _PhoneNumber__WEBPACK_IMPORTED_MODULE_3__.default(countryCallingCode, nationalNumber, metadata.metadata);

    if (country) {
      phoneNumber.country = country;
    }

    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }

    if (ext) {
      phoneNumber.ext = ext;
    }

    return phoneNumber;
  } // Check if national phone number pattern matches the number.
  // National number pattern is different for each country,
  // even for those ones which are part of the "NANPA" group.


  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? (0,_helpers_matchesEntirely__WEBPACK_IMPORTED_MODULE_4__.default)(nationalNumber, metadata.nationalNumberPattern()) : false;

  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  } // isInternational: countryCallingCode !== undefined


  return {
    country: country,
    countryCallingCode: countryCallingCode,
    carrierCode: carrierCode,
    valid: valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && (0,_isPossibleNumber___WEBPACK_IMPORTED_MODULE_5__.isPossibleNumber)(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext: ext
  };
}
/**
 * Extracts a formatted phone number from text.
 * Doesn't guarantee that the extracted phone number
 * is a valid phone number (for example, doesn't validate its length).
 * @param  {string} text
 * @param  {boolean} [extract] — If `false`, then will parse the entire `text` as a phone number.
 * @param  {boolean} [throwOnError] — By default, it won't throw if the text is too long.
 * @return {string}
 * @example
 * // Returns "(213) 373-4253".
 * extractFormattedPhoneNumber("Call (213) 373-4253 for assistance.")
 */

function extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }

  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new _ParseError__WEBPACK_IMPORTED_MODULE_2__.default('TOO_LONG');
    }

    return;
  }

  if (extract === false) {
    return text;
  } // Attempt to extract a possible number from the string passed in


  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);

  if (startsAt < 0) {
    return;
  }

  return text // Trim everything to the left of the phone number
  .slice(startsAt) // Remove trailing non-numerical characters
  .replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}
/**
 * @param  {string} text - Input.
 * @param  {boolean} v2 - Legacy API functions don't pass `v2: true` flag.
 * @param  {boolean} [extract] - Whether to extract a phone number from `text`, or attempt to parse the entire text as a phone number.
 * @return {object} `{ ?number, ?ext }`.
 */


function parseInput(text, v2, extract) {
  // Parse RFC 3966 phone number URI.
  if (text && text.indexOf('tel:') === 0) {
    return (0,_helpers_RFC3966__WEBPACK_IMPORTED_MODULE_6__.parseRFC3966)(text);
  }

  var number = extractFormattedPhoneNumber(text, extract, v2); // If the phone number is not viable, then abort.

  if (!number || !(0,_helpers_isViablePhoneNumber__WEBPACK_IMPORTED_MODULE_7__.default)(number)) {
    return {};
  } // Attempt to parse extension first, since it doesn't require region-specific
  // data and we want to have the non-normalised number here.


  var withExtensionStripped = (0,_helpers_extension_extractExtension__WEBPACK_IMPORTED_MODULE_8__.default)(number);

  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }

  return {
    number: number
  };
}
/**
 * Creates `parse()` result object.
 */


function result(country, nationalNumber, ext) {
  var result = {
    country: country,
    phone: nationalNumber
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * Parses a viable phone number.
 * @param {string} formattedPhoneNumber — Example: "(213) 373-4253".
 * @param {string} [defaultCountry]
 * @param {string} [defaultCallingCode]
 * @param {Metadata} metadata
 * @return {object} Returns `{ country: string?, countryCallingCode: string?, nationalNumber: string? }`.
 */


function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  // Extract calling code from phone number.
  var _extractCountryCallin = (0,_helpers_extractCountryCallingCode__WEBPACK_IMPORTED_MODULE_9__.default)((0,_parseIncompletePhoneNumber__WEBPACK_IMPORTED_MODULE_10__.default)(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata),
      countryCallingCode = _extractCountryCallin.countryCallingCode,
      number = _extractCountryCallin.number; // Choose a country by `countryCallingCode`.


  var country;

  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } // If `formattedPhoneNumber` is in "national" format
  // then `number` is defined and `countryCallingCode` isn't.
  else if (number && (defaultCountry || defaultCallingCode)) {
      metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);

      if (defaultCountry) {
        country = defaultCountry;
      } else {
        /* istanbul ignore if */
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            country = '001';
          }
        }
      }

      countryCallingCode = defaultCallingCode || (0,_metadata__WEBPACK_IMPORTED_MODULE_1__.getCountryCallingCode)(defaultCountry, metadata.metadata);
    } else return {};

  if (!number) {
    return {
      countryCallingCode: countryCallingCode
    };
  }

  var _extractNationalNumbe = (0,_helpers_extractNationalNumber__WEBPACK_IMPORTED_MODULE_11__.default)((0,_parseIncompletePhoneNumber__WEBPACK_IMPORTED_MODULE_10__.default)(number), metadata),
      nationalNumber = _extractNationalNumbe.nationalNumber,
      carrierCode = _extractNationalNumbe.carrierCode; // Sometimes there are several countries
  // corresponding to the same country phone code
  // (e.g. NANPA countries all having `1` country phone code).
  // Therefore, to reliably determine the exact country,
  // national (significant) number should have been parsed first.
  //
  // When `metadata.json` is generated, all "ambiguous" country phone codes
  // get their countries populated with the full set of
  // "phone number type" regular expressions.
  //


  var exactCountry = (0,_helpers_getCountryByCallingCode__WEBPACK_IMPORTED_MODULE_12__.default)(countryCallingCode, nationalNumber, metadata);

  if (exactCountry) {
    country = exactCountry;
    /* istanbul ignore if */

    if (exactCountry === '001') {// Can't happen with `USE_NON_GEOGRAPHIC_COUNTRY_CODE` being `false`.
      // If `USE_NON_GEOGRAPHIC_COUNTRY_CODE` is set to `true` for some reason,
      // then remove the "istanbul ignore if".
    } else {
      metadata.country(country);
    }
  }

  return {
    country: country,
    countryCallingCode: countryCallingCode,
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/tools/semver-compare.js":
/*!********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/tools/semver-compare.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copy-pasted from:
// https://github.com/substack/semver-compare/blob/master/index.js
//
// Inlining this function because some users reported issues with
// importing from `semver-compare` in a browser with ES6 "native" modules.
//
// Fixes `semver-compare` not being able to compare versions with alpha/beta/etc "tags".
// https://github.com/catamphetamine/libphonenumber-js/issues/381
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  a = a.split('-');
  b = b.split('-');
  var pa = a[0].split('.');
  var pb = b[0].split('.');

  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }

  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }

  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/validate_.js":
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/validate_.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValidNumber)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _helpers_matchesEntirely__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/matchesEntirely */ "./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js");
/* harmony import */ var _helpers_getNumberType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getNumberType */ "./node_modules/libphonenumber-js/es6/helpers/getNumberType.js");



/**
 * Checks if a given phone number is valid.
 *
 * If the `number` is a string, it will be parsed to an object,
 * but only if it contains only valid phone number characters (including punctuation).
 * If the `number` is an object, it is used as is.
 *
 * The optional `defaultCountry` argument is the default country.
 * I.e. it does not restrict to just that country,
 * e.g. in those cases where several countries share
 * the same phone numbering rules (NANPA, Britain, etc).
 * For example, even though the number `07624 369230`
 * belongs to the Isle of Man ("IM" country code)
 * calling `isValidNumber('07624369230', 'GB', metadata)`
 * still returns `true` because the country is not restricted to `GB`,
 * it's just that `GB` is the default one for the phone numbering rules.
 * For restricting the country see `isValidNumberForRegion()`
 * though restricting a country might not be a good idea.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 *
 * Examples:
 *
 * ```js
 * isValidNumber('+78005553535', metadata)
 * isValidNumber('8005553535', 'RU', metadata)
 * isValidNumber('88005553535', 'RU', metadata)
 * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */

function isValidNumber(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new _metadata__WEBPACK_IMPORTED_MODULE_0__.default(metadata); // This is just to support `isValidNumber({})`
  // for cases when `parseNumber()` returns `{}`.

  if (!input.country) {
    return false;
  }

  metadata.selectNumberingPlan(input.country, input.countryCallingCode); // By default, countries only have type regexps when it's required for
  // distinguishing different countries having the same `countryCallingCode`.

  if (metadata.hasTypes()) {
    return (0,_helpers_getNumberType__WEBPACK_IMPORTED_MODULE_1__.default)(input, options, metadata.metadata) !== undefined;
  } // If there are no type regexps for this country in metadata then use
  // `nationalNumberPattern` as a "better than nothing" replacement.


  var national_number = options.v2 ? input.nationalNumber : input.phone;
  return (0,_helpers_matchesEntirely__WEBPACK_IMPORTED_MODULE_2__.default)(national_number, metadata.nationalNumberPattern());
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/metadata.min.json.js":
/*!*************************************************************!*\
  !*** ./node_modules/libphonenumber-js/metadata.min.json.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This file is a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "version": 4,
  "country_calling_codes": {
    "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
    "7": ["RU", "KZ"],
    "20": ["EG"],
    "27": ["ZA"],
    "30": ["GR"],
    "31": ["NL"],
    "32": ["BE"],
    "33": ["FR"],
    "34": ["ES"],
    "36": ["HU"],
    "39": ["IT", "VA"],
    "40": ["RO"],
    "41": ["CH"],
    "43": ["AT"],
    "44": ["GB", "GG", "IM", "JE"],
    "45": ["DK"],
    "46": ["SE"],
    "47": ["NO", "SJ"],
    "48": ["PL"],
    "49": ["DE"],
    "51": ["PE"],
    "52": ["MX"],
    "53": ["CU"],
    "54": ["AR"],
    "55": ["BR"],
    "56": ["CL"],
    "57": ["CO"],
    "58": ["VE"],
    "60": ["MY"],
    "61": ["AU", "CC", "CX"],
    "62": ["ID"],
    "63": ["PH"],
    "64": ["NZ"],
    "65": ["SG"],
    "66": ["TH"],
    "81": ["JP"],
    "82": ["KR"],
    "84": ["VN"],
    "86": ["CN"],
    "90": ["TR"],
    "91": ["IN"],
    "92": ["PK"],
    "93": ["AF"],
    "94": ["LK"],
    "95": ["MM"],
    "98": ["IR"],
    "211": ["SS"],
    "212": ["MA", "EH"],
    "213": ["DZ"],
    "216": ["TN"],
    "218": ["LY"],
    "220": ["GM"],
    "221": ["SN"],
    "222": ["MR"],
    "223": ["ML"],
    "224": ["GN"],
    "225": ["CI"],
    "226": ["BF"],
    "227": ["NE"],
    "228": ["TG"],
    "229": ["BJ"],
    "230": ["MU"],
    "231": ["LR"],
    "232": ["SL"],
    "233": ["GH"],
    "234": ["NG"],
    "235": ["TD"],
    "236": ["CF"],
    "237": ["CM"],
    "238": ["CV"],
    "239": ["ST"],
    "240": ["GQ"],
    "241": ["GA"],
    "242": ["CG"],
    "243": ["CD"],
    "244": ["AO"],
    "245": ["GW"],
    "246": ["IO"],
    "247": ["AC"],
    "248": ["SC"],
    "249": ["SD"],
    "250": ["RW"],
    "251": ["ET"],
    "252": ["SO"],
    "253": ["DJ"],
    "254": ["KE"],
    "255": ["TZ"],
    "256": ["UG"],
    "257": ["BI"],
    "258": ["MZ"],
    "260": ["ZM"],
    "261": ["MG"],
    "262": ["RE", "YT"],
    "263": ["ZW"],
    "264": ["NA"],
    "265": ["MW"],
    "266": ["LS"],
    "267": ["BW"],
    "268": ["SZ"],
    "269": ["KM"],
    "290": ["SH", "TA"],
    "291": ["ER"],
    "297": ["AW"],
    "298": ["FO"],
    "299": ["GL"],
    "350": ["GI"],
    "351": ["PT"],
    "352": ["LU"],
    "353": ["IE"],
    "354": ["IS"],
    "355": ["AL"],
    "356": ["MT"],
    "357": ["CY"],
    "358": ["FI", "AX"],
    "359": ["BG"],
    "370": ["LT"],
    "371": ["LV"],
    "372": ["EE"],
    "373": ["MD"],
    "374": ["AM"],
    "375": ["BY"],
    "376": ["AD"],
    "377": ["MC"],
    "378": ["SM"],
    "380": ["UA"],
    "381": ["RS"],
    "382": ["ME"],
    "383": ["XK"],
    "385": ["HR"],
    "386": ["SI"],
    "387": ["BA"],
    "389": ["MK"],
    "420": ["CZ"],
    "421": ["SK"],
    "423": ["LI"],
    "500": ["FK"],
    "501": ["BZ"],
    "502": ["GT"],
    "503": ["SV"],
    "504": ["HN"],
    "505": ["NI"],
    "506": ["CR"],
    "507": ["PA"],
    "508": ["PM"],
    "509": ["HT"],
    "590": ["GP", "BL", "MF"],
    "591": ["BO"],
    "592": ["GY"],
    "593": ["EC"],
    "594": ["GF"],
    "595": ["PY"],
    "596": ["MQ"],
    "597": ["SR"],
    "598": ["UY"],
    "599": ["CW", "BQ"],
    "670": ["TL"],
    "672": ["NF"],
    "673": ["BN"],
    "674": ["NR"],
    "675": ["PG"],
    "676": ["TO"],
    "677": ["SB"],
    "678": ["VU"],
    "679": ["FJ"],
    "680": ["PW"],
    "681": ["WF"],
    "682": ["CK"],
    "683": ["NU"],
    "685": ["WS"],
    "686": ["KI"],
    "687": ["NC"],
    "688": ["TV"],
    "689": ["PF"],
    "690": ["TK"],
    "691": ["FM"],
    "692": ["MH"],
    "850": ["KP"],
    "852": ["HK"],
    "853": ["MO"],
    "855": ["KH"],
    "856": ["LA"],
    "880": ["BD"],
    "886": ["TW"],
    "960": ["MV"],
    "961": ["LB"],
    "962": ["JO"],
    "963": ["SY"],
    "964": ["IQ"],
    "965": ["KW"],
    "966": ["SA"],
    "967": ["YE"],
    "968": ["OM"],
    "970": ["PS"],
    "971": ["AE"],
    "972": ["IL"],
    "973": ["BH"],
    "974": ["QA"],
    "975": ["BT"],
    "976": ["MN"],
    "977": ["NP"],
    "992": ["TJ"],
    "993": ["TM"],
    "994": ["AZ"],
    "995": ["GE"],
    "996": ["KG"],
    "998": ["UZ"]
  },
  "countries": {
    "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
    "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
    "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
    "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
    "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
    "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
    "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
    "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
    "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
    "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
    "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "0|(183[12])", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
    "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
    "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
    "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365|46", "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
    "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
    "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
    "BD": ["880", "00", "1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
    "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
    "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
    "BG": ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]]],
    "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
    "BJ": ["229", "00", "[25689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25689]"]]]],
    "BL": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
    "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
    "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
    "BO": ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
    "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
    "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
    "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
    "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
    "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
    "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
    "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]]],
    "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
    "CD": ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
    "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
    "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
    "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
    "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
    "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
    "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
    "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"],
    "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1 $2", ["[14][2-9]|[25-8]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"],
    "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
    "CU": ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
    "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
    "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
    "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
    "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
    "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
    "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:[12]\\d|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
    "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
    "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
    "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"],
    "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
    "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
    "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
    "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0"],
    "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
    "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
    "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
    "ET": ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]], "0"],
    "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
    "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "FK": ["500", "00", "[2-7]\\d{4}", [5]],
    "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
    "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
    "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
    "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], 0, 0, "0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})", "$1"],
    "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[023])|4(?:[0-5]\\d\\d|69[7-9]|70[059])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[259]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[278])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
    "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
    "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
    "GF": ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
    "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
    "GI": ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
    "GL": ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]]],
    "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
    "GP": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
    "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
    "GR": ["30", "00", "5005000\\d{3}|8\\d{9,10}|(?:[269]\\d|70)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["8"]]]],
    "GT": ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
    "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
    "GY": ["592", "001", "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]],
    "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
    "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "HT": ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]]],
    "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
    "ID": ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
    "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
    "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
    "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
    "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
    "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
    "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "IT": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
    "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}"], ["56\\d{8}"]]],
    "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
    "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0"],
    "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    "KG": ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
    "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
    "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
    "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
    "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
    "KW": ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]]],
    "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
    "KZ": ["7", "810", "33622\\d{5}|(?:7\\d|80)\\d{8}", [10], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
    "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
    "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
    "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"],
    "LI": ["423", "00", "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(1001)"],
    "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
    "LR": ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]], "0"],
    "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
    "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"],
    "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
    "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
    "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
    "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0\\d|1[0-2]|6[1267]|7[0-57]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]],
    "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
    "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
    "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
    "MF": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
    "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1"],
    "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
    "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
    "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
    "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "MN": ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
    "MO": ["853", "00", "(?:28|[68]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
    "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
    "MQ": ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
    "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"],
    "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
    "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[2-468]|5\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["5"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
    "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "MW": ["265", "00", "(?:[19]\\d|[23]1|77|88)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
    "MX": ["52", "0[09]", "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"],
    "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9])|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
    "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "NC": ["687", "00", "[2-57-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]]],
    "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]]],
    "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
    "NG": ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
    "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
    "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"],
    "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
    "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-579]|6[2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
    "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]],
    "NU": ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
    "NZ": ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
    "PA": ["507", "00", "8\\d{9}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
    "PE": ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, 0, " Anexo "],
    "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
    "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
    "PL": ["48", "00", "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
    "PM": ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
    "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
    "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
    "QA": ["974", "00", "[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]]],
    "RE": ["262", "00", "9769\\d{5}|(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, "26[23]|69|[89]"],
    "RO": ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
    "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
    "RU": ["7", "810", "[347-9]\\d{9}", [10], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", 1]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
    "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]], "0"],
    "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
    "SB": ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
    "SC": ["248", "010|0[0-2]", "8000\\d{3}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
    "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-4]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
    "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
    "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
    "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
    "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
    "SN": ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
    "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|9[2-9]"]]], "0"],
    "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
    "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
    "SV": ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
    "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
    "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
    "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
    "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
    "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
    "TD": ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
    "TH": ["66", "00[1-9]", "1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "TJ": ["992", "810", "(?:00|11|[2-57-9]\\d)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], 0, 1], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], 0, 1], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"], 0, 1], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02-57-9]|11"], 0, 1]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
    "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
    "TM": ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
    "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
    "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
    "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
    "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
    "TZ": ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
    "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
    "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
    "US": ["1", "011", "[2-9]\\d{9}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
    "UY": ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
    "UZ": ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
    "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
    "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
    "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
    "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
    "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
    "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
    "WF": ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    "XK": ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"],
    "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "YT": ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
    "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "ZM": ["260", "00", "(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
    "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
  },
  "nonGeographic": {
    "800": ["800", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["[1-9]\\d{7}"]]],
    "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
    "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],
    "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
    "881": ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]],
    "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]],
    "883": ["883", 0, "210\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|51[013]0\\d)\\d{7}|5100\\d{5}"]]],
    "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
    "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
  }
});

/***/ }),

/***/ "./node_modules/libphonenumber-js/min/exports/isSupportedCountry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/isSupportedCountry.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSupportedCountry": () => (/* binding */ isSupportedCountry)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/min/metadata.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/index */ "./node_modules/libphonenumber-js/es6/metadata.js");


function isSupportedCountry() {
  return (0,_metadata__WEBPACK_IMPORTED_MODULE_0__.withMetadata)(_core_index__WEBPACK_IMPORTED_MODULE_1__.isSupportedCountry, arguments);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parsePhoneNumberFromString": () => (/* binding */ parsePhoneNumberFromString)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata */ "./node_modules/libphonenumber-js/min/metadata.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/index */ "./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString.js");


function parsePhoneNumberFromString() {
  return (0,_metadata__WEBPACK_IMPORTED_MODULE_0__.withMetadata)(_core_index__WEBPACK_IMPORTED_MODULE_1__.default, arguments);
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/min/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/metadata.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "withMetadata": () => (/* binding */ withMetadata)
/* harmony export */ });
/* harmony import */ var _metadata_min_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata.min.json.js */ "./node_modules/libphonenumber-js/metadata.min.json.js");
// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_metadata_min_json_js__WEBPACK_IMPORTED_MODULE_0__.default);
function withMetadata(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(_metadata_min_json_js__WEBPACK_IMPORTED_MODULE_0__.default);
  return func.apply(this, args);
}

/***/ }),

/***/ "./src/locator/constants.ts":
/*!**********************************!*\
  !*** ./src/locator/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "limit": () => (/* binding */ limit),
/* harmony export */   "radius": () => (/* binding */ radius),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery),
/* harmony export */   "locationInput": () => (/* binding */ locationInput),
/* harmony export */   "searchButton": () => (/* binding */ searchButton),
/* harmony export */   "useMyLocation": () => (/* binding */ useMyLocation),
/* harmony export */   "locationNoun": () => (/* binding */ locationNoun),
/* harmony export */   "locationNounPlural": () => (/* binding */ locationNounPlural),
/* harmony export */   "liveAPIKey": () => (/* binding */ liveAPIKey),
/* harmony export */   "savedFilterId": () => (/* binding */ savedFilterId),
/* harmony export */   "entityTypes": () => (/* binding */ entityTypes),
/* harmony export */   "loadLocationsOnLoad": () => (/* binding */ loadLocationsOnLoad),
/* harmony export */   "enableAutocomplete": () => (/* binding */ enableAutocomplete),
/* harmony export */   "base_url": () => (/* binding */ base_url),
/* harmony export */   "useMiles": () => (/* binding */ useMiles),
/* harmony export */   "locationOptions": () => (/* binding */ locationOptions)
/* harmony export */ });
var limit = 5;
var radius = 300;
var defaultQuery = "";
var locationInput = document.getElementById("location-input");
var searchButton = document.getElementById("search-location-button");
var useMyLocation = document.getElementById("useLocation");
var locationNoun = "Locations";
var locationNounPlural = "Locations"; // Live Api query variables

var script_tag = document.getElementById('js-locator');
var liveAPIKey = script_tag.getAttribute('data');
var savedFilterId = "";
var entityTypes = "location";
var loadLocationsOnLoad = false;
var enableAutocomplete = true;
var base_url = "https://liveapi-sandbox.yext.com/v2/accounts/3157260/";
var useMiles = true;
var locationOptions = {
  cardTitle: {
    value: "name",
    contentSource: "FIELD",
    isRtf: true
  },
  cardTitleLinkUrl: {
    value: "slug",
    contentSource: "FIELD"
  },
  hours: {
    value: "hours",
    contentSource: "FIELD"
  },
  address: {
    value: "address",
    contentSource: "FIELD"
  },
  phoneNumber: {
    value: "mainPhone",
    contentSource: "FIELD"
  },
  getDirectionsLabel: {
    value: "Get Directions",
    contentSource: "text",
    isRtf: true
  },
  coordinates: {
    value: "geocodedCoordinate",
    contentSource: "FIELD"
  },
  viewDetailsLinkText: {
    value: "View Details",
    contentSource: "text"
  },
  viewDetailsLinkUrl: {
    value: "/",
    contentSource: "text"
  }
};

/***/ }),

/***/ "./src/locator/loader.ts":
/*!*******************************!*\
  !*** ./src/locator/loader.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLoading": () => (/* binding */ isLoading),
/* harmony export */   "startLoading": () => (/* binding */ startLoading),
/* harmony export */   "stopLoading": () => (/* binding */ stopLoading),
/* harmony export */   "getRequest": () => (/* binding */ getRequest)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/locator/constants.ts");
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations */ "./src/locator/locations.ts");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/locator/map.ts");



var isLoading = false;
function startLoading() {
  // console.log("start loading");
  isLoading = true;
  [].slice.call(document.querySelectorAll(".spinner") || []).forEach(function (el) {
    el.style.visibility = "visible";
  });
  [].slice.call(document.querySelectorAll(".search-center") || []).forEach(function (el) {
    el.innerHTML = "";
  });
  [].slice.call(document.getElementsByClassName("result") || []).forEach(function (el) {
    // el.style.visibility = "hidden";
    el.innerHTML = '<div class="skeleton h-6 flex-grow mx-4 my-10"></div>';
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.locationInput.disabled = true;
  [].slice.call(document.querySelectorAll(".search") || []).forEach(function (el) {
    el.classList.add("disabled");
  });
}
function stopLoading() {
  isLoading = false;
  [].slice.call(document.querySelectorAll(".spinner") || []).forEach(function (el) {
    el.style.visibility = "hidden";
  });
  [].slice.call(document.querySelectorAll(".result-list") || []).forEach(function (el) {
    el.style.visibility = "visible";
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.locationInput.disabled = false;
  [].slice.call(document.querySelectorAll(".search") || []).forEach(function (el) {
    el.classList.remove("disabled");
  });
}
function getRequest(request_url, queryString) {
  // Add query string to URL
  if (queryString !== null) {
    var newUrl = window.location.href.replace(/(\?.*)?$/, "?q=queryString".replace("queryString", queryString));

    if (window.history.state && window.history.state.queryString !== queryString) {
      window.history.pushState({
        queryString: queryString
      }, "", newUrl);
    } else {
      window.history.replaceState({
        queryString: queryString
      }, "", newUrl);
    }
  }

  startLoading();
  request_url += "&api_key=" + _constants__WEBPACK_IMPORTED_MODULE_0__.liveAPIKey;
  request_url += "&v=" + "20181201";
  request_url += "&resolvePlaceholders=true";

  if (_constants__WEBPACK_IMPORTED_MODULE_0__.entityTypes) {
    request_url += "&entityTypes=" + _constants__WEBPACK_IMPORTED_MODULE_0__.entityTypes;
  }

  if (_constants__WEBPACK_IMPORTED_MODULE_0__.savedFilterId) {
    request_url += "&savedFilterIds=" + _constants__WEBPACK_IMPORTED_MODULE_0__.savedFilterId;
  }

  fetch(request_url, {
    method: "GET"
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.meta.errors && data.meta.errors.length > 0) {
      alert(data.meta.errors[0]["message"]);
    }

    var locations = [];

    for (var i = 0; i < data.response.entities.length; i++) {
      var location_1 = data.response.entities[i]; // Add location distance if it exists

      if (data.response.distances) {
        location_1.__distance = data.response.distances[i];
      }

      locations.push(location_1);
    } // Update Panel


    (0,_locations__WEBPACK_IMPORTED_MODULE_1__.renderLocations)(locations, false, false);
    (0,_locations__WEBPACK_IMPORTED_MODULE_1__.renderSearchDetail)(data.response.geo, locations.length, data.response.count, queryString); // Update Map

    (0,_map__WEBPACK_IMPORTED_MODULE_2__.addMarkersToMap)(locations);

    if (locations.length == 0) {
      (0,_map__WEBPACK_IMPORTED_MODULE_2__.centerOnGeo)(data.response.geo);
    }

    [].slice.call(document.querySelectorAll(".error-text") || []).forEach(function (el) {
      el.textContent = "";
    });
    stopLoading();
  })["catch"](function (err) {
    alert("There was an error");
    console.error(err);
  });
}

/***/ }),

/***/ "./src/locator/locations.ts":
/*!**********************************!*\
  !*** ./src/locator/locations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentLatitude": () => (/* binding */ currentLatitude),
/* harmony export */   "currentLongitude": () => (/* binding */ currentLongitude),
/* harmony export */   "locationJSONtoHTML": () => (/* binding */ locationJSONtoHTML),
/* harmony export */   "renderLocations": () => (/* binding */ renderLocations),
/* harmony export */   "renderSearchDetail": () => (/* binding */ renderSearchDetail),
/* harmony export */   "getNearestLocationsByString": () => (/* binding */ getNearestLocationsByString),
/* harmony export */   "getLocations": () => (/* binding */ getLocations),
/* harmony export */   "getUsersLocation": () => (/* binding */ getUsersLocation)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/locator/utils.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./src/locator/time.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/locator/constants.ts");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./src/locator/loader.ts");
/* harmony import */ var _yext_rtf_converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yext/rtf-converter */ "./node_modules/@yext/rtf-converter/lib/rtf-converter.min.js");
/* harmony import */ var _yext_rtf_converter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yext_rtf_converter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map */ "./src/locator/map.ts");







var currentLatitude = 0;
var currentLongitude = 0;
function locationJSONtoHTML(entityProfile, index, locationOptions) {
  var getValue = function getValue(opt) {
    var val = opt.value;

    if (opt.contentSource === "FIELD") {
      val = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getValueFromPath)(entityProfile, opt.value);
    }

    return opt.isRtf && !!val ? _yext_rtf_converter__WEBPACK_IMPORTED_MODULE_5___default().toHTML(val) : val;
  };

  var cardTitleValue = getValue(locationOptions.cardTitle);
  var getDirectionsLabelValue = getValue(locationOptions.getDirectionsLabel);
  var viewDetailsLinkTextValue = getValue(locationOptions.viewDetailsLinkText);
  var cardTitleLinkUrlValue = getValue(locationOptions.cardTitleLinkUrl);
  var hoursValue = getValue(locationOptions.hours);
  var addressValue = getValue(locationOptions.address);
  var phoneNumberValue = getValue(locationOptions.phoneNumber);
  var viewDetailsLinkUrlValue = getValue(locationOptions.viewDetailsLinkUrl);
  var html = '<div class="lp-param-results lp-subparam-cardTitle lp-subparam-cardTitleLinkUrl">';

  if (cardTitleLinkUrlValue && cardTitleValue) {
    if (cardTitleLinkUrlValue["url"]) {
      cardTitleLinkUrlValue = cardTitleLinkUrlValue["url"];
    }

    html += "<div class=\"name hover:underline hover:font-semibold text-ll-red \">\n      <a href=\"" + cardTitleLinkUrlValue + "\">\n        " + cardTitleValue + " \n      </a>\n    </div>";
  } else if (cardTitleValue) {
    html += "<div class=\"name hover:underline hover:font-semibold text-ll-red \">\n      " + cardTitleValue + "\n    </div>";
  }

  html += "</div>";

  if (hoursValue) {
    var offset = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getValueFromPath)(entityProfile, "timeZoneUtcOffset");
    var parsedOffset = (0,_time__WEBPACK_IMPORTED_MODULE_1__.parseTimeZoneUtcOffset)(offset);
    html += '<div class="lp-param-results lp-subparam-hours">';
    html += '<div class="open-now-string">' + (0,_time__WEBPACK_IMPORTED_MODULE_1__.formatOpenNowString)(hoursValue, parsedOffset) + "</div>";
    html += "</div>";
  }

  var localeString = "en-US";
  html += _i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.addressForCountry({
    locale: localeString,
    profile: {
      address: addressValue
    },
    regionAbbr: false,
    derivedData: {
      address: addressValue
    }
  });
  html += '<div class="lp-param-results lp-subparam-phoneNumber">';

  if (phoneNumberValue) {
    var formattedPhoneNumber = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatPhone)(phoneNumberValue, addressValue.countryCode);

    if (formattedPhoneNumber) {
      html += '<div class="phone">' + formattedPhoneNumber + "</div>";
    }
  }

  html += "</div>";
  var singleLineAddress = entityProfile.name + " " + addressValue.line1 + " " + (addressValue.line2 ? addressValue.line2 + " " : "") + addressValue.city + " " + addressValue.region + " " + addressValue.postalCode;
  html += "<div class=\"lp-param-results lp-subparam-getDirectionsLabel\">\n    <div class=\"link\">\n      <a target=\"_blank\"\n        href=\"https://www.google.com/maps/dir/?api=1&destination=" + singleLineAddress + "\"\n      >\n        " + getDirectionsLabelValue + "\n      </a>\n    </div>\n  </div>";
  html += '<div class="lp-param-results lp-subparam-availability mt-3">';
  html += "</div>"; // if (viewDetailsLinkUrlValue && viewDetailsLinkTextValue) {
  //   // Url value is URL object and not url.
  //   if (viewDetailsLinkUrlValue["url"]) {
  //     viewDetailsLinkUrlValue = viewDetailsLinkUrlValue["url"];
  //   }
  //   html += `<div class="lp-param-results lp-subparam-viewDetailsLinkText lp-subparam-viewDetailsLinkUrl">
  //     <div class="lp-param lp-param-viewDetailsLabel link"><strong>
  //       <a href="${viewDetailsLinkUrlValue}">
  //         ${viewDetailsLinkTextValue}
  //       </a>
  //     </strong></div>
  //   </div>`;
  // }
  // Add center column

  html = "<div class=\"center-column\">" + html + "</div>"; // Add left and right column

  if (entityProfile.__distance) {
    html = "<div class=\"left-column\">\n      " + (index + 1) + ".\n    </div>\n    " + html + "\n    <div class=\"right-column\"><div class=\"distance\">\n      " + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatMiOrKm)(entityProfile.__distance.distanceMiles, entityProfile.__distance.distanceKilometers) + "\n    </div></div>";
  }

  return "<div id=\"result-" + index + "\" class=\"result border\">" + html + "</div>";
} // Renders each location the the result-list-inner html

function renderLocations(locations, append, viewMore) {
  if (!append) {
    [].slice.call(document.querySelectorAll(".result-list-inner") || []).forEach(function (el) {
      el.innerHTML = "";
    });
  } // Done separately because the el.innerHTML call overwrites the original html.
  // Need to wait until all innerHTML is set before attaching listeners.


  locations.forEach(function (location, index) {
    [].slice.call(document.querySelectorAll(".result-list-inner") || []).forEach(function (el) {
      el.innerHTML += locationJSONtoHTML(location, index, _constants__WEBPACK_IMPORTED_MODULE_3__.locationOptions);
    });
  });
  locations.forEach(function (_, index) {
    document.getElementById("result-" + index).addEventListener("mouseover", function () {
      (0,_map__WEBPACK_IMPORTED_MODULE_6__.highlightLocation)(index, false, false);
    });
    document.getElementById("result-" + index).addEventListener("click", function () {
      (0,_map__WEBPACK_IMPORTED_MODULE_6__.highlightLocation)(index, false, true);
    });
  });

  if (viewMore) {
    [].slice.call(document.querySelectorAll(".result-list-inner") || []).forEach(function (el) {
      el.innerHTML += '<div><div class="btn btn-link btn-block">View More</div></div>';
    });
  }
}

function searchDetailMessageForCityAndRegion(total) {
  if (total === 0) {
    return '0 [locationType] found near <strong>"[city], [region]"</strong>';
  } else {
    return '[formattedVisible] of [formattedTotal] [locationType] near <strong>"[city], [region]"</strong>';
  }
}

function searchDetailMessageForArea(total) {
  if (total == 0) {
    return '0 [locationType] found near <strong>"[location]"</strong>';
  } else {
    return '[formattedVisible] of [formattedTotal] [locationType] near <strong>"[location]"</strong>';
  }
}

function searchDetailMessageNoGeo(total) {
  if (total === 0) {
    return "0 [locationType]";
  } else {
    return "[formattedVisible] of [formattedTotal] [locationType]";
  }
} // Renders details of the search


function renderSearchDetail(geo, visible, total, queryString) {
  // x of y locations near "New York, NY"
  // x  locations near "New York, NY"
  // x  locations near "New York, NY"
  var locationType = _constants__WEBPACK_IMPORTED_MODULE_3__.locationNoun;

  if (total === 0 || total > 1) {
    locationType = _constants__WEBPACK_IMPORTED_MODULE_3__.locationNounPlural;
  }

  var formattedVisible = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatNumber)(visible);
  var formattedTotal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatNumber)(total);
  var searchDetailMessage;

  if (geo) {
    if (geo.address.city !== "") {
      searchDetailMessage = searchDetailMessageForCityAndRegion(total);
      searchDetailMessage = searchDetailMessage.replace("[city]", geo.address.city);
      searchDetailMessage = searchDetailMessage.replace("[region]", geo.address.region);
    } else {
      var location_1 = "";

      if (geo.address.region) {
        location_1 = geo.address.region;
      } else if (geo.address.country && queryString) {
        location_1 = queryString;
      } else if (geo.address.country) {
        location_1 = geo.address.country;
      }

      if (location_1 !== "") {
        searchDetailMessage = searchDetailMessageForArea(total);
        searchDetailMessage = searchDetailMessage.replace("[location]", location_1);
      }
    }
  } else {
    searchDetailMessage = searchDetailMessageNoGeo(total);
  }

  searchDetailMessage = searchDetailMessage.replace("[locationType]", locationType);
  searchDetailMessage = searchDetailMessage.replace("[formattedVisible]", formattedVisible);
  searchDetailMessage = searchDetailMessage.replace("[formattedTotal]", formattedTotal);
  [].slice.call(document.querySelectorAll(".search-center") || []).forEach(function (el) {
    el.innerHTML = "";
  });
  [].slice.call(document.querySelectorAll(".search-center") || []).forEach(function (el) {
    el.innerHTML = searchDetailMessage;
  });
}
function getNearestLocationsByString() {
  var queryString = _constants__WEBPACK_IMPORTED_MODULE_3__.locationInput.value;

  if (queryString.trim() !== "") {
    var request_url = _constants__WEBPACK_IMPORTED_MODULE_3__.base_url + "entities/geosearch";
    request_url += "?radius=" + _constants__WEBPACK_IMPORTED_MODULE_3__.radius;
    request_url += "&location=" + queryString; // Uncommon below to limit the number of results to display from the API request
    // request_url += "&limit=" + limit;

    (0,_loader__WEBPACK_IMPORTED_MODULE_4__.getRequest)(request_url, queryString);
  }

  var url = window.location.href;
  var myStorage = window.sessionStorage;
  sessionStorage.setItem('query', url);
} // Get locations by lat lng (automatically fired if the user grants acceess)

function getNearestLatLng(position) {
  [].slice.call(document.querySelectorAll(".error-text") || []).forEach(function (el) {
    el.textContent = "";
  });
  currentLatitude = position.coords.latitude;
  currentLongitude = position.coords.longitude;
  var request_url = _constants__WEBPACK_IMPORTED_MODULE_3__.base_url + "entities/geosearch";
  request_url += "?radius=" + _constants__WEBPACK_IMPORTED_MODULE_3__.radius;
  request_url += "&location=" + position.coords.latitude + ", " + position.coords.longitude; // request_url += "&limit=" + limit;

  (0,_loader__WEBPACK_IMPORTED_MODULE_4__.getRequest)(request_url, null);
} // Gets a list of locations. Only renders if it's a complete list. This avoids a dumb looking map for accounts with a ton of locations.


function getLocations() {
  var request_url = _constants__WEBPACK_IMPORTED_MODULE_3__.base_url + "entities" + "?limit=" + _constants__WEBPACK_IMPORTED_MODULE_3__.limit + '&sortBy=[{"name":"ASCENDING"}]';
  (0,_loader__WEBPACK_IMPORTED_MODULE_4__.getRequest)(request_url, null);
}
function getUsersLocation() {
  if (navigator.geolocation) {
    (0,_loader__WEBPACK_IMPORTED_MODULE_4__.startLoading)();

    var error = function error(_error) {
      [].slice.call(document.querySelectorAll(".error-text") || []).forEach(function (el) {
        el.textContent = "Unable to determine your location. Please try entering a location in the search bar.";
      });
      (0,_loader__WEBPACK_IMPORTED_MODULE_4__.stopLoading)();
    };

    navigator.geolocation.getCurrentPosition(getNearestLatLng, error, {
      timeout: 10000
    });
  }
}

/***/ }),

/***/ "./src/locator/map.ts":
/*!****************************!*\
  !*** ./src/locator/map.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "centerOnGeo": () => (/* binding */ centerOnGeo),
/* harmony export */   "addMarkersToMap": () => (/* binding */ addMarkersToMap),
/* harmony export */   "highlightLocation": () => (/* binding */ highlightLocation)
/* harmony export */ });
/* harmony import */ var google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google */ "google");
/* harmony import */ var google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/locator/utils.ts");
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations */ "./src/locator/locations.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/locator/constants.ts");
// @ts-ignore




var zoom = 5;
var pinStyles;
var marker_icon;
var selected_marker_icon; // Map Configuration

var markers = [];
var bounds;
var selectedLocationIndex = -1;
var map = new (google__WEBPACK_IMPORTED_MODULE_0___default().maps.Map)(document.getElementById("map"), {
  center: {
    lat: 40.693807,
    lng: 73.9917
  },
  zoom: zoom,
  styles: [// { elementType: "geometry", stylers: [{ color: "#5A6980" }] },
    // { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
    // { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
    // {
    //   featureType: "administrative.locality",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#d59563" }],
    // },
    // {
    //   featureType: "poi",
    //   elementType: "labels",
    //   stylers: [{ visibility: "off" }],
    // },
    // {
    //   featureType: "poi",
    //   elementType: "geometry",
    //   stylers: [{ visibility: "off" }],
    // },
    // {
    //   featureType: "road",
    //   elementType: "geometry",
    //   stylers: [{ color: "#00173C" }],
    // },
    // {
    //   featureType: "road",
    //   elementType: "labels",
    //   stylers: [{ visibility: "off" }],
    // },
    // {
    //   featureType: "transit",
    //   elementType: "geometry",
    //   stylers: [{ visibility: "off" }],
    // },
    // {
    //   featureType: "transit",
    //   elementType: "labels",
    //   stylers: [{ visibility: "off" }],
    // },
    // {
    //   featureType: "water",
    //   elementType: "geometry",
    //   stylers: [{ color: "#00173C" }],
    // },
    // {
    //   featureType: "water",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#515c6d" }],
    // },
    // {
    //   featureType: "water",
    //   elementType: "labels.text.stroke",
    //   stylers: [{ color: "#17263c" }],
    // },
  ],
  mapTypeControl: false
});
function centerOnGeo(geo) {
  var lat, lng;

  if (geo && geo.coordinate) {
    lat = geo.coordinate.latitude;
    lng = geo.coordinate.longitude;
  } else {
    lat = _locations__WEBPACK_IMPORTED_MODULE_2__.currentLatitude;
    lng = _locations__WEBPACK_IMPORTED_MODULE_2__.currentLongitude;
  }

  [].slice.call(document.querySelectorAll(".error-text") || []).forEach(function (el) {
    el.textContent = "";
  });
  map.setCenter({
    lat: lat,
    lng: lng
  });
  map.setZoom(7);
}

function hexToRgb(hex) {
  var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
} // Postive values >> lighten
// Negative values >> darken


function changeColor(hex, amt) {
  var rgb = hexToRgb(hex);
  Object.keys(rgb).forEach(function (key) {
    var c = rgb[key]; // Add amt to color value, min/max at 0/255

    c += amt;
    if (c > 255) c = 255;else if (c < 0) c = 0; // Convert RGB value back to hex string

    rgb[key] = c.toString(16).length == 1 ? "0" + c.toString(16) : c.toString(16);
  });
  return "#" + rgb.r + rgb.g + rgb.b;
}

function addMarkersToMap(locations) {
  var marker;
  bounds = new (google__WEBPACK_IMPORTED_MODULE_0___default().maps.LatLngBounds)();

  for (var index = 0; index < markers.length; index++) {
    marker = markers[index];
    marker.setMap(null);
  }

  markers = [];
  var coordinates = {
    value: {
      latitude: 0,
      longitude: 0
    },
    contentSource: "FIELD"
  };
  pinStyles = {
    fill: "#E52222",
    stroke: "white",
    text: "white",
    fill_selected: "red",
    stroke_selected: "#E52222",
    text_selected: "white"
  };
  marker_icon = {
    // default google pin path
    path: "M 7.75 -37.5 c -4.5 -4 -11 -4 -15.5 0 c -4.5 3.5 -6 10 -3 15 l 5 8.5 c 2.5 4 4.5 8 5 13 l 1 1 l 0.5 -1 s 0 0 0 0 c 0.5 -4.5 2.5 -8.5 5 -12.5 l 5 -9 c 3 -5 1.5 -11.5 -3 -15",
    fillColor: pinStyles.fill,
    scale: 1.1,
    fillOpacity: 1,
    strokeColor: pinStyles.stroke,
    strokeWeight: 1,
    labelOrigin: new (google__WEBPACK_IMPORTED_MODULE_0___default().maps.Point)(0, -25)
  };
  selected_marker_icon = {
    path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
    fillColor: pinStyles.fill_selected,
    fillOpacity: 0.8,
    scale: 0.75,
    strokeColor: pinStyles.stroke_selected,
    strokeWeight: 1,
    labelOrigin: new (google__WEBPACK_IMPORTED_MODULE_0___default().maps.Point)(0, -25)
  };

  var _loop_1 = function _loop_1(index) {
    var location_1 = locations[index];
    var coordinatesValue = coordinates["value"];
    coordinatesValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getValueFromPath)(location_1, _constants__WEBPACK_IMPORTED_MODULE_3__.locationOptions.coordinates.value);

    if (coordinatesValue) {
      marker = new (google__WEBPACK_IMPORTED_MODULE_0___default().maps.Marker)({
        position: {
          lat: coordinatesValue.latitude,
          lng: coordinatesValue.longitude
        },
        map: map,
        icon: marker_icon,
        label: {
          text: String(index + 1),
          color: pinStyles.text
        },
        optimized: false
      });
      var selected_marker = new (google__WEBPACK_IMPORTED_MODULE_0___default().maps.Marker)({
        position: {
          lat: coordinatesValue.latitude,
          lng: coordinatesValue.longitude
        },
        map: map,
        icon: selected_marker_icon,
        label: {
          text: String(index + 1),
          color: pinStyles.text_selected
        },
        optimized: false
      });
      selected_marker.setVisible(false);
      bounds.extend(marker.position);
      google__WEBPACK_IMPORTED_MODULE_0___default().maps.event.addListener(marker, "click", function () {
        highlightLocation(index, true, false, marker);
        var urlToOpen = document.getElementsByClassName("result selected")[0].getElementsByClassName("center-column")[0].getElementsByClassName('lp-param-results lp-subparam-cardTitle lp-subparam-cardTitleLinkUrl')[0].getElementsByClassName('name')[0].getElementsByTagName('a')[0].href;
        window.open(urlToOpen);
      });
      google__WEBPACK_IMPORTED_MODULE_0___default().maps.event.addListener(selected_marker, "click", function () {
        highlightLocation(index, true, false, marker);
      });
      google__WEBPACK_IMPORTED_MODULE_0___default().maps.event.addListener(marker, "mouseover", function () {
        highlightLocation(index, false, false, marker);
      });
      markers.push(marker);
    }
  };

  for (var index = 0; index < locations.length; index++) {
    _loop_1(index);
  }

  map.fitBounds(bounds);
}
function highlightLocation(index, shouldScrollToRow, shouldCenterMap, marker) {
  if (marker === void 0) {
    marker = null;
  }

  if (!marker) {
    marker = markers[index];
  }

  if (selectedLocationIndex == index) {
    // No Change (just center map or scroll)
    if (shouldCenterMap) {
      map.setCenter(marker.position);
    }

    if (shouldScrollToRow) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.scrollToRow)(index);
    }
  } else {
    var prevIndex = selectedLocationIndex;
    selectedLocationIndex = index;
    [].slice.call(document.querySelectorAll(".result") || []).forEach(function (el) {
      el.classList.remove("selected");
    });
    document.querySelectorAll(".result")[index].classList.add("selected");

    if (shouldScrollToRow) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.scrollToRow)(index);
    } // Update Map


    if (prevIndex !== -1) {
      var prevMarker_1 = markers[prevIndex]; // Breifly disables mouseevents to prevent infinite mouseover looping for overlapped markers

      prevMarker_1.setClickable(false);
      prevMarker_1.setIcon(marker_icon);
      prevMarker_1.setLabel({
        text: String(prevIndex + 1),
        color: pinStyles.text
      });
      prevMarker_1.setZIndex(null);
      setTimeout(function () {
        prevMarker_1.setClickable(true);
      }, 50);
    }

    var selectedMarker = markers[selectedLocationIndex];
    selectedMarker.setIcon(selected_marker_icon);
    selectedMarker.setLabel({
      text: String(selectedLocationIndex + 1),
      color: pinStyles.text_selected
    });
    selectedMarker.setZIndex(999);

    if (shouldCenterMap) {
      map.setCenter(marker.position);
    }
  }
}

function getCustomPinColor(hex) {
  // Converts hex to RGB values
  var rgb = hexToRgb(hex); // Calcs perceived brightness using the sRGB Luma method

  var lightness = (rgb.r * 0.2126 + rgb.g * 0.7152 + rgb.b * 0.0722) / 255;
  var isDark = lightness < 0.5;

  if (isDark) {
    return {
      fill: hex,
      stroke: "#fff",
      text: "#fff",
      fill_selected: changeColor(hex, 150),
      stroke_selected: hex,
      text_selected: "#000"
    };
  } else {
    var darker = changeColor(hex, -150);
    return {
      fill: hex,
      stroke: darker,
      text: "#000",
      fill_selected: darker,
      stroke_selected: "#fff",
      text_selected: "#fff"
    };
  }
}

/***/ }),

/***/ "./src/locator/time.ts":
/*!*****************************!*\
  !*** ./src/locator/time.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatOpenNowString": () => (/* binding */ formatOpenNowString),
/* harmony export */   "parseTimeZoneUtcOffset": () => (/* binding */ parseTimeZoneUtcOffset)
/* harmony export */ });
// Formats hours function
// Open · Closes at 5pm
// Closed · Open at 6am
function formatOpenNowString(hoursData, utcOffset) {
  var now = getYextTimeWithUtcOffset(utcOffset);
  var tomorrow = new Date(now.getTime() + 60 * 60 * 24 * 1000);
  var yesterday = new Date(now.getTime() - 60 * 60 * 24 * 1000);
  var nowTimeNumber = now.getHours() + now.getMinutes() / 60;
  var intervalsToday = getIntervalOnDate(now, hoursData);
  var intervalsTomorrow = getIntervalOnDate(tomorrow, hoursData);
  var intervalsYesterday = getIntervalOnDate(yesterday, hoursData);
  var openRightNow = false;
  var currentInterval = null;
  var nextInterval = null;

  if (intervalsYesterday) {
    for (var i = 0; i < intervalsYesterday.length; i++) {
      var interval = intervalsYesterday[i];
      var startIntervalNumber = timeStringToNumber(interval.start);
      var endIntervalNumber = timeStringToNumber(interval.end); // If end overflows to the next day (i.e. today).

      if (endIntervalNumber < startIntervalNumber) {
        if (nowTimeNumber < endIntervalNumber) {
          currentInterval = interval;
          openRightNow = true;
        }
      }
    }
  } // Assumes no overlapping intervals


  if (intervalsToday) {
    for (var i = 0; i < intervalsToday.length; i++) {
      var interval = intervalsToday[i];
      var startIntervalNumber = timeStringToNumber(interval.start);
      var endIntervalNumber = timeStringToNumber(interval.end); // If current time doesn't belong to one of yesterdays interval.

      if (currentInterval == null) {
        if (endIntervalNumber < startIntervalNumber) {
          if (nowTimeNumber >= startIntervalNumber) {
            currentInterval = interval;
            openRightNow = true;
          }
        } else if (nowTimeNumber >= startIntervalNumber && nowTimeNumber < endIntervalNumber) {
          currentInterval = interval;
          openRightNow = true;
        }
      }

      if (nextInterval == null) {
        if (startIntervalNumber > nowTimeNumber) {
          nextInterval = interval;
        }
      } else {
        if (startIntervalNumber > nowTimeNumber && startIntervalNumber < timeStringToNumber(nextInterval.start)) {
          nextInterval = interval;
        }
      }
    }
  }

  var nextIsTomorrow = false; // If no more intervals in the day

  if (nextInterval == null) {
    if (intervalsTomorrow) {
      if (intervalsTomorrow.length > 0) {
        nextInterval = intervalsTomorrow[0];
        nextIsTomorrow = true;
      }
    }
  }

  var hoursString = "";

  if (nextInterval) {
    if (openRightNow) {
      // Check first for a 24-hour interval, then check for open past midnight
      if (currentInterval.start == "00:00" && currentInterval.end == "23:59") {
        hoursString += "<strong>Open 24 hours</strong>";
      } else if (nextInterval.start == "00:00" && currentInterval.end == "23:59") {
        hoursString += "<strong>Open</strong> · Closes at [closingTime] tomorrow";
        hoursString = hoursString.replace("[closingTime]", formatTime(currentInterval.end));
      } else {
        hoursString += "<strong>Open</strong> · Closes at [closingTime]";
        hoursString = hoursString.replace("[closingTime]", formatTime(currentInterval.end));
      }
    } else {
      if (nextIsTomorrow) {
        hoursString += "<strong>Closed</strong> · Opens at [openingTime] tomorrow";
        hoursString = hoursString.replace("[openingTime]", formatTime(nextInterval.start));
      } else {
        hoursString += "<strong>Closed</strong> · Opens at [openingTime]";
        hoursString = hoursString.replace("[openingTime]", formatTime(nextInterval.start));
      }
    }
  }

  return hoursString;
}

function formatTime(time) {
  var tempDate = new Date("January 1, 2020 " + time);
  var localeString = "en-US";
  return tempDate.toLocaleTimeString(localeString.replace("_", "-"), {
    hour: "numeric",
    minute: "numeric"
  });
}

function timeStringToNumber(timeString) {
  var parts = timeString.split(":");
  var hours = parseInt(parts[0].replace(/\u200E/g, ""), 10);
  var minutes = parseInt(parts[1].replace(/\u200E/g, ""), 10);
  return hours + minutes / 60;
}

function getYextTimeWithUtcOffset(entityUtcOffsetSeconds) {
  var now = new Date();
  var utcOffset = 0;

  if (entityUtcOffsetSeconds) {
    utcOffset = entityUtcOffsetSeconds * 1000;
  }

  if (utcOffset !== 0) {
    var localUtcOffset = now.getTimezoneOffset() * 60 * 1000;
    return new Date(now.valueOf() + utcOffset + localUtcOffset);
  }

  return now;
} // Parses an offset formatted like {+/-}{04}:{00}


function parseTimeZoneUtcOffset(timeString) {
  if (!timeString) {
    return 0;
  }

  var parts = timeString.split(":");
  var hours = parseInt(parts[0].replace(/\u200E/g, ""), 10);
  var minutes = parseInt(parts[1].replace(/\u200E/g, ""), 10);

  if (hours < 0) {
    return -(Math.abs(hours) + minutes / 60) * 60 * 60;
  }

  return (hours + minutes / 60) * 60 * 60;
}

function getIntervalOnDate(date, hoursData) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var dateString = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
  var dayOfWeekString = days[date.getDay()]; // Check for holiday

  if (hoursData.holidayHours) {
    for (var i = 0; i < hoursData.holidayHours.length; i++) {
      var holiday = hoursData.holidayHours[i];

      if (holiday.date == dateString) {
        if (holiday.openIntervals) {
          return holiday.openIntervals;
        } else if (holiday.isClosed === true) {
          return null; // On holiday but closed
        }
      }
    }
  } // Not on holiday


  if (hoursData[dayOfWeekString] && hoursData[dayOfWeekString].openIntervals) {
    return hoursData[dayOfWeekString].openIntervals;
  } else {
    return null;
  }
}

/***/ }),

/***/ "./src/locator/utils.ts":
/*!******************************!*\
  !*** ./src/locator/utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unescapeHtmlString": () => (/* binding */ unescapeHtmlString),
/* harmony export */   "formatPhone": () => (/* binding */ formatPhone),
/* harmony export */   "formatNumber": () => (/* binding */ formatNumber),
/* harmony export */   "formatMiOrKm": () => (/* binding */ formatMiOrKm),
/* harmony export */   "getValueFromPath": () => (/* binding */ getValueFromPath),
/* harmony export */   "getQueryParamsFromUrl": () => (/* binding */ getQueryParamsFromUrl),
/* harmony export */   "scrollToRow": () => (/* binding */ scrollToRow)
/* harmony export */ });
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libphonenumber-js */ "./node_modules/libphonenumber-js/min/exports/isSupportedCountry.js");
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libphonenumber-js */ "./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/locator/constants.ts");


function unescapeHtmlString(html) {
  var dom = new DOMParser().parseFromString(html, "text/html");
  return dom.documentElement ? dom.documentElement.textContent : "";
}
function formatPhone(phoneNumberString, countryCode) {
  if (!(0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_1__.isSupportedCountry)(countryCode)) {
    return phoneNumberString;
  }

  var phoneNumber = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumberFromString)(phoneNumberString, countryCode);
  return phoneNumber.format("NATIONAL");
}
function formatNumber(numberString) {
  return numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatMiOrKm(miles, kilometers) {
  if (_constants__WEBPACK_IMPORTED_MODULE_0__.useMiles) {
    return miles.toFixed(0) + " mi.";
  } else {
    return kilometers.toFixed(0) + " km.";
  }
}
function getValueFromPath(object, path) {
  return path.split(".").reduce(function (obj, pth) {
    return typeof obj == "undefined" || obj == null ? null : obj[pth];
  }, object);
}
function getQueryParamsFromUrl() {
  var params = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (match, key, value) {
    return params[key] = decodeURI(value);
  });
  return params;
}
function scrollToRow(index) {
  var result = [].slice.call(document.querySelectorAll(".result") || [])[0];
  var offset = [].slice.call(document.querySelectorAll(".result") || [])[index].offsetTop - result.offsetTop;
  [].slice.call(document.querySelectorAll(".result-list") || []).forEach(function (el) {
    el.scrollTop = offset;
  });
}

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i18n": () => (/* binding */ i18n)
/* harmony export */ });
// This code was automatically generated. Please don't edit this code by hand.

/**
 * ***********************************************************************
 * ------------------------ GENERATED CODE BEGINS ------------------------
 * ***********************************************************************
 */
var i18n = {};

i18n.addressForCountry = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.profile.address.countryCode) {
    case "AD":
    case "AM":
    case "AX":
    case "AZ":
    case "BA":
    case "BL":
    case "BY":
    case "CY":
    case "CZ":
    case "DK":
    case "DZ":
    case "EC":
    case "EH":
    case "ET":
    case "FI":
    case "FO":
    case "FR":
    case "GE":
    case "GF":
    case "GI":
    case "GP":
    case "GW":
    case "HT":
    case "KG":
    case "KV":
    case "KW":
    case "LA":
    case "LU":
    case "MC":
    case "MD":
    case "ME":
    case "MG":
    case "MK":
    case "MQ":
    case "MZ":
    case "NC":
    case "NL":
    case "NO":
    case "PL":
    case "PT":
    case "PY":
    case "RE":
    case "RS":
    case "SA":
    case "SE":
    case "SJ":
    case "SM":
    case "SN":
    case "TC":
    case "TJ":
    case "TM":
    case "TN":
    case "TZ":
    case "UY":
    case "VG":
    case "ZM":
      output += i18n.ad(opt_data, opt_sb, opt_ijData);
      break;

    case "AE":
    case "GD":
    case "HN":
    case "KN":
    case "LC":
    case "PA":
    case "SS":
    case "SV":
      output += i18n.ae(opt_data, opt_sb, opt_ijData);
      break;

    case "AF":
    case "IR":
      output += i18n.af(opt_data, opt_sb, opt_ijData);
      break;

    case "AG":
    case "AO":
    case "AW":
    case "BJ":
    case "BO":
    case "BS":
    case "BZ":
    case "CI":
    case "CU":
    case "CW":
    case "DJ":
    case "FJ":
    case "GA":
    case "GH":
    case "GM":
    case "GY":
    case "JM":
    case "KE":
    case "KI":
    case "LY":
    case "MW":
    case "NA":
    case "NR":
    case "PS":
    case "QA":
    case "RW":
    case "SC":
    case "SR":
    case "SX":
    case "TG":
    case "TT":
    case "UG":
    case "VU":
      output += i18n.ag(opt_data, opt_sb, opt_ijData);
      break;

    case "AI":
    case "AS":
    case "BB":
    case "BD":
    case "BM":
    case "BN":
    case "BT":
    case "DO":
    case "FK":
    case "FM":
    case "GR":
    case "GU":
    case "JO":
    case "KZ":
    case "LB":
    case "LK":
    case "LS":
    case "MA":
    case "MH":
    case "MM":
    case "MR":
    case "MS":
    case "MT":
    case "MV":
    case "NG":
    case "PG":
    case "PK":
    case "PR":
    case "RO":
    case "SG":
    case "VC":
    case "WS":
      output += i18n.ai(opt_data, opt_sb, opt_ijData);
      break;

    case "AL":
    case "EE":
    case "IS":
      output += i18n.al(opt_data, opt_sb, opt_ijData);
      break;

    case "AR":
      output += i18n.ar(opt_data, opt_sb, opt_ijData);
      break;

    case "AT":
    case "ES":
    case "IL":
      output += i18n.at(opt_data, opt_sb, opt_ijData);
      break;

    case "AU":
    case "CA":
    case "SZ":
    case "US":
    case "VI":
      output += i18n.au(opt_data, opt_sb, opt_ijData);
      break;

    case "BE":
    case "PE":
      output += i18n.be(opt_data, opt_sb, opt_ijData);
      break;

    case "BF":
    case "BI":
    case "BQ":
    case "BW":
    case "CF":
    case "CG":
    case "CM":
    case "DM":
    case "ER":
    case "GQ":
    case "KM":
    case "ML":
    case "SY":
    case "TD":
    case "ZW":
      output += i18n.bf(opt_data, opt_sb, opt_ijData);
      break;

    case "BG":
      output += i18n.bg(opt_data, opt_sb, opt_ijData);
      break;

    case "BH":
      output += i18n.bh(opt_data, opt_sb, opt_ijData);
      break;

    case "BR":
      output += i18n.br(opt_data, opt_sb, opt_ijData);
      break;

    case "CH":
    case "DE":
    case "GT":
    case "IT":
    case "LI":
    case "MY":
    case "NI":
    case "OM":
    case "SK":
    case "VA":
      output += i18n.ch(opt_data, opt_sb, opt_ijData);
      break;

    case "CL":
    case "PF":
    case "SH":
      output += i18n.cl(opt_data, opt_sb, opt_ijData);
      break;

    case "CN":
      output += i18n.cn(opt_data, opt_sb, opt_ijData);
      break;

    case "CO":
    case "CR":
    case "ID":
    case "IQ":
    case "KH":
    case "MP":
    case "NP":
    case "PW":
    case "UA":
      output += i18n.co(opt_data, opt_sb, opt_ijData);
      break;

    case "EG":
    case "ZA":
      output += i18n.eg(opt_data, opt_sb, opt_ijData);
      break;

    case "GB":
    case "MN":
      output += i18n.gb(opt_data, opt_sb, opt_ijData);
      break;

    case "GG":
    case "IM":
    case "JE":
      output += i18n.gg(opt_data, opt_sb, opt_ijData);
      break;

    case "GN":
      output += i18n.gn(opt_data, opt_sb, opt_ijData);
      break;

    case "HK":
    case "MO":
      output += i18n.hk(opt_data, opt_sb, opt_ijData);
      break;

    case "HR":
      output += i18n.hr(opt_data, opt_sb, opt_ijData);
      break;

    case "HU":
    case "SI":
      output += i18n.hu(opt_data, opt_sb, opt_ijData);
      break;

    case "IE":
      output += i18n.ie(opt_data, opt_sb, opt_ijData);
      break;

    case "IN":
    case "UZ":
    case "VE":
      output += i18n["in"](opt_data, opt_sb, opt_ijData);
      break;

    case "JP":
      output += i18n.jp(opt_data, opt_sb, opt_ijData);
      break;

    case "KR":
      output += i18n.kr(opt_data, opt_sb, opt_ijData);
      break;

    case "KY":
      output += i18n.ky(opt_data, opt_sb, opt_ijData);
      break;

    case "LT":
      output += i18n.lt(opt_data, opt_sb, opt_ijData);
      break;

    case "LV":
      output += i18n.lv(opt_data, opt_sb, opt_ijData);
      break;

    case "MU":
      output += i18n.mu(opt_data, opt_sb, opt_ijData);
      break;

    case "MX":
      output += i18n.mx(opt_data, opt_sb, opt_ijData);
      break;

    case "NE":
    case "SD":
      output += i18n.ne(opt_data, opt_sb, opt_ijData);
      break;

    case "NZ":
      output += i18n.nz(opt_data, opt_sb, opt_ijData);
      break;

    case "PH":
    case "TW":
    case "VN":
      output += i18n.ph(opt_data, opt_sb, opt_ijData);
      break;

    case "RU":
      output += i18n.ru(opt_data, opt_sb, opt_ijData);
      break;

    case "SB":
    case "SL":
    case "ST":
    case "TL":
    case "TO":
    case "TV":
      output += i18n.sb(opt_data, opt_sb, opt_ijData);
      break;

    case "TH":
    case "TR":
      output += i18n.th(opt_data, opt_sb, opt_ijData);
      break;

    default:
      output += i18n.au(opt_data, opt_sb, opt_ijData);
      break;
  }

  return output;
};

i18n.ad = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ae = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.af = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ag = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ai = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.al = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ar = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += "\x3Cyxt-comma\x3E,\x3C/yxt-comma\x3E";
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.at = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.au = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region || opt_data.profile.address.postalCode) {
          output += "\x3Cyxt-comma\x3E,\x3C/yxt-comma\x3E";
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.be = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.sublocality || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.sublocality || opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.bf = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.bg = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.bh = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.br = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ch = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.cl = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.postalCode || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.cn = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.region || opt_data.profile.address.city || opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.sublocality) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.sublocality) {
          output += " ";
        }

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.co = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region || opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.eg = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality || opt_data.profile.address.city || opt_data.profile.address.region || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.region || opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region || opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.gb = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality || opt_data.profile.address.city || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.gg = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.gn = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1 || opt_data.profile.address.line2 || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.line2 || opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.hk = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.hr = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.hu = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.postalCode || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ie = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region || opt_data.profile.address.postalCode) {
          output += "\x3Cyxt-comma\x3E,\x3C/yxt-comma\x3E";
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n["in"] = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.jp = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    case "en":
      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line1 || opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.sublocality) {
          output += " ";
        }

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;

    default:
      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region || opt_data.profile.address.city || opt_data.profile.address.sublocality || opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.sublocality || opt_data.profile.address.line1) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.sublocality || opt_data.profile.address.line1) {
          output += " ";
        }

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.line1) {
          output += " ";
        }

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.kr = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region || opt_data.profile.address.city || opt_data.profile.address.sublocality || opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.sublocality || opt_data.profile.address.line1) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.sublocality || opt_data.profile.address.line1) {
          output += " ";
        }

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.line1) {
          output += " ";
        }

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ky = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.lt = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city || opt_data.profile.address.sublocality || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.sublocality || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.sublocality || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.lv = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += "\x3Cyxt-comma\x3E,\x3C/yxt-comma\x3E";
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.mu = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.mx = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city || opt_data.profile.address.region) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += "\x3Cyxt-comma\x3E,\x3C/yxt-comma\x3E";
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ne = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.nz = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ph = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.region || opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.postalCode) {
          output += " ";
        }

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.ru = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.sb = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.city || opt_data.profile.address.region) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.region) {
          output += "\x3Cyxt-comma\x3E,\x3C/yxt-comma\x3E";
          output += " ";
        }

        if (opt_data.profile.address.region) {
          output += i18n.region(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.th = function (opt_data, opt_sb, opt_ijData) {
  var output = "";

  switch (opt_data.locale) {
    default:
      if (opt_data.profile.address.line1) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line1) {
          output += i18n.address1(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.line2) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.line2) {
          output += i18n.address2(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.sublocality) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.sublocality) {
          output += i18n.sublocality(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.postalCode || opt_data.profile.address.city) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.postalCode) {
          output += i18n.postalCode(opt_data, opt_sb, opt_ijData);
        }

        if (opt_data.profile.address.city) {
          output += " ";
        }

        if (opt_data.profile.address.city) {
          output += i18n.city(opt_data, opt_sb, opt_ijData);
        }

        output += " ";
        output += "\x3C/div\x3E";
      }

      if (opt_data.profile.address.countryCode) {
        output += "\x3Cdiv class=c-AddressRow\x3E";

        if (opt_data.profile.address.countryCode) {
          output += i18n.country(opt_data, opt_sb, opt_ijData);
        }

        output += "\x3C/div\x3E";
      }

      break;
  }

  return output;
};

i18n.address1 = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  output += '\x3Cspan class="c-address-street-1"\x3E';
  output += nullSafe(opt_data.profile.address.line1);
  output += " ";
  output += "\x3Ci\x3E";
  output += nullSafe(opt_data.profile.crossStreets);
  output += "\x3C/i\x3E";
  output += "\x3C/span\x3E";
  return output;
};

i18n.address2 = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  output += '\x3Cspan class="c-address-street-2"\x3E';
  output += nullSafe(opt_data.profile.address.line2);
  output += "\x3C/span\x3E";
  return output;
};

i18n.sublocality = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  output += '\x3Cspan class="c-address-sublocality"\x3E';
  output += nullSafe(opt_data.profile.address.sublocality);
  output += "\x3C/span\x3E";
  return output;
};

i18n.city = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  output += '\x3Cspan class="c-address-city"\x3E';
  output += nullSafe(opt_data.profile.address.city);
  output += "\x3C/span\x3E";
  return output;
};

i18n.streetSchema = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  var address11 = opt_data.profile.address.line1;
  var address22 = opt_data.profile.address.line2;

  if (!opt_data.hideSchema) {
    output += '\x3Cmeta itemprop="streetAddress" content="';
    output += nullSafe(address11);

    if (address22) {
      output += " ";
      output += nullSafe(address22);
    }

    output += '" /\x3E';
  }

  return output;
};

i18n.localitySchema = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  var city3 = opt_data.profile.address.city;
  var sublocality4 = opt_data.profile.address.sublocality;

  if (!opt_data.hideSchema) {
    output += '\x3Cmeta itemprop="addressLocality" content="';
    output += nullSafe(city3);

    if (sublocality4 && city3) {
      output += " ";
    }

    output += nullSafe(sublocality4);
    output += '" /\x3E';
  }

  return output;
};

i18n.region = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  var region5 = opt_data.profile.address.region != null ? opt_data.profile.address.region : "";
  var regionName6 = (opt_data.derivedData == null ? null : opt_data.derivedData.address == null ? null : opt_data.derivedData.address.stateName) != null ? opt_data.derivedData == null ? null : opt_data.derivedData.address == null ? null : opt_data.derivedData.address.stateName : region5;
  var abbreviated7 = opt_data.regionAbbr && region5 != regionName6;
  output += "\x3C";

  if (abbreviated7) {
    output += 'abbr title="';
    output += nullSafe(regionName6);
    output += '" aria-label="';
    output += nullSafe(regionName6);
    output += '"';
  } else {
    output += "span";
  }

  output += " ";
  output += 'class="c-address-state" ';

  if (!opt_data.hideSchema) {
    output += 'itemprop="addressRegion"';
  }

  output += "\x3E";
  output += nullSafe(opt_data.regionAbbr ? region5 : regionName6);
  output += "\x3C/";
  output += nullSafe(abbreviated7 ? "abbr" : "span");
  output += "\x3E";
  return output;
};

i18n.postalCode = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  output += '\x3Cspan class="c-address-postal-code" ';

  if (!opt_data.hideSchema) {
    output += 'itemprop="postalCode"';
  }

  output += "\x3E";
  output += nullSafe(opt_data.profile.address.postalCode);
  output += "\x3C/span\x3E";
  return output;
};

i18n.country = function (opt_data, opt_sb, opt_ijData) {
  var output = "";
  var country8 = opt_data.profile.address.countryCode;
  var countryName9 = (opt_data.derivedData == null ? null : opt_data.derivedData.address == null ? null : opt_data.derivedData.address.countryName) != null ? opt_data.derivedData == null ? null : opt_data.derivedData.address == null ? null : opt_data.derivedData.address.countryName : country8;
  output += "\x3C";

  if (country8 != countryName9) {
    output += 'abbr title="';
    output += nullSafe(countryName9);
    output += '" aria-label="';
    output += nullSafe(countryName9);
    output += '"';
  } else {
    output += "span";
  }

  output += " ";
  output += 'class="c-address-country-name c-address-country-';
  output += nullSafe(country8);
  output += '"';

  if (!opt_data.hideSchema) {
    output += " ";
    output += 'itemprop="addressCountry"';
  }

  output += "\x3E";
  output += nullSafe(country8);
  output += "\x3C/";
  output += nullSafe(country8 != countryName9 ? "abbr" : "span");
  output += "\x3E";
  return output;
};

var nullSafe = function nullSafe(x) {
  return x == null ? "" : x;
};
/**
 * ***********************************************************************
 * ------------------------ GENERATED CODE ENDS ------------------------
 * ***********************************************************************
 */

/***/ }),

/***/ "google":
/*!*************************!*\
  !*** external "google" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = google;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/locator.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locator_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locator/constants */ "./src/locator/constants.ts");
/* harmony import */ var _locator_locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locator/locations */ "./src/locator/locations.ts");
/* harmony import */ var _locator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locator/utils */ "./src/locator/utils.ts");
/* harmony import */ var _locator_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locator/loader */ "./src/locator/loader.ts");
/* harmony import */ var google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! google */ "google");
/* harmony import */ var google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(google__WEBPACK_IMPORTED_MODULE_4__);



 // @ts-ignore


_locator_constants__WEBPACK_IMPORTED_MODULE_0__.searchButton.addEventListener("click", function () {
  (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getNearestLocationsByString)();
});
_locator_constants__WEBPACK_IMPORTED_MODULE_0__.useMyLocation.addEventListener("click", function () {
  (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getUsersLocation)();
});
window.addEventListener("popstate", function (e) {
  if (e.state && e.state.queryString) {
    _locator_constants__WEBPACK_IMPORTED_MODULE_0__.locationInput.value = e.state.queryString;
    (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getNearestLocationsByString)();
  }
});
window.addEventListener("load", function () {
  var params = (0,_locator_utils__WEBPACK_IMPORTED_MODULE_2__.getQueryParamsFromUrl)();
  var queryString = params["q"] || _locator_constants__WEBPACK_IMPORTED_MODULE_0__.defaultQuery;
  _locator_constants__WEBPACK_IMPORTED_MODULE_0__.locationInput.value = decodeURI(queryString);
  (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getNearestLocationsByString)();
});
_locator_constants__WEBPACK_IMPORTED_MODULE_0__.locationInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getNearestLocationsByString)();
  }
});

if (_locator_constants__WEBPACK_IMPORTED_MODULE_0__.loadLocationsOnLoad) {
  (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getLocations)();
}

if (_locator_constants__WEBPACK_IMPORTED_MODULE_0__.enableAutocomplete) {
  var autocomplete = new (google__WEBPACK_IMPORTED_MODULE_4___default().maps.places.Autocomplete)(document.getElementById("location-input"), {
    options: {
      //types: ["(regions)"],
      componentRestrictions: {
        'country': "us"
      }
    }
  });
  autocomplete.addListener("place_changed", function () {
    if (!_locator_loader__WEBPACK_IMPORTED_MODULE_3__.isLoading) {
      (0,_locator_locations__WEBPACK_IMPORTED_MODULE_1__.getNearestLocationsByString)();
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=locator.js.map