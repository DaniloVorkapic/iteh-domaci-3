import RedTabele from "./RedTabele";

 
 
 

function Kursevi({niz}) {
 
    function search(){
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }



    return (
        <div className="kursevi">
            <input type="text" id="myInput" onKeyUp={search} placeholder="Pretraga po nazivu"/> 
            <table className="table" id="myTable">
                <thead>
                    <tr>    
                    <th scope="col">ID</th>
                    <th scope="col">Naziv</th>
                    <th scope="col">Opis</th>
                    <th scope="col">Cena</th>
                    <th scope="col">Predavac</th>
                    <th scope="col">Trajanje</th>

                    </tr>
                </thead>
                <tbody>
                 {niz.map((k)=><RedTabele key={k.id} kurs={k}></RedTabele>)}
              
                </tbody>
                </table>
        </div>
    );
  }
  
  export default Kursevi;