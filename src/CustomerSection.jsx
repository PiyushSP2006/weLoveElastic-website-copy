export default function CustomerSection(){
    return(
            <div style={{
                    display:"inline",
                    width:"100vw"
                }}>
                <div className="customersection">
                    {customers.map((item)=>{
                        return(
                            <div key={item.id}  className="grid-cell" style={{
                                gridColumn:`span ${item.span}`,
                                gridRow:`span ${item.span}`
                            }}>
                                <img src={item.svgPath}/>
                            </div>
                        )
                    })}
                    
                </div>
        </div>
    )
}
const customerSvgPath = (filename) => `/assets/customer-images/${filename}`

const customers = [
    { id: 1, svgPath: customerSvgPath("4de000aa0c2fcb4105f0b.svg"), span: 1 },
    { id: 2, svgPath: customerSvgPath("5f9435b780f885130afd4.svg"), span: 1 },
    { id: 3, svgPath: customerSvgPath("6ab6b3724d98d20326313.svg"), span: 1 },
    { id: 4, svgPath: customerSvgPath("7317ec5c8943977044c6d.svg"), span: 1 },
    { id: 5, svgPath: customerSvgPath("83862fc8dc3642ac61cbe.svg"), span: 1 },
    { id: 6, svgPath: customerSvgPath("96ed762b4556f90f0f409.svg"), span: 1 },
    { id: 7, svgPath: customerSvgPath("10c9b9eb661788ed09261f.svg"), span: 1 },
    { id: 8, svgPath: customerSvgPath("11dc1bdfff517735151c01.svg"), span: 1 },
    { id: 9, svgPath: customerSvgPath("12875d4d9e8bb95bfa429a.svg"), span: 1 },
    { id: 10, svgPath: customerSvgPath("139a5fddbe9f84e22e2dd7.svg"), span: 1 },
    { id: 11, svgPath: customerSvgPath("14b852e3169d4ace074249.svg"), span: 1 },
    { id: 12, svgPath: customerSvgPath("15976b2825c9b04f87d928.svg"), span: 1 },
    { id: 13, svgPath: customerSvgPath("1658775c156cc739e23059.svg"), span: 1 },
    { id: 14, svgPath: customerSvgPath("173a9027e7fa2afac94171.svg"), span: 1 },
    { id: 15, svgPath: customerSvgPath("17c7455d574fc6222d226.svg"), span: 1 },
    { id: 16, svgPath: customerSvgPath("18a783ec97b3e216399666.svg"), span: 1 },
    { id: 17, svgPath: customerSvgPath("192319579aa9cc87bfd74d.svg"), span: 1 },
    { id: 18, svgPath: customerSvgPath("20227b1841ccf0ae23f174.svg"), span: 1 },
    { id: 19, svgPath: customerSvgPath("216e8aebf831585056fc05.svg"), span: 1 },
    { id: 20, svgPath: customerSvgPath("225440519d2a88e6f14a9e.svg"), span: 1 },
    { id: 21, svgPath: customerSvgPath("237d8f383ddfdb06016944.svg"), span: 1 },
    { id: 22, svgPath: customerSvgPath("24cb09324aece5d4ab7095.svg"), span: 1 },
    { id: 23, svgPath: customerSvgPath("27275550faa69b382a7d9.svg"), span: 1 },
    { id: 24, svgPath: customerSvgPath("36984a1f5516144b66b9f.svg"), span: 1 }
]
