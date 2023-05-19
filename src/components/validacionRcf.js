
const validacionRFC= (estado) => {
    const rfc = estado.campo;
        const reg = /^([a-z]{3,5})(\d{2})(\d{2})(\d{2})([0-9a-z]{3})$/i
        const rfc2 = rfc.match(reg);
 
        propiedades.rfc_input = rfc2[0];
        propiedades.fecha_nacimiento_anio=rfc2[2]
        propiedades.fecha_nacimiento_mes=rfc2[3]
        propiedades.fecha_nacimiento_dia=rfc2[4]
        propiedades.homoclave = rfc2[5];
        propiedades.tipo_persona = rfc2[0].length > 12 ? 'Fisica' : 'Moral';
        propiedades.longitud = rfc2[0].length
        
        const res = palabrasRestringidas.filter(palabra => palabra === rfc2[1]);
        if (res.length > 0) {
          return {
            ...propiedades,valido:"false", msg:'El RFC ingresado contiene una palabra obsena. '
          }
        }else{
          return {
            ...propiedades,valido:"true", msg:'Formato de RFC correcto.'
          }
        }
}
const propiedades = {
  rfc_input: '',
  nombre_parte: '',
  fecha_nacimiento_anio: '',
  fecha_nacimiento_mes: '',
  fecha_nacimiento_dia: '',
  homoclave: '',
  tipo_persona: '',
  valido: null,
  longitud: 0,
  msg: ''
}
const palabrasRestringidas= [ 
        
        "BACA",
        "BAKA",
        "BUEI",
        "BUEY",
        "CACA",
        "CACO",
        "CAGA",
        "CAGO",
        "CAKA",
        "CAKO",
        "COGE",
        "COGI",
        "COJA",
        "COJE",
        "COJI",
        "COJO",
        "COLA",
        "CULO",
        "FALO",
        "FETO",
        "GETA",
        "GUEI",
        "GUEY",
        "JETA",
        "JOTO",
        "KACA",
        "KACO",
        "KAGA",
        "KAGO",
        "KAKA",
        "KAKO",
        "KOGE",
        "KOGI",
        "KOJA",
        "KOJE",
        "KOJI",
        "KOJO",
        "KOLA",
        "KULO",
        "LILO",
        "LOCA",
        "LOCO",
        "LOKA",
        "LOKO",
        "MAME",
        "MAMO",
        "MEAR",
        "MEAS",
        "MEON",
        "MIAR",
        "MION",
        "MOCO",
        "MOKO",
        "MULA",
        "MULO",
        "NACA",
        "NACO",
        "PEDA",
        "PEDO",
        "PENE",
        "PIPI",
        "PITO",
        "POPO",
        "PUTA",
        "PUTO",
        "QULO",
        "RATA",
        "ROBA",
        "ROBE",
        "ROBO",
        "RUIN",
        "SENO",
        "TETA",
        "VACA",
        "VAGA",
        "VAGO",
        "VAKA",
        "VUEI",
        "VUEY",
        "WUEI",
        "WUEY"
]


export {validacionRFC}