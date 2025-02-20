function degreC(tempF){
    return (5/9)*(tempF-32)
}

var tempF = parseInt(prompt("Une température en Fahrenheit :"))
console.log(`cette température équivaut a ${degreC(tempF).toFixed(1)} degrés Celsius`)


function hjms(secondes){
    let j,h,m,s ;

    j=parseInt(secondes/(3600*24))
    var reste=secondes%(3600*24)

    h=parseInt(reste/3600)
    reste=reste%3600

    m=parseInt(reste/60)
    s = reste%60

    console.log(`cette durée équivaut à ${j } jours  ${h} heures ${m} minutes ${s} secondes`)
}

 var secondes=parseInt(prompt("Une durée en secondes :"))
 hjms(secondes)


function hjms1(secondes){
    let j,h,m,s ;

    j=parseInt(secondes/(3600*24))
    var reste=secondes%(3600*24)

    h=parseInt(reste/3600)
    reste=reste%3600

    m=parseInt(reste/60)
    s = reste%60

    let resultat='cette durée équivaut à '

    if(j >0) resultat+= `${j} jours `
    if(h >0) resultat+= `${h} heures `
    if(m >0) resultat+= `${m} minutes `
    if(s >0) resultat+=`${s} secondes`

    console.log(resultat)
}
 var secondes=parseInt(prompt("Une durée en secondes :"))
 hjms1(secondes)

function troisNombres(a,b,c){
     return [a,b,c].sort()
}
 console.log(troisNombres(14,10,17))

function triangle1(n){
    i=1
    while(i<n){
        let row = "*".repeat(i);
        console.log(row)
        i++
    }

}

 triangle1(7)

function triangle2(n){
    
    for(let i =1 ; i<n;i++){
        console.log("*".repeat(i))
    }

}
 triangle2(7)


function pyramide(n) {
    for (let i = 1; i <= n; i++) {
        let espaces = " ".repeat(n - i);
        let etoiles = "*".repeat(2 * i - 1);
        console.log(espaces + etoiles);
    }
}

 pyramide(5);


function Premier(val){

    for(let i =2 ;i<val;i++){
        if(val%i==0) {
            console.log(`${val} n'est pas un nombre premier , il est divisible par ${i}`)
            return;
        }
        console.log(`${val} est un nombre premier`)
    }

}
 var val = parseInt(prompt("Un entier positif :"))
 Premier(val)

function Fibo1(n){
    if (n ==0) return 0
    else if (n==1) return 1 
    else {
        return Fibo1(n-1)+Fibo1(n-2)
    } 
}

 var n = parseInt(prompt("Un entier positif :"))
 console.log(Fibo1(n))

function Fibo2(val){
    let u0=0
    let u1=1
    let p=u0
    let c=u1
    let ind=1
    while(c<val){
        let nouv=p+c
        p=c
        c=nouv
        ind++
    }
    return ind
}

 var n = parseInt(prompt("Valeur :"))
 console.log(Fibo2(n))


function Raca1(A){
    p=A/2
    while(Math.abs(p**2-A)>10**-5){
        p=(1/2)*(p+(A/p))
    }
    return p
}

var n = parseInt(prompt("racine de  :"))
console.log(Raca1(n))
