## TP4 : Développement Web en JavaScript

### Exercice 1 : Permutation de valeurs

#### Objectif

L'objectif de cet exercice est d'implémenter une interface permettant de permuter les valeurs de deux champs de texte lorsqu'un bouton est cliqué.

#### Implémentation

Nous avons utilisé un formulaire contenant deux zones de texte et un bouton. En JavaScript, nous avons échangé les valeurs des champs lors du clic sur le bouton.
```javascript

<body>

        <div class="container">
            <input type="text" id="T1" placeholder="Entrez un texte">
            <input type="text" id="T2" placeholder="Entrez un texte">
            <input type="button" value="Permuter" id="permuter" onclick="permuter()">
        </div>

        <script>
            function permuter(){
                [T1.value, T2.value] = [T2.value, T1.value];

            }
        </script>
    </body>
```
