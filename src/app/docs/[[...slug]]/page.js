export default function Docs({ params }) {
    if (params.slug?.length === 2) {
        return <h1>viewing fetures for {params.slug[0]} and concepts for {params.slug[1] }</h1>
    }
    else if (params.slug?.length === 1)
      return   <h1>viewing features {params.slug[0]}</h1>
    else {
           
        return (
            <div>
                <h1> return home page documentation</h1>
                <p>D1</p>
            

            </div>
        )
    }
}