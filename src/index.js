const arrName = ['Carlos', 'David', 'Jose', 'Luis', 'Manuel']

const randomName = () => {
  const name = arrName[Math.floor(Math.random() * arrName.length)]
  console.log(name)
}

module.exports = { randomName }