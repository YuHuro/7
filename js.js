let a = [];
for(let i = 0; i <= 1000; i++){
    if(i % 2 === 0){
        a.push(i)
    }
}

let changeA = []

for(let i = 0; i < a.length; i++){
    if(a[i] % 3 === 0){
        changeA.push(a[i])
    }
};

const mapA = changeA.map(item => item ** 2);

let index = mapA.indexOf(324)

console.log(index);
