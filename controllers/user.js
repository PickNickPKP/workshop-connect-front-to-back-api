export const listUser = (req, res) => {
  //code body
  res.json({ message: "This is list All User" });
};

export const readUser = (req, res) => {
  res.json({message: "This is read User"})
}

export const postUser = (req, res)=> {
  res.json({message: "This is post User"})
}

export const updateRoleUser = (req, res)=> {
  res.json({message: "This is Update Role User"})
}

export const deleteUser = (req, res)=> {
  res.json({message: "This is Delete User"})
}