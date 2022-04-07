# Level 1

J'ai essayé d'écrire une fonction qui reçoit en paramètre une phrase, et qui me renvoie en retour le nombre de caractères du mot le plus long de la phrase.

Par exemple si j'appelle findLongest("J'en ai marre du confinement"), elle devrait me renvoyer 11, car le mot le plus long de la phrase est "confinement" et il est composé de 11 lettres.

Mon code ne fonctionne pas actuellement et je ne sais pas pourquoi, comment le corriger ?

🐍 En Python:

def find_longest(string):
    spl = str.split(" ")
    longest = 0
    i=0
    while (i > spl.length):
    if (spl(i).length > longest): longest = spl[i].length
    return longest


💃🏾 En javascript:

function findLongest(str)

  var spl = str.split(" ");
  var longest = 0

  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
 )
    }
    return longest
)


# Level 2

J'ai écrit le même bout de code en Python et en JS mais cela ne fonctionne pas comme je voudrais !

J'ai créé une classe DingleMouse, et j'aimerais pouvoir appeler des fonctions pour lui donner un âge, un genre et un prénom, et qu'elle me renvoie une chaine de caractères sous la forme "Hello. My name is Alya. I am 33. I am female."

Le truc, c'est que actuellement quand je l'appelle, si j'ai donné un âge et un genre mais pas un prénom, elle m'affiche "Hello. My name is . I am 33. I am female", c'est un peu ridicule, j'aimerais mieux qu'elle écrive juste "Hello. I am 33. I am female".

J'aimerais aussi qu'elle mette les choses dans l'ordre que je lui ai donné : si j'ai d'abord renseigné l'âge, j'aimerais qu'elle commence par ça, si j'ai d'abord renseigné le prénom, qu'elle commence par le prénom, etc. Et j'aimerais pouvoir tenir compte de la dernière version, c'est à dire que si j'ai d'abord appelé la fonction en donnant "Laya" comme prénom puis en donnant "Alya", j'aimerais qu'elle garde juste Alya


🐍 En Python:

class Dinglemouse(object):

    def __init__(self):
        self.name = None
        self.sex  = None
        self.age  = None

    def setAge(self, age):
        self.age = age
        return self

    def setSex(self, sex):
        self.sex = sex
        return self

    def setName(self, name):
        self.name = name
        return self

    def hello(self):
        return "Hello. My name is {}. I am {}. I am {}.".format(self.name, self.age, "male" if self.sex=='M' else "female")


💃🏾 En javascript

class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
    }

    setAge(age) {
        this.age = age
        return this
    }

    setSex(sex) {
        this.sex = sex
        return this
    }

    setName(name) {
        this.name = name
        return this
    }

    hello() {
        return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
    }

}

# Level 3


Ecrire une fonction SommeCarrée qui prend comme paramètre un entier N compris entre 2 et 43 et qui renvoie en sortie une liste [1 .. N] de façon à ce que chaque somme d'entiers consécutifs de la liste soit un carré.

Il faut que tous les entiers entre 1 et N soient utilisés dans la liste, et qu'ils le soient une seule fois.

Par exemple, avec N = 15, la solution serait :

[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]

En effet, cette liste comprend tous les entiers entre 1 et 15 et si on ajoute les nombres deux à deux, ce sont tous des carrés :

   16    16     16     16     16     16     16
   /+\   /+\    /+\    /+\    /+\    /+\    /+\
[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
      \+/    \+/    \+/    \+/    \+/    \+/    \+/
       9     25      9     25      9     25      9

9 = 3*3
16 = 4*4
25 = 5*5


S'il n'exsite pas de solution au problème, la fonction devrait renvoyer un message d'erreur

