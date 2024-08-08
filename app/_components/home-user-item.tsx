"use client"

import { useSession } from "next-auth/react"

const HomeUser = () => {
  const { data } = useSession()

  console.log(data?.user)
  console.log(data?.user?.name?.split)

  return (
    <div>
      {data?.user ? (
        <div>
          <h2 className="text-xl font-bold">
            Olá, {data?.user.name?.split(" ")[0]}
          </h2>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold">Bem vindo ao FSW Barber!</h2>
        </>
      )}
    </div>
  )
}

export default HomeUser
