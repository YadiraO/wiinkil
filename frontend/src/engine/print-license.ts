const _ok = () => {
    fetch('/core_v1-3/license/-general.license')
        .then((res) => res.text())
        .then((response) => {
            console.info(`%c ${response}`, `color:ivory; font-size:10px; font-weight:400; font-family: consolas;`)
        })
        .catch((er) => {
            console.log(er)
        })
}

const iOkttestudio40 = [
    '.',
    '**********************************************************************************************************************************************************',
    '*  ░█████╗░██╗░░██╗░█████╗░████████╗████████╗███████╗░░░░█████╗░░█████╗░███╗░░░███╗░░░░██╗██████╗░███████╗██╗░░░██╗░░░███████╗░█████╗░███╗░░██╗███████╗  *',
    '*  ██╔══██╗██║░██╔╝██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝░░░██╔══██╗██╔══██╗████╗░████║░░░██╔╝██╔══██╗██╔════╝██║░░░██║░░░╚════██║██╔══██╗████╗░██║██╔════╝  *',
    '*  ██║░░██║█████═╝░██║░░██║░░░██║░░░░░░██║░░░█████╗░░░░░██║░░╚═╝██║░░██║██╔████╔██║░░██╔╝░██║░░██║█████╗░░╚██╗░██╔╝░░░░░███╔═╝██║░░██║██╔██╗██║█████╗░░  *',
    '*  ██║░░██║██╔═██╗░██║░░██║░░░██║░░░░░░██║░░░██╔══╝░░░░░██║░░██╗██║░░██║██║╚██╔╝██║░██╔╝░░██║░░██║██╔══╝░░░╚████╔╝░░░░██╔══╝░░██║░░██║██║╚████║██╔══╝░░  *',
    '*  ╚█████╔╝██║░╚██╗╚█████╔╝░░░██║░░░░░░██║░░░███████╗██╗╚█████╔╝╚█████╔╝██║░╚═╝░██║██╔╝░░░██████╔╝███████╗░░╚██╔╝░░██╗███████╗╚█████╔╝██║░╚███║███████╗  *',
    '*  ░╚════╝░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░░░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝╚══════╝░╚════╝░╚═╝░░╚══╝╚══════╝  *',
    '**********************************************************************************************************************************************************',
    '.',
]

export { _ok, iOkttestudio40 }
