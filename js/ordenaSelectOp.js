/*INICIO: ordenamiento del SelectOptions de Provincias*/
window.onload = function ordenar() 
    { 
    /*alert('entró a la funcion ordenaSelectOp!!!');*/
    select = 'select'
    s=document.querySelector(select);
    Array.from(s.options).sort(
                         (a,b) => a.text.toLowerCase() > b.text.toLowerCase()? 1: -1
                            ).forEach(
                                    el => s.add(el)
                                    ); 
    }
/*FIN: ordenamiento del SelectOptions de Provincias*/