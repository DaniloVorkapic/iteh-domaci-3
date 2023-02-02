import RedTabele from "./RedTabele";

 
 
 

function Kursevi({niz}) {
 
    return (
        <div>
            <table class="table">
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