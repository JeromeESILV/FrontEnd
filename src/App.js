import Input from "./components/Input";
import React, { useState } from "react";

function App() {
  const [checked, setChecked] = useState(-1)
  const [ck, setCk] = useState("true")
  console.log(checked);

function isChecked(test) {
	  if(test === 1){
	      setCk("false")
	  }else if(test === -1){
	      return true
	  }
}
  return (
    <form>
      <Input name="Fname" description="First Name" required="true" type="text"/>
      <Input name="Lname" description="Last Name" required="true" type="text"/>
      <Input name="Email" description="Email Address" required="true" type="email"/>
      <Input name="psw" description="Password" required="true" type="password"/>
      <div>
      Knowledge Base (Select at least 1): 
      <Input name="C" description="C" required={ck} type="checkbox" onClick={() => isChecked(checked)}/>
      <Input name="C#" description="C#" required={ck} type="checkbox" onClick={() => isChecked(checked)}/>
      <Input name="C++" description="C++" required={ck} type="checkbox" onClick={() => isChecked(checked)}/>
      <Input name="Python" description="Python" required={ck} type="checkbox" onClick={() => isChecked(checked)}/>
      <Input name="Rust" description="Rust" required={ck} type="checkbox" onClick={() => isChecked(checked)}/>
      <Input name="JS" description="JS" required={ck} type="checkbox" onClick={() => isChecked(checked)}/>
      </div>
      <Input name="rgpd" description="RGPD" required="true" type="checkbox"/>
      <Input name="sbt" description="" type="submit"/>
    </form>
  );
}

export default App;

/**
 * Créer un formulaire de création de compte utilisateur.
 *
 * Gestion 100% en React.
 *
 * - Nom (required)
 * - Prénom (required)
 * - Email (required)
 * - Mot de passe (required)
 * - Compétences (multi-select/tags) (ex: PHP, JS, React, ...)
 * - RGPD (checkbox/required)
 * - Bouton de soumission (uniquement si tous les champs sont valides)
 *
 * A la soumission du formulaire, compiler les champs dans un objet et l'afficher.
 * + un message de succès.
 *
 * Bonus: possibilité de pré-remplir les champs avec des données utilisateur
 */
