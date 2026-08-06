
export function  MarketImage() {
    const source: string = "https://plus.unsplash.com/premium_photo-1686529896385-8a8d581d0225?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2Fkb3xlbnwwfHwwfHx8MA%3D%3D"
    const alternative: string = "Market"
    const width: number = 500
    
    return (
        <img 
            src={source} 
            alt={alternative} 
            width={`${width}px`}
        />
    )
}