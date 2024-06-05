import ReactQuill from "react-quill"; // Importation du composant ReactQuill pour l'éditeur de texte

export default function Editor({ value, onChange }) {
  // Définition des modules de l'éditeur de texte
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }], // Options de formatage des en-têtes
      ['bold', 'italic', 'underline', 'strike', 'blockquote'], // Options de mise en forme du texte
      [
        { list: 'ordered' }, // Option de liste ordonnée
        { list: 'bullet' }, // Option de liste à puces
        { indent: '-1' }, // Option d'indentation vers la gauche
        { indent: '+1' }, // Option d'indentation vers la droite
      ],
      ['link', 'image'], // Options pour ajouter des liens et des images
      ['clean'], // Option pour supprimer le formatage
    ],
  };

  return (
    <div className="content"> {/* Conteneur de l'éditeur de texte */}
      {/* Composant ReactQuill pour l'éditeur de texte */}
      <ReactQuill
        value={value} // Valeur du contenu de l'éditeur
        theme={'snow'} // Thème de l'éditeur de texte (snow ou bubble)
        onChange={onChange} // Gestionnaire d'événement pour la modification du contenu
        modules={modules} // Modules de l'éditeur de texte
      />
    </div>
  );
}
