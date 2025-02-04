export default function Input({
    width,
    name,
    description,
    required = "false",
    type,//button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week
    autocomplete,
}) {
    return(
        <div>
            <label for={name}>{description}</label>
            <input type={type} id={name} name={name} required={required} ></input>
        </div>
    );
}

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