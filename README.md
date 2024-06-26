

Un projet de création d'extension Google Chrome.

Le principe de cette extension est de simuler la recherche de promotions sur un produit, ici mis en application sur Amazon, copier le layout d'un site existant, en l'occurrence Lalibrairie.com, et faire une fausse
page de vente du même produit à prix réduit, pour finalement recuillir les informations personnelles et bancaires de l'utilisateur ou utilisatrice.

L'enjeu pédagogique est d'initier aux mécanismes qui serviront à la pratique du backend ; l'enjeu personnel d'examiner les protections des utilisateurs mises en place par les navigateurs et les sites majeurs de vente au détail.

Features : 

    - Communication entre les scripts javascript et le background script, avec plusieurs écoutes sur ce dernier des évènements runtime qui jalonnent le user journey.
    - Analyse de la page Amazon des éléments à prélever, avec un message d'erreur du popup s'ils ne sont pas trouvés.
    - RNG au moment de la recherche de promotion par l'utilisateur pour simuler une absence de promotions en cours (10% d'occurrences) 
    - Prélèvement des éléments pertinents (titre, auteur, couverture, prix), nommés P.T.P
    - Report des éléments P.T.P sur la promotion affichée en popup avec le bouton de sortie de page
    - Affichage et report des éléments P.T.P sur la fausse page de vente
    - Implémentation d'une page de paiement reprenant le code graphique du site Lalibrairie.com

Features à implémenter :

    - Variation aléatoire des sites vers lesquels sont renvoyés les users
    - Passement des informations user recueillies vers une structure backend pour stockage dans une database
    
Conçu avec

    Javascript
    HTML
    CSS

Repository (origine)

Ada tech School GitHub
Auteur·es

    Marion Ochem - GitHub
    Philippe Deslous-Paoli - GitHub
    Hanaë Vernon - GitHub
