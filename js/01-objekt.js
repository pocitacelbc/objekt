//Vytvořte libovolný objekt nějakého zvířátka a vypište tento objekt do konzole.
//(Vymyslete alespoň 6 vlastností a použijte alespoň 3 různé datové typy)

let pes = {
    jmeno: "Charlie",
    rasa: "Zlaty retrivr",
    rokNarozeni: 2015,
    maSourozence: true,
    hoby:["papani", "mazleni", "valeni", "aportovaní"],


};

console.log(pes);

console.log(pes["jmeno"]);
console.log(pes.jmeno);

console.log(pes);
pes.jmeno = "Čarlík";
console.log(pes);

console.log(pes.hoby[0]);

pes.hoby[0] = "hamu papu"
console.log(pes);

console.log(pes.hoby[0]);

pes.hoby [4] = "behani";
console.log(pes);

console.log(pes.hoby[4]);