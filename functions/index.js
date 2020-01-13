let infos = {};

function imprimirDados(name, email){
    console.log("entrei na função");
    console.log("Name", name);
    console.log("Email", email);

    return function(){
        infos = {
            name,
            email
        };
    };
};

console.log("Infos antes:", infos);

const salvaDados = imprimirDados("Lucas Santi","lucassanti_@hotmail.com");

salvaDados();

console.log("Infos depois", infos);