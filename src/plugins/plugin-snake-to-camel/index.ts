export default function fixCase(objeto:Object){
    if (!objeto) throw Error('ERRO NO OBJETO')
    const snakeToCamel = (str: string) => {
        return str.replace(/_([a-z])/g, (match, char) => char.toUpperCase());
        };

    const aplicado = Object.entries(objeto).reduce(
            (redutor: { [key: string]: any}, [chave, valor]) => {
                chave = snakeToCamel(chave);
                redutor[chave] = valor;
                return redutor;
            },
        {}
    );
    return aplicado;
}