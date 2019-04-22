export function calculateTotal(type, ceiling, wall, floor, length, width, high, amount) {
    //расчет индекса формы помещения
     const i = calculateI(length, width, high);
    //получаем ключ e.g '705030'
    const key = makeKey(ceiling, wall, floor);
    //расчитываем некий n
    const n = formula(key, i);
    //расчитываем световой поток светильника
    const flow = lightFlow(type, length, width, amount, n);
    return flow;
    //console.log(flow);
};

const calculateI = (length, width, high) => (length * width) / ((high - 0.8)*(length + width));
const makeKey = (ceiling, wall, floor) => "" + ceiling + wall + floor;
const lightFlow = (type, length, width, amount, n) => {
    const kz = 1.5;
    const first = type * length * width * kz;
    const second = amount * n;
    const result = Math.ceil(first / second);

    return result;
};

const formula = (key, i) => {
    const coefficientTable = {
        '303030': {a: 0.2804, b: 0.53},
        '303050': {a:0.3016, b: 0.5418},
        '303070': {a:0.3252, b: 0.5544},
        '305030': {a:0.2642, b: 0.6005},
        '305050': {a:0.2874, b: 0.6197},
        '305070': {a:0.3136, b: 0.6407},
        '307030': {a:0.2297, b: 0.7028},
        '307050': {a:0.2523, b: 0.7361},
        '307070': {a:0.2785, b: 0.774},
        '503030': {a:0.3106, b: 0.5604},
        '503050': {a:0.352, b: 0.5798},
        '503070': {a:0.4018, b: 0.6012},
        '505050': {a:0.3422, b: 0.6736},
        '505030': {a:0.2958, b: 0.6436},
        '505070': {a:0.3999, b: 0.708},
        '507030': {a:0.2585, b: 0.7685},
        '507050': {a:0.3075, b: 0.8196},
        '507070': {a:0.3708, b: 0.8807},
        '703030': {a:0.3448, b: 0.5927},
        '703050': {a:0.4136, b: 0.6214},
        '703070': {a:0.5045, b: 0.6549},
        '705030': {a:0.3322, b: 0.6906},
        '705050': {a:0.4117, b: 0.7349},
        '705070': {a:0.5208, b: 0.7884},
        '707030': {a:0.2921, b: 0.8434},
        '707050': {a:0.3807, b: 0.9191},
        '707070': {a:0.5097, b: 1.0155},
        '101010': {a:0.2562, b: 0.4538},
        '101030': {a:0.2618, b: 0.4566},
        '101050': {a:0.2673, b: 0.4594},
        '103010': {a:0.2471, b: 0.4957},
        '103030': {a:0.2534, b: 0.5013},
        '103050': {a:0.2598, b: 0.507},
        '105010': {a:0.2303, b: 0.5507},
        '105030': {a:0.2366, b: 0.5608},
        '105050': {a:0.2432, b: 0.5715},
        '301010': {a:0.2693, b: 0.4709},
        '301030': {a:0.2869, b: 0.478},
        '301050': {a:0.3056, b: 0.4855},
        '303010': {a:0.2604, b: 0.5178},
        '305010': {a:0.2434, b: 0.5828},
        '501010': {a:0.2832, b: 0.4884},
        '501030': {a:0.3147, b: 0.5003},
        '501050': {a:0.3509, b: 0.5133},
        '503010': {a:0.2753, b: 0.5428},
        '505010': {a:0.2571, b: 0.6169},
        '101070': {a:0.2731, b: 0.4622},
        '103070': {a:0.2664, b: 0.513},
        '107010': {a:0.1999, b: 0.6266},
        '107030': {a:0.2045, b: 0.6448},
        '107070': {a:0.214, b: 0.6868},
        '301070': {a:0.3262, b: 0.4933},
        '307010': {a:0.2094, b: 0.6734},
        '701010': {a:0.2976, b: 0.506},
        '701030': {a:0.3456, b: 0.5235},
        '701070': {a:0.481, b: 0.5658},
        '703010': {a:0.2907, b: 0.5674},
        '707010': {a:0.228, b: 0.7812},
        '105070': {a:0.2482, b: 0.5862},
        '107050': {a:0.2091, b: 0.6648},
        '501070': {a:0.3935, b: 0.5276},
        '507010': {a:0.2189, b: 0.7246},
        '701050': {a:0.4048, b: 0.5432},
        '705010': {a:0.2717, b: 0.6527}
    };

    return coefficientTable[key].a * Math.log(i) + coefficientTable[key].b
};


