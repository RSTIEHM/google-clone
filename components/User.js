import {useSession, signIn, signOut} from "next-auth/react"

const User = ({className}) => {
  const {data:session} = useSession()
  if(session) {

    return (
      <>
        <img className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`} onClick={() => signOut()} src={session.user.image} alt="User Image" />
      </>
    )
  }


  return (
    <>
      <button className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 ${className}`} onClick={signIn}>Sign In</button>
    </>
  )
}

export default User