export const ControlledInput = () =>{
    const [dataForm, setDataForm] = useState({email: '' , nombre: '' });

    const handleOnChange = (e) =>{
        setDataForm({
            ...dataForm,
            [ e.target.name ]: e.target.value 
        })
    }

    return (
        <>
            <input
                type="text"
                name="email"
                value={dataForm.email}
                onChange={handleOnChange} 
                
            />
            <input
                  type="text"
                  name="email"
                  value={dataForm.nombre}
                  onChange={handleOnChange} 
            
            />
        
        </>
    )
}
