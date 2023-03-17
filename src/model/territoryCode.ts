/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum TerritoryCode {
    Abw = <any> 'ABW',
    Afg = <any> 'AFG',
    Ago = <any> 'AGO',
    Aia = <any> 'AIA',
    Alb = <any> 'ALB',
    And = <any> 'AND',
    Ant = <any> 'ANT',
    Are = <any> 'ARE',
    Arg = <any> 'ARG',
    Arm = <any> 'ARM',
    Asm = <any> 'ASM',
    Atg = <any> 'ATG',
    Aus = <any> 'AUS',
    Aut = <any> 'AUT',
    Aze = <any> 'AZE',
    Bdi = <any> 'BDI',
    Bel = <any> 'BEL',
    Ben = <any> 'BEN',
    Bes = <any> 'BES',
    Bfa = <any> 'BFA',
    Bgd = <any> 'BGD',
    Bgr = <any> 'BGR',
    Bhr = <any> 'BHR',
    Bhs = <any> 'BHS',
    Bih = <any> 'BIH',
    Blr = <any> 'BLR',
    Blz = <any> 'BLZ',
    Bmu = <any> 'BMU',
    Bol = <any> 'BOL',
    Bra = <any> 'BRA',
    Brb = <any> 'BRB',
    Brn = <any> 'BRN',
    Btn = <any> 'BTN',
    Bwa = <any> 'BWA',
    Caf = <any> 'CAF',
    Can = <any> 'CAN',
    Che = <any> 'CHE',
    Chl = <any> 'CHL',
    Chn = <any> 'CHN',
    Civ = <any> 'CIV',
    Cmr = <any> 'CMR',
    Cod = <any> 'COD',
    Cog = <any> 'COG',
    Cok = <any> 'COK',
    Col = <any> 'COL',
    Com = <any> 'COM',
    Cpv = <any> 'CPV',
    Cri = <any> 'CRI',
    Cub = <any> 'CUB',
    Cuw = <any> 'CUW',
    Cxr = <any> 'CXR',
    Cym = <any> 'CYM',
    Cyp = <any> 'CYP',
    Cze = <any> 'CZE',
    Deu = <any> 'DEU',
    Dji = <any> 'DJI',
    Dma = <any> 'DMA',
    Dnk = <any> 'DNK',
    Dom = <any> 'DOM',
    Dza = <any> 'DZA',
    Ecu = <any> 'ECU',
    Egy = <any> 'EGY',
    Eri = <any> 'ERI',
    Esp = <any> 'ESP',
    Est = <any> 'EST',
    Eth = <any> 'ETH',
    Fin = <any> 'FIN',
    Fji = <any> 'FJI',
    Flk = <any> 'FLK',
    Fra = <any> 'FRA',
    Fro = <any> 'FRO',
    Fsm = <any> 'FSM',
    Gab = <any> 'GAB',
    Gbr = <any> 'GBR',
    Geo = <any> 'GEO',
    Ggy = <any> 'GGY',
    Gha = <any> 'GHA',
    Gib = <any> 'GIB',
    Gin = <any> 'GIN',
    Glp = <any> 'GLP',
    Gmb = <any> 'GMB',
    Gnb = <any> 'GNB',
    Gnq = <any> 'GNQ',
    Grc = <any> 'GRC',
    Grd = <any> 'GRD',
    Grl = <any> 'GRL',
    Gtm = <any> 'GTM',
    Guf = <any> 'GUF',
    Gum = <any> 'GUM',
    Guy = <any> 'GUY',
    Hkg = <any> 'HKG',
    Hnd = <any> 'HND',
    Hrv = <any> 'HRV',
    Hti = <any> 'HTI',
    Hun = <any> 'HUN',
    Idn = <any> 'IDN',
    Imn = <any> 'IMN',
    Ind = <any> 'IND',
    Irl = <any> 'IRL',
    Irq = <any> 'IRQ',
    Isl = <any> 'ISL',
    Isr = <any> 'ISR',
    Ita = <any> 'ITA',
    Jam = <any> 'JAM',
    Jey = <any> 'JEY',
    Jor = <any> 'JOR',
    Jpn = <any> 'JPN',
    Kaz = <any> 'KAZ',
    Ken = <any> 'KEN',
    Kgz = <any> 'KGZ',
    Khm = <any> 'KHM',
    Kir = <any> 'KIR',
    Kna = <any> 'KNA',
    Kor = <any> 'KOR',
    Kwt = <any> 'KWT',
    Lao = <any> 'LAO',
    Lbn = <any> 'LBN',
    Lbr = <any> 'LBR',
    Lby = <any> 'LBY',
    Lca = <any> 'LCA',
    Lie = <any> 'LIE',
    Lka = <any> 'LKA',
    Lso = <any> 'LSO',
    Ltu = <any> 'LTU',
    Lux = <any> 'LUX',
    Lva = <any> 'LVA',
    Mac = <any> 'MAC',
    Mar = <any> 'MAR',
    Mco = <any> 'MCO',
    Mda = <any> 'MDA',
    Mdg = <any> 'MDG',
    Mdv = <any> 'MDV',
    Mex = <any> 'MEX',
    Mhl = <any> 'MHL',
    Mkd = <any> 'MKD',
    Mli = <any> 'MLI',
    Mlt = <any> 'MLT',
    Mmr = <any> 'MMR',
    Mne = <any> 'MNE',
    Mng = <any> 'MNG',
    Mnp = <any> 'MNP',
    Moz = <any> 'MOZ',
    Mrt = <any> 'MRT',
    Msr = <any> 'MSR',
    Mtq = <any> 'MTQ',
    Mus = <any> 'MUS',
    Mwi = <any> 'MWI',
    Mys = <any> 'MYS',
    Myt = <any> 'MYT',
    Nam = <any> 'NAM',
    Ncl = <any> 'NCL',
    Ner = <any> 'NER',
    Nfk = <any> 'NFK',
    Nga = <any> 'NGA',
    Nic = <any> 'NIC',
    Niu = <any> 'NIU',
    Nld = <any> 'NLD',
    Nor = <any> 'NOR',
    Npl = <any> 'NPL',
    Nru = <any> 'NRU',
    Nzl = <any> 'NZL',
    Omn = <any> 'OMN',
    Pak = <any> 'PAK',
    Pan = <any> 'PAN',
    Per = <any> 'PER',
    Phl = <any> 'PHL',
    Plw = <any> 'PLW',
    Png = <any> 'PNG',
    Pol = <any> 'POL',
    Pri = <any> 'PRI',
    Prt = <any> 'PRT',
    Pry = <any> 'PRY',
    Pse = <any> 'PSE',
    Pyf = <any> 'PYF',
    Qat = <any> 'QAT',
    Reu = <any> 'REU',
    Rou = <any> 'ROU',
    Rus = <any> 'RUS',
    Rwa = <any> 'RWA',
    Sau = <any> 'SAU',
    Sen = <any> 'SEN',
    Sgp = <any> 'SGP',
    Shn = <any> 'SHN',
    Slb = <any> 'SLB',
    Sle = <any> 'SLE',
    Slv = <any> 'SLV',
    Smr = <any> 'SMR',
    Som = <any> 'SOM',
    Spm = <any> 'SPM',
    Srb = <any> 'SRB',
    Ssd = <any> 'SSD',
    Stp = <any> 'STP',
    Sur = <any> 'SUR',
    Svk = <any> 'SVK',
    Svn = <any> 'SVN',
    Swe = <any> 'SWE',
    Swz = <any> 'SWZ',
    Sxm = <any> 'SXM',
    Syc = <any> 'SYC',
    Tca = <any> 'TCA',
    Tcd = <any> 'TCD',
    Tgo = <any> 'TGO',
    Tha = <any> 'THA',
    Tjk = <any> 'TJK',
    Tkm = <any> 'TKM',
    Tls = <any> 'TLS',
    Ton = <any> 'TON',
    Tto = <any> 'TTO',
    Tun = <any> 'TUN',
    Tur = <any> 'TUR',
    Tuv = <any> 'TUV',
    Twn = <any> 'TWN',
    Tza = <any> 'TZA',
    Uga = <any> 'UGA',
    Ukr = <any> 'UKR',
    Umi = <any> 'UMI',
    Ury = <any> 'URY',
    Usa = <any> 'USA',
    Uzb = <any> 'UZB',
    Vat = <any> 'VAT',
    Vct = <any> 'VCT',
    Ven = <any> 'VEN',
    Vgb = <any> 'VGB',
    Vir = <any> 'VIR',
    Vnm = <any> 'VNM',
    Vut = <any> 'VUT',
    Wlf = <any> 'WLF',
    Wsm = <any> 'WSM',
    Yem = <any> 'YEM',
    Zaf = <any> 'ZAF',
    Zmb = <any> 'ZMB',
    Zwe = <any> 'ZWE'
}
