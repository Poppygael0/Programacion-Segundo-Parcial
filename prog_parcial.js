function generarCorreo(Nombre, Ap, Am){
    correo=""
    correo= Nombre[0]+ Ap + Am[0] + "@empresa.com.mx"
    correo=correo.toLowerCase()
    correo=correo.replaceAll("á", "a")
    correo=correo.replaceAll("é", "e")
    correo=correo.replaceAll("í", "i")
    correo=correo.replaceAll("ó", "o")
    correo=correo.replaceAll("ú", "u")
    correo=correo.replaceAll("ñ", "n")
    correo=correo.replaceAll(" ", "_")
}

function generarContrasena(Fecha){
    contrasena=""
    contrasena= Fecha[8]+Fecha[9]+Fecha[5]+Fecha[6]+Fecha[2]+Fecha[3]
}

//2022-03-01

function ejecutar(){
    v1= document.f_segundo_parcial.nombre.value
    v2= document.f_segundo_parcial.ap.value
    v3= document.f_segundo_parcial.am.value
    v4= document.f_segundo_parcial.fecha.value
    if (v1.length==0){
        document.f_segundo_parcial.nombre.style.background="red";
        alert("Error, debe indicar el nombre, ya que es un campo obligatorio")
    }else{
        document.f_segundo_parcial.nombre.style.background="#1000F0";
        nombre=document.f_segundo_parcial.nombre.value
        if(v2.length==0){
            document.f_segundo_parcial.ap.style.background="red";
            alert("Error, debe indicar el Apellido Paterno, ya que es un campo obligatorio")
        }else{
            document.f_segundo_parcial.ap.style.background="#1000F0";
            ap=document.f_segundo_parcial.ap.value
            if(v3.length==0){
                document.f_segundo_parcial.am.style.background="red";
                alert("Error, debe indicar el Apellido Materno, ya que es un campo obligatorio")
            }else{
                document.f_segundo_parcial.am.style.background="#1000F0";
                am=document.f_segundo_parcial.am.value
                if(v4.length==0){
                    document.f_segundo_parcial.fecha.style.background="red";
                    alert("Error, debe indicar la fecha de nacimiento, ya que es un campo obligatorio")
                }else{
                    document.f_segundo_parcial.fecha.style.background="#1000F0";
                    fecha=document.f_segundo_parcial.fecha.value
                    generarCorreo(nombre, ap, am)
                    generarContrasena(fecha)
                    document.f_segundo_parcial.salida_correo.value=correo
                    document.f_segundo_parcial.salida_contrasena.value=contrasena
                }
            }

        }
                
    }

}