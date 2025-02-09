import { auth0 } from "@/lib/Auth0"



const dashboard = async() => {

    const session = await auth0.getSession()

    if (!session) {
    return <div>Not authenticated</div>
  }

  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
    </main>
  )
}

export default dashboard