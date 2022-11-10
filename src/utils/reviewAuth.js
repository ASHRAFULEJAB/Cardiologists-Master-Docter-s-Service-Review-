export const setReviewAuthToken = (user) => {
    const currentUser = {
        email: user.email,
      }

      fetch('https://cardiologists-master-server.vercel.app/jwtToken', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem('token', data.token)
         
        })
}