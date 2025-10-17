async function pegarDados(): Promise<any> {
    try{
        const dados = await fetch (`https://meowfacts.herokuapp.com/`);
        console.log(await dados.json());
    }catch (error){
        throw new Error ("Erro ao pegar dados")
    }
}


async function variosDados(qtd:number){
    const p = [];
    for (let i = 0; i < qtd; i++) {
        p.push(pegarDados())
    }
    await Promise.all(p);
}

variosDados(5)

