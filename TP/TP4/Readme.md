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
### interface 
![image](https://github.com/user-attachments/assets/c5e8bfa5-d314-491c-b2ac-ef15c89e6891)


### Exercice 2 : Calculatrice Simple en JavaScript

#### Objectif

L'objectif de cet exercice est d'implémenter une calculatrice permettant d'effectuer des opérations de base (addition, soustraction, multiplication et division) sur deux valeurs saisies par l'utilisateur.

#### Implémentation

Nous avons utilisé un formulaire contenant deux zones de texte pour les entrées, une section de boutons pour les opérations et un champ de texte pour afficher le résultat.  
En JavaScript, nous avons récupéré les valeurs entrées par l'utilisateur et effectué l'opération sélectionnée.

```javascript
function calculate(op) {
    let val1 = parseInt(document.getElementById("T1").value);
    let val2 = parseInt(document.getElementById("T2").value);
    let result;

    switch (op) {
        case '+': result = val1 + val2; break;
        case '-': result = val1 - val2; break;
        case '*': result = val1 * val2; break;
        case '/': 
            result = (val2 === 0) ? "Erreur" : val1 / val2;
            break;
    }

    document.getElementById("resultat").value = result;
}
```
### interface 
![image](https://github.com/user-attachments/assets/cb742f66-8f77-46df-be9b-0e20f87ff01b)

#### Explication

Interface utilisateur :
- Deux champs <input> pour la saisie des nombres.
- Quatre boutons pour les opérations (+, -, *, /).
- Un champ <input> pour afficher le résultat.
  
Fonctionnement en JavaScript :
- Récupération des valeurs saisies.
- Vérification de la division par zéro.
- Exécution de l'opération choisie et affichage du résultat.


### Exercice 3 : Calculateur d'IMC

#### Objectif

L'objectif de cet exercice est d'implémenter une application simple permettant de calculer l'**Indice de Masse Corporelle (IMC)** en fonction du poids et de la taille saisis par l'utilisateur.

#### Implémentation

Nous avons utilisé un formulaire contenant :
- Deux champs pour la saisie du **poids** (en kg) et de la **taille** (en m).
- Un bouton pour effectuer le calcul.
- Un label pour afficher le résultat avec une interprétation de l'IMC.

```javascript
function imc() {
    let poids = parseFloat(document.getElementById("T1").value);
    let taille = parseFloat(document.getElementById("T2").value);
    
    if (isNaN(poids) || isNaN(taille) || taille <= 0) {
        document.getElementById("label").textContent = "Veuillez entrer des valeurs valides.";
        return;
    }

    let imc = poids / (taille * taille);
    let resultat;

    if (imc < 18.5) {
        resultat = `IMC: ${imc.toFixed(2)} - Insuffisance pondérale`;
    } else if (imc < 25) {
        resultat = `IMC: ${imc.toFixed(2)} - Poids normal`;
    } else if (imc < 30) {
        resultat = `IMC: ${imc.toFixed(2)} - Surpoids`;
    } else if (imc < 35) {
        resultat = `IMC: ${imc.toFixed(2)} - Obésité modérée`;
    } else if (imc < 40) {
        resultat = `IMC: ${imc.toFixed(2)} - Obésité sévère`;
    } else {
        resultat = `IMC: ${imc.toFixed(2)} - Obésité morbide`;
    }

    document.getElementById("label").textContent = resultat;
}
```

### interface 
![image](https://github.com/user-attachments/assets/42510443-24ea-4b65-8535-39436b4f4dcc)

### Explication

Interface utilisateur :
- Deux champs <input> pour entrer le poids et la taille.
- Un bouton <button> pour calculer l'IMC.
- Un <label> pour afficher le résultat.
  
Fonctionnement du script JavaScript :
- Récupération et conversion des entrées.
- Vérification des valeurs (évite les erreurs de saisie).
- Calcul de l'IMC selon la formule :
- IMC = Poids (kg) / (Taille (m)²)
- Classification de l'IMC et affichage du résultat.


### Exercice4 : Calculatrice Scientifique

#### Objectif

L'objectif de cet exercice est d'implémenter une calculatrice scientifique permettant d'effectuer des opérations mathématiques avancées telles que l'addition, la soustraction, la multiplication, la division, les puissances, les logarithmes et les fonctions trigonométriques.

#### Implémentation

Nous avons créé une interface utilisateur comprenant :

- Un écran d'affichage pour afficher les entrées et les résultats.
- Une grille de boutons représentant les chiffres, les opérations de base et les fonctions avancées (sinus, cosinus, tangente, logarithme, exponentielle...).
- Un script JavaScript pour gérer les interactions et effectuer les calculs.

```javascript
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', function() {
        let value = button.textContent.trim();

        if (value === 'CE') {
            // Réinitialiser la calculatrice
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            display.textContent = '0';
        } else if (value === '=') {
            // Calculer le résultat
            if (firstOperand && operator && currentInput) {
                secondOperand = currentInput;
                let result = calculate(firstOperand, operator, secondOperand);
                display.textContent = result;
                currentInput = result;
                operator = '';
                firstOperand = '';
                secondOperand = '';
            }
        } else if (value === 'x^') {
            // Gérer l'opération de puissance
            if (currentInput) {
                firstOperand = currentInput;
                operator = '^';
                currentInput = '';
            }
        } else if (['+', '-', '*', '/', '%', '^'].includes(value)) {
            // Gérer les opérateurs
            if (currentInput) {
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            }
        } else if (value === '√') {
            // Racine carrée
            if (currentInput) {
                let result = Math.sqrt(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'x²') {
            // Carré d'un nombre
            if (currentInput) {
                let result = Math.pow(parseFloat(currentInput), 2);
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'sin') {
            // Fonction sinus
            if (currentInput) {
                let result = Math.sin(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'cos') {
            // Fonction cosinus
            if (currentInput) {
                let result = Math.cos(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'tan') {
            // Fonction tangente
            if (currentInput) {
                let result = Math.tan(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'Ln') {
            // Logarithme naturel
            if (currentInput) {
                let result = Math.log(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'log') {
            // Logarithme en base 10
            if (currentInput) {
                let result = Math.log10(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else if (value === 'exp') {
            // Exponentielle
            if (currentInput) {
                let result = Math.exp(parseFloat(currentInput));
                display.textContent = result;
                currentInput = result;
            }
        } else {
            // Ajouter les chiffres et le point décimal
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(first, operator, second) {
    first = parseFloat(first);
    second = parseFloat(second);

    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        case '%':
            return first % second;
        case '^':
            return Math.pow(first, second);
        default:
            return 0;
    }
}
```

### interface 
![image](https://github.com/user-attachments/assets/814d4629-7fc7-4737-8447-30a2c116b7f0)

#### Explication
Interface utilisateur :
- Un écran d'affichage (<div class="display">) qui montre les entrées et les résultats.
- Un clavier numérique et scientifique (<button>) avec les chiffres, les opérations de base et les fonctions avancées.
- Un bouton CE pour effacer l'affichage.
- Fonctionnement du script JavaScript :
  
Récupération des entrées :
- Lorsqu'un bouton est cliqué, sa valeur est récupérée.
- Les nombres sont affichés sur l'écran.

Gestion des opérations :
- Lorsqu'un opérateur est cliqué, il est stocké et l'utilisateur peut entrer un deuxième nombre.
- Lorsqu'on clique sur =, l'opération est exécutée et le résultat est affiché.
  
Calculs avancés :
- Math.sqrt() pour la racine carrée.
- Math.pow() pour l'exponentiation.
- Math.sin(), Math.cos(), Math.tan() pour les fonctions trigonométriques.
- Math.log() et Math.log10() pour les logarithmes.
- Math.exp() pour l'exponentielle.









