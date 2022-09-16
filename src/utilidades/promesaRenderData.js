

    let señal = true

    let customFetch = (time, task) =>{
      return new Promise((resolve, reject) =>{
        if (señal){
          setTimeout(() => {
            resolve(task)
          }, time)
        } else{
          reject('Error')
        }
      }
      )}

  export default customFetch