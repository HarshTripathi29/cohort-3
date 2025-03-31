
export function PostComponent({name, subtitle, time, image, desc}){

    return <div style={{width:200, backgroundColor : "blue", borderRadius:10, borderColor:"gray", borderWidth:1, padding:20}}>
        <div style={{display:"flex"}}>
            <img src={image} style={{
                width:30,
                height:30,
                borderRadius:20
            }}/>
            <div style={{
                fontSize:10,
                marginLeft:10
            }}>
                <b>{name}</b>
            <div>
                {subtitle}
            </div>
            {(time!=undefined) ? <div style={{display:"flex"}}>
                <div>{time}</div>
                <img src={"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                 style={{width:12, height:12}}/>
            </div>:null}
            </div>
        </div>
        <div style={{fontSize:12}}>  
            {desc}
        </div>
    </div>
}