import React from 'react'
interface DisplayTempProp {
ChosenTemp: React.ReactNode | null
}
function CreateCv({ChosenTemp}:DisplayTempProp) {
  return (
    <div>{ChosenTemp}</div>
  )
}

export default CreateCv