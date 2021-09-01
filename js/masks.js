const mask={
    maxmin(value){
        // Não aceita valores fora desse intervalo
        const min=1;
        const max=200;
        //--------------------------------------
        return value.replace(/(\D)/g,"")
        .replace(/(\d{1})/,num=>{return (num<min)?min:num})
        .replace(/\d{3}/,num=>{
            return num>max?max:num
        }).replace(/(\d{3})\d+?$/,'$1')
    },
    cel(value){
        return value.replace(/\D/g,'')
        .replace(/([\d]{2})(\d)/,'($1) $2')
        .replace(/([\s][\d]{5})(\d)/,'$1-$2')
        .replace(/(-[\d]{4})\d+?$/,'$1')
    },
    cpf(value){
        return value.replace(/\D/g,'')
        .replace(/([\d]{3})(\d)/,'$1.$2')
        .replace(/([\d]{3})(\d)/,'$1.$2')
        .replace(/([\d]{3})(\d{1,2})/,'$1-$2')
        .replace(/(-[\d]{2})\d+?$/,'$1')
    },
    cnpj(value){
        return value.replace(/\D/g,'')
        .replace(/([\d]{2})(\d)/,'$1.$2')
        .replace(/([\d]{3})(\d)/,'$1.$2')
        .replace(/([\d]{3})(\d)/,'$1/$2')
        .replace(/([\d]{4})(\d{1,2})/,'$1-$2')
        .replace(/(-[\d]{2})\d+?$/,'$1')
    },
    cpfcnpj(value){
       return value.length<15?this.cpf(value):this.cnpj(value)
    },
    cep(value){
        return value.replace(/\D/g,'')
        .replace(/([\d]{5})(\d)/,'$1-$2')
        .replace(/(-[\d]{3})\d+?$/,'$1')
    },
    percent(value){
        return value.replace(/\D/g,'')
        .replace(/([\d]{2})(\d)/,'$1,$2')
        .replace(/(,[\d]{2})\d+?$/,'$1')
    }
    
}
document.querySelectorAll("input").forEach(e=> {
    e.addEventListener("input",$input=>{
        const camp=$input.target.dataset.mask
        $input.target.value= mask[camp]($input.target.value)
    })
});