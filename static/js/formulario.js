// Objeto con datos de marcas, modelos y especificaciones de equipos
const datos = {
    hp: {
        modelos: ["HP 15-ef1xxx","HP ProBook 450 G7","HP Pavilion 15","HP Envy 13","HP ZBook 15"],
        specs: {"HP 15-ef1xxx":[8,256],"HP ProBook 450 G7":[16,512],"HP Pavilion 15":[8,256],"HP Envy 13":[8,256],"HP ZBook 15":[16,512]}
    },
    dell: {
        modelos: ["Dell Inspiron 15 3000","Dell XPS 13","Dell Latitude 5520","Dell Vostro 15"],
        specs: {"Dell Inspiron 15 3000":[4,128],"Dell XPS 13":[16,512],"Dell Latitude 5520":[16,512],"Dell Vostro 15":[8,256]}
    },
    lenovo: {
        modelos: ["Lenovo ThinkPad E15","Lenovo ThinkPad T14","Lenovo IdeaPad 5","Lenovo Legion 5"],
        specs: {"Lenovo ThinkPad E15":[8,256],"Lenovo ThinkPad T14":[16,512],"Lenovo IdeaPad 5":[8,256],"Lenovo Legion 5":[16,512]}
    },
    asus: {
        modelos: ["ASUS VivoBook 15","ASUS ROG G513","ASUS ZenBook 13","ASUS TUF Gaming"],
        specs: {"ASUS VivoBook 15":[8,256],"ASUS ROG G513":[32,1024],"ASUS ZenBook 13":[8,256],"ASUS TUF Gaming":[16,512]}
    },
    apple: {
        modelos: ["MacBook Air M1","MacBook Pro 13","MacBook Pro 16","Mac Mini M1"],
        specs: {"MacBook Air M1":[8,256],"MacBook Pro 13":[16,512],"MacBook Pro 16":[32,1024],"Mac Mini M1":[8,256]}
    }
};

// Evento: cuando cambia la marca seleccionada
document.getElementById("marcas").addEventListener("change", function(){
    // Obtener los modelos de la marca seleccionada (convertida a minúsculas)
    const m = datos[this.value.toLowerCase()];
    // Actualizar el select de modelo con las opciones disponibles
    document.getElementById("modelo").innerHTML = "<option value=\"\">Seleccionar...</option>" + 
        (m ? m.modelos.map(x=>`<option value="${x}">${x}</option>`).join("") : "");
});

// Evento: cuando cambia el modelo seleccionado
document.getElementById("modelo").addEventListener("change", function(){
    // Obtener las especificaciones (RAM y almacenamiento) del modelo seleccionado
    const s = datos[document.getElementById("marcas").value.toLowerCase()]?.specs[this.value];
    // Si hay especificaciones, llenar los campos de RAM y almacenamiento
    if(s){
        document.getElementById("ram").value = s[0];  // Asignar RAM (primer valor)
        document.getElementById("almacenamiento").value = s[1];  // Asignar almacenamiento (segundo valor)
    }
});

// Evento: cuando el documento carga completamente
document.addEventListener("DOMContentLoaded", () => {
    // Establecer la fecha mínima de mantenimiento como hoy
    document.getElementById("mantenimiento").min = new Date().toISOString().split('T')[0];
});

// Evento: cuando se envía el formulario
document.getElementById("equipoForm").addEventListener("submit", async(e) => {
    // Evitar que se recargue la página
    e.preventDefault();
    
    // Crear objeto con todos los datos del formulario
    const f = {
        codigo: document.getElementById("codigo").value,  // Código del equipo
        tipo: document.getElementById("tipo").value,  // Tipo de equipo
        marcas: document.getElementById("marcas").value,  // Marca seleccionada
        modelo: document.getElementById("modelo").value,  // Modelo seleccionado
        so: document.getElementById("so").value,  // Sistema operativo
        almacenamiento: document.getElementById("almacenamiento").value,  // Almacenamiento en GB
        ram: document.getElementById("ram").value,  // RAM en GB
        estado: document.getElementById("estado").value,  // Estado del equipo
        mantenimiento: document.getElementById("mantenimiento").value,  // Fecha de mantenimiento
        fecha_registro: new Date().toISOString().split('T')[0]  // Fecha actual de registro
    };
    
    try {
        // Enviar datos al servidor mediante POST
        const r = await fetch("/api/equipos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},  // Especificar que es JSON
            body: JSON.stringify(f)  // Convertir objeto a JSON
        });
        
        // Obtener respuesta del servidor en JSON
        const d = await r.json();
        // Determinar si fue éxito o error
        const t = r.ok && d.ok ? "exito" : "error";
        // Mensaje a mostrar según el resultado
        const m = t === "exito" ? "Equipo registrado exitosamente" : d.error || "Error";
        
        // Si fue exitoso, limpiar el formulario
        if(t === "exito"){
            document.getElementById("equipoForm").reset();
            document.getElementById("modelo").innerHTML = "<option value=\"\">Seleccionar...</option>";
        }
        
        // Mostrar mensaje al usuario
        const div = document.getElementById("mensaje");
        div.textContent = m;  // Asignar texto del mensaje
        div.className = "mensaje " + t;  // Asignar clase CSS (exito o error)
        div.style.display = "block";  // Mostrar el mensaje
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            div.style.display = "none";
        }, 3000);
        
    } catch(e) {
        // Si ocurre un error en la solicitud
        const div = document.getElementById("mensaje");
        div.textContent = "Error: " + e.message;  // Mostrar mensaje de error
        div.className = "mensaje error";  // Aplicar clase de error
        div.style.display = "block";  // Mostrar el mensaje
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            div.style.display = "none";
        }, 3000);
    }
});
