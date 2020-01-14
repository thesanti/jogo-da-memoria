let infos = {
    name: "Sem valor",
    email: "Sem valor"
};

const imprimeDados = (name,email) => () => infos = {name, email};

console.log("Infos antes", infos);
const salvaDados = imprimeDados("Lucas Santi", "lucassanti_@hotmail.com");
salvaDados();
console.log("Info depois", infos);