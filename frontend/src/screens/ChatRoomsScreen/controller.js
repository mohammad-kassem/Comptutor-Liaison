export function filterRooms(rooms, user){
    if (rooms){
        return rooms.filter((room)=>{
           return user.role_id === 1 ? parseInt(room[0].split("-")[0]) === user.id : parseInt(room[0].split("-")[1]) === user.id
        })
    }
}