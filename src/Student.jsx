import React , {useState}  from 'react';
import {NavLink ,Router} from 'react-router-dom';


function Student({addStudent}) {
  const [name,setName] = useState('');
  const [pswd,setpswd] = useState('');
  const [date,setdate] = useState('');
  const [ville,setville] = useState('');
  const [genre,setGenre] = useState('');
  const [loisirs,setloisirs] = useState('');
  // const [photo,setPath] = useState("")
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    const student = {
      name,
      pswd,
      date,
      ville,
      genre,
      loisirs
    }
    addStudent(student);
    setName("");
    setpswd("");
    setdate("");
    setville("");
    setGenre("");
    setloisirs("");

  }
  return (
    
    <div>
      <form action="" className='form' onSubmit={handleFormSubmit}>
      <nav>
        <NavLink className={'red'} to={"/login"}>Login</NavLink>
      </nav>

        <table>
              <tr>
                <td>l'identifiant</td>
                <td><input value={name} onChange={(e)=>setName(e.target.value)} type={"text"} placeholder="Nom & Prenom"/></td>
              </tr>
                <tr>
                  <td>Mot de pass</td>
                  <td><input type="password"  id="pswd" onChange={(e)=>setpswd(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Date de naissance</td>
                    <td><input type="date"  id="id" onChange={(e)=>setdate(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>ville</td>
                    <td>
                        <select onChange={(e)=>setville(e.target.value)}>
                            <option value="Casablanca">Casablanca</option>
                            <option value="Ouarzazate">Ouarzazate</option>
                            <option value="agadir">Agdir</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Genre</td>
                    <td>Homme<input type="radio" name='s' value={"Homme"} onChange={(e)=>setGenre(e.target.value)}/></td>
                    <td>Femme<input type="radio" name='s' value={"Femme"} onChange={(e)=>setGenre(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>loisirs</td>
                    <td>Sport<input type="checkbox" value={"Sport"}   onChange={(e)=>setloisirs([...loisirs,e.target.value])}/></td>
                    <td>Lecture<input type="checkbox" value={'Lecture'} onChange={(e)=>setloisirs([...loisirs,e.target.value])}/></td>
                    <td>Musique<input type="checkbox" value={'Musique'} onChange={(e)=>setloisirs([...loisirs,e.target.value])}/></td>
                    
                </tr>
                <tr>
                    <td>Photo</td>
                    <td><input type="file" /></td>
                </tr>

               

<div className='form-group'>
          <button type='submit'>Valider</button>
        </div>
            </table>
      </form>
    </div>
  )
}

export default Student

