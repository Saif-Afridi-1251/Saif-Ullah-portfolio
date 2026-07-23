const username="Saif-Afridi-1251"

export async function getRepos(){

const res=await fetch(

`https://api.github.com/users/${username}/repos`

)

return res.json()

}