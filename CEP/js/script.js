 
        const input = document.querySelector('#cep')
        const button = document.getElementById("buscarBtn")
        const cepDiv = document.getElementById("cepResultado")
        const logradouroDiv = document.getElementById("logradouro")
        const bairroDiv = document.getElementById("bairro")
        const estadoDiv = document.getElementById("estado")
        const cidadeDiv = document.getElementById("cidade")
        const resultado = document.getElementById("resultado")
        
        button.addEventListener('click', async (e)=>{
            const inputValue = input.value
            const data = await fetchData(inputValue)

            cepDiv.textContent = data.cep
            logradouroDiv.textContent = data.logradouro
            bairroDiv.textContent = data.bairro
            estadoDiv.textContent = data.estado
            cidadeDiv.textContent = data.localidade

            resultado.classList.remove("hidden")
            
        })

        input.addEventListener('input', (e)=>{
            const cep = e.target.value

            if(cep.length > 8){
                button.removeAttribute("disabled")
            } else {
                button.setAttribute("disabled", "")
            }
        })

        async function fetchData(cep){
            const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const jsonData = await data.json()

            return jsonData
        }