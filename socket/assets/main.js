

const socket = io()


const messages = document.querySelector('.messages')

const form = document.querySelector('.form')

const input = document.querySelector('.input')

const nameBlock = document.querySelector('.name')

const roomId = prompt("Room's name: ")

const userName = prompt('Your name: ')

nameBlock.innerHTML = `${userName}`

socket.emit('CHAT:JOIN', ({
    roomid: roomId,
    username: userName,
    })
)


socket.on('CHAT:JOINED', ({roomid, username, data}) => {
    createdRoomId = roomid
    createdUserName = username

    console.log(data)

    // const item = document.createElement('li')
    // item.innerHTML = `<span>${username}</span>: ${message}`
    // messages.appendChild(item)


    return {createdRoomId, createdUserName}
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    if(input.value) {
        socket.emit('CHAT:NEW_MESSAGE',  {
            roomid: createdRoomId,
            username: createdUserName, 
            message: input.value
        })
        input.value = ''
    }
})

socket.on('CHAT:RECEIVED_MESSAGE', ({username, message}) => {
    const item = document.createElement('li')
    item.innerHTML = `<span>${username}</span>: ${message}`
    messages.appendChild(item)
    console.log(`Client - ${username}:${message}`)
})

