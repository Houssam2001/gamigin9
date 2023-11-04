import { useEffect, useRef } from 'react'
 const Banner2=()=>{
    const banner = useRef()
 
    const atOptions = {
        key : '8fd4c798e596095e41c16e1364f7ca34',
		format : 'iframe',
		height : 60,
		width : 468,
		params : {}
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highcpmcreativeformat.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
}
export default Banner2