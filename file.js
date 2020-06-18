typeCompte = document.getElementById('typeCompte');
solde = document.getElementById('solde');
typeClient = document.getElementById('typeClient');
idClient = document.getElementById('idClient');
nouveauClient = document.getElementById('nouveauClient');
nom = document.getElementById('nom');
prenom = document.getElementById('prenom');
telephone = document.getElementById('telephone');
adresse = document.getElementById('adresse');
email = document.getElementById('email');
ancienClient = document.getElementById('ancienClient');
typeClientPhysique = document.getElementById('typeClientPhysique');
salaire = document.getElementById('salaire');
profession = document.getElementById('profession');
idEmployeur = document.getElementById('idEmployeur');
nouveauClientMoral = document.getElementById('nouveauClientMoral');

nomClientMoral = document.getElementById('nomClientMoral');
AdresseClientMoral = document.getElementById('AdresseClientMoral');
raisonSocial = document.getElementById('raisonSocial');

infoClientPhysique = document.getElementById('infoClientPhysique');
infoNouveauClientMoral = document.getElementById('infoNouveauClientMoral');
infoNouveauClientPhysique = document.getElementById('infoNouveauClientPhysique');
infoClientPhysiqueSalarie = document.getElementById('infoClientPhysiqueSalarie');
infoAncienClient = document.getElementById('infoAncienClient');
infoAncienClientMoral = document.getElementById('infoAncienClientMoral');

/**
 * la selection du client
 */
nouveauClient.addEventListener('change', function(e) {
    if (typeClient.value == '1') {
        infoClientPhysique.style.display = 'block';
        clientMoral.style.display = 'none';
    } else {
        if (typeClient.value == '2') {
            infoClientPhysique.style.display = 'none';
            clientMoral.style.display = 'block';
        } else {
            infoClientPhysique.style.display = 'none';
            clientMoral.style.display = 'none';
        }
    }
})

/**
 * la selection du type de client
 */
typeClient.addEventListener('change', function(e) {
    infoNouveauClientMoral.style.display = 'none';
    if (typeClient.value == '1') {

        infoClientPhysique.style.display = 'block';
        infoAncienClient.style.display = 'block';
        infoNouveauClientPhysique.style.display = 'none'
        clientMoral.style.display = 'none';
        infoClientPhysiqueSalarie.style.display = 'none';
        infoAncienClientMoral.style.display = 'none';
        viderClientMoral();
    } else {
        if (typeClient.value == '2') {
            infoClientPhysique.style.display = 'none';
            clientMoral.style.display = 'block';
            infoAncienClientMoral.style.display = 'block';
            viderClientPhysique();
        } else {
            infoClientPhysique.style.display = 'none';
            clientMoral.style.display = 'none';
            viderClientMoral();
            viderClientPhysique();
        }
    }
})

/**
 * lorsqu'on click sur le boutton nouveau client
 */
nouveauClient.addEventListener('click', function(event) {
    infoAncienClient.style.display = 'none';
    infoNouveauClientPhysique.style.display = 'block';
    idClient.value = '0';

});

/**
 * lorsqu'on click sur le boutton ancien client
 */
ancienClient.addEventListener('click', function(event) {
    infoAncienClient.style.display = 'block';
    infoNouveauClientPhysique.style.display = 'none';

});

/**
 * la selection du type de client physique
 */
typeClientPhysique.addEventListener('change', function() {
    if (typeClientPhysique.value == '2') {
        infoClientPhysiqueSalarie.style.display = 'block';
        clientMoral.style.display = 'block';
        infoAncienClientMoral.style.display = 'block';
    } else {
        infoClientPhysiqueSalarie.style.display = 'none';
        infoNouveauClientPhysique.style.display = 'none';
        clientMoral.style.display = 'none';
        viderClientMoral();
    }
})

/**
 * lorsqu'on click sur le boutton nouveau client Moral (employeur ou entreprise)
 */
nouveauClientMoral.addEventListener('click', function() {
    infoNouveauClientMoral.style.display = 'block';
    infoAncienClientMoral.style.display = 'none';
    idEmployeur.value = 0;
})

/**
 * lorsqu'on click sur le boutton ancien client Moral (employeur ou entreprise)
 */
AncienClientMoral.addEventListener('click', function() {
    infoNouveauClientMoral.style.display = 'none';
    infoAncienClientMoral.style.display = 'block';
})

/**
 * la soumission du formulaire
 */
document.getElementById('myForm').addEventListener('submit', function(e) {

    let a = 0;

    if (!isValidated(typeCompte, '0')) {
        a = 1;
    }
    if (!isValidated(solde, '')) {
        a = 1;
    }
    if (!isValidated(typeClient, '0')) {
        a = 1;
    } else {
        if (typeClient.value == 1) {

            if (!isValidated(solde, '')) {
                a = 1;
            }

        } else {
            if (!isValidated(solde, '')) {
                a = 1;
            }
        }
    }







    e.preventDefault();
})


/**
 * vider les champs du client physique
 */
function viderClientPhysique() {
    typeClientPhysique.value = 1;
    idClient.value = 0;
    nom.value = '';
    prenom.value = '';
    telephone.value = '';
    adresse.value = '';
    email.value = '';
    salaire.value = '';
    profession.value = '';
    infoAncienClient.style.display = 'none';
    infoNouveauClientPhysique.style.display = 'none';
    infoClientPhysiqueSalarie.style.display = 'none';
}

/**
 * vider les champs du client moral
 */
function viderClientMoral() {
    idEmployeur.value = 0;
    nomClientMoral.value = '';
    AdresseClientMoral.value = '';
    raisonSocial.value = '';
    infoAncienClientMoral.style.display = 'none';
    infoNouveauClientMoral.style.display = 'none';
}

/**
 * tester si un champ est valid
 * @param {HTMLElement} element 
 * @param {string} v 
 */

function isValidated(element, v) {
    if (element.value == v) {
        element.classList.add('invalid');
        element.classList.remove('valid');
        return false;
        a = 1;
    } else {
        element.classList.add('valid');
        element.classList.remove('invalid');
        return true;
    }
}