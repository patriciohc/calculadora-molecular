/*
 * elementos_data.js
 * This file is part of Calculadora Molecular
 *
 * Copyright (C) 2015 J.Patricio Hijuitl
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

/*datos de los elementos quimicos*/
var ELEMENTO = 0;
var NUMERO = 1;
var OPEN = 2;
var CLOSE = 3;
var OPERADOR = 3;

var data_elements = {
/* Elementos quimicos */
    H: {
        PA:1.0079,
        NO:1,
        tipo: ELEMENTO
    },
    He: {
        PA:4.0026,
        NO:2,
        tipo: ELEMENTO
    },
    Li: {
        PA:6.941,
        NO:3,
        tipo: ELEMENTO
    },
    Be: {
        PA:9.0121,
        NO:4,
        tipo: ELEMENTO
    },
    B: {
        PA:10.811,
        NO:5,
        tipo: ELEMENTO
    },
    C: {
        PA:12.0107,
        NO:6,
        tipo: ELEMENTO
    },
    N: {
        PA:14.0067,
        NO:7,
        tipo: ELEMENTO
    },
    O: {
        PA:15.9994,
        NO:8,
        tipo: ELEMENTO
    },
    F: {
        PA:18.9984,
        NO:9,
        tipo: ELEMENTO
    },
    Ne: { 
        PA:20.1797,
        NO:10,
        tipo: ELEMENTO
    },
    Na: {
        PA:22.9897,
        NO:11,
        tipo: ELEMENTO
    },
    Mg: {
        PA:24.3050,
        NO:12,
        tipo: ELEMENTO
    },
    Al: {
        PA:26.9815,
        NO:13,
        tipo: ELEMENTO
    },
    Si: {
        PA:28.0855,
        NO:14,
        tipo: ELEMENTO
    },
    P: {
        PA:30.9737,
        NO:15,
        tipo: ELEMENTO
    },
    S: {
        PA:32.065,
        NO:16,
        tipo: ELEMENTO
    },
    Cl: {
        PA:35.453,
        NO:17,
        tipo: ELEMENTO
    },
    Ar: {
        PA:39.948,
        NO:18,
        tipo: ELEMENTO
    },
    K: {
        PA:39.0983,
        NO:19,
        tipo: ELEMENTO
    },
    Ca: {
        PA:40.078,
        NO:20,
        tipo: ELEMENTO
    },
    Sc: {
        PA:44.9559,
        NO:21,
        tipo: ELEMENTO
    },
    Ti: {
        PA:47.867,
        NO:22,
        tipo: ELEMENTO
    },
    V: {
        PA:50.9415,
        NO:23,
        tipo: ELEMENTO
    },
    Cr: {
        PA:51.9961,
        NO:24,
        tipo: ELEMENTO
    },
    Mn: {
        PA:54.9380,
        NO:25,
        tipo: ELEMENTO
    },
    Fe: {
        PA:55.845,
        NO:26,
        tipo: ELEMENTO
    },
    Co: {
        PA:58.9332,
        NO:27,
        tipo: ELEMENTO
    },
    Ni: {
        PA:58.6934,
        NO:28,
        tipo: ELEMENTO
    },
    Cu: {
        PA:63.546,
        NO:29,
        tipo: ELEMENTO
    },
    Zn: {
        PA:65.409,
        NO:30,
        tipo: ELEMENTO
    },
    Ga: {
        PA:69.723,
        NO:31,
        tipo: ELEMENTO
    },
    Ge: {
        PA:72.64,
        NO:32,
        tipo: ELEMENTO
    },
    As: {
        PA:74.9216,
        NO:33,
        tipo: ELEMENTO
    },
    Se: {
        PA:78.96,
        NO:34,
        tipo: ELEMENTO
    },
    Br: {
        PA:79.904,
        NO:35,
        tipo: ELEMENTO
    },
    Kr: {
        PA:83.796,
        NO:36,
        tipo: ELEMENTO
    },
    Rb: {
        PA:85.4678,
        NO:37,
        tipo: ELEMENTO
    },
    Sr: {
        PA:87.62,
        NO:38,
        tipo: ELEMENTO
    },
    Y: {
        PA:88.9058,
        NO:39,
        tipo: ELEMENTO
    },
    Zr: {
        PA:91.224,
        NO:40,
        tipo: ELEMENTO
    },
    Nb: {
        PA:92.9063,
        NO:41,
        tipo: ELEMENTO
    },
    Mo: {
        PA:95.94,
        NO:37,
        tipo: ELEMENTO
    },
    Tc: {
        PA:98,
        NO:43,
        tipo: ELEMENTO
    },
    Ru: {
        PA:101.07,
        NO:44,
        tipo: ELEMENTO
    },
    Rh: {
        PA:102.9055,
        NO:45,
        tipo: ELEMENTO
    },
    Pd: {
        PA:106.42,
        NO:46,
        tipo: ELEMENTO
    },
    Ag: {
        PA:107.8682,
        NO:47,
        tipo: ELEMENTO
    },
    Cd: {
        PA:112.411,
        NO:48,
        tipo: ELEMENTO
    },
    In: {
        PA:114.818,
        NO:49,
        tipo: ELEMENTO
    },
    Sn: {
        PA:118.710,
        NO:50,
        tipo: ELEMENTO
    },
    Sb: {
        PA:121.760,
        NO:51,
        tipo: ELEMENTO
    },
    Te: {
        PA:127.60,
        NO:52,
        tipo: ELEMENTO
    },
    I: {
        PA:126.9044,
        NO:53,
        tipo: ELEMENTO
    },
    Xe: {
        PA:131.293,
        NO:54,
        tipo: ELEMENTO
    },
    Cs: {
        PA:132.9054,
        NO:55,
        tipo: ELEMENTO
    },
    Ba: {
        PA:137.327,
        NO:56,
        tipo: ELEMENTO
    },
    Hf: {
        PA:178.49,
        NO:72,
        tipo: ELEMENTO
    },
    Ta: {
        PA:180.9479,
        NO:73,
        tipo: ELEMENTO
    },
    W: {
        PA:183.84,
        NO:74,
        tipo: ELEMENTO
    },
    Re: {
        PA:186.207,
        NO:75,
        tipo: ELEMENTO
    },
    Os: {
        PA:190.23,
        NO:76,
        tipo: ELEMENTO
    },
    Ir: {
        PA:192.217,
        NO:77,
        tipo: ELEMENTO
    },
    Pt: {
        PA:195.078,
        NO:78,
        tipo: ELEMENTO
    },
    Au: {
        PA:196.9665,
        NO:79,
        tipo: ELEMENTO
    },
    Hg: {
        PA:200.59,
        NO:80,
        tipo: ELEMENTO
    },
    Tl: {
        PA:204.3833,
        NO:81,
        tipo: ELEMENTO
    },
    Pb: {
        PA:207.2,
        NO:82,
        tipo: ELEMENTO
    },
    Bi: {
        PA:208.9803,
        NO:83,
        tipo: ELEMENTO
    },
    Po: {
        PA:209,
        NO:84,
        tipo: ELEMENTO
    },
    At: {
        PA:210,
        NO:85,
        tipo: ELEMENTO
    },
    Rn: {
        PA:222,
        NO:86,
        tipo: ELEMENTO
    },
    Fr: {
        PA:223,
        NO:87,
        tipo: ELEMENTO
    },
    Ra: {
        PA:226,
        NO:88,
        tipo: ELEMENTO
    },
    Rf: {
        PA:261,
        NO:104,
        tipo: ELEMENTO
    },
    Db: {
        PA:262,
        NO:105,
        tipo: ELEMENTO
    },
    Sg: {
        PA:266,
        NO:106,
        tipo: ELEMENTO
    },
    Bh: {
        PA:264,
        NO:107,
        tipo: ELEMENTO
    },
    Hs: {
        PA:277,
        NO:108,
        tipo: ELEMENTO
    },
    Mt: {
        PA:268,
        NO:109,
        tipo: ELEMENTO
    },
    Mv: {
        PA:281,
        NO:110,
        tipo: ELEMENTO
    },
    Pl: {
        PA:272,
        NO:111,
        tipo: ELEMENTO
    },
    Da: {
        PA:277,
        NO:112,
        tipo: ELEMENTO
    },
    Tf: {
        PA:272,
        NO:113,
        tipo: ELEMENTO
    },
    Eo: {
        PA:285,
        NO:114,
        tipo: ELEMENTO
    },

    Me: {
        PA:279,
        NO:115,
        tipo: ELEMENTO
    },
    Nc: {
        PA:289,
        NO:116,
        tipo: ELEMENTO
    },
    El: {
        PA:286,
        NO:117,
        tipo: ELEMENTO
    },
    On: {
        PA:288,
        NO:118,
        tipo: ELEMENTO
    },

/* Operadores */
    MULT: {
        valor: '*',
        tipo: OPERADOR
    },
    DIV: {
        valor: '/',
        tipo: OPERADOR
    },

/* Numeros */
    '0': {
        valor: 0,
        tipo: NUMERO
    },
    '1': {
        valor: 1,
        tipo: NUMERO
    },
    '2': {
        valor: 2,
        tipo: NUMERO
    },
    '3': {
        valor: 3,
        tipo: NUMERO
    },
    '4': {
        valor: 4,
        tipo: NUMERO
    },
    '5': {
        valor: 5,
        tipo: NUMERO
    },
    '6': {
        valor: 6,
        tipo: NUMERO
    },
    '7': {
        valor: 7,
        tipo: NUMERO
    },
    '8': {
        valor: 8,
        tipo: NUMERO
    },
    '9': {
        valor: 9,
        tipo: NUMERO
    },
/* Parentesis */
    OPEN: {
        valor: '(',
        tipo: OPEN
    },
    CLOSE: {
        valor: ')',
        tipo: CLOSE
    }
}

