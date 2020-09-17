export async function fetchLogin(data: any) {
  let response = await fetch('/api/login', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)
  })

  let user = await response.json()

  localStorage.setItem('auth_session', user.token)

  return user
}
