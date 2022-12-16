const container = document.querySelector("main");

let htmlDivs = "";

let mandigo = [
    {
        id_plan: "83284",
        dominiotractor: "AB123CD",
        dominiosemi: "EOZ428",
        pesoEntrada: "14550 Kg",
        pesoSalida: "23840 Kg",
        pesoDif: "9290 Kg",
        id: 1,
        chofer: "Sebastian OCASA (DNI 33147853)",
        empresa: "Transp. DON PEDRO",
        tractor: "Mercedez Benz - Año: 2021  ",
        semi: "Furlong - Año: 2017",
        cliente: "Energia Argentina S.A.",
        carga: "Orden 1690/1 – Tubos 36 x 12.70 mm"
    },
    {
        id_plan: "2",
        dominiotractor: "AE958IO",
        dominiosemi: "GDP961",
        pesoEntrada: "rojo",
        pesoSalida: 123123123,
        pesoDif: "90",
        id: "2",
        chofer: "Emanuel Hurtado Perez (DNI 14698320)",
        empresa: "Transporte Los Primos",
        tractor: "MERCEDES BENZ - Año: 2019",
        semi: "MOZAMBIQUE - Año 2016"
    },
{
    id_plan: "TERCERO",
    dominiotractor: "PST854",
    dominiosemi: "KLM778",
    pesoEntrada: "16230 Kg",
    pesoSalida: "-------",
    pesoDif: "-------",
    id: "3",
    chofer: "sebastian hurtado perez",
    empresa: "Transporte LOYOLA SRL",
    tractor: "VOLVO - Año: 2021",
    semi: "SALTO - Año 2014"
},
{
    id_plan: "TERCERO",
    dominiotractor: "PST854",
    dominiosemi: "KLM778",
    pesoEntrada: "-------",
    pesoSalida: "-------",
    pesoDif: "-------",
    id: "4",
    chofer: "sebastian hurtado perez",
    empresa: "Transporte LOYOLA SRL",
    tractor: "VOLVO - Año: 2021",
    semi: "SALTO - Año 2014"
},

{
    id_plan: "ultimo",
    dominiotractor: "AB007ZA",
    dominiosemi: "AA166DN",
    pesoEntrada: "rojo",
    pesoSalida: 123123123,
    pesoDif: "90",
    id: "5",
    chofer: "sebastian hurtado perez",
    empresa: "Emp. Transp. Aranjuez",
    tractor: "VOLVO - Año: 2021",
    semi: "SALTO - Año 2014"
}
];


for (let i = 0; i < mandigo.length; i++) {
    htmlDivs = `
      <div style = "padding: 5px 5px;">
        <div class = "Tarjeta" onclick="selectTarjeta(${mandigo[i].id})" id = "d${mandigo[i].id}">
    <form class ="formCabe">
            <div class ="formulario__planta" id="formulario__carga">
                <label for="">PC / Tarjeta</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].id_plan}</span>
                </div>
            </div>

            <div class ="formulario__planta" id="formulario__tractor">
                <label for="">Tractor</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].dominiotractor}</span>
                </div>
            </div>

            <div class ="formulario__planta" id="formulario__semi">
                <label for="">Semi</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].dominiosemi}</span>
                </div>
            </div>

            <div class ="formulario__planta peso">
                <label class = "peso">Peso Ingreso</label>
                <div>
                    <span type="text" class ="peso" name="span">${mandigo[i].pesoEntrada}</span>
                </div>
            </div>

            <div class ="formulario__planta peso">
                <label class = "peso">Peso Salida</label>
                <div>
                    <span type="text" class ="peso" name="span">${mandigo[i].pesoSalida}</span>
                </div>
            </div>

            <div class ="formulario__planta peso">
                <label class = "peso">Dif Pesada</label>
                <div>
                    <span type="text" class ="peso" name="span">${mandigo[i].pesoDif}</span>
                </div>
            </div>
        </form>


        <form class ="form50">
            <div class ="formulario__planta_l">
                <label for="">Cliente</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].cliente}</span>
                </div>
            </div>

            <div class ="formulario__planta_l">
                <label for="">Carga</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].carga}</span>
                </div>
            </div>
            </form>

           <form class ="form50">
            <div class ="formulario__planta_l">
                <label for="">Empresa Transportista</label>
                <div>
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].empresa}</span>
                </div>
            </div>

            <div class ="formulario__planta_l">
                <label for="">Chofer: </label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].chofer}</span>
                </div>
            </div>
             </form>


        <form class ="form50">
            <div class ="formulario__planta_l">
                <label for="">Camion</label>
                <div>
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].tractor}</span>
                </div>
            </div>

            <div class ="formulario__planta_l">
                <label for="">Semi: </label>
                <div>
                    <span type="text" class ="formulario__span" name="span">${mandigo[i].semi}</span>
                </div>
            </div>

        </form>

        <form class ="formulario">
            <div class ="formulario__planta">
                <label for="">Llegada Porteria</label>
                <div>
                    <span type="text" class ="formulario__span" name="span">Ayer 23: 54</span>
                </div>
               <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
            </div>

            <div class ="formulario__planta">
                <label for="">Ingreso Planta</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">Hoy 04: 55</span>
                </div>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">05: 01</span>
                </div>
            </div>

            <div class ="formulario__planta">
                <label for="">Pesada Ingreso</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
               <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
            </div>

            <div class ="formulario__planta">
                <label for="">Pesada Salida</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
               <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
            </div>

            <div class ="formulario__planta">
                <label for="">Salida Planta</label>
                <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
               <div class ="formulario__span">
                    <span type="text" class ="formulario__span" name="span">&nbsp; </span>
                </div>
            </div>
        </form>


        </div>
        </div>
</div>
        
    `
    var theDiv = document.getElementById("divCont");

    let htmlDivsX = document.createElement('div');
    htmlDivsX.innerHTML =htmlDivs;

    theDiv.append(htmlDivsX);

}

function selectTarjeta(id) {

    var selecEnPlanta = localStorage.getItem('SelecEnPlanta');
    if (selecEnPlanta !== "undefined") {
        if (document.getElementById(selecEnPlanta).classList.contains('seleccionada'))
            document.getElementById(selecEnPlanta).classList.toggle('seleccionada');
    }

    localStorage.setItem('SelecEnPlanta', 'd' + id);
    selecEnPlanta = "d" + id;
    document.getElementById(selecEnPlanta).classList.add('seleccionada');
           
   // alert(id);
}

function buscardor (input, selector){
    document.addEventListener("keyup",e =>{
        if(e.target.matches(("input"))){
            //console.log(e.key)
            if(e.key === "Escape")e.target.value = ""
            
            document.querySelectorAll(selector).forEach(el =>{
                el.textContent.toLowerCase().includes(e.target.value)?
                el.classList.remove("filter"):
                el.classList.add("filter")
            })
        }
    })
}
