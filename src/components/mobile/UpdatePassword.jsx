import { useState } from 'react'

export const UpdatePassword = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [currentPassword, setCurrentPassword] = useState("")    // old password
  const [newPassword, setNewPassword] = useState("");   // new password
  const [newPassword2, setNewPassword2] = useState(""); // confirm new password

  return <div>Update Password</div>
}