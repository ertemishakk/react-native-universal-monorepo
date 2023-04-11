interface Post{
    id:number,
    title: string,
    description: string,
    price: string,
    negotiable: boolean,
    location: string,
    image:string,
    postedBy: {
        name: string,
        profilePhoto: string,
        phoneNumber:string,
    }
}


